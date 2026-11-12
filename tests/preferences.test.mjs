import test from 'node:test';
import assert from 'node:assert/strict';

function mockWindow(t, value) {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'window');
  Object.defineProperty(globalThis, 'window', { value, configurable: true });
  t.after(() => {
    if (original) Object.defineProperty(globalThis, 'window', original);
    else delete globalThis.window;
  });
}

test('blocked storage access retains preferences for the current visit', async t => {
  mockWindow(t, { get localStorage() { throw new DOMException('Blocked', 'SecurityError'); } });
  const preferences = await import('../src/lib/preferences.js?blocked');
  assert.equal(preferences.initialLanguage(), 'en');
  assert.equal(preferences.savePreference('winfo-language', 'zh-Hant'), false);
  assert.equal(preferences.initialLanguage(), 'zh-Hant');
  assert.equal(preferences.savePreference('winfo-cookie-choice', 'rejected'), false);
  assert.equal(preferences.readPreference('winfo-cookie-choice'), 'rejected');
});

test('full storage cannot break language changes or cookie choices', async t => {
  mockWindow(t, { localStorage: { getItem: () => 'zh-Hans', setItem() { throw new DOMException('Full', 'QuotaExceededError'); } } });
  const preferences = await import('../src/lib/preferences.js?full');
  assert.equal(preferences.initialLanguage(), 'zh-Hans');
  assert.equal(preferences.savePreference('winfo-language', 'en'), false);
  assert.equal(preferences.initialLanguage(), 'en');
});

test('available storage persists preferences and invalid saved languages fall back safely', async t => {
  const values = new Map([['winfo-language', 'invalid-language']]);
  mockWindow(t, { localStorage: { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) } });
  const preferences = await import('../src/lib/preferences.js?available');
  assert.equal(preferences.initialLanguage(), 'en');
  assert.equal(preferences.savePreference('winfo-language', 'zh-Hant'), true);
  assert.equal(values.get('winfo-language'), 'zh-Hant');
  assert.equal(preferences.initialLanguage(), 'zh-Hant');
});
