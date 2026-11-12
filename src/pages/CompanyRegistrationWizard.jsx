import { useEffect, useMemo, useRef, useState } from 'react';
import { contact, languages } from '../content/site';
import { Icon, consultationUrl } from '../components/SiteShell';
import { submitEnquiry } from '../lib/enquiry';
import { wizardCopy } from '../features/company-registration/wizardContent';
import { PreparationChecklist } from '../features/company-registration/PreparationChecklist';
import {
  DRAFT_KEY,
  WIZARD_STEPS,
  restoreWizardDraft,
  toEnquiryPayload,
  validateWizardStep,
  wizardCheckboxClassName,
  selectedServices,
  wizardSummaryRows,
  wizardEnquiryBrief,
} from '../features/company-registration/wizardModel';

function WizardHeader({ language, setLanguage, navigate, copy }) {
  return <header className="wizard-header"><div className="wizard-shell wizard-header-inner">
    <button type="button" className="wizard-brand" onClick={() => navigate('/')} aria-label="WINFO home"><img src="/logo.png" alt="WINFO Business Solutions Ltd" /></button>
    <div className="wizard-header-actions">
      <div className="wizard-language" aria-label="Language selector">{languages.map(({ code, label }) => <button type="button" className={language === code ? 'active' : ''} onClick={() => setLanguage(code)} aria-pressed={language === code} key={code}>{label}</button>)}</div>
      <button type="button" className="wizard-exit" onClick={() => navigate('/')}>{copy.actions.exit}</button>
    </div>
  </div></header>;
}

function Progress({ step, copy }) {
  const percent = ((step + 1) / WIZARD_STEPS) * 100;
  return <div className="wizard-progress-wrap"><div className="wizard-shell wizard-progress-copy"><span>{copy.progress.step} {step + 1} {copy.progress.of} {WIZARD_STEPS}</span><span>{copy.stepLabels[step]}</span></div><div className="wizard-progress" role="progressbar" aria-label={copy.stepLabels[step]} aria-valuemin="1" aria-valuemax={WIZARD_STEPS} aria-valuenow={step + 1}><span style={{ width: `${percent}%` }} /></div></div>;
}

function focusField(event, field) {
  event.preventDefault();
  const group = document.getElementById(`wizard-${field}`);
  const control = group?.matches('input, textarea, select') ? group : group?.querySelector('input, textarea, select');
  control?.focus();
  control?.scrollIntoView({ block: 'center' });
}

function FieldError({ field, errors, copy }) {
  return errors.includes(field) ? <p className="wizard-field-error" id={`wizard-${field}-error`}>{copy.errors[field]}</p> : null;
}

function ErrorSummary({ errors, copy, summaryRef }) {
  if (!errors.length) return null;
  return <div className="wizard-error-summary" role="alert" tabIndex="-1" ref={summaryRef}>
    <h3>{copy.errorTitle}</h3>
    <ul>{errors.map(field => <li key={field}><a href={`#wizard-${field}`} onClick={event => focusField(event, field)}>{copy.errors[field]}</a></li>)}</ul>
  </div>;
}

function RadioCards({ name, value, options, onChange }) {
  return <div className="wizard-options">{Object.entries(options).map(([key, label]) => <label className={`wizard-option ${value === key ? 'selected' : ''}`} key={key}><input type="radio" name={name} value={key} checked={value === key} onChange={() => onChange(key)} /><span>{label}</span><span className="wizard-choice-mark" aria-hidden="true" /></label>)}</div>;
}

