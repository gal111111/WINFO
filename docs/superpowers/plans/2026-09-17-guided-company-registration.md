# Guided Company Registration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Route company-registration calls to action into a focused, six-step, trilingual enquiry flow that submits through WINFO's existing enquiry endpoint.

**Architecture:** Add a standalone wizard page and keep its copy, pure state helpers, and React rendering in focused feature files. Reuse `submitEnquiry`, the existing WINFO colours, logo and language preference, while replacing only the old company-registration long form and its direct entry links. The rest of the site remains unchanged.

**Tech Stack:** React, Vite, browser History API, `sessionStorage`, Node built-in test runner, Cloudflare Pages enquiry endpoint.

---

### Task 1: Wizard state and validation model

**Files:**
- Create: `src/features/company-registration/wizardModel.js`
- Create: `src/features/company-registration/wizardModel.test.js`
- Modify: `package.json`

- [x] **Step 1: Write failing model tests**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { initialWizardData, validateWizardStep, toEnquiryPayload } from './wizardModel.js';

test('profile query preselects a supported founder profile', () => {
  assert.equal(initialWizardData('mainland').profile, 'mainland');
  assert.equal(initialWizardData('unknown').profile, 'undecided');
});

test('company names require a name or the decide-later choice', () => {
  assert.equal(validateWizardStep(0, initialWizardData()).length, 1);
  assert.deepEqual(validateWizardStep(0, { ...initialWizardData(), decideNameLater: true }), []);
});

test('contact and consent are required before review', () => {
  const data = { ...initialWizardData(), name: 'Ada', contact: 'ada@example.com', consent: true };
  assert.deepEqual(validateWizardStep(4, data), []);
});

test('submission maps wizard fields to the existing endpoint contract', () => {
  const payload = toEnquiryPayload({ ...initialWizardData('local'), name: 'Ada', contact: 'ada@example.com', consent: true }, 'en');
  assert.equal(payload.type, 'company-registration');
  assert.equal(payload.service, 'Guided company registration enquiry');
  assert.equal(payload.profile, 'local');
});
```

- [x] **Step 2: Add and run the test command to verify failure**

```json
"test": "node --test src/**/*.test.js"
```

Run: `npm test`

Expected: FAIL because `wizardModel.js` does not exist.

- [x] **Step 3: Implement the pure model**

```js
export const WIZARD_STEPS = 6;

export function initialWizardData(profile = 'undecided') {
  return {
    companyNames: ['', '', ''], decideNameLater: false,
    profile: ['local', 'mainland'].includes(profile) ? profile : 'undecided',
    directors: '1', shareholders: '1', business: '', timing: '', existingCompany: '',
    needsAddress: false, needsBanking: false, needsCompliance: false,
    name: '', contact: '', message: '', consent: false, website: '',
  };
}

export function validateWizardStep(step, data) {
  if (step === 0 && !data.decideNameLater && !data.companyNames.some((name) => name.trim())) return ['companyNames'];
  if (step === 1) return ['profile', 'directors', 'shareholders'].filter((key) => !String(data[key] || '').trim());
  if (step === 2) return ['business', 'timing', 'existingCompany'].filter((key) => !String(data[key] || '').trim());
  if (step === 4) return ['name', 'contact', 'consent'].filter((key) => !data[key]);
  return [];
}

