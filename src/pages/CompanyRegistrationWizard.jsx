import { useEffect, useMemo, useState } from 'react';
import { contact, languages } from '../content/site';
import { Icon, consultationUrl } from '../components/SiteShell';
import { submitEnquiry } from '../lib/enquiry';
import { wizardCopy } from '../features/company-registration/wizardContent';
import {
  DRAFT_KEY,
  WIZARD_STEPS,
  restoreWizardDraft,
  toEnquiryPayload,
  validateWizardStep,
  wizardCheckboxClassName,
} from '../features/company-registration/wizardModel';

function WizardHeader({ language, setLanguage, navigate, copy }) {
  return <header className="wizard-header"><div className="wizard-shell wizard-header-inner">
    <button type="button" className="wizard-brand" onClick={() => navigate('/')} aria-label="WINFO home"><img src="/WINFO-blue.png" alt="WINFO Business Solutions Ltd" /></button>
    <div className="wizard-header-actions">
      <div className="wizard-language" aria-label="Language selector">{languages.map(({ code, label }) => <button type="button" className={language === code ? 'active' : ''} onClick={() => setLanguage(code)} aria-pressed={language === code} key={code}>{label}</button>)}</div>
      <button type="button" className="wizard-exit" onClick={() => navigate('/')}>{copy.actions.exit}</button>
    </div>
  </div></header>;
}

function Progress({ step, copy }) {
  const percent = ((step + 1) / WIZARD_STEPS) * 100;
  return <div className="wizard-progress-wrap"><div className="wizard-shell wizard-progress-copy"><span>{copy.progress.step} {step + 1} {copy.progress.of} {WIZARD_STEPS}</span><span>{Math.round(percent)}% {copy.progress.complete}</span></div><div className="wizard-progress" aria-hidden="true"><span style={{ width: `${percent}%` }} /></div></div>;
}

function ErrorMessage({ visible, copy }) {
  return visible ? <p className="wizard-validation" role="alert">{copy.validation}</p> : null;
}

function RadioCards({ name, value, options, onChange }) {
  return <div className="wizard-options">{Object.entries(options).map(([key, label]) => <label className={`wizard-option ${value === key ? 'selected' : ''}`} key={key}><input type="radio" name={name} value={key} checked={value === key} onChange={() => onChange(key)} /><span>{label}</span><span className="wizard-choice-mark" aria-hidden="true" /></label>)}</div>;
}

