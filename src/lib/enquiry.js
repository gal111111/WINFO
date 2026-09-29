const MAX_FIELD_LENGTH = 2_000;

function clean(value, limit = MAX_FIELD_LENGTH) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

const TYPE_LABELS = {
  general: '一般查詢',
  'company-registration': '成立公司查詢',
  'bud-eligibility': 'BUD 資格初評',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitEnquiry(payload) {
  const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT?.trim();
  if (!endpoint) throw new Error('enquiry_endpoint_not_configured');

  const type = clean(payload.type, 60) || 'website';
  const typeLabel = TYPE_LABELS[type] || type;
  const name = clean(payload.name, 120);
  const contact = clean(payload.contact, 180);
  const service = clean(payload.service, 140);

  /* Readable fields, in the order the notification email should read.
     Empty values are dropped so the inbox stays easy to scan. */
  const fields = {
    '查詢類型': typeLabel,
    '需要業務／服務': service,
    '稱呼': name,
    '聯絡方式': contact,
    '預計開始時間': clean(payload.timing, 100),
    '查詢內容': clean(payload.message),
    '心儀公司名稱': clean(payload.companyNames, 280),
    '業務性質': clean(payload.business, 500),
    '創業者身份': clean(payload.profile, 100),
    '董事／股東人數': clean(payload.directors, 100),
    '需要註冊地址': clean(payload.needsAddress, 40),
    'BUD 初步評估': clean(payload.outcome, 200),
    'BUD 符合項數': clean(payload.yesCount, 40),
    'BUD 逐題答案': clean(payload.answers),
    '同意私隱政策': payload.consent ? '是' : '',
  };

  const body = Object.fromEntries(Object.entries(fields).filter(([, value]) => value !== ''));
  body.type = type;
  body._subject = clean([`【WINFO ${typeLabel}】`, service, name, contact].filter(Boolean).join('｜'), 200);
  /* So the recipient can reply straight to the visitor when an email was given. */
  if (EMAIL_PATTERN.test(contact)) {
    body.email = contact;
    body._replyto = contact;
  }
  body._gotcha = clean(payload.website, 200);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error('enquiry_delivery_failed');
  return response.json();
}
