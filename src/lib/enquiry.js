const MAX_FIELD_LENGTH = 2_000;

function clean(value, limit = MAX_FIELD_LENGTH) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

export async function submitEnquiry(payload) {
  const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT?.trim();
  if (!endpoint) throw new Error('enquiry_endpoint_not_configured');

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...payload,
      _subject: `WINFO ${clean(payload.type, 60) || 'website'} enquiry`,
      _gotcha: clean(payload.website, 200),
      name: clean(payload.name, 120), contact: clean(payload.contact, 180),
      service: clean(payload.service, 140), timing: clean(payload.timing, 100),
      message: clean(payload.message), companyNames: clean(payload.companyNames, 280),
      business: clean(payload.business, 500), profile: clean(payload.profile, 100),
      directors: clean(payload.directors, 100), website: clean(payload.website, 200),
    }),
  });
  if (!response.ok) throw new Error('enquiry_delivery_failed');
  return response.json();
}
