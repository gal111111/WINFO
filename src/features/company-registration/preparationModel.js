export const preparationSources = [
  { id: 'incorporation', url: 'https://www.cr.gov.hk/en/services/register-company.htm' },
  { id: 'company', url: 'https://www.cr.gov.hk/en/faq/local-company/incorporation.htm' },
  { id: 'banking', url: 'https://www.hkma.gov.hk/eng/smart-consumers/account-opening/information-required/' },
  { id: 'records', url: 'https://www.ird.gov.hk/eng/tax/bir51e_notes.htm' },
];

export const preparationCopy = {
  en: {
    title: 'Your preparation checklist',
    intro: 'Based on your founder profile and selected support. Open each area or download the full list for your adviser discussion.',
    download: 'Download checklist (.txt)',
    privacy: 'Keep identity and banking records for the secure collection method agreed with your adviser. Use this form for general enquiry details.',
    note: 'This is an initial preparation guide. WINFO will confirm the case-specific documents, service scope and fees. Bank requirements and approval are decided by the bank.',
    sources: 'Official guidance',
    checked: 'Sources reviewed on 12 November 2026.',
    sourceLabels: ['Companies Registry registration guide', 'Companies Registry incorporation FAQ', 'HKMA account-opening information', 'IRD business-record guidance'],
    groups: {
      company: { title: 'Company plan and filing', items: ['Settle the proposed names, business activities and intended start date with your adviser.', 'Review incorporation form NNC1, the articles of association and business-registration notice IRBR1 before filing.'], source: 'incorporation' },
      structure: { title: 'People, ownership and appointments', items: ['Agree the directors, shareholders, ownership allocation and company-secretary arrangement.', 'Identify a Hong Kong registered office and the people who ultimately own or control the company.'], source: 'company' },
      local: { title: 'Hong Kong founder documents', items: ['Ask which identification and address information is needed for each director and shareholder, including any corporate shareholder.'], source: 'company' },
      mainland: { title: 'Mainland founder documents', items: ['Confirm accepted identity documents, address information, any certification and remote-signing arrangements with the provider before sending documents.'], source: 'company' },
      undecided: { title: 'Confirm the founder document route', items: ['Tell the adviser where the directors and shareholders reside and whether shareholders are people or companies. Confirm the document route for each.'], source: 'company' },
      address: { title: 'Registered-address service', items: ['Confirm the service address, mail notification, forwarding, renewal price and what the quotation includes.'], source: 'company' },
      banking: { title: 'Banking preparation', items: ['Outline the intended account use, business activity, trading markets and expected transactions.', 'Check the chosen bank’s document list, including company and ownership records. Requirements vary by bank and customer.'], source: 'banking' },
      compliance: { title: 'Bookkeeping, audit and tax preparation', items: ['Organise available invoices, expenses and transaction records. Agree who will maintain the records and track filing dates.'], source: 'records' },
      existing: { title: 'Existing-company review', items: ['Confirm whether you need a new company or support for the existing one. Have its registration details, recent filings and any outstanding notices ready for the adviser.'], source: 'company' },
    },
  },
  'zh-Hant': {
    title: '你的資料準備清單',
    intro: '已按創辦人身份及所選支援整理。可展開各項，或下載完整清單與顧問討論。',
    download: '下載清單（.txt）',
    privacy: '身份及銀行文件請留待與顧問確認安全收集方式後提供。此表格只需填寫一般查詢資料。',
    note: '此清單供初步準備。WINFO 會按個案確認所需文件、服務範圍及費用；銀行文件要求及審批由銀行決定。',
    sources: '官方參考資料',
    checked: '資料來源於 2026 年 11 月 12 日檢視。',
    sourceLabels: ['公司註冊處成立公司指南', '公司註冊處成立公司常見問題', '金管局開戶資料指引', '稅務局業務紀錄指引'],
    groups: {
      company: { title: '公司計劃及成立文件', items: ['與顧問確認心儀名稱、業務性質及預計開始時間。', '提交前核對成立表格 NNC1、公司章程及商業登記通知書 IRBR1。'], source: 'incorporation' },
      structure: { title: '團隊、股權及法定安排', items: ['確認董事、股東、股權分配及公司秘書安排。', '確認香港註冊辦事處，以及最終擁有或控制公司的人士。'], source: 'company' },
      local: { title: '香港創辦人文件', items: ['先確認各董事及股東所需的身份與住址資料；如有公司股東，亦須確認其文件要求。'], source: 'company' },
      mainland: { title: '內地創辦人文件', items: ['傳送文件前，向服務提供者確認可接受的身份文件、住址資料、認證及遙距簽署安排。'], source: 'company' },
      undecided: { title: '確認創辦人文件路線', items: ['告知顧問董事及股東的居住地，以及股東屬個人或公司，再逐一確認文件路線。'], source: 'company' },
      address: { title: '註冊地址服務', items: ['確認服務地址、收信通知、轉寄、續費及報價所包含的項目。'], source: 'company' },
      banking: { title: '銀行開戶準備', items: ['整理戶口用途、業務模式、交易市場及預計交易情況。', '向所選銀行核對文件清單，包括公司及擁有權資料；要求會因銀行及客戶而異。'], source: 'banking' },
      compliance: { title: '記帳、審計及報稅準備', items: ['整理已有的發票、開支及交易紀錄，確認由誰保管紀錄及跟進申報日期。'], source: 'records' },
      existing: { title: '現有公司檢視', items: ['先確認需要另開公司或支援現有公司，並備妥其登記資料、近期申報及尚待處理的通知，與顧問討論。'], source: 'company' },
    },
  },
  'zh-Hans': {
    title: '你的资料准备清单',
    intro: '已按创办人身份及所选支持整理。可展开各项，或下载完整清单与顾问讨论。',
    download: '下载清单（.txt）',
    privacy: '身份及银行文件请留待与顾问确认安全收集方式后提供。此表格只需填写一般咨询资料。',
    note: '此清单供初步准备。WINFO 会按个案确认所需文件、服务范围及费用；银行文件要求及审批由银行决定。',
    sources: '官方参考资料',
    checked: '资料来源于 2026 年 11 月 12 日检视。',
    sourceLabels: ['公司注册处成立公司指南', '公司注册处成立公司常见问题', '金管局开户资料指引', '税务局业务记录指引'],
    groups: {
      company: { title: '公司计划及成立文件', items: ['与顾问确认心仪名称、业务性质及预计开始时间。', '提交前核对成立表格 NNC1、公司章程及商业登记通知书 IRBR1。'], source: 'incorporation' },
      structure: { title: '团队、股权及法定安排', items: ['确认董事、股东、股权分配及公司秘书安排。', '确认香港注册办事处，以及最终拥有或控制公司的人士。'], source: 'company' },
      local: { title: '香港创办人文件', items: ['先确认各董事及股东所需的身份与住址资料；如有公司股东，也须确认其文件要求。'], source: 'company' },
      mainland: { title: '内地创办人文件', items: ['发送文件前，向服务提供者确认可接受的身份文件、住址资料、认证及远程签署安排。'], source: 'company' },
      undecided: { title: '确认创办人文件路线', items: ['告知顾问董事及股东的居住地，以及股东属于个人或公司，再逐一确认文件路线。'], source: 'company' },
      address: { title: '注册地址服务', items: ['确认服务地址、收信通知、转寄、续费及报价所包含的项目。'], source: 'company' },
      banking: { title: '银行开户准备', items: ['整理账户用途、业务模式、交易市场及预计交易情况。', '向所选银行核对文件清单，包括公司及所有权资料；要求会因银行及客户而异。'], source: 'banking' },
      compliance: { title: '记账、审计及报税准备', items: ['整理已有的发票、开支及交易记录，确认由谁保管记录及跟进申报日期。'], source: 'records' },
      existing: { title: '现有公司检视', items: ['先确认需要另开公司或支持现有公司，并备妥其登记资料、近期申报及尚待处理的通知，与顾问讨论。'], source: 'company' },
    },
  },
};

export function preparationChecklist(data, language = 'en') {
  const copy = preparationCopy[language] || preparationCopy.en;
  const profile = ['local', 'mainland'].includes(data.profile) ? data.profile : 'undecided';
  const ids = [
    'company', 'structure', profile,
    data.needsAddress && 'address',
    data.needsBanking && 'banking',
    data.needsCompliance && 'compliance',
    data.existingCompany === 'yes' && 'existing',
  ].filter(Boolean);
  const groups = ids.map(id => ({ id, ...copy.groups[id] }));
  const sourceIds = new Set(groups.map(group => group.source));
  const sources = preparationSources
    .map((source, index) => ({ ...source, label: copy.sourceLabels[index] }))
    .filter(source => sourceIds.has(source.id));
  return { copy, groups, sources };
}

export function preparationChecklistText(checklist) {
  const { copy, groups, sources } = checklist;
  return [
    `WINFO — ${copy.title}`,
    copy.intro,
    copy.privacy,
    ...groups.map(group => [group.title, ...group.items.map(item => `• ${item}`)].join('\n')),
    copy.note,
    copy.sources,
    ...sources.map(source => `${source.label}\n${source.url}`),
    copy.checked,
    'https://winfo.hk/contact/',
  ].join('\n\n');
}
