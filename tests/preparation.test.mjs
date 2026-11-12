import test from 'node:test';
import assert from 'node:assert/strict';
import { initialWizardData } from '../src/features/company-registration/wizardModel.js';
import { preparationChecklist, preparationChecklistText, preparationCopy } from '../src/features/company-registration/preparationModel.js';
import { serviceFinderCopy } from '../src/content/serviceFinder.js';

test('the checklist selects the founder route and requested support only', () => {
  const local = preparationChecklist(initialWizardData('local'));
  assert.deepEqual(local.groups.map(group => group.id), ['company', 'structure', 'local']);
  const mainland = preparationChecklist({ ...initialWizardData('mainland'), needsAddress: true, needsBanking: true, needsCompliance: true, existingCompany: 'yes' });
  assert.deepEqual(mainland.groups.map(group => group.id), ['company', 'structure', 'mainland', 'address', 'banking', 'compliance', 'existing']);
  assert.equal(mainland.sources.length, 4);
  assert.equal(preparationChecklist({ profile: 'legacy-invalid-profile' }).groups[2].id, 'undecided');
});

test('all supported languages download a complete checklist with guidance and source links', () => {
  for (const language of Object.keys(preparationCopy)) {
    const checklist = preparationChecklist({ ...initialWizardData('mainland'), needsBanking: true, needsCompliance: true }, language);
    const text = preparationChecklistText(checklist);
    for (const group of checklist.groups) {
      assert.ok(text.includes(group.title));
      for (const item of group.items) assert.ok(text.includes(item));
    }
    for (const source of checklist.sources) assert.ok(text.includes(source.url));
    assert.ok(text.includes(checklist.copy.privacy));
    assert.ok(text.includes(checklist.copy.note));
    assert.ok(text.includes('https://winfo.hk/contact/'));
  }
});

test('checklist downloads contain preparation guidance without including enquiry contact data', () => {
  const data = { ...initialWizardData(), name: 'Private QA Name', contact: 'private@example.invalid', message: 'Private enquiry text', business: 'Private business plan' };
  const text = preparationChecklistText(preparationChecklist(data));
  for (const privateValue of [data.name, data.contact, data.message, data.business]) assert.ok(!text.includes(privateValue));
});

test('funding, compliance, cross-border and both founder profiles have separate destinations', () => {
  for (const copy of Object.values(serviceFinderCopy)) {
    assert.equal(copy.options.length, 4);
    assert.deepEqual(copy.options.find(option => option.id === 'setup').links.map(link => link.to), ['/company-registration/hong-kong-resident', '/company-registration/mainland-resident']);
    assert.equal(copy.options.find(option => option.id === 'bud').links[0].to, '/bud-fund');
    assert.equal(copy.options.find(option => option.id === 'compliance').links[0].to, '/services/compliance');
    assert.equal(copy.options.find(option => option.id === 'cross-border').links[0].to, '/services/cross-border');
  }
});