function StepFields({ step, data, update, updateName, errors, copy, setStep }) {
  const hasError = (key) => errors.includes(key);
  const errorProps = key => ({ id: `wizard-${key}`, 'aria-invalid': hasError(key) || undefined, 'aria-describedby': hasError(key) ? `wizard-${key}-error` : undefined });
  if (step === 0) return <>
    <div className={`wizard-field-group ${hasError('companyNames') ? 'has-error' : ''}`}>
      <span className="wizard-field-label">{copy.fields.companyNames} <small>{copy.required}</small></span>
      <div className="wizard-name-list">{data.companyNames.map((name, index) => <label key={index}><span>{copy.fields.companyNamePlaceholder} {index + 1}</span><input {...errorProps('companyNames')} id={index === 0 ? 'wizard-companyNames' : `wizard-company-name-${index}`} className="wizard-control" value={name} onChange={(event) => updateName(index, event.target.value)} disabled={data.decideNameLater} autoComplete="organization" /></label>)}</div>
      <FieldError field="companyNames" errors={errors} copy={copy} />
    </div>
    <label className={`wizard-checkbox wizard-later ${data.decideNameLater ? 'selected' : ''}`}><input type="checkbox" checked={data.decideNameLater} onChange={(event) => update('decideNameLater', event.target.checked)} /><span>{copy.fields.decideNameLater}</span></label>
  </>;

  if (step === 1) return <>
    <fieldset {...errorProps('profile')} className={hasError('profile') ? 'has-error' : ''}><legend>{copy.fields.profile} <small>{copy.required}</small></legend><RadioCards name="profile" value={data.profile} options={copy.profiles} onChange={(value) => update('profile', value)} /><FieldError field="profile" errors={errors} copy={copy} /></fieldset>
    <div className="wizard-two-fields">
      <label>{copy.fields.directors} <small>{copy.required}</small><select {...errorProps('directors')} className="wizard-control" value={data.directors} onChange={(event) => update('directors', event.target.value)}>{copy.countOptions.map((option) => <option value={option} key={option}>{option}</option>)}</select><FieldError field="directors" errors={errors} copy={copy} /></label>
      <label>{copy.fields.shareholders} <small>{copy.required}</small><select {...errorProps('shareholders')} className="wizard-control" value={data.shareholders} onChange={(event) => update('shareholders', event.target.value)}>{copy.countOptions.map((option) => <option value={option} key={option}>{option}</option>)}</select><FieldError field="shareholders" errors={errors} copy={copy} /></label>
    </div>
  </>;

  if (step === 2) return <>
    <label className={hasError('business') ? 'has-error' : ''}>{copy.fields.business} <small>{copy.required}</small><textarea {...errorProps('business')} className="wizard-control" rows="4" value={data.business} onChange={(event) => update('business', event.target.value)} placeholder={copy.fields.businessPlaceholder} /><FieldError field="business" errors={errors} copy={copy} /></label>
    <fieldset {...errorProps('timing')} className={hasError('timing') ? 'has-error' : ''}><legend>{copy.fields.timing} <small>{copy.required}</small></legend><RadioCards name="timing" value={data.timing} options={copy.timings} onChange={(value) => update('timing', value)} /><FieldError field="timing" errors={errors} copy={copy} /></fieldset>
    <fieldset {...errorProps('existingCompany')} className={hasError('existingCompany') ? 'has-error' : ''}><legend>{copy.fields.existingCompany} <small>{copy.required}</small></legend><RadioCards name="existingCompany" value={data.existingCompany} options={copy.existingOptions} onChange={(value) => update('existingCompany', value)} /><FieldError field="existingCompany" errors={errors} copy={copy} /></fieldset>
  </>;

  if (step === 3) return <fieldset><legend>{copy.fields.services} <small>{copy.optional}</small></legend><div className="wizard-service-options">
    {[['needsAddress', copy.fields.needsAddress], ['needsBanking', copy.fields.needsBanking], ['needsCompliance', copy.fields.needsCompliance]].map(([key, label]) => <label className={`wizard-checkbox wizard-service ${data[key] ? 'selected' : ''}`} key={key}><input type="checkbox" checked={data[key]} onChange={(event) => update(key, event.target.checked)} /><span>{label}</span><span className="wizard-choice-mark" aria-hidden="true" /></label>)}
  </div></fieldset>;

  if (step === 4) return <>
    <div className="wizard-two-fields">
      <label className={hasError('name') ? 'has-error' : ''}>{copy.fields.name} <small>{copy.required}</small><input {...errorProps('name')} className="wizard-control" value={data.name} maxLength="120" onChange={(event) => update('name', event.target.value)} autoComplete="name" required /><FieldError field="name" errors={errors} copy={copy} /></label>
      <label className={hasError('contact') ? 'has-error' : ''}>{copy.fields.contact} <small>{copy.required}</small><input {...errorProps('contact')} className="wizard-control" value={data.contact} maxLength="180" onChange={(event) => update('contact', event.target.value)} autoComplete="email" required /><FieldError field="contact" errors={errors} copy={copy} /></label>
    </div>
    <label>{copy.fields.message} <small>{copy.optional}</small><textarea className="wizard-control" rows="4" value={data.message} onChange={(event) => update('message', event.target.value)} placeholder={copy.fields.messagePlaceholder} /></label>
    <label className={wizardCheckboxClassName('wizard-consent', data.consent, hasError('consent'))}><input {...errorProps('consent')} type="checkbox" checked={data.consent} onChange={(event) => update('consent', event.target.checked)} required /><span>{copy.fields.consent} <a href="/privacy-policy" target="_blank" rel="noreferrer">{copy.fields.privacy}</a></span></label>
    <FieldError field="consent" errors={errors} copy={copy} />
    <label className="honeypot" aria-hidden="true">Website<input tabIndex="-1" autoComplete="off" value={data.website} onChange={(event) => update('website', event.target.value)} /></label>
  </>;

  return <Review data={data} copy={copy} setStep={setStep} />;
}

