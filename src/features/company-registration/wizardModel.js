export const WIZARD_STEPS = 6;
export const DRAFT_KEY = 'winfo-company-registration-draft';

const PROFILE_VALUES = new Set(['local', 'mainland', 'undecided']);

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
    Object.keys(defaults).map((key) => [key, key in saved ? saved[key] : defaults[key]]),
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
    return ['name', 'contact', 'consent'].filter((key) => !data[key]);
  }
  return [];
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
