import test from 'node:test';
import assert from 'node:assert/strict';
import {
  initialWizardData,
  restoreWizardDraft,
  toEnquiryPayload,
  validateWizardStep,
} from './wizardModel.js';

test('profile query preselects only a supported founder profile', () => {
  assert.equal(initialWizardData('local').profile, 'local');
  assert.equal(initialWizardData('mainland').profile, 'mainland');
  assert.equal(initialWizardData('unknown').profile, 'undecided');
});

test('company names require a non-blank option or decide later', () => {
  assert.deepEqual(validateWizardStep(0, initialWizardData()), ['companyNames']);
  assert.deepEqual(validateWizardStep(0, { ...initialWizardData(), companyNames: ['  ', 'WINFO Labs', ''] }), []);
  assert.deepEqual(validateWizardStep(0, { ...initialWizardData(), decideNameLater: true }), []);
});

test('founder, business and contact steps validate only their required fields', () => {
  assert.deepEqual(validateWizardStep(1, { ...initialWizardData(), profile: '', directors: '', shareholders: '' }), ['profile', 'directors', 'shareholders']);
  assert.deepEqual(validateWizardStep(2, initialWizardData()), ['business', 'timing', 'existingCompany']);
  assert.deepEqual(validateWizardStep(3, initialWizardData()), []);
  assert.deepEqual(validateWizardStep(4, { ...initialWizardData(), name: 'Ada', contact: 'ada@example.com', consent: true }), []);
});

test('saved drafts are merged safely while the query profile takes priority', () => {
  const draft = JSON.stringify({ business: 'Consulting', profile: 'local', unexpected: 'ignored' });
  const restored = restoreWizardDraft(draft, 'mainland');
  assert.equal(restored.business, 'Consulting');
  assert.equal(restored.profile, 'mainland');
  assert.equal('unexpected' in restored, false);
});

test('submission maps wizard fields to the existing enquiry endpoint contract', () => {
  const data = {
    ...initialWizardData('local'),
    companyNames: ['WINFO Labs', '', ''],
    business: 'Consulting',
    timing: 'within-month',
    existingCompany: 'no',
    needsAddress: true,
    needsBanking: true,
    name: 'Ada',
    contact: 'ada@example.com',
    consent: true,
  };
  const payload = toEnquiryPayload(data, 'en');
  assert.equal(payload.type, 'company-registration');
  assert.equal(payload.service, 'Guided company registration enquiry');
  assert.equal(payload.profile, 'local');
  assert.equal(payload.companyNames, 'WINFO Labs');
  assert.equal(payload.needsAddress, 'Yes');
  assert.match(payload.message, /Banking preparation: Yes/);
});
