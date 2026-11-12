import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidEnquiryContact, submitEnquiry } from '../src/lib/enquiry.js';
import { initialWizardData, restoreWizardDraft, validateWizardStep, wizardEnquiryBrief } from '../src/features/company-registration/wizardModel.js';
import { wizardCopy } from '../src/features/company-registration/wizardContent.js';

test('a rejected provider acknowledgement cannot be displayed as success', async t => {
  for (const result of [{ ok: false }, { error: 'rejected' }, { errors: [{ message: 'invalid' }] }, null, []]) {
    t.mock.method(globalThis, 'fetch', async () => Response.json(result));
    await assert.rejects(submitEnquiry({}, { endpoint: '/api/enquiry' }), /not_confirmed/);
    t.mock.restoreAll();
  }
});

test('accepted provider responses preserve the notification payload and reply address', async t => {
  let body;
  t.mock.method(globalThis, 'fetch', async (_, request) => {
    body = JSON.parse(request.body);
    return Response.json({ ok: true });
  });
  assert.equal((await submitEnquiry({ type: 'general', name: 'Sample', contact: 'qa@example.invalid', consent: true }, { endpoint: '/test' })).ok, true);
  assert.equal(body['稱呼'], 'Sample');
  assert.equal(body._replyto, 'qa@example.invalid');
  assert.equal(body['同意私隱政策'], '是');
});

test('a stalled provider request settles with an error', async t => {
  t.mock.method(globalThis, 'fetch', (_, { signal }) => new Promise((resolve, reject) => {
    signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
  }));
  await assert.rejects(submitEnquiry({}, { endpoint: '/test', timeoutMs: 10 }), { name: 'AbortError' });
});

test('contact validation accepts international numbers and rejects empty or invalid answers', () => {
  for (const value of ['qa@example.invalid', '+852 6651 5286', '+86 138 0000 0000', '+44 (20) 7946-0958']) assert.equal(isValidEnquiryContact(value), true, value);
  for (const value of ['', '   ', 'not-a-contact', '123', '1234567890123456']) assert.equal(isValidEnquiryContact(value), false, value);
  assert.deepEqual(validateWizardStep(4, { name: ' ', contact: 'invalid', consent: false }), ['name', 'contact', 'consent']);
});

test('existing draft data is normalized before building the enquiry brief', () => {
  const restored = restoreWizardDraft(JSON.stringify({ companyNames: null, name: null, message: 42, needsAddress: 'false' }));
  assert.equal(restored.name, '');
  assert.equal(restored.message, '');
  assert.equal(restored.needsAddress, false);
  assert.equal(restored.companyNames.length, 3);
});

test('the brief retains complete answers in every supported language', () => {
  const data = { ...initialWizardData('mainland'), companyNames: ['Sample Trading', '', ''], business: 'Technology consulting', timing: 'within-month', existingCompany: 'no', needsBanking: true, name: 'QA Sample', contact: 'qa@example.invalid', message: '補充資料 '.repeat(400), consent: true };
  for (const copy of Object.values(wizardCopy)) {
    const brief = wizardEnquiryBrief(data, copy);
    for (const value of [data.companyNames[0], data.business, data.contact, data.message.trim(), copy.fields.needsBanking, copy.timings[data.timing]]) assert.ok(brief.includes(value));
  }
});