export function toEnquiryPayload(data, language) {
  return {
    type: 'company-registration', service: 'Guided company registration enquiry',
    name: data.name, contact: data.contact, profile: data.profile,
    companyNames: data.decideNameLater ? 'To be decided' : data.companyNames.filter(Boolean).join('\n'),
    business: data.business, timing: data.timing,
    directors: `${data.directors} director(s); ${data.shareholders} shareholder(s)`,
    needsAddress: data.needsAddress ? 'Yes' : 'No',
    message: [`Existing company: ${data.existingCompany}`, `Banking preparation: ${data.needsBanking ? 'Yes' : 'No'}`, `Accounting / audit / tax: ${data.needsCompliance ? 'Yes' : 'No'}`, data.message].filter(Boolean).join('\n'),
    consent: data.consent, website: data.website, language,
  };
}
```

- [x] **Step 4: Run tests**

Run: `npm test`

Expected: 4 tests pass.

- [x] **Step 5: Commit the model**

```bash
git add package.json src/features/company-registration/wizardModel.js src/features/company-registration/wizardModel.test.js
git commit -m "test: define company registration wizard model"
```

### Task 2: Trilingual standalone wizard page

**Files:**
- Create: `src/features/company-registration/wizardContent.js`
- Create: `src/pages/CompanyRegistrationWizard.jsx`
- Modify: `src/main.jsx`

- [x] **Step 1: Add complete English, Traditional Chinese and Simplified Chinese copy**

```js
export const wizardCopy = {
  en: {
    step: 'Step', of: 'of', back: 'Back', continue: 'Continue', submit: 'Send enquiry', exit: 'Exit and return to WINFO',
    titles: ['What would you like to call your company?', 'Tell us about the founders', 'A little about the business', 'Which support would help?', 'How should we contact you?', 'Review your enquiry'],
    nameLater: 'I will decide the company name later', profileOptions: ['Hong Kong founder', 'Mainland founder', 'Other / not sure'],
    serviceOptions: ['Registered address and mail handling', 'Bank account preparation', 'Bookkeeping, audit and tax consultation'],
    success: 'Your enquiry has been sent to WINFO.', failure: 'The form could not be sent. Your draft is safe; please retry or contact us on WhatsApp.',
  },
  'zh-Hant': {
    step: '步驟', of: '／', back: '返回', continue: '繼續', submit: '送出查詢', exit: '離開並返回 WINFO',
    titles: ['你心目中的公司名稱是甚麼？', '說說創辦團隊的情況', '讓我們先了解業務方向', '還需要哪些成立支援？', '留下方便聯絡你的方式', '核對資料，安心送出'],
    nameLater: '公司名稱稍後再決定', profileOptions: ['香港本地創業者', '內地創業者', '其他／仍在考慮'],
    serviceOptions: ['註冊地址及郵件代收', '銀行開戶資料準備', '記帳、審計及報稅諮詢'],
    success: '查詢已送達 WINFO，我們會查看資料並與你聯絡。', failure: '表格暫時未能送出；草稿仍在，請重試或透過 WhatsApp 聯絡我們。',
  },
  'zh-Hans': {
    step: '步骤', of: '／', back: '返回', continue: '继续', submit: '提交查询', exit: '离开并返回 WINFO',
    titles: ['你心目中的公司名称是什么？', '说说创办团队的情况', '让我们先了解业务方向', '还需要哪些成立支持？', '留下方便联系你的方式', '核对资料，安心提交'],
    nameLater: '公司名称稍后再决定', profileOptions: ['香港本地创业者', '内地创业者', '其他／仍在考虑'],
    serviceOptions: ['注册地址及邮件代收', '银行开户资料准备', '记账、审计及报税咨询'],
    success: '查询已送达 WINFO，我们会查看资料并与你联系。', failure: '表格暂时未能提交；草稿仍在，请重试或通过 WhatsApp 联系我们。',
  },
};
```

The same file also defines the exact field labels, timing and yes/no choices, validation message, summary labels, privacy-consent sentence, adviser note and WhatsApp/email fallback text used by the six steps. English, Traditional Chinese and Simplified Chinese are authored separately so Chinese phrasing is not generated at runtime.

- [x] **Step 2: Build the wizard page around the pure model**

```jsx
export function CompanyRegistrationWizard({ navigate, language, setLanguage }) {
  const profile = new URLSearchParams(window.location.search).get('profile');
  const [step, setStep] = useState(0);
  const [data, setData] = useState(() => restoreDraft(profile));
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState('idle');
  const next = () => {
    const nextErrors = validateWizardStep(step, data);
    setErrors(nextErrors);
    if (!nextErrors.length) setStep((value) => Math.min(value + 1, WIZARD_STEPS - 1));
  };
  const submit = async () => {
    setStatus('sending');
    try {
      await submitEnquiry(toEnquiryPayload(data, language));
      sessionStorage.removeItem(DRAFT_KEY);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };
  return <main className="registration-wizard">
    <WizardHeader language={language} setLanguage={setLanguage} onExit={() => navigate('/')} />
    <Progress step={step} total={WIZARD_STEPS} copy={copy} />
    <div className="wizard-shell wizard-layout">
      <section className="wizard-card" aria-labelledby="wizard-title">
        <StepFields step={step} data={data} setData={setData} errors={errors} copy={copy} setStep={setStep} />
        <WizardActions step={step} status={status} copy={copy} onBack={() => setStep((value) => Math.max(0, value - 1))} onNext={next} onSubmit={submit} />
      </section>
      <WizardSummary data={data} copy={copy} />
    </div>
    <SubmissionMessage status={status} copy={copy} language={language} />
  </main>;
}
```

In the same file, define `WizardHeader`, `Progress`, `StepFields`, `WizardActions`, `WizardSummary` and `SubmissionMessage` before the exported component. `StepFields` returns the semantic labels, three company-name fields, decide-later checkbox, founder radio cards, number selects, business inputs, service checkboxes, contact fields, honeypot, privacy-policy link and review/edit buttons for the active step. A `useEffect` writes the non-sensitive `data` object to `sessionStorage`; `submit` clears it after success.

- [x] **Step 3: Register the standalone route and query-safe navigation**

```jsx
const routes = {
  '/': { component: HomePage, key: 'home' },
  '/start/company-registration': { component: CompanyRegistrationWizard, key: 'registrationStart', standalone: true },
};

const routePath = targetPath.split('?')[0];
window.history.pushState({}, '', anchor ? `${targetPath}#${anchor}` : targetPath);
setPath(routePath);

if (route?.standalone) {
  return <Page navigate={navigate} language={language} setLanguage={setLanguage} />;
}
```

Add focused-page metadata for `registrationStart`.

- [x] **Step 4: Run model tests and production build**

Run: `npm test && npm run build`

Expected: all model tests pass and Vite produces `dist/` without errors.

- [x] **Step 5: Commit the page**

```bash
git add src/features/company-registration/wizardContent.js src/pages/CompanyRegistrationWizard.jsx src/main.jsx
git commit -m "feat: add guided company registration flow"
```

### Task 3: Scoped entry-point replacement and responsive styles

**Files:**
- Modify: `src/pages/IncorporationPage.jsx`
- Modify: `src/pages/ContentPage.jsx`
- Modify: `src/components/Sections.jsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Replace the incorporation hero actions**

```jsx
<LinkButton to={`/start/company-registration?profile=${kind}`} navigate={navigate}>{copy.startRegistration}</LinkButton>
<a className="button button-secondary" href={consultationUrl(copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.freeConsultation}</a>
```

- [ ] **Step 2: Replace the long registration form with a short entry section**

```jsx
export function RegistrationStart({ navigate, language, kind }) {
  const copy = getUi(language);
  return <section className="section registration-start" id="registration-inquiry"><div className="container registration-start-layout"><div><SectionHeading label={copy.registrationInquiry} title={copy.setUpTitle} text={copy.registrationIntro} /></div><LinkButton to={`/start/company-registration?profile=${kind}`} navigate={navigate}>{copy.startRegistration}</LinkButton></div></section>;
}
```

Remove only the obsolete `RegistrationInquiry` implementation and its no-longer-used state/submission imports. Keep the general contact form unchanged.

- [ ] **Step 3: Point pricing plan buttons at the wizard**

```js
to: '/start/company-registration?profile=local'
to: '/start/company-registration?profile=mainland'
```

Do not alter displayed prices, plan descriptions or the registered-address add-on.

- [ ] **Step 4: Add isolated desktop and mobile wizard styles**

```css
.registration-wizard { min-height:100vh; background:#f7fbff; color:var(--ink); }
.wizard-shell { width:min(1180px,calc(100% - 48px)); margin:0 auto; }
.wizard-layout { display:grid; grid-template-columns:minmax(0,1fr) 320px; gap:32px; align-items:start; }
.wizard-option:focus-visible,.wizard-control:focus-visible { outline:3px solid rgba(48,128,255,.3); outline-offset:2px; }
@media (max-width:800px) {
  .wizard-shell { width:min(100% - 32px,680px); }
  .wizard-layout { grid-template-columns:1fr; }
  .wizard-summary { order:2; }
  .wizard-actions { position:sticky; bottom:0; padding-bottom:max(14px,env(safe-area-inset-bottom)); }
}
```

Use WINFO blue `#3080FF`, navy `#173B72`, white and pale blue only; keep animation subtle and respect the existing reduced-motion rule.

- [ ] **Step 5: Run regression checks**

Run: `npm test && npm run build`

Expected: tests pass and production build completes without warnings that block output.

- [ ] **Step 6: Commit the scoped integration**

```bash
git add src/pages/IncorporationPage.jsx src/pages/ContentPage.jsx src/components/Sections.jsx src/styles.css
git commit -m "feat: connect registration entry points to guided flow"
```

### Task 4: Browser verification and final scope audit

**Files:**
- Modify only if a failure is found: files already listed in Tasks 1–3

- [ ] **Step 1: Verify desktop in all three languages**

Open `/start/company-registration?profile=local`, switch English → 繁體 → 简体, complete all six steps, go back to edit data, refresh to confirm draft restoration, and submit against the configured local endpoint. Confirm truthful success or failure messaging.

- [ ] **Step 2: Verify mobile flow**

At 390 × 844, confirm there is no horizontal overflow; progress, form controls and sticky Continue remain usable; the summary can be opened; WhatsApp is not obscured; and the privacy link is reachable.

- [ ] **Step 3: Verify scoped entry points**

Confirm both company-registration service pages and both pricing-plan buttons open the wizard with the correct `profile`. Confirm the free consultation action opens WhatsApp and the former long form no longer appears.

- [ ] **Step 4: Audit the diff against the freeze list**

Run: `git diff --name-only 240cae2..HEAD`

Expected: only the plan, wizard feature files, route, company-registration page, pricing entry links, replacement component, package script and isolated styles appear. No navigation, footer, testimonials, ratings, pricing values, legal pages, cookie code or unrelated homepage module changes.

- [ ] **Step 5: Final verification**

Run: `npm test && npm run build && git status --short`

Expected: tests and build pass; only pre-existing untracked screenshots/temp files remain.
