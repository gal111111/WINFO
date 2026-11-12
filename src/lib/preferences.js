const visitPreferences = new Map();
const supportedLanguages = new Set(['en', 'zh-Hant', 'zh-Hans']);

export function readPreference(key) {
  if (visitPreferences.has(key)) return visitPreferences.get(key);
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function savePreference(key, value) {
  // Retain language and cookie choices through navigation when storage is blocked.
  visitPreferences.set(key, value);
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

export function initialLanguage() {
  const saved = readPreference('winfo-language');
  return supportedLanguages.has(saved) ? saved : 'en';
}