function StepFields({ step, data, update, updateName, errors, copy, setStep }) {
  const hasError = (key) => errors.includes(key);
  if (step === 0) return <>
    <div className={`wizard-field-group ${hasError('companyNames') ? 'has-error' : ''}`}>
      <span className="wizard-field-label">{copy.fields.companyNames} <small>{copy.required}</small></span>
      <div className="wizard-name-list">{data.companyNames.map((name, index) => <label key={index}><span>{copy.fields.companyNamePlaceholder} {index + 1}</span><input className="wizard-control" value={name} onChange={(event) => updateName(index, event.target.value)} disabled={data.decideNameLater} autoComplete="organization" /></label>)}</div>
    </div>
    <label className={`wizard-checkbox wizard-later ${data.decideNameLater ? 'selected' : ''}`}><input type="checkbox" checked={data.decideNameLater} onChange={(event) => update('decideNameLater', event.target.checked)} /><span>{copy.fields.decideNameLater}</span></label>
    <ErrorMessage visible={hasError('companyNames')} copy={copy} />
  </>;

  if (step === 1) return <>
    <fieldset className={hasError('profile') ? 'has-error' : ''}><legend>{copy.fields.profile} <small>{copy.required}</small></legend><RadioCards name="profile" value={data.profile} options={copy.profiles} onChange={(value) => update('profile', value)} /></fieldset>
    <div className="wizard-two-fields">
      <label>{copy.fields.directors} <small>{copy.required}</small><select className="wizard-control" value={data.directors} onChange={(event) => update('directors', event.target.value)}>{copy.countOptions.map((option) => <option value={option} key={option}>{option}</option>)}</select></label>
      <label>{copy.fields.shareholders} <small>{copy.required}</small><select className="wizard-control" value={data.shareholders} onChange={(event) => update('shareholders', event.target.value)}>{copy.countOptions.map((option) => <option value={option} key={option}>{option}</option>)}</select></label>
    </div>
    <ErrorMessage visible={hasError('profile') || hasError('directors') || hasError('shareholders')} copy={copy} />
  </>;

  if (step === 2) return <>
    <label className={hasError('business') ? 'has-error' : ''}>{copy.fields.business} <small>{copy.required}</small><textarea className="wizard-control" rows="4" value={data.business} onChange={(event) => update('business', event.target.value)} placeholder={copy.fields.businessPlaceholder} /></label>
    <fieldset className={hasError('timing') ? 'has-error' : ''}><legend>{copy.fields.timing} <small>{copy.required}</small></legend><RadioCards name="timing" value={data.timing} options={copy.timings} onChange={(value) => update('timing', value)} /></fieldset>
    <fieldset className={hasError('existingCompany') ? 'has-error' : ''}><legend>{copy.fields.existingCompany} <small>{copy.required}</small></legend><RadioCards name="existingCompany" value={data.existingCompany} options={copy.existingOptions} onChange={(value) => update('existingCompany', value)} /></fieldset>
    <ErrorMessage visible={hasError('business') || hasError('timing') || hasError('existingCompany')} copy={copy} />
  </>;

  if (step === 3) return <fieldset><legend>{copy.fields.services} <small>{copy.optional}</small></legend><div className="wizard-service-options">
    {[['needsAddress', copy.fields.needsAddress], ['needsBanking', copy.fields.needsBanking], ['needsCompliance', copy.fields.needsCompliance]].map(([key, label]) => <label className={`wizard-checkbox wizard-service ${data[key] ? 'selected' : ''}`} key={key}><input type="checkbox" checked={data[key]} onChange={(event) => update(key, event.target.checked)} /><span>{label}</span><span className="wizard-choice-mark" aria-hidden="true" /></label>)}
  </div></fieldset>;

  if (step === 4) return <>
    <div className="wizard-two-fields">
      <label className={hasError('name') ? 'has-error' : ''}>{copy.fields.name} <small>{copy.required}</small><input className="wizard-control" value={data.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" /></label>
      <label className={hasError('contact') ? 'has-error' : ''}>{copy.fields.contact} <small>{copy.required}</small><input className="wizard-control" value={data.contact} onChange={(event) => update('contact', event.target.value)} autoComplete="email" /></label>
    </div>
    <label>{copy.fields.message} <small>{copy.optional}</small><textarea className="wizard-control" rows="4" value={data.message} onChange={(event) => update('message', event.target.value)} placeholder={copy.fields.messagePlaceholder} /></label>
    <label className={wizardCheckboxClassName('wizard-consent', data.consent, hasError('consent'))}><input type="checkbox" checked={data.consent} onChange={(event) => update('consent', event.target.checked)} /><span>{copy.fields.consent} <a href="/privacy-policy" target="_blank" rel="noreferrer">{copy.fields.privacy}</a></span></label>
    <label className="honeypot" aria-hidden="true">Website<input tabIndex="-1" autoComplete="off" value={data.website} onChange={(event) => update('website', event.target.value)} /></label>
    <ErrorMessage visible={hasError('name') || hasError('contact') || hasError('consent')} copy={copy} />
  </>;

  return <Review data={data} copy={copy} setStep={setStep} />;
}

function selectedServices(data, copy) {
  return [data.needsAddress && copy.fields.needsAddress, data.needsBanking && copy.fields.needsBanking, data.needsCompliance && copy.fields.needsCompliance].filter(Boolean);
}

function summaryRows(data, copy) {
  const names = data.decideNameLater ? copy.summary.later : data.companyNames.filter((name) => name.trim()).join(' · ');
  const services = selectedServices(data, copy).join(' · ') || copy.fields.noService;
  return [
    [copy.summary.names, names],
    [copy.summary.founders, copy.profiles[data.profile]],
    [copy.summary.structure, `${copy.fields.directors}: ${data.directors} · ${copy.fields.shareholders}: ${data.shareholders}`],
    [copy.summary.business, data.business],
    [copy.summary.timing, copy.timings[data.timing]],
    [copy.summary.existing, copy.existingOptions[data.existingCompany]],
    [copy.summary.services, services],
    [copy.summary.contact, [data.name, data.contact].filter(Boolean).join(' · ')],
  ].filter(([, value]) => value);
}

function SummaryContent({ data, copy }) {
  const rows = summaryRows(data, copy);
  if (!rows.length) return <p className="wizard-summary-empty">{copy.summary.empty}</p>;
  return <dl>{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}

function WizardSummary({ data, copy, mobile = false }) {
  if (mobile) return <details className="wizard-summary wizard-summary-mobile"><summary>{copy.summary.title}<Icon name="chevron" size={16} /></summary><SummaryContent data={data} copy={copy} /></details>;
  return <aside className="wizard-summary wizard-summary-desktop"><span>{copy.summary.title}</span><SummaryContent data={data} copy={copy} /><p>{copy.reassurance}</p></aside>;
}

function Review({ data, copy, setStep }) {
  const groups = [
    [0, copy.summary.names, data.decideNameLater ? copy.summary.later : data.companyNames.filter(Boolean).join(' · ')],
    [1, copy.summary.founders, `${copy.profiles[data.profile]} · ${copy.fields.directors}: ${data.directors} · ${copy.fields.shareholders}: ${data.shareholders}`],
    [2, copy.summary.business, `${data.business} · ${copy.timings[data.timing]} · ${copy.existingOptions[data.existingCompany]}`],
    [3, copy.summary.services, selectedServices(data, copy).join(' · ') || copy.fields.noService],
    [4, copy.summary.contact, `${data.name} · ${data.contact}${data.message ? ` · ${data.message}` : ''}`],
  ];
  return <div className="wizard-review">{groups.map(([target, label, value]) => <article key={target}><div><span>{label}</span><p>{value}</p></div><button type="button" onClick={() => setStep(target)}>{copy.actions.edit}</button></article>)}</div>;
}

function WizardActions({ step, status, copy, onBack, onNext, onSubmit }) {
  return <div className="wizard-actions">{step > 0 ? <button type="button" className="button button-secondary" onClick={onBack}>{copy.actions.back}</button> : <span />}{step < WIZARD_STEPS - 1 ? <button type="button" className="button" onClick={onNext}>{copy.actions.continue}<Icon name="arrow" size={16} /></button> : <button type="button" className="button" onClick={onSubmit} disabled={status === 'sending'}>{status === 'sending' ? copy.actions.sending : copy.actions.submit}<Icon name="arrow" size={16} /></button>}</div>;
}

function StatusPanel({ status, copy, language, retry }) {
  if (status !== 'error') return null;
  return <div className="wizard-status error" role="alert"><strong>{copy.failure.title}</strong><p>{copy.failure.text}</p><div><button type="button" className="button" onClick={retry}>{copy.failure.retry}</button><a className="button button-secondary" href={consultationUrl(copy.eyebrow, language)} target="_blank" rel="noreferrer">{copy.failure.whatsapp}</a><a href={`mailto:${contact.email}`}>{copy.failure.email}</a></div></div>;
}

export function CompanyRegistrationWizard({ navigate, language, setLanguage }) {
  const copy = wizardCopy[language] || wizardCopy.en;
  const queryProfile = new URLSearchParams(window.location.search).get('profile');
  const [step, setStep] = useState(0);
  const [data, setData] = useState(() => restoreWizardDraft(sessionStorage.getItem(DRAFT_KEY), queryProfile));
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState('idle');
  const current = copy.steps[step];
  const payload = useMemo(() => toEnquiryPayload(data, language), [data, language]);

  useEffect(() => {
    if (status !== 'success') sessionStorage.setItem(DRAFT_KEY, JSON.stringify(data));
  }, [data, status]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [step]);

  const update = (key, value) => { setData((currentData) => ({ ...currentData, [key]: value })); setErrors((currentErrors) => currentErrors.filter((item) => item !== key)); };
  const updateName = (index, value) => setData((currentData) => ({ ...currentData, companyNames: currentData.companyNames.map((name, itemIndex) => itemIndex === index ? value : name) }));
  const goToStep = (target) => { setErrors([]); setStatus('idle'); setStep(target); };
  const next = () => {
    const nextErrors = validateWizardStep(step, data);
    setErrors(nextErrors);
    if (!nextErrors.length) goToStep(Math.min(step + 1, WIZARD_STEPS - 1));
  };
  const submit = async () => {
    const contactErrors = validateWizardStep(4, data);
    if (contactErrors.length) { setErrors(contactErrors); setStep(4); return; }
    setStatus('sending');
    try {
      await submitEnquiry(payload);
      sessionStorage.removeItem(DRAFT_KEY);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') return <main className="registration-wizard"><WizardHeader language={language} setLanguage={setLanguage} navigate={navigate} copy={copy} /><section className="wizard-success wizard-shell"><span className="wizard-success-mark" aria-hidden="true"><Icon name="check" size={28} /></span><p className="hero-kicker">WINFO</p><h1>{copy.success.title}</h1><p>{copy.success.text}</p><div><button type="button" className="button" onClick={() => navigate('/')}>{copy.success.home}</button><a className="button button-secondary" href={consultationUrl(copy.eyebrow, language)} target="_blank" rel="noreferrer">{copy.success.whatsapp}</a></div></section></main>;

  return <main className="registration-wizard">
    <WizardHeader language={language} setLanguage={setLanguage} navigate={navigate} copy={copy} />
    <Progress step={step} copy={copy} />
    <div className="wizard-shell wizard-intro"><p className="hero-kicker">{copy.eyebrow}</p><h1>{copy.pageTitle}</h1><p>{copy.pageIntro}</p></div>
    <WizardSummary data={data} copy={copy} mobile />
    <div className="wizard-shell wizard-layout">
      <section className="wizard-card" aria-labelledby="wizard-title"><div className="wizard-card-heading"><span>0{step + 1}</span><div><h2 id="wizard-title">{current.title}</h2><p>{current.text}</p></div></div><div className="wizard-fields"><StepFields step={step} data={data} update={update} updateName={updateName} errors={errors} copy={copy} setStep={goToStep} /></div><p className="wizard-draft-note">{copy.draft}</p><StatusPanel status={status} copy={copy} language={language} retry={submit} /><WizardActions step={step} status={status} copy={copy} onBack={() => goToStep(Math.max(0, step - 1))} onNext={next} onSubmit={submit} /></section>
      <WizardSummary data={data} copy={copy} />
    </div>
  </main>;
}
