import { isValidEnquiryContact } from '../../lib/enquiry.js';

export const WIZARD_STEPS = 6;
export const DRAFT_KEY = 'winfo-company-registration-draft';

const PROFILE_VALUES = new Set(['local', 'mainland', 'undecided']);

export function wizardCheckboxClassName(variant, selected, hasError = false) {
  return ['wizard-checkbox', variant, selected && 'selected', hasError && 'has-error']
    .filter(Boolean)
    .join(' ');
}

export function initialWizardData(profile = 'undecided') {
  return {
    companyNames: ['', '', ''],
    decideNameLater: false,
    profile: PROFILE_VALUES.has(profile) ? profile : 'undecided',
    directors: '1',
    shareholders: '1',
    business: '',
    timing: '',
    existingCompany: '',
    needsAddress: false,
    needsBanking: false,
    needsCompliance: false,
    name: '',
    contact: '',
    message: '',
    consent: false,
    website: '',
  };
}

export function restoreWizardDraft(rawDraft, queryProfile) {
  const defaults = initialWizardData();
  let saved = {};
  try {
    const parsed = JSON.parse(rawDraft || '{}');
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) saved = parsed;
  } catch {
    saved = {};
  }

  const restored = Object.fromEntries(
    Object.keys(defaults).map((key) => {
      const value = saved[key];
      if (typeof defaults[key] === 'boolean') return [key, value === true];
      if (typeof defaults[key] === 'string') return [key, typeof value === 'string' ? value : defaults[key]];
      return [key, value ?? defaults[key]];
    }),
  );
  restored.companyNames = Array.isArray(restored.companyNames)
    ? [...restored.companyNames.slice(0, 3), '', '', ''].slice(0, 3).map((name) => String(name || ''))
    : defaults.companyNames;
  restored.profile = PROFILE_VALUES.has(restored.profile) ? restored.profile : defaults.profile;
  if (queryProfile === 'local' || queryProfile === 'mainland') restored.profile = queryProfile;
  return restored;
}

export function validateWizardStep(step, data) {
  if (step === 0 && !data.decideNameLater && !data.companyNames.some((name) => name.trim())) {
    return ['companyNames'];
  }
  if (step === 1) {
    return ['profile', 'directors', 'shareholders'].filter((key) => !String(data[key] || '').trim());
  }
  if (step === 2) {
    return ['business', 'timing', 'existingCompany'].filter((key) => !String(data[key] || '').trim());
  }
  if (step === 4) {
    return [
      !String(data.name || '').trim() && 'name',
      !isValidEnquiryContact(data.contact) && 'contact',
      data.consent !== true && 'consent',
    ].filter(Boolean);
  }
  return [];
}

export function selectedServices(data, copy) {
  return [data.needsAddress && copy.fields.needsAddress, data.needsBanking && copy.fields.needsBanking, data.needsCompliance && copy.fields.needsCompliance].filter(Boolean);
}

export function wizardSummaryRows(data, copy) {
  return [
    [copy.summary.names, data.decideNameLater ? copy.summary.later : data.companyNames.map(name => name.trim()).filter(Boolean).join(copy.summary.joiner)],
    [copy.summary.founders, copy.profiles[data.profile]],
    [copy.summary.structure, `${copy.fields.directors}: ${data.directors}${copy.summary.joiner}${copy.fields.shareholders}: ${data.shareholders}`],
    [copy.summary.business, data.business],
    [copy.summary.timing, copy.timings[data.timing]],
    [copy.summary.existing, copy.existingOptions[data.existingCompany]],
    [copy.summary.services, selectedServices(data, copy).join(copy.summary.joiner) || copy.fields.noService],
    [copy.summary.contact, [data.name, data.contact].filter(Boolean).join(copy.summary.joiner)],
  ].filter(([, value]) => value);
}

export function wizardEnquiryBrief(data, copy) {
  const rows = wizardSummaryRows(data, copy);
  if (data.message.trim()) rows.push([copy.fields.message, data.message.trim()]);
  return [`WINFO — ${copy.eyebrow}`, ...rows.map(([label, value]) => `${label}\n${value}`)].join('\n\n');
}

export function toEnquiryPayload(data, language) {
  const companyNames = data.decideNameLater
    ? 'To be decided'
    : data.companyNames.map((name) => name.trim()).filter(Boolean).join('\n');
  return {
    type: 'company-registration',
    service: 'Guided company registration enquiry',
    name: data.name,
    contact: data.contact,
    profile: data.profile,
    companyNames,
    business: data.business,
    timing: data.timing,
    directors: `${data.directors} director(s); ${data.shareholders} shareholder(s)`,
    needsAddress: data.needsAddress ? 'Yes' : 'No',
    message: [
      `Existing company: ${data.existingCompany}`,
      `Banking preparation: ${data.needsBanking ? 'Yes' : 'No'}`,
      `Accounting / audit / tax: ${data.needsCompliance ? 'Yes' : 'No'}`,
      data.message,
    ].filter(Boolean).join('\n'),
    consent: data.consent,
    website: data.website,
    language,
  };
}