function SummaryContent({ data, copy }) {
  const rows = wizardSummaryRows(data, copy);
  if (!rows.length) return <p className="wizard-summary-empty">{copy.summary.empty}</p>;
  return <dl>{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}

function WizardSummary({ data, copy, mobile = false }) {
  const name = data.decideNameLater ? copy.summary.later : data.companyNames.find(value => value.trim());
  if (mobile) return <details className="wizard-summary wizard-summary-mobile"><summary><span>{copy.summary.title}{name && <small>{name}</small>}</span><Icon name="chevron" size={16} /></summary><SummaryContent data={data} copy={copy} /></details>;
  return <aside className="wizard-summary wizard-summary-desktop"><span>{copy.summary.title}</span><SummaryContent data={data} copy={copy} /><p>{copy.reassurance}</p></aside>;
}

function Review({ data, copy, setStep }) {
  const groups = [
    [0, copy.summary.names, data.decideNameLater ? copy.summary.later : data.companyNames.filter(Boolean).join(copy.summary.joiner)],
    [1, copy.summary.founders, `${copy.profiles[data.profile]}${copy.summary.joiner}${copy.fields.directors}: ${data.directors}${copy.summary.joiner}${copy.fields.shareholders}: ${data.shareholders}`],
    [2, copy.summary.business, `${data.business}${copy.summary.joiner}${copy.timings[data.timing]}${copy.summary.joiner}${copy.existingOptions[data.existingCompany]}`],
    [3, copy.summary.services, selectedServices(data, copy).join(copy.summary.joiner) || copy.fields.noService],
    [4, copy.summary.contact, `${data.name}${copy.summary.joiner}${data.contact}${data.message ? `${copy.summary.joiner}${data.message}` : ''}`],
  ];
  return <div className="wizard-review">{groups.map(([target, label, value]) => <article key={target}><div><span>{label}</span><p>{value}</p></div><button type="button" aria-label={`${copy.actions.edit} ${label}`} onClick={() => setStep(target)}>{copy.actions.edit}</button></article>)}</div>;
}

function WizardActions({ step, status, copy, onBack }) {
  return <div className="wizard-actions">{step > 0 ? <button type="button" className="button button-secondary" onClick={onBack} disabled={status === 'sending'}>{copy.actions.back}</button> : <span />}<button type="submit" className="button" disabled={status === 'sending'}>{status === 'sending' ? copy.actions.sending : step < WIZARD_STEPS - 1 ? copy.actions.continue : copy.actions.submit}<Icon name="arrow" size={16} /></button></div>;
}

function StatusPanel({ status, copy, brief, retry, statusRef }) {
  if (status !== 'error') return null;
  return <div className="wizard-status error" role="alert" ref={statusRef} tabIndex="-1"><strong>{copy.failure.title}</strong><p>{copy.failure.text}</p><div><button type="button" className="button" onClick={retry}>{copy.failure.retry}</button><a href={`mailto:${contact.email}?subject=${encodeURIComponent(copy.handoff.subject)}&body=${encodeURIComponent(brief)}`}>{copy.failure.email}</a></div></div>;
}

function EnquiryHandoff({ brief, copy }) {
  const [clipboard, setClipboard] = useState('idle');
  const manualRef = useRef(null);
  useEffect(() => setClipboard('idle'), [brief]);
  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setClipboard('copied');
    } catch {
      setClipboard('manual');
      requestAnimationFrame(() => { manualRef.current?.focus(); manualRef.current?.select(); });
    }
  };
  return <section className="wizard-handoff" aria-labelledby="wizard-handoff-title">
    <h3 id="wizard-handoff-title">{copy.handoff.title}</h3>
    <p>{copy.handoff.text}</p>
    <div className="wizard-handoff-actions">
      <button type="button" className="button button-secondary" onClick={copyBrief}>{copy.handoff.copy}</button>
      <a className="button button-secondary" href={`${contact.whatsapp}?text=${encodeURIComponent(brief)}`} target="_blank" rel="noreferrer">{copy.handoff.whatsapp}<Icon name="arrow" size={16} /></a>
    </div>
    {clipboard === 'copied' && <p role="status">{copy.handoff.copied}</p>}
    {clipboard === 'manual' && <label className="wizard-manual-copy">{copy.handoff.manual}<textarea ref={manualRef} className="wizard-control" rows="9" aria-label={copy.handoff.label} value={brief} readOnly /></label>}
  </section>;
}

