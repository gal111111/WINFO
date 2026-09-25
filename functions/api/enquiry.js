const MAX_LENGTH = 2_000;
const ALLOWED_TYPES = new Set(['general', 'company-registration', 'bud-eligibility']);

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
}

function value(input, limit = MAX_LENGTH) {
  return typeof input === 'string' ? input.trim().slice(0, limit) : '';
}

function escapeHtml(input) {
  return input.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function isAllowedOrigin(request) {
  const origin = request.headers.get('Origin');
  if (!origin) return true;
  try { return new URL(origin).host === request.headers.get('Host'); } catch { return false; }
}

function emailContent(data) {
  const rows = [['Submission type', data.type], ['Name', data.name], ['Phone or email', data.contact], ['Service', data.service], ['Timing', data.timing], ['Founder profile', data.profile], ['Preferred company name(s)', data.companyNames], ['Business nature', data.business], ['Registered address needed', data.needsAddress], ['Directors / shareholders', data.directors], ['Message', data.message], ['Initial outcome', data.outcome], ['Yes answers', data.yesCount], ['Eligibility answers', data.answers]].filter(([, item]) => item);
  return {
    text: rows.map(([label, item]) => `${label}: ${item}`).join('\n'),
    html: `<h2>New WINFO website enquiry</h2><table>${rows.map(([label, item]) => `<tr><th align="left" style="padding:8px 16px 8px 0">${escapeHtml(label)}</th><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(item)}</td></tr>`).join('')}</table>`,
  };
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: { Allow: 'GET, POST, OPTIONS' } });
}

// Config self-check: open /api/enquiry in a browser after deployment to confirm the
// delivery secrets are present. Never returns the values themselves.
export async function onRequestGet({ env }) {
  return json({
    ok: true,
    endpoint: '/api/enquiry',
    accepts: [...ALLOWED_TYPES],
    deliveryConfigured: Boolean(env.RESEND_API_KEY && env.ENQUIRY_RECIPIENT && env.ENQUIRY_FROM_EMAIL),
  });
}

export async function onRequestPost({ request, env }) {
  if (!isAllowedOrigin(request)) return json({ ok: false, error: 'origin_not_allowed' }, 403);
  if (!env.RESEND_API_KEY || !env.ENQUIRY_RECIPIENT || !env.ENQUIRY_FROM_EMAIL) return json({ ok: false, error: 'enquiry_delivery_not_configured' }, 503);

  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: 'invalid_request' }, 400); }
  if (value(body.website)) return json({ ok: true });

  const data = {
    type: value(body.type, 60), name: value(body.name, 120), contact: value(body.contact, 180),
    service: value(body.service, 140), timing: value(body.timing, 100), profile: value(body.profile, 100),
    companyNames: value(body.companyNames, 280), business: value(body.business, 500),
    needsAddress: value(body.needsAddress, 40), directors: value(body.directors, 100), message: value(body.message),
    outcome: value(body.outcome, 120), yesCount: value(body.yesCount, 20), answers: value(body.answers),
  };
  if (!ALLOWED_TYPES.has(data.type)) return json({ ok: false, error: 'unsupported_type' }, 400);
  if (data.type === 'bud-eligibility') {
    if (!data.answers || !data.name || !data.contact) return json({ ok: false, error: 'missing_required_fields' }, 400);
  } else if (!data.name || !data.contact || !data.service || !body.consent) {
    return json({ ok: false, error: 'missing_required_fields' }, 400);
  }

  const content = emailContent(data);
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact) ? data.contact : undefined;
  const subject = data.type === 'bud-eligibility'
    ? `[WINFO] BUD eligibility check: ${data.yesCount} yes`
    : `[WINFO] ${data.type === 'company-registration' ? 'Company registration' : 'General'} enquiry from ${data.name}`;
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.ENQUIRY_FROM_EMAIL, to: [env.ENQUIRY_RECIPIENT], reply_to: replyTo, subject, text: content.text, html: content.html }),
  });
  if (!response.ok) return json({ ok: false, error: 'delivery_failed' }, 502);
  return json({ ok: true });
}