export function CompanyRegistrationWizard({ navigate, language, setLanguage }) {
  const copy = wizardCopy[language] || wizardCopy.en;
  const queryProfile = new URLSearchParams(window.location.search).get('profile');
  const [step, setStep] = useState(0);
  const [data, setData] = useState(() => {
    try { return restoreWizardDraft(sessionStorage.getItem(DRAFT_KEY), queryProfile); }
    catch { return restoreWizardDraft(null, queryProfile); }
  });
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState('idle');
  const [draftAvailable, setDraftAvailable] = useState(true);
  const errorSummaryRef = useRef(null);
  const statusRef = useRef(null);
  const headingRef = useRef(null);
  const sendingRef = useRef(false);
  const current = copy.steps[step];
  const payload = useMemo(() => toEnquiryPayload(data, language), [data, language]);
  const brief = useMemo(() => wizardEnquiryBrief(data, copy), [data, copy]);

  useEffect(() => {
    if (status === 'success') return;
    try {
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify(data));
      setDraftAvailable(true);
    } catch {
      setDraftAvailable(false);
    }
  }, [data, status]);
  useEffect(() => {
    if (status === 'error') {
      statusRef.current?.focus();
      statusRef.current?.scrollIntoView({ block: 'center' });
      return;
    }
    if (step > 0 && status !== 'sending') {
      headingRef.current?.focus({ preventScroll: true });
      headingRef.current?.scrollIntoView({ block: 'start' });
    }
  }, [step, status]);

  const update = (key, value) => { setData((currentData) => ({ ...currentData, [key]: value })); setErrors((currentErrors) => currentErrors.filter((item) => item !== key)); };
  const updateName = (index, value) => {
    setData((currentData) => ({ ...currentData, companyNames: currentData.companyNames.map((name, itemIndex) => itemIndex === index ? value : name) }));
    setErrors(currentErrors => currentErrors.filter(field => field !== 'companyNames'));
  };
  const goToStep = (target) => {
    if (sendingRef.current) return;
    setErrors([]);
    setStatus('idle');
    setStep(target);
  };
  const showErrors = nextErrors => {
    setErrors(nextErrors);
    requestAnimationFrame(() => errorSummaryRef.current?.focus());
  };
  const next = () => {
    const nextErrors = validateWizardStep(step, data);
    if (nextErrors.length) showErrors(nextErrors);
    else goToStep(Math.min(step + 1, WIZARD_STEPS - 1));
  };
  const submit = async () => {
    if (sendingRef.current) return;
    for (let target = 0; target < WIZARD_STEPS - 1; target += 1) {
      const invalid = validateWizardStep(target, data);
      if (invalid.length) {
        setStep(target);
        showErrors(invalid);
        return;
      }
    }
    sendingRef.current = true;
    setStatus('sending');
    try {
      await submitEnquiry(payload);
      try { sessionStorage.removeItem(DRAFT_KEY); } catch { /* Delivery was confirmed; draft cleanup is secondary. */ }
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      sendingRef.current = false;
    }
  };

  if (status === 'success') return <main className="registration-wizard"><WizardHeader language={language} setLanguage={setLanguage} navigate={navigate} copy={copy} /><section className="wizard-success wizard-shell" role="status"><span className="wizard-success-mark" aria-hidden="true"><Icon name="check" size={28} /></span><p className="hero-kicker">WINFO</p><h1 ref={headingRef} tabIndex="-1">{copy.success.title}</h1><p>{copy.success.text}</p><div><button type="button" className="button" onClick={() => navigate('/')}>{copy.success.home}</button><a className="button button-secondary" href={consultationUrl(copy.eyebrow, language)} target="_blank" rel="noreferrer">{copy.success.whatsapp}</a></div><PreparationChecklist data={data} language={language} /></section></main>;

  return <main className={`registration-wizard${step > 0 ? ' is-in-progress' : ''}`}>
    <WizardHeader language={language} setLanguage={setLanguage} navigate={navigate} copy={copy} />
    <Progress step={step} copy={copy} />
    <div className="wizard-shell wizard-intro"><p className="hero-kicker">{copy.eyebrow}</p><h1>{copy.pageTitle}</h1><p>{copy.pageIntro}</p></div>
    <WizardSummary data={data} copy={copy} mobile />
    <div className="wizard-shell wizard-layout">
      <form className="wizard-card" aria-labelledby="wizard-title" aria-busy={status === 'sending'} noValidate onSubmit={event => { event.preventDefault(); if (step < WIZARD_STEPS - 1) next(); else void submit(); }}>
        <div className="wizard-card-heading"><div><h2 id="wizard-title" ref={headingRef} tabIndex="-1">{current.title}</h2><p>{current.text}</p></div></div>
        <ErrorSummary errors={errors} copy={copy} summaryRef={errorSummaryRef} />
        <fieldset className="wizard-fields" disabled={status === 'sending'}><StepFields step={step} data={data} update={update} updateName={updateName} errors={errors} copy={copy} setStep={goToStep} /></fieldset>
        {step === WIZARD_STEPS - 1 && <EnquiryHandoff brief={brief} copy={copy} />}
        {step === WIZARD_STEPS - 1 && <PreparationChecklist data={data} language={language} />}
        <p className="wizard-draft-note">{draftAvailable ? copy.draft : copy.draftUnavailable}</p>
        <StatusPanel status={status} copy={copy} brief={brief} retry={submit} statusRef={statusRef} />
        <WizardActions step={step} status={status} copy={copy} onBack={() => goToStep(Math.max(0, step - 1))} />
      </form>
      <WizardSummary data={data} copy={copy} />
    </div>
  </main>;
}
