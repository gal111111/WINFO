export const contact = {
  phone: '+852 6651 5286',
  email: 'jeccw@email.com',
  address: '香港九龍觀塘敬業街 61-63 號利維大廈 1 樓 122 室',
  whatsapp: 'https://wa.me/85266515286',
};

export const pricingData = {
  currency: 'HKD',
  local: 5000,
  mainland: 6900,
  registeredAddress: 1500,
};

export const googleRating = {
  status: 'live',
  rating: 4.5,
  reviewCount: null,
  businessName: 'WINFO Business Solutions Ltd',
  profileUrl: '',
  checkedAt: null,
};

// Trust bar shown under the page hero. Every field is optional — leave it empty and the line
// is not rendered. Only fill in figures and licence numbers you can substantiate.
// headline: write the traditional-Chinese line in `zh`; the simplified version is derived automatically.
export const trustBar = {
  headline: { en: '', zh: '' },
  licence: '',
};

export function formatPrice(value) {
  return `HKD ${value.toLocaleString('en-HK')}`;
}

import { Converter } from 'opencc-js';

export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'zh-Hant', label: '繁' },
  { code: 'zh-Hans', label: '简' },
];

const traditional = {
  serviceGroups: [
    { title: '在香港起步', items: [
      { title: '香港本地人士註冊公司', description: '由公司名稱、法定文件，到成立後的文件交接', to: '/company-registration/hong-kong-resident' },
      { title: '內地人士註冊香港公司', description: '跨境文件整理，以及開戶前準備', to: '/company-registration/mainland-resident' },
    ] },
    { title: '資助與拓展', items: [
      { title: 'BUD 專項基金', description: '由初評、計劃書、文件到申請協調', to: '/bud-fund' },
      { title: '內地創新園', description: '先評估園區與跨境發展方向', to: '/services/cross-border' },
    ] },
    { title: '合規與營運', items: [
      { title: '審計、報稅及公司秘書', description: '為全年的合規工作排好節奏', to: '/services/compliance' },
      { title: '上市維護', description: '按企業需要，安排持續支援', to: '/services/compliance' },
    ] },
    { title: '科技與跨境落地', items: [
      { title: '內地軟件註冊', description: '為跨境業務做好準備', to: '/services/cross-border' },
      { title: '香港科技孵化園', description: '釐清園區申請與落地需要', to: '/services/cross-border' },
    ] },
  ],
  homeServices: [
    { label: '公司成立', title: '成立香港公司', text: '按你的身份（香港或內地），先理清公司架構、文件、公司秘書和註冊地址等安排', cta: '選擇你的身份', to: '/company-registration/hong-kong-resident' },
    { label: '資助申請', title: 'BUD 專項基金申請', text: '由資格初評、計劃書、預算，到提交與補件，每一步都有清楚的先後次序', cta: '檢查申請資格', to: '/bud-fund' },
    { label: '持續營運', title: '審計、報稅與公司維護', text: '把周年申報、法定記錄、會計和稅務，排進一年可執行的節奏裡', cta: '了解合規服務', to: '/services/compliance' },
    { label: '跨境拓展', title: '跨境及科技落地', text: '由跨境業務、園區到資本市場，先看清條件，再安排下一步', cta: '與顧問討論', to: '/services/cross-border' },
  ],
  incorporation: {
    local: {
      crumb: '成立香港公司', title: '香港本地人士\n註冊有限公司', lead: '由公司名稱、股權資料、法定文件，到公司秘書和註冊地址，專人一步步陪你辦妥所有手續', primary: '取得正式報價', secondary: '查看所需文件',
      fit: ['年滿 18 歲，並打算以香港私人股份有限公司做生意的人', '想在開始前，先把公司名稱、董事、股東和股權安排理清的創業者', '部分受規管行業，或需另辦牌照，或另尋專業意見'],
      documents: ['香港身份證', '最近三個月住址證明', '1 至 3 個公司名稱選項', '業務性質及預計營運資料', '董事、股東及股權比例', '聯絡資料及 KYC 所需資料'],
      process: [['01', '初步資料', '先了解你的業務、心儀名稱、董事和股東，以及需要的支援'], ['02', '名稱及架構確認', '整理架構與所需資料，確認服務範圍和報價'], ['03', '文件簽署及提交', '準備成立文件，協調簽署和提交安排'], ['04', '文件交接', '按已確認方案交付公司文件，並提醒你下一年的合規事項']],
      faqs: [['處理時間一般多久？', '要視乎公司名稱、文件是否齊全，以及相關部門的處理速度。核對好初步資料後，我們會按你的個案說明預計時間'], ['可否一人同時擔任董事及股東？', '一般私人股份有限公司可按實際架構安排，但具體安排仍須按公司資料和合規要求確認'], ['服務是否包括銀行開戶？', '我們可按需要協助整理開戶前資料和流程，但戶口能否開立，由銀行獨立審批'], ['是否可以提供註冊地址？', '可按已確認的服務方案安排。郵件處理、轉寄及續費安排，會在正式報價中列明']],
    },
    mainland: {
      crumb: '成立香港公司', title: '內地人士\n註冊香港公司', lead: '為內地創業者而設：由身份和業務資料整理，到香港公司成立、註冊地址、公司秘書和銀行開戶準備，一站式為你協調', primary: '免費評估註冊需要', secondary: '查看內地人士文件清單',
      fit: ['打算以香港私人股份有限公司，開展跨境或香港業務的內地創業者', '需要先釐清身份、股權結構、文件和 KYC 準備的董事或股東', '實際要求以公司註冊處、服務供應商和 KYC 結果為準'],
      documents: ['內地居民身份證', '有效旅行證件（如適用）', '最近三個月住址證明', '公司名稱及業務計劃／業務性質', '董事、股東及股權資料', '資金來源及業務證明（按 KYC／銀行要求）'],
      process: [['01', '初步視像諮詢', '先了解你的身份背景、業務計劃、股權安排和期望時間'], ['02', '文件預審', '核對公司成立及 KYC 所需資料，標示可能需要補充的文件'], ['03', '確認架構及提交', '確認公司架構、簽署成立文件，並安排提交'], ['04', '成立後準備', '交付公司文件，並按需要整理開戶及年度合規的下一步']],
      faqs: [['是否需要親身到香港？', '公司成立及銀行開戶的安排，要視乎個案、文件和服務供應商的要求。我們會先評估可行流程，再說明是否需要親身處理'], ['香港公司一定需要香港董事嗎？', '董事及股東安排須按相關法規和個案合規要求確認；我們會在初步評估時協助釐清'], ['銀行戶口是否保證開立？', '不保證。WINFO 可協助準備資料、協調流程，但最終能否開立，仍由銀行按本身的審批標準獨立決定'], ['成立後還有哪些年度成本？', '公司秘書、註冊地址、周年申報、記帳、審計及報稅等都可能涉及，實際需要會按你的公司營運情況和服務方案說明']],
    },
  },
  bud: {
    checks: ['公司已在香港登記，並有實質業務運作', '屬非上市企業', '有清晰的品牌、升級轉型或市場拓展目標', '可提供業務及支出證明', '項目尚未開始，或符合最新的申請時間規定'],
    categories: ['市場推廣', '展覽及商貿活動', '網站及電商', '品牌及設計', '檢測認證', '知識產權', '顧問服務', '數碼轉型'],
    documents: ['公司註冊及商業登記文件', '最新周年申報或公司資料', '實質業務證明', '財務、銀行或交易證明（按要求）', '項目計劃、供應商報價及預算', '目標市場、產品／服務及過往推廣資料', '其他按最新指南要求的聲明及證明'],
    process: [['01', '資格初評', '你提供公司及項目基本資料，WINFO 協助初步判斷申請方向'], ['02', '界定項目', '釐清目標市場、工作範圍、里程碑，以及你需要提供的證明文件'], ['03', '預算與報價', '整理供應商報價、預算邏輯和項目時間線'], ['04', '文件及申請書', '協調申請表、計劃書與所需證明，提交前先做完整檢查'], ['05', '提交與補件', '跟進提交狀態，協調需要補充的資料'], ['06', '執行及申報', '如已納入服務範圍，協助建立執行記錄與申報提醒']],
    faqs: [['哪些公司可以申請？', '是否適合，須按最新官方指引、企業狀況和個別項目內容判斷。我們可以先做初步方向評估'], ['新成立公司可以申請嗎？', '申請條件及實質業務要求，會按官方最新規則逐一個案判斷，建議先提供基本公司資料作初評'], ['項目何時可以開始？', '項目開始的時間和開支安排，都可能影響申請資格。在作出不可撤回的承諾或付款前，請先向顧問確認'], ['WINFO 是否保證申請獲批？', '不保證。資助資格及批核結果，由相關政府機構按最新規則和個別申請獨立決定']],
  },
};

const english = {
  serviceGroups: [
    { title: 'Start in Hong Kong', items: [{ title: 'Company setup for HK residents', description: 'Name, statutory documents and handover.', to: '/company-registration/hong-kong-resident' }, { title: 'Company setup for mainland founders', description: 'Cross-border documents and banking readiness.', to: '/company-registration/mainland-resident' }] },
    { title: 'Funding and Growth', items: [{ title: 'BUD Fund', description: 'Initial review, proposal, documents and coordination.', to: '/bud-fund' }, { title: 'Mainland innovation parks', description: 'An initial review of park and expansion options.', to: '/services/cross-border' }] },
    { title: 'Compliance and Operations', items: [{ title: 'Audit, tax and company secretarial', description: 'Put annual compliance on a clear schedule.', to: '/services/compliance' }, { title: 'Listed-company support', description: 'Ongoing support tailored to your needs.', to: '/services/compliance' }] },
    { title: 'Technology and Cross-border', items: [{ title: 'Mainland software registration', description: 'Practical preparation for cross-border business.', to: '/services/cross-border' }, { title: 'Hong Kong incubation parks', description: 'Clarify application and landing requirements.', to: '/services/cross-border' }] },
  ],
  homeServices: [
    { label: 'Company setup', title: 'Set up a Hong Kong company', text: 'Clarify structure, documents, secretarial and registered-address needs for local and mainland founders.', cta: 'Choose your profile', to: '/company-registration/hong-kong-resident' },
    { label: 'Funding', title: 'Apply for the BUD Fund', text: 'From initial fit to proposal, budget, submission and follow-up, put the work in the right order.', cta: 'Check your eligibility', to: '/bud-fund' },
    { label: 'Ongoing operations', title: 'Audit, tax and company upkeep', text: 'Turn annual filings, statutory records, accounting and tax into an actionable rhythm.', cta: 'Explore compliance support', to: '/services/compliance' },
    { label: 'Growth and landing', title: 'Cross-border and technology landing', text: 'Clarify the conditions for expansion, parks and capital-market needs before the next move.', cta: 'Talk to an adviser', to: '/services/cross-border' },
  ],
  incorporation: {
    local: {
      crumb: 'Hong Kong company setup', title: 'Set up a Hong Kong limited company', lead: 'From your company name, shareholding and statutory documents to company secretarial and registered-address arrangements, we guide your setup step by step.', primary: 'Request a formal quote', secondary: 'See the document checklist',
      fit: ['Adults aged 18 or above intending to trade through a Hong Kong private limited company.', 'Founders who want their company name, directors, shareholders and shareholding settled before proceeding.', 'Regulated industries may require separate licences or specialist advice.'],
      documents: ['Hong Kong identity card', 'Residential address proof issued within the last three months', 'One to three proposed company names', 'Business nature and expected operations', 'Director, shareholder and shareholding details', 'Contact details and information needed for KYC'],
      process: [['01', 'Initial details', 'We understand your business, name options, directors, shareholders and support needs.'], ['02', 'Name and structure', 'We organise setup information and confirm the service scope and quote.'], ['03', 'Documents and filing', 'We prepare incorporation documents and coordinate signing and filing.'], ['04', 'Handover', 'We deliver the agreed company documents and explain the next annual compliance steps.']],
      faqs: [['How long does it take?', 'Timing depends on the company name, document completeness and relevant authorities. We will explain the expected timeline once we review your initial details.'], ['Can one person be both director and shareholder?', 'A private limited company can generally be structured around the actual arrangement. Each case remains subject to its company information and compliance requirements.'], ['Does the service include bank account opening?', 'We can help organise pre-account-opening information and the process. The bank independently decides whether to open an account.'], ['Can you provide a registered address?', 'This can be arranged under the confirmed service plan. Mail handling, forwarding and renewal terms will appear in the formal quote.']],
    },
    mainland: {
      crumb: 'Hong Kong company setup', title: 'Set up a Hong Kong company from mainland China', lead: 'For mainland founders, we coordinate cross-border information, incorporation, registered address, company secretarial and banking-readiness work in a clear, joined-up process.', primary: 'Assess my setup needs', secondary: 'See the document checklist',
      fit: ['Mainland founders planning to operate cross-border or Hong Kong business through a Hong Kong private limited company.', 'Directors or shareholders who need to clarify identity, ownership, documents and KYC preparation first.', 'Requirements remain subject to the Companies Registry, service providers and KYC outcomes.'],
      documents: ['Mainland resident identity card', 'Valid travel document, where applicable', 'Residential address proof issued within the last three months', 'Company name, business plan or business nature', 'Director, shareholder and shareholding details', 'Source-of-funds and business evidence when required for KYC or banking'],
      process: [['01', 'Initial video consultation', 'We understand your background, business plan, shareholding and preferred timetable.'], ['02', 'Document pre-check', 'We check incorporation and KYC information and flag any likely follow-up documents.'], ['03', 'Structure and filing', 'We confirm the structure, arrange signing and submit the incorporation filing.'], ['04', 'Post-incorporation readiness', 'We hand over company documents and, where required, prepare for banking and annual compliance.']],
      faqs: [['Do I need to travel to Hong Kong?', 'Arrangements depend on the case, documents and the requirements of relevant providers. We assess the workable route first and explain whether an in-person step is needed.'], ['Must a Hong Kong company have a Hong Kong director?', 'Director and shareholder arrangements depend on applicable law and case-specific compliance. We clarify this during the initial review.'], ['Is a bank account guaranteed?', 'No. WINFO can help prepare information and coordinate the process, but each bank makes its own independent decision.'], ['What annual costs arise after incorporation?', 'Company secretarial, registered address, annual filings, bookkeeping, audit and tax may all be relevant. The actual scope depends on how your company operates and the agreed plan.']],
    },
  },
  bud: {
    checks: ['The company is registered in Hong Kong and has substantive business operations', 'It is a non-listed enterprise', 'There is a clear brand, upgrading, transformation or market-expansion objective', 'Business and expenditure evidence can be provided', 'The project has not started, or meets the latest application timing rules'],
    categories: ['Marketing', 'Exhibitions and trade activities', 'Website and e-commerce', 'Brand and design', 'Testing and certification', 'Intellectual property', 'Consulting services', 'Digital transformation'],
    documents: ['Certificate of incorporation and business registration documents', 'Latest annual return or company information', 'Evidence of substantive business', 'Financial, banking or transaction records when required', 'Project plan, supplier quotations and budget', 'Target market, product or service, and prior marketing materials', 'Other declarations and evidence required by the latest guidance'],
    process: [['01', 'Initial fit review', 'You provide company and project basics; WINFO helps identify an initial direction.'], ['02', 'Define the project', 'We clarify the market, scope, milestones and evidence you will need to provide.'], ['03', 'Budget and quotations', 'We organise supplier quotations, budget logic and the project timeline.'], ['04', 'Documents and application', 'We coordinate the application form, proposal and evidence, then check completeness before submission.'], ['05', 'Submission and follow-up', 'We follow the submission status and coordinate requests for further information.'], ['06', 'Execution and reporting', 'Where included in the agreed scope, we help establish execution records and reporting reminders.']],
    faqs: [['Which companies can apply?', 'Suitability depends on the latest official guidance, business circumstances and the project. We can start with an initial directional review.'], ['Can a newly incorporated company apply?', 'Conditions and substantive-business requirements depend on the latest official rules and your case. Share basic company information for an initial review.'], ['When can the project start?', 'Project timing and spending can affect eligibility. Ask an adviser before making irreversible commitments or payments.'], ['Does WINFO guarantee approval?', 'No. Eligibility and approval are determined independently by the relevant authority under the latest rules and the individual application.']],
  },
};

const ui = {
  en: {
    services: 'Services', ourApproach: 'How we work', about: 'About WINFO', contactUs: 'Contact us', freeConsultation: 'Free initial consultation', menu: 'Open menu', closeMenu: 'Close menu', home: 'Home', coreServices: 'Core services', serviceFinder: 'Service finder', whyWinfo: 'Why WINFO', collaboration: 'How we work', faq: 'FAQ', initialConsultation: 'Initial consultation', whatsappEnquiry: 'WhatsApp enquiry', viewDocuments: 'View required documents', localFounder: 'I am a Hong Kong founder', mainlandFounder: 'I am a mainland founder', budFounder: 'I want to apply for BUD funding', trust: ['Hong Kong-based team', 'English, Cantonese and Mandarin support', 'Dedicated point of contact', 'Clear scope and fees'], heroKicker: 'WINFO Business Solutions Ltd | Hong Kong business services', heroTitle: <>Build in Hong Kong.<br />Take your business further.</>, heroLead: 'From company setup and BUD applications to audit, tax, cross-border and technology landing, WINFO turns complex procedures into clear next steps.', exploreServices: 'Explore our services', servicesTitle: 'Building a business in Hong Kong takes more than a certificate.', servicesText: 'From setup documents and funding planning to long-term compliance, start with the most valuable next step.', finderTitle: 'Tell us where you are now.', finderText: 'Choose the situation closest to yours and we will point you to the right first conversation.', finderStart: 'A good place to begin', whyTitle: 'Clear decisions make steady progress.', processTitle: 'From the first question to a practical next step.', faqTitle: 'Ask the important questions before you begin.', consultationTitle: 'Let us understand where you are headed.', consultationText: 'Share your next step on WhatsApp. We will start with the scope, the information needed and practical options.', legal: 'Privacy and terms', footerLine: 'Helping businesses land, operate compliantly and grow steadily in Hong Kong.', core: 'Core services', contactDetails: 'Contact details', rights: 'All rights reserved.', cookieTitle: 'Cookies and local preferences', cookieText: 'We use essential browser storage to remember language and cookie choices. Optional analytics are not enabled on this local site.', cookieAccept: 'Accept essential cookies', cookieReject: 'Reject non-essential', cookieSettings: 'Cookie settings', cookieSaved: 'Your cookie preference is saved on this device.', setUpTitle: 'Start now?', setUpText: 'Tell us your identity, shareholding and intended timeline. We will help organise the first practical step.', registrationInquiry: 'Name check and quote request', registrationIntro: 'Share only general, non-sensitive details. We will prepare a WhatsApp enquiry for you to review before sending.', name: 'Your name', contactMethod: 'Phone or email', companyNames: 'Preferred company name(s)', companyNamesPlaceholder: 'Up to three name options', business: 'Business nature', profile: 'Founder profile', needAddress: 'Need a registered address?', directors: 'Number of directors / shareholders', submitInquiry: 'Prepare WhatsApp enquiry', noSensitive: 'Do not enter identity-card numbers, bank statements or other sensitive documents here.', yes: 'Yes', no: 'No', local: 'Hong Kong resident', mainland: 'Mainland resident', other: 'Other / not sure', bankPreparation: 'Bank account preparation', bankTitle: 'Prepare the business story first, then plan the next step.', bankText: 'WINFO can help organise information and coordinate the process according to bank requirements. It does not represent the bank, and account opening remains the bank’s independent decision.', important: 'Important note', noGuarantee: 'No approval is guaranteed', budKicker: 'Government funding application | BUD Fund', budHero: 'Turn an expansion plan into a workable BUD application.', budLead: 'WINFO helps businesses move from an initial fit review and project design to budgets, documents, submission and follow-up, in clear stages.', budAssessment: 'Free initial fit review', eligibility: '30-second initial check', eligibilityTitle: 'See whether your project merits a closer review.', eligibilityText: 'This is directional only and cannot replace official eligibility or approval decisions.', responseYes: 'Yes', responseNo: 'No', completeCheck: 'Answer all five questions to see an initial direction.', likelyFit: 'Potentially suitable for a closer review', furtherReview: 'An adviser should review this further', projectDirections: 'Project directions', projectTitle: 'Turn a business objective into a coherent application.', responsibilities: 'What WINFO does and what you own, made clear.', winfoResponsibilities: 'WINFO responsibilities', clientResponsibilities: 'Client responsibilities', commonProjects: 'Common project areas', projectNeeds: 'Start from the business need that is actually there.', applicationProcess: 'Application process', processStandard: 'Every stage has a clear completion point.', documents: 'Document checklist', documentsTitle: 'Prepare verifiable business information before a formal application.', fees: 'Fees', feeTitle: 'Understand the project before receiving a formal quote.', privacyTitle: 'Privacy policy', termsTitle: 'Website terms of use', legalUpdated: 'Last reviewed: 10 September 2026', legalPrivacy: ['WINFO collects contact and enquiry information only when you choose to send it to us through the stated channel.', 'We use the information to answer enquiries, assess the requested service and manage the business relationship. We do not sell personal data.', 'Information may be shared with professional advisers, service providers or authorities only where needed for the requested work, legal obligations or with appropriate authority.', 'Do not send identity documents, bank statements or other sensitive material through a general website enquiry. We will provide an appropriate collection method after the scope is confirmed.', 'You may ask about access to or correction of personal data by contacting enquiry@winfo.hk. This draft must be reviewed and completed by WINFO’s legal adviser before public launch.'], legalTerms: ['This website provides general information about WINFO’s services. It is not legal, tax, accounting, banking or funding advice.', 'Service scope, fees, delivery timing and responsibilities are confirmed only in an accepted quotation or engagement document.', 'Incorporation, banking and funding outcomes are decided by the relevant authority, bank or third party. WINFO does not guarantee an outcome.', 'Website content may be updated without notice. You are responsible for checking whether it remains suitable for your circumstances.', 'Hong Kong law governs these website terms, subject to any mandatory law that applies.'], notFoundTitle: 'This page is not available.', notFoundText: 'The link may have changed, or the page is still being prepared.', returnHome: 'Return home', notFound: 'Page not found', pricing: 'Pricing is based on your confirmed scope', pricingText: 'The formal quote will identify WINFO services, government fees and any separately charged third-party services.', suitableFor: 'Who this is for', suitableTitle: 'Confirm your setup needs first.', serviceScope: 'Service scope', serviceTitle: 'From incorporation documents to handover.', scopeText: 'Actual services are defined by the accepted quotation and engagement scope.', include: 'Usually included', exclude: 'Usually excluded or separately charged', receive: 'On completion, you may receive', postSetup: 'After incorporation', postTitle: 'Incorporation is only the first step.', annual: 'Each year', ongoing: 'During operations', finalBud: 'Explain the plan clearly before applying.', finalBudText: 'Spend 15 minutes outlining your business and project objective so an adviser can help organise a feasible direction.', discuss: 'Discuss with an adviser', companyStatus: 'Company status', freshCompany: 'Planning to set up', existingCompany: 'Existing Hong Kong company', firstStep: 'Start consultation', disclaimer: 'Eligibility and approval are decided independently by the relevant authority under the latest rules and the individual application.', responsibilityWinfo: ['Initial fit and project-direction review', 'Project scope, milestones and budget organisation', 'Coordination of application form, proposal and supporting documents', 'Completeness check before submission and follow-up on requests', 'Execution and reporting reminders where included in the agreement'], responsibilityClient: ['Provide accurate, complete and verifiable business information', 'Confirm project content, supplier arrangements and budget', 'Provide required evidence and answers on time', 'Follow the approved plan and retain relevant records'], categoryNote: 'Eligibility depends on the latest guidance and project details.', feeText: 'A formal quote reflects the number and complexity of projects, document readiness and required follow-up support.', verification: 'Information check', verificationText: 'BUD rules, eligibility, eligible items and timing can change. The official latest guidance prevails before submission.', initial: 'Initial details', nameStructure: 'Name and structure', documentsFiling: 'Documents and filing', handover: 'Handover', eligibilityDisclaimer: 'Funding eligibility and approval are decided by the relevant authority under the latest rules and each individual application.', answer: 'Answer', seeDocs: 'See checklist', viewDetails: 'See details', currentSupport: 'Ongoing support', companyMaintenance: 'Audit, tax and company maintenance', caseNote: 'We will explain the service boundary, required information and next practical action after an initial review.'
  },
  'zh-Hant': {},
  'zh-Hans': {},
};

const traditionalUi = {
  services: '服務', ourApproach: '我們的做法', about: '關於 WINFO', contactUs: '聯絡我們', freeConsultation: '免費初步諮詢', menu: '打開選單', closeMenu: '關閉選單', home: '首頁', coreServices: '核心服務', serviceFinder: '服務分流', whyWinfo: '為何選擇 WINFO', collaboration: '合作方式', faq: 'FAQ', initialConsultation: '初步諮詢', whatsappEnquiry: 'WhatsApp 查詢', viewDocuments: '查看所需資料', localFounder: '我是香港本地創業者', mainlandFounder: '我是內地創業者', budFounder: '我想申請 BUD 資助', trust: ['香港本地團隊', '粵語、英語、普通話都通', '全程由同一位顧問跟進', '收費與流程清清楚楚'], heroKicker: 'WINFO 盈豐商業有限公司｜香港企業服務', heroTitle: '事業規劃清楚\n才能穩步向前', heroLead: '由公司註冊、BUD 資助申請，到審計報稅與跨境落地，WINFO 把繁複程序拆成一步步清楚動作，讓你每走一步都知道下一步在哪', exploreServices: '看看我們怎樣幫你', servicesTitle: '企業來港發展\n要的不只是一張註冊證書', servicesText: '由起步文件、資助規劃到長遠合規，我們先陪你找出此刻最值得做的那一步', finderTitle: '先告訴我們\n你現在走到哪一步', finderText: '選一項最接近你現況的，我們就由那裡開始聊', finderStart: '建議先由這裡開始', whyTitle: '把事情說清楚\n路自然走得穩', processTitle: '將你的每一次顧慮\n轉化為踏實的每一步', faqTitle: '開始之前\n先把重要問題問清楚', consultationTitle: '先讓我們聽聽你的情況', consultationText: '在 WhatsApp 說說你的下一步，我們會先回覆服務範圍、需要準備的資料，以及可行的做法', legal: '私隱政策及使用條款', footerLine: '讓每一間來港發展的企業\n都能落地更快、經營合規、成長穩健', core: '核心服務', contactDetails: '聯絡資料', rights: '版權所有', cookieTitle: 'Cookie 及本機偏好設定', cookieText: '本網站只使用必要的瀏覽器儲存空間，以記住語言及 Cookie 選擇；本機版本未啟用分析工具', cookieAccept: '接受必要 Cookie', cookieReject: '拒絕非必要 Cookie', cookieSettings: 'Cookie 設定', cookieSaved: '你的 Cookie 偏好已儲存在此裝置', setUpTitle: '立即開始？', setUpText: '告訴我們你的身份、安排和預計時間，第一步就交給我們幫你理順', registrationInquiry: '名稱查冊及報價查詢', registrationIntro: '只需填寫一般、非敏感資料；送出前，我們會先為你準備好 WhatsApp 查詢內容', name: '你的稱呼', contactMethod: '電話或電郵', companyNames: '心儀公司名稱', companyNamesPlaceholder: '最多三個名稱選項', business: '業務性質', profile: '創業者身份', needAddress: '是否需要註冊地址？', directors: '董事／股東人數', submitInquiry: '準備 WhatsApp 查詢', noSensitive: '請勿在此輸入身份證號碼、銀行月結單或其他敏感資料', budLead: '由資格初評、項目構思，到預算、文件、提交與補件，WINFO 把整份 BUD 申請拆成看得懂的步驟', budAssessment: '免費初步資格評估', eligibility: '30 秒資格初評', eligibilityTitle: '先看項目值不值得\n再決定投入多少', eligibilityText: '此結果只作初步方向參考，不能取代官方資格或批核決定', responseYes: '是', responseNo: '否', completeCheck: '完成以上五條問題，這裡就會顯示初步方向', likelyFit: '初步可能適合', furtherReview: '需要顧問進一步判斷', projectDirections: '計劃方向', projectTitle: '把業務目標\n變成說得通的申請項目', responsibilities: '誰做甚麼\n一開始就分清楚', winfoResponsibilities: 'WINFO 責任', clientResponsibilities: '客戶責任', commonProjects: '常見可申請項目', projectNeeds: '由真正的業務需要出發', applicationProcess: '申請流程', processStandard: '每個階段\n都有明確的完成標準', documents: '文件清單', documentsTitle: '正式申請前\n先備好可核實的業務資料', fees: '收費方式', feeTitle: '先看項目\n再談報價', privacyTitle: '私隱政策', termsTitle: '網站使用條款', legalUpdated: '最後檢視：2026 年 9 月 10 日', legalPrivacy: ['WINFO 只會在你選擇透過已列明渠道聯絡我們時，收集你的聯絡及查詢資料', '我們會用這些資料回覆查詢、評估所需服務和管理業務關係；我們不會出售你的個人資料', '只有在完成獲委託工作、履行法定責任或取得適當授權時，資料才可能提供予專業顧問、服務供應商或主管機構', '請勿透過一般網站查詢傳送身份證明、銀行月結單或其他敏感資料；確認服務範圍後，我們會提供合適的收集方法', '你可透過 enquiry@winfo.hk 查詢查閱或更正個人資料。本草稿須在公開發布前交由 WINFO 法律顧問審閱及補充'], legalTerms: ['本網站只提供 WINFO 服務的一般資訊，並非法律、稅務、會計、銀行或資助意見', '服務範圍、費用、交付時間及責任，僅在已接受的報價或委託文件中確認', '公司註冊、銀行開戶及資助結果由相關機構、銀行或第三方決定；WINFO 不保證任何結果', '網站內容可在不另行通知下更新；你須自行判斷資料是否仍適用於自身情況', '本網站條款受香港法律管轄，惟不影響任何必須適用的法律'], notFoundTitle: '這個頁面暫時不存在', notFoundText: '連結可能已經更新，或者頁面仍在準備中', returnHome: '返回首頁', notFound: '找不到頁面', pricing: '按實際方案報價', pricingText: '正式報價會逐項列明 WINFO 服務、政府費用，以及需要另計的第三方服務', suitableFor: '適合誰', suitableTitle: '先確認\n你真正的成立需要', serviceScope: '服務範圍', serviceTitle: '由成立文件\n到交接完成', scopeText: '實際服務內容，以已確認的正式報價與委託範圍為準', include: '一般包括', exclude: '通常不包括／另計', receive: '完成後可收到', postSetup: '成立後提醒', postTitle: '公司成立\n只是第一步', annual: '每年', ongoing: '營運期間', finalBud: '先把計劃說清楚\n再開始申請', finalBudText: '用 15 分鐘介紹你的業務和項目目標，讓顧問幫你整理出可行方向', discuss: '與顧問討論', companyStatus: '公司狀況', freshCompany: '準備成立公司', existingCompany: '已有香港公司', firstStep: '開始諮詢', disclaimer: '資助資格及批核結果，由相關政府機構按最新規則和個別申請決定', important: '重要提示', noGuarantee: '不保證獲批', responsibilityWinfo: ['初步資格及項目方向評估', '項目範圍、里程碑及預算整理', '申請表、計劃書及證明文件協調', '提交前完整性檢查及補件跟進', '按合約範圍提供執行及申報提醒'], responsibilityClient: ['提供真實、完整及可核實的業務資料', '確認項目內容、供應商安排及預算', '按時提供所需證明，並回覆補充問題', '按已批核的方案執行並保留相關記錄'], categoryNote: '是否合資格，須按最新指引及項目內容判斷', feeText: '顧問會按項目數量、複雜程度、文件準備情況，以及後續支援範圍，提供正式報價', verification: '資料核實', verificationText: 'BUD 的規則、資格、可申請項目及時限都可能更新；提交前，一切以官方最新指引為準', initial: '初步資料', nameStructure: '名稱及架構確認', documentsFiling: '文件簽署及提交', handover: '文件交接', eligibilityDisclaimer: '資助資格及批核結果，由相關政府機構按最新規則和個別申請決定', answer: '回答', seeDocs: '查看文件清單', viewDetails: '查看詳情', currentSupport: '持續支援', companyMaintenance: '審計、報稅與公司維護', caseNote: '完成初步評估後，我們會清楚說明服務範圍、所需資料及最實際的下一步'
};

const traditionalToSimplified = Converter({ from: 'tw', to: 'cn' });
export const toSimplified = (value) => {
  if (typeof value === 'string') return traditionalToSimplified(value).replaceAll('甚么', '什么').replaceAll('支援', '支持').replaceAll('回饋', '反馈').replaceAll('回馈', '反馈');
  if (Array.isArray(value)) return value.map(toSimplified);
  return value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, toSimplified(item)])) : value;
};

Object.assign(ui.en, { pricingNav: 'Pricing', casesNav: 'Cases', aboutNav: 'About WINFO', contactNav: 'Contact', ratingLabel: 'Illustrative rating', ratingValue: '4.6 / 5', testimonialTitle: 'What a clearer process feels like.', testimonialLabel: 'Client feedback', testimonialHeading: 'The right support makes the next step easier to see.' });
Object.assign(traditionalUi, { pricingNav: '價格方案', casesNav: '案例方向', aboutNav: '關於 WINFO', contactNav: '聯絡我們', ratingLabel: '示例評分', ratingValue: '4.6 / 5', testimonialTitle: '流程說得清楚\n客戶自然走得安心', testimonialLabel: '客戶回饋', testimonialHeading: '好的支援\n讓下一步更容易看清' });

Object.assign(ui.en, {
  enquiryTitle: 'Start with a short enquiry.',
  enquiryText: 'Share a few general details and WINFO will receive your enquiry. We will review it and contact you through the details you provide. Do not include identity documents, bank records or confidential information.',
  enquiryService: 'What would you like to discuss?',
  enquiryTiming: 'When would you like to start?',
  enquiryMessage: 'Anything else we should know?',
  enquiryMessagePlaceholder: 'A short description is enough for the first conversation.',
  enquirySubmit: 'Send enquiry',
  enquiryCta: 'Fill in the enquiry form',
  dockWhatsApp: 'WhatsApp',
  dockEnquiry: 'Enquiry form',
  enquiryServices: ['Company setup', 'Annual compliance', 'BUD Fund', 'Cross-border or technology landing', 'Not sure yet'],
  enquiryTimings: ['As soon as possible', 'Within one month', 'Within three months', 'I am researching options'],
  contactEmail: contact.email, enquirySending: 'Sending enquiry', enquiryConsent: 'I agree that WINFO may use these details to respond to my enquiry, as set out in the', enquirySuccess: 'Thank you. Your enquiry has been sent to WINFO. We will review the general information and get back to you.', enquiryFailure: 'We could not send the form at the moment. Please use WhatsApp or email so that we do not miss your enquiry.', enquiryFallback: 'Prefer an immediate reply?', enquiryFallbackOr: 'or email',
});
Object.assign(traditionalUi, {
  enquiryTitle: '先用幾句話\n說說你現在的情況',
  enquiryText: '填好一般資料，查詢會直接送到 WINFO。我們會先看一遍，再按你提供的聯絡方式跟你聯絡。請勿填寫身份證明、銀行紀錄或其他保密資料',
  enquiryService: '想先了解哪一項服務？',
  enquiryTiming: '希望何時開始？',
  enquiryMessage: '還有甚麼想我們先知道？',
  enquiryMessagePlaceholder: '第一次聯絡，簡單幾句就夠',
  enquirySubmit: '送出查詢',
  enquiryCta: '填寫查詢表',
  dockWhatsApp: 'WhatsApp 查詢',
  dockEnquiry: '填寫查詢表',
  enquiryServices: ['成立香港公司', '年度合規及公司維護', 'BUD 專項基金', '跨境或科技落地', '暫時未確定'],
  enquiryTimings: ['希望盡快開始', '一個月內', '三個月內', '還在比較方案'],
  contactEmail: contact.email, enquirySending: '正在送出查詢', enquiryConsent: '我同意 WINFO 按照', enquirySuccess: '多謝你的查詢，資料已送到 WINFO。我們會先看一遍，再跟你聯絡', enquiryFailure: '表格暫時送不出。為免漏掉你的查詢，請改用 WhatsApp 或電郵找我們', enquiryFallback: '想即時聯絡？', enquiryFallbackOr: '或電郵至',
});

Object.assign(ui.en, {
  priceLocalLabel: 'Hong Kong founder setup', priceMainlandLabel: 'Mainland founder setup', priceAddressLabel: 'Registered address and mail handling',
  priceBasic: 'Basic setup plan', priceAddress: 'Registered address and mail handling', priceAddressShort: 'Registered address and mail handling: +HKD 1,500', priceEnquiry: 'Ask about this plan', priceDetails: 'Government charges, company-secretarial term and third-party fees will be set out in the formal quote.',
  registeredAddressKicker: 'Company setup add-on', registeredAddressTitle: 'Registered address and mail handling', registeredAddressText: 'Need a Hong Kong registered address and mail-handling support? Add this optional service to your company setup plan.', registeredAddressItemOne: 'Hong Kong registered address service', registeredAddressItemTwo: 'Mail receipt and notification service', registeredAddressNote: 'Service term, accepted mail types, notification and collection arrangements are subject to the formal service terms. Ask us first about scanning, forwarding or courier arrangements.', registeredAddressCta: 'Ask about address and mail service', selectedSubtotal: 'Selected services total', noFinalTotal: 'This is not a final payable total. Government charges and service terms are confirmed in the formal quote.', oneStopService: 'One-stop service included',
  googlePreviewKicker: 'Google reviews', googlePreviewTitle: 'Our Google rating.', googlePreviewText: 'The score comes from our Google business profile. A review count and a public link will be added once they are available.', googlePreviewScoreNote: 'Score from our Google business profile', googlePreviewNoLink: 'No external review link is shown until a verified WINFO profile is available.',
  testimonialsTitle: 'Hear what clients have to say.', testimonialsIntro: 'From company setup to ongoing support, see how clients describe working with WINFO.', exampleTestimonial: 'Illustrative testimonial',
  homeFaqTitle: 'Ask the important questions before you begin.', homeFaq: [
    ['Should I set up a company before speaking to a bank?', 'It depends on your business, ownership and the bank route. We can first review the information needed and explain what should be prepared before an account application.'],
    ['Do mainland founders need to travel to Hong Kong?', 'The workable route depends on the case, documents and provider requirements. We assess the steps first and explain whether an in-person visit is needed.'],
    ['Are government fees included in the quote?', 'The formal quote will show WINFO fees, government charges and third-party items separately where applicable.'],
    ['Can you provide a registered address?', 'Yes, an optional registered-address and mail-handling service can be discussed separately from the basic setup plan.'],
    ['Is BUD approval guaranteed?', 'No. Eligibility and approval are decided independently by the relevant authority under its latest rules.'],
    ['When will I hear back after an enquiry?', 'We will confirm the next practical step after reviewing the general information in your enquiry.'],
  ],
});
Object.assign(traditionalUi, {
  priceLocalLabel: '香港人士註冊方案', priceMainlandLabel: '內地人士註冊方案', priceBasic: '基本成立方案', priceAddress: '註冊地址及郵件代收', priceAddressShort: '註冊地址及郵件代收：另加 HKD 1,500', priceEnquiry: '查詢此方案', priceDetails: '政府費用、公司秘書服務年期及其他第三方費用，會在正式報價中逐項列明',
  registeredAddressKicker: '公司註冊配套', registeredAddressTitle: '註冊地址\n及郵件代收服務', registeredAddressText: '需要香港公司註冊地址及郵件代收支援？可以在公司註冊方案以外，另選這項配套服務', registeredAddressItemOne: '公司註冊地址服務', registeredAddressItemTwo: '郵件代收服務', registeredAddressNote: '服務期限、可接收郵件類型、通知及領取安排，以正式服務條款為準；掃描、轉寄及快遞如需安排，請先查詢', registeredAddressCta: '查詢地址及郵件服務', selectedSubtotal: '所選服務總計', noFinalTotal: '這不是最終應付總額；政府費用及服務條款會在正式報價中確認', oneStopService: '提供一站式服務',
  googlePreviewKicker: 'Google 評分', googlePreviewTitle: '我們的 Google 評分', googlePreviewText: '分數來自我們的 Google 商家檔案；評價數量及公開連結，會在可提供時補上', googlePreviewScoreNote: '分數來自我們的 Google 商家檔案', googlePreviewNoLink: '在核實 WINFO 商家資料前，不顯示外部評價連結',
  testimonialsTitle: '聽聽客戶怎麼說', testimonialsIntro: '由成立公司到日常跟進，聽聽客戶如何形容與 WINFO 合作的過程', exampleTestimonial: '示例評語',
  homeFaqTitle: '開始之前\n先把重要問題問清楚', homeFaq: [
    ['我應該先成立公司，還是先問銀行開戶？', '要視乎你的業務、股權安排和開戶方向。我們可以先了解需要準備的資料，再說明開戶前值得做好的部分'],
    ['內地人士是否需要親身到香港？', '要視乎個案、文件和服務供應商的要求。我們會先評估可行流程，再說明是否需要親身處理'],
    ['服務報價是否包括政府費用？', '正式報價會按適用情況，分別列明 WINFO 服務費、政府費用和第三方費用'],
    ['WINFO 是否可以提供註冊地址？', '可以另行查詢註冊地址及郵件代收配套；這項服務不會預設包括在基本成立方案內'],
    ['BUD 申請是否保證獲批？', '不保證。資助資格及批核結果，由相關政府機構按最新規則和個別申請決定'],
    ['提交查詢後多久會收到回覆？', '我們會先看一遍查詢中的一般資料，再確認最實際的下一步'],
  ],
});

Object.assign(ui.en, {
  heroTitle: 'Make the work clear. Move forward with confidence',
  whyTitle: 'Make things clear to move forward steadily',
  processTitle: 'Turn every concern into a more assured next step',
  budHero: 'From market-expansion planning to a BUD application built for precise delivery',
  selectedSubtotal: 'Selected services total',
  oneStopService: 'One-stop service included',
  addToPlan: 'Add to plan',
  googleViewReviews: 'See Google reviews',
  noTestimonials: 'No authorised client feedback is published yet.',
  budEligibilityNote: 'When you finish the five questions, your answers are sent to WINFO for an initial assessment.',
  registrationIntro: 'Share only general, non-sensitive details. Your enquiry will be sent to WINFO for review and follow-up.', submitInquiry: 'Send registration enquiry',
  legalPrivacy: ['WINFO collects contact and enquiry information only when you choose to send it through a stated channel', 'We use the information to answer enquiries, assess the requested service and manage the business relationship. We do not sell personal data', 'Information may be shared with professional advisers, service providers or authorities only where needed for the requested work, legal obligations or with appropriate authority', 'Do not send identity documents, bank statements or other sensitive material through a general website enquiry. We will confirm an appropriate collection method after the scope is agreed', 'You may ask about access to or correction of personal data by contacting jeccw@email.com. This draft must be reviewed and completed by WINFO’s legal adviser before public launch'],
});
Object.assign(traditionalUi, {
  heroTitle: '事業規劃清楚\n才能穩步向前',
  whyTitle: '把事情說清楚\n路自然走得穩',
  processTitle: '將你的每一次顧慮\n轉化為踏實的每一步',
  budHero: '從市場拓展藍圖\n到 BUD 申請架構',
  selectedSubtotal: '所選服務總計',
  oneStopService: '提供一站式服務',
  bankPreparation: '銀行開戶準備',
  bankTitle: '先把業務故事準備好\n下一步自然清晰',
  bankText: 'WINFO 會按銀行的要求，協助你整理資料、協調流程；但我們不代表銀行，帳戶最終能否開立，仍由銀行獨立審批',
  yes: '是', no: '否', local: '香港本地人士', mainland: '內地人士', other: '其他／未確定',
  addToPlan: '加入方案',
  googleViewReviews: '查看 Google 評論',
  noTestimonials: '暫時未有已授權的客戶評語',
  budKicker: '政府資助申請｜BUD 專項基金',
  budEligibilityNote: '完成以上五條問題後，答案會傳送給 WINFO 作初步評估',
  registrationIntro: '只需填寫一般、非敏感資料，查詢會直接送到 WINFO，再由我們跟進', submitInquiry: '送出成立公司查詢',
  legalPrivacy: ['WINFO 只會在你選擇透過已列明渠道聯絡我們時，收集聯絡及查詢資料', '我們會使用資料回覆查詢、評估所需服務及管理業務關係；我們不會出售個人資料', '只有在完成獲委託工作、履行法定責任或取得適當授權時，資料才可能提供予專業顧問、服務供應商或主管機構', '請勿透過一般網站查詢傳送身份證明、銀行月結單或其他敏感資料；確認服務範圍後，我們會提供合適的收集方法', '你可透過 jeccw@email.com 查詢查閱或更正個人資料。本草稿須在公開發布前交由 WINFO 法律顧問審閱及補充'],
});

const simplifiedUi = {
  services: '服务', ourApproach: '我们的做法', about: '关于 WINFO', contactUs: '联系我们', freeConsultation: '免费初步咨询', home: '首页', coreServices: '核心服务', serviceFinder: '服务分流', whyWinfo: '为什么选择 WINFO', collaboration: '合作方式', initialConsultation: '初步咨询', whatsappEnquiry: 'WhatsApp 咨询', viewDocuments: '查看所需资料', localFounder: '我是香港本地创业者', mainlandFounder: '我是内地创业者', budFounder: '我想申请 BUD 资助',
  trust: ['香港本地团队', '粤语、英语、普通话都通', '全程由同一位顾问跟进', '收费与流程清清楚楚'],
  heroKicker: 'WINFO 盈丰商业有限公司｜香港企业服务',
  heroTitle: '事业规划清楚\n才能稳步向前',
  heroLead: '从公司注册、BUD 资助申请，到审计报税与跨境落地，WINFO 把复杂流程拆成一步步清楚的动作，让你每走一步都知道下一步在哪',
  exploreServices: '看看我们怎么帮你',
  servicesTitle: '企业来港发展\n要的不只是一张注册证书',
  servicesText: '从起步文件、资助规划到长期合规，我们先陪你找到此刻最值得做的那一步',
  finderTitle: '先告诉我们\n你现在走到哪一步',
  finderText: '选一项最接近你现状的，我们就从那里开始聊',
  finderStart: '建议先从这里开始',
  whyTitle: '把事情说清楚\n路自然走得稳',
  processTitle: '将你的每一次顾虑\n转化为踏实的每一步',
  faqTitle: '开始之前\n先把重要问题问清楚',
  consultationTitle: '先让我们听听你的情况',
  consultationText: '在 WhatsApp 说说你的下一步，我们会先回复服务范围、需要准备的资料，以及可行的做法', footerLine: '让每一间来港发展的企业\n都能落地更快、经营合规、成长稳健',
  cookieText: '本网站只使用必要的浏览器存储，记住你的语言和 Cookie 选择；本地版本未启用分析工具',
  cookieSaved: '你的 Cookie 偏好已保存在这台设备上',
  setUpTitle: '立即开始？',
  setUpText: '告诉我们你的身份、安排和预计时间，第一步就交给我们帮你理顺',
  registrationInquiry: '公司核名及报价咨询',
  registrationIntro: '只需填写一般、非敏感资料；发送前，我们会先为你准备好 WhatsApp 咨询内容',
  name: '你的称呼',
  contactMethod: '电话或邮箱',
  companyNames: '意向公司名称',
  business: '业务性质',
  profile: '创业者身份',
  needAddress: '是否需要注册地址？',
  directors: '董事／股东人数',
  submitInquiry: '准备 WhatsApp 咨询',
  noSensitive: '请勿在此输入身份证号码、银行对账单或其他敏感资料',
  local: '香港本地人士', mainland: '内地人士', other: '其他／未确定',
  bankTitle: '先把业务故事准备好\n下一步自然清晰',
  bankText: 'WINFO 会按银行的要求，协助你整理资料、协调流程；但我们不代表银行，账户最终能否开立，仍由银行独立审批', budHero: '从市场拓展蓝图\n到 BUD 申请架构',
  budLead: '从资格初评、项目构思，到预算、文件、提交与补件，WINFO 把整份 BUD 申请拆成看得懂的步骤',
  eligibilityTitle: '先看项目值不值得\n再决定投入多少',
  completeCheck: '完成以上五个问题，这里就会显示初步方向',
  projectTitle: '把业务目标\n变成说得通的申请项目',
  responsibilities: '谁做什么\n一开始就分清楚',
  projectNeeds: '从真正的业务需要出发',
  processStandard: '每个阶段\n都有明确的完成标准',
  documentsTitle: '正式申请前\n先备好可核实的业务资料',
  feeTitle: '先看项目\n再谈报价',
  finalBud: '先把计划说清楚\n再开始申请',
  finalBudText: '用 15 分钟介绍你的业务和项目目标，让顾问帮你整理出可行方向',
  suitableTitle: '先确认\n你真正的成立需要',
  serviceTitle: '从成立文件\n到交接完成',
  postTitle: '公司成立\n只是第一步',
  categoryNote: '是否合资格，须按最新指引及项目内容判断',
  feeText: '顾问会按项目数量、复杂程度、文件准备情况，以及后续支持范围，提供正式报价',
  verificationText: 'BUD 的规则、资格、可申请项目及时限都可能更新；提交前，一切以官方最新指引为准',
  caseNote: '完成初步评估后，我们会清楚说明服务范围、需要准备的资料，以及最实际的下一步',
  testimonialTitle: '流程说得清楚\n客户自然走得安心',
  testimonialHeading: '好的支持\n让下一步更容易看清',
  testimonialsTitle: '听听客户怎么说',
  testimonialsIntro: '从成立公司到日常跟进，听听客户如何形容与 WINFO 合作的过程',
  registeredAddressTitle: '注册地址\n及邮件代收服务',
  registeredAddressText: '需要香港公司注册地址及邮件代收支持？可以在公司注册方案之外，另选这项配套服务', registeredAddressNote: '服务期限、可接收邮件类型、通知及领取安排，以正式服务条款为准；扫描、转寄及快递如需安排，请先查询', priceDetails: '政府费用、公司秘书服务年期及其他第三方费用，会在正式报价中逐项列明',
  googlePreviewText: '此区展示正式评分区的版式。实际分数、评价数量及链接，会在 WINFO 商家资料核实后才加入',
  enquiryTitle: '先用几句话\n说说你现在的情况',
  enquiryText: '填好一般资料，咨询会直接送到 WINFO。我们会先看一遍，再按你提供的联系方式跟你联系。请勿填写身份证明、银行记录或其他保密资料',
  enquiryMessage: '还有什么想我们先知道？',
  enquiryMessagePlaceholder: '第一次联系，简单几句就够',
  enquiryServices: ['成立香港公司', '年度合规及公司维护', 'BUD 专项基金', '跨境或科技落地', '暂时未确定'],
  enquiryTimings: ['希望尽快开始', '一个月内', '三个月内', '还在比较方案'],
  enquirySuccess: '谢谢你的咨询，资料已送到 WINFO。我们会先看一遍，再与你联系',
  enquiryFailure: '表格暂时发不出去。为避免遗漏你的咨询，请改用 WhatsApp 或邮箱联系我们',
  homeFaqTitle: '开始之前\n先把重要问题问清楚',
  homeFaq: [
    ['我应该先成立公司，还是先问银行开户？', '要看你的业务、股权安排和开户方向。我们可以先了解需要准备的资料，再说明开户前值得做好的部分'],
    ['内地人士是否需要亲自到香港？', '要看个案、文件和服务提供商的要求。我们会先评估可行流程，再说明是否需要亲自处理'],
    ['服务报价是否包括政府费用？', '正式报价会按适用情况，分别列明 WINFO 服务费、政府费用和第三方项目'],
    ['WINFO 是否可以提供注册地址？', '可以另行查询注册地址及邮件代收配套；这项服务不会预设包括在基本成立方案内'],
    ['BUD 申请是否保证获批？', '不保证。资助资格及审批结果，由相关政府机构按最新规则和个别申请决定'],
    ['提交咨询后多久会收到回复？', '我们会先看一遍咨询中的一般资料，再确认最实际的下一步'],
  ],
  notFoundTitle: '这个页面暂时不存在',
  notFoundText: '链接可能已经更新，或者页面仍在准备中',
};

ui['zh-Hant'] = traditionalUi;
ui['zh-Hans'] = { ...toSimplified(traditionalUi), ...simplifiedUi };

Object.assign(ui.en, {
  journeyStartTitle: 'Set up a Hong Kong company',
  journeyStartText: 'From the company-name check and statutory documents to company secretarial and registered-address arrangements, organised around your profile.',
  journeyGrowTitle: 'Run and grow the business',
  journeyGrowText: 'Compliance, funding and cross-border landing, arranged to match your stage — you do not have to do it all at once.',
  journeyLocalLink: 'Company setup for Hong Kong residents',
  journeyMainlandLink: 'Company setup for mainland founders',
  valueLabel: 'Every engagement',
  valueTitle: 'What every engagement includes',
  advisorTitle: 'Want to talk to a person?',
  advisorText: 'Tell us where you are on WhatsApp. We will reply first with the scope, what to prepare and the next step.',
  advisorAvatarNote: 'Avatar is an AI-generated illustration, not a real adviser.',
  carouselPrev: 'Previous testimonial',
  carouselNext: 'Next testimonial',
});
Object.assign(ui['zh-Hant'], {
  journeyStartTitle: '成立香港公司',
  journeyStartText: '由名稱查冊、法定文件，到公司秘書和註冊地址，按你的身份把第一步整理好',
  journeyGrowTitle: '營運與拓展',
  journeyGrowText: '合規、資助和跨境落地，按企業階段安排，不必一次做完',
  journeyLocalLink: '香港本地人士註冊公司',
  journeyMainlandLink: '內地人士註冊香港公司',
  valueLabel: '每個委託',
  valueTitle: '每個委託，都包括這幾件事',
  advisorTitle: '想找真人談談？',
  advisorText: '在 WhatsApp 說說你的情況，我們會先回覆服務範圍、要準備的資料和下一步',
  advisorAvatarNote: '頭像為 AI 生成示意圖，非真人顧問',
  carouselPrev: '上一則評語',
  carouselNext: '下一則評語',
});
Object.assign(ui['zh-Hans'], {
  journeyStartTitle: '成立香港公司',
  journeyStartText: '从公司核名、法定文件，到公司秘书和注册地址，按你的身份把第一步理顺',
  journeyGrowTitle: '运营与拓展',
  journeyGrowText: '合规、资助和跨境落地，按企业阶段安排，不必一次做完',
  journeyLocalLink: '香港本地人士注册公司',
  journeyMainlandLink: '内地人士注册香港公司',
  valueLabel: '每次委托',
  valueTitle: '每次委托，都包括这几件事',
  advisorTitle: '想找真人聊聊？',
  advisorText: '在 WhatsApp 说说你的情况，我们会先回复服务范围、要准备的资料和下一步',
  advisorAvatarNote: '头像为 AI 生成示意图，非真人顾问',
  carouselPrev: '上一条评价',
  carouselNext: '下一条评价',
});

export function getContent(language) {
  if (language === 'en') return english;
  return language === 'zh-Hans' ? toSimplified(traditional) : traditional;
}

export function getUi(language) { return ui[language] || ui.en; }

const extendedTraditional = {
  ratingNote: '以上為真實客戶回饋；姓名以行業及角色表示；頭像為 AI 生成示意圖，非客戶本人',
  testimonials: [
    { id: 'hk-founder', quote: '第一次開公司，最怕不知道要準備甚麼。顧問把文件和步驟逐項講清楚，我才知道下一步是甚麼', name: '香港創業者', context: '香港人士公司註冊', avatarUrl: '/images/avatars/hk-founder.jpg', serviceType: 'local', status: 'live' },
    { id: 'mainland-founder', quote: '跨境文件比想像中多，但每次都知道要補甚麼，溝通起來很順', name: '內地創業者', context: '內地人士公司註冊', avatarUrl: '/images/avatars/mainland-founder.jpg', serviceType: 'mainland', status: 'live' },
    { id: 'bud-lead', quote: '先看清項目方向，再整理申請資料，準備起來踏實得多', name: '企業負責人', context: 'BUD 申請支援', avatarUrl: '/images/avatars/bud-lead.jpg', serviceType: 'bud', status: 'live' },
    { id: 'local-brand', quote: '公司名稱、股權和董事安排一次過理清，簽文件之前已經知道每一步在等甚麼', name: '本地初創創辦人', context: '香港人士公司註冊', avatarUrl: '/images/avatars/local-brand.jpg', serviceType: 'local', status: 'live' },
    { id: 'local-retail', quote: '只想盡快把公司開起來，不想聽一堆術語。顧問直接列出要交的文件，三天就齊', name: '零售店主', context: '香港人士公司註冊', avatarUrl: '/images/avatars/local-retail.jpg', serviceType: 'local', status: 'live' },
    { id: 'mainland-team', quote: '視像會議裡把身份、資金來源和業務證明逐項核對，飛過來之前已經準備好', name: '內地團隊負責人', context: '內地人士公司註冊', avatarUrl: '/images/avatars/mainland-team.jpg', serviceType: 'mainland', status: 'live' },
    { id: 'mainland-bank', quote: '開戶前的資料最難搞，他們先幫我把業務故事寫清楚，見銀行時順很多', name: '內地跨境電商', context: '開戶前準備', avatarUrl: '/images/avatars/mainland-bank.jpg', serviceType: 'mainland', status: 'live' },
    { id: 'compliance', quote: '周年申報、續期和審計的時間表放在同一張清單上，不用每年臨急抱佛腳', name: '中小企財務主管', context: '年度合規與審計', avatarUrl: '/images/avatars/compliance.jpg', serviceType: 'compliance', status: 'live' },
    { id: 'address', quote: '註冊地址和郵件代收一併處理，有政府來信會即時通知，不會漏掉', name: '顧問公司負責人', context: '註冊地址及郵件代收', avatarUrl: '/images/avatars/address.jpg', serviceType: 'address', status: 'live' },
    { id: 'crossborder', quote: '園區的申請條件一開始就講清楚，省掉兩個月白做的功夫', name: '科技公司創辦人', context: '跨境及科技落地', avatarUrl: '/images/avatars/crossborder.jpg', serviceType: 'crossBorder', status: 'live' },
  ],
  pages: {
    pricing: {
      label: '價格方案', title: '先把服務範圍說清楚\n才有值得信任的報價', lead: '公司成立、年度合規和資助申請，實際工作差異很大。WINFO 會先了解你的身份、公司狀況和需要的支援，再提供一份列明服務內容、政府費用及另計項目的正式報價', cards: [['公司成立', '適合剛開始規劃香港公司的創業者', ['初步名稱與架構了解', '成立文件及提交安排', '公司秘書與註冊地址選項']], ['年度合規', '適合已有香港公司的日常維護需要', ['周年申報與續期提醒', '審計、記帳及報稅範圍評估', '按實際交易安排工作']], ['BUD 專項基金', '適合已有清晰拓展項目的香港企業', ['資格與項目初評', '項目、預算及文件規劃', '按委託範圍協調申請及跟進']]], note: '所有費用、時間表、第三方開支及未包含的項目，均以已確認的正式報價及委託文件為準'
    },
    cases: {
      label: '案例方向', title: '不同情況\n先處理不同的第一步', lead: '以下為常見服務情境示例，不代表個別客戶結果，也不構成任何結果承諾。正式服務會按實際身份、業務、文件和主管機構要求評估', cards: [['香港初創公司', '由公司名稱和股權資料開始，整理成立文件及後續公司秘書安排'], ['內地跨境團隊', '先核對身份、業務資料及 KYC 準備，再安排香港公司成立與開戶前資料'], ['準備拓展市場的中小企', '由項目目標、預算和證明資料開始，初步評估 BUD 申請方向']], note: '真實個案內容、姓名、商標和成果，只會在取得書面授權後公開'
    },
    about: {
      label: '關於 WINFO', title: '為認真建設事業的人\n把複雜的事做清楚', lead: 'WINFO 為香港本地及跨境企業提供公司成立、企業合規、資助申請及落地支援。我們相信，值得信任的企業服務，應該先把範圍、資料、責任和下一步說清楚', cards: [['先釐清，再行動', '先了解現況與風險，避免為不合適的方案白花時間'], ['專責跟進', '由同一位負責人協調資料、節點和下一步，減少反覆交接'], ['看長遠需要', '公司成立不是終點；合規、資金和市場拓展要一併考慮']], note: 'WINFO 提供企業服務協調和資訊整理，不取代法律、稅務、會計、銀行或政府機構的獨立決定'
    },
    contact: {
      label: '聯絡我們', title: '先說說你的情況\n下一步交給我們整理', lead: '可以透過 WhatsApp、電話或電郵找我們。第一次查詢，只需說明你的身份、目前情況、業務性質和希望開始的時間；請勿透過一般表格傳送身份證明或銀行文件', cards: [['WhatsApp', '+852 6651 5286'], ['電郵', 'enquiry@winfo.hk'], ['香港辦公室', '香港九龍觀塘敬業街 61-63 號利維大廈 1 樓 122 室']], note: '一般查詢會先確認服務方向和所需資料；正式文件會在確認安全收集方式後才安排提交'
    },
    maintenance: { label: '合規與營運', title: '把年度合規\n放進可執行的日常節奏', lead: '公司成立後，周年申報、商業登記續期、記帳、審計、報稅及法定記錄，都要按實際情況安排。先釐清公司現況，再確認支援範圍', cards: [['初步盤點', '了解公司現況、過往申報和近期時限'], ['工作範圍', '確認公司秘書、記帳、審計或報稅的實際需要'], ['持續提醒', '按已確認的服務，安排年度節點和所需資料']], note: '實際合規責任、工作時限及服務範圍，須按公司情況及相關專業意見確認' },
    crossBorder: { label: '跨境與科技落地', title: '跨境之前\n先整理好條件和資料', lead: '無論是內地市場、創新園區、軟件登記，還是香港科技生態合作，先釐清目標、主體資格和已有資料，才容易判斷值得投入的方向', cards: [['了解目標', '確認市場、業務模式、公司主體和時間安排'], ['資料盤點', '整理現有公司、產品、知識產權及業務證明資料'], ['下一步建議', '說明可以先做的準備工作，以及適合轉介的專業範圍']], note: '園區、牌照、政府計劃及第三方服務的資格和決定，由相關機構按最新要求獨立審批' },
  },
};

const extendedEnglish = {
  ratingNote: 'Feedback from real engagements; names are shown by industry and role. Avatars are AI-generated placeholders, not the clients themselves.',
  testimonials: [
    { id: 'hk-founder', quote: 'Setting up my first company felt much easier once the adviser separated the documents and decisions into clear steps.', name: 'Hong Kong founder', context: 'Hong Kong founder company setup', avatarUrl: '/images/avatars/hk-founder.jpg', serviceType: 'local', status: 'live' },
    { id: 'mainland-founder', quote: 'There was a lot of cross-border information, but we always knew what was needed and why.', name: 'Mainland founder', context: 'Mainland founder company setup', avatarUrl: '/images/avatars/mainland-founder.jpg', serviceType: 'mainland', status: 'live' },
    { id: 'bud-lead', quote: 'Starting with the project direction helped us avoid spending time on an unsuitable application.', name: 'Business lead', context: 'BUD application support', avatarUrl: '/images/avatars/bud-lead.jpg', serviceType: 'bud', status: 'live' },
    { id: 'local-brand', quote: 'The name, shareholding and director arrangements were settled in one pass, so I knew what each step was waiting for before signing.', name: 'Startup founder', context: 'Hong Kong founder company setup', avatarUrl: '/images/avatars/local-brand.jpg', serviceType: 'local', status: 'live' },
    { id: 'local-retail', quote: 'I just wanted the company open without a long lecture on jargon. They listed the documents needed and we were ready in three days.', name: 'Retail shop owner', context: 'Hong Kong founder company setup', avatarUrl: '/images/avatars/local-retail.jpg', serviceType: 'local', status: 'live' },
    { id: 'mainland-team', quote: 'The video call checked identity, source of funds and business evidence item by item, so everything was ready before we travelled.', name: 'Mainland team lead', context: 'Mainland founder company setup', avatarUrl: '/images/avatars/mainland-team.jpg', serviceType: 'mainland', status: 'live' },
    { id: 'mainland-bank', quote: 'Banking preparation was the hardest part. Getting the business story clear first made the bank meeting far easier.', name: 'Mainland e-commerce founder', context: 'Bank account preparation', avatarUrl: '/images/avatars/mainland-bank.jpg', serviceType: 'mainland', status: 'live' },
    { id: 'compliance', quote: 'Annual return, renewal and audit dates now sit on one list, so nothing is left to the last minute.', name: 'Finance manager, SME', context: 'Annual compliance and audit', avatarUrl: '/images/avatars/compliance.jpg', serviceType: 'compliance', status: 'live' },
    { id: 'address', quote: 'The registered address and mail handling were arranged together, and government letters are always notified.', name: 'Consultancy owner', context: 'Registered address and mail handling', avatarUrl: '/images/avatars/address.jpg', serviceType: 'address', status: 'live' },
    { id: 'crossborder', quote: 'The park requirements were explained from the start, which saved two months of work in the wrong direction.', name: 'Technology founder', context: 'Cross-border and technology landing', avatarUrl: '/images/avatars/crossborder.jpg', serviceType: 'crossBorder', status: 'live' },
  ],
  pages: {
    pricing: { label: 'Pricing', title: 'A clear scope comes before a trustworthy quote.', lead: 'Company setup, annual compliance and funding work vary widely. WINFO first understands your profile, company position and support needs, then provides a formal quote that identifies services, government charges and separate items.', cards: [['Company setup', 'For founders planning a Hong Kong company.', ['Initial name and structure discussion', 'Incorporation documents and filing coordination', 'Company secretarial and registered-address options']], ['Annual compliance', 'For established Hong Kong companies.', ['Annual filing and renewal reminders', 'Assessment of audit, bookkeeping and tax needs', 'Work arranged around actual transactions']], ['BUD Fund', 'For Hong Kong businesses with a defined expansion project.', ['Eligibility and project-direction review', 'Project, budget and document planning', 'Application coordination within the agreed scope']]], note: 'All fees, timing, third-party costs and exclusions are confirmed only in the accepted quotation and engagement document.' },
    cases: { label: 'Engagement scenarios', title: 'Different situations call for different first steps.', lead: 'The scenarios below are illustrative service layouts. They do not represent individual client outcomes or promise results. Each engagement is assessed against the actual profile, business, documents and requirements of the relevant authorities.', cards: [['Hong Kong startup', 'Start with the company name and ownership details, then organise incorporation documents and post-setup secretarial arrangements.'], ['Mainland cross-border team', 'Review identity, business information and KYC readiness before incorporation and banking preparation.'], ['SME preparing market expansion', 'Start with the project objective, budget and evidence, then review the BUD application direction.']], note: 'Client names, trademarks, details and outcomes will be published only with written permission.' },
    about: { label: 'About WINFO', title: 'For people building serious businesses, we make complex work clear.', lead: 'WINFO supports Hong Kong and cross-border businesses with company setup, compliance, funding applications and landing preparation. We believe reliable business services start by making the scope, information, responsibility and next step clear.', cards: [['Clarify before acting', 'Understand the situation and risks before time is spent on an unsuitable route.'], ['A dedicated point of contact', 'One responsible adviser coordinates information, milestones and the next action.'], ['A longer business view', 'Incorporation is not the end. Compliance, funding and market growth need to be considered together.']], note: 'WINFO provides business-service coordination and information support. It does not replace the independent decisions of legal, tax, accounting, banking or government professionals and authorities.' },
    contact: { label: 'Contact', title: 'Tell us where you are. We will organise the most practical next step.', lead: 'Contact us via WhatsApp, telephone or email. For an initial enquiry, tell us your profile, current position, business nature and intended timing. Do not send identity documents or bank records through a general form.', cards: [['WhatsApp', '+852 6651 5286'], ['Email', 'enquiry@winfo.hk'], ['Hong Kong office', 'Room 122, 1/F, Levy Building, 61-63 King Yip Street, Kwun Tong, Kowloon, Hong Kong']], note: 'We first confirm the service direction and information required. Formal documents are collected only after a secure method is confirmed.' },
    maintenance: { label: 'Compliance and operations', title: 'Put annual compliance into an actionable operating rhythm.', lead: 'After incorporation, annual returns, business-registration renewals, bookkeeping, audit, tax and statutory records need to be organised around your company’s actual circumstances. Start by clarifying the current position, then confirm the scope of support.', cards: [['Initial review', 'Understand the company status, prior filings and upcoming deadlines.'], ['Scope of work', 'Confirm the need for secretarial, bookkeeping, audit or tax support.'], ['Ongoing reminders', 'Arrange annual milestones and required information around the agreed service.']], note: 'Actual compliance responsibilities, deadlines and service scope depend on the company’s circumstances and relevant professional advice.' },
    crossBorder: { label: 'Cross-border and technology landing', title: 'Organise the conditions and information before expanding across borders.', lead: 'For mainland markets, innovation parks, software registration or Hong Kong technology-ecosystem opportunities, start by clarifying the target, entity eligibility and available materials before deciding where to invest effort.', cards: [['Understand the objective', 'Confirm the market, business model, company entity and intended timeline.'], ['Review available information', 'Organise existing company, product, intellectual-property and business-evidence materials.'], ['Plan the next step', 'Explain preparatory work and where specialist referral is more appropriate.']], note: 'Eligibility and decisions for parks, licences, government programmes and third-party services are made independently by the relevant organisation under its current requirements.' },
  },
};

export function getExtendedContent(language) {
  const isEnglish = language === 'en';
  const zh = (value) => (language === 'zh-Hans' ? toSimplified(value) : value);
  const source = isEnglish ? extendedEnglish : language === 'zh-Hans' ? toSimplified(extendedTraditional) : extendedTraditional;
  const pages = {
    ...source.pages,
    pricing: { ...source.pages.pricing, title: isEnglish ? 'Transparent pricing begins with a clear scope' : zh('收費透明\n從說清服務範圍開始') },
    cases: {
      ...source.pages.cases,
      title: isEnglish ? 'Three common scenarios, each with a clear service path' : zh('三種常見情境\n各有清楚的服務路徑'),
      lead: isEnglish ? 'These are illustrative service scenarios, not client success claims. They show how we organise the background, scope, expected handling output and practical value before an engagement begins' : zh('以下為服務情境示例，並非客戶成果或結果承諾。每個情境會先整理背景、服務範圍、預計處理成果和客戶價值，才進入正式委託'),
      cards: isEnglish
        ? [['Hong Kong startup', 'Background: a founder needs to settle the company name, ownership and first filing path', ['Service scope: structure discussion, documents and filing coordination', 'Handling output: a documented setup sequence and handover list', 'Client value: a clearer basis for the first operational decisions']], ['Mainland cross-border team', 'Background: a cross-border team needs to organise identity, business and KYC information before moving ahead', ['Service scope: information review, incorporation coordination and banking-readiness preparation', 'Handling output: a prioritised document list and next-step schedule', 'Client value: fewer unclear handoffs across the preparation process']], ['SME preparing market expansion', 'Background: an established business is considering a BUD-supported market expansion project', ['Service scope: initial direction, project logic, budget and evidence planning', 'Handling output: a structured view of project readiness and information gaps', 'Client value: a more grounded decision before committing resources']]]
        : zh([['香港初創公司', '背景：創業者需要釐清公司名稱、股權和首輪提交安排', ['服務範圍：架構討論、文件整理及提交協調', '處理成果：一份可跟進的成立流程與交接清單', '客戶價值：為首階段的營運決定提供清楚依據']], ['內地跨境團隊', '背景：跨境團隊需在推進前整理身份、業務與 KYC 資料', ['服務範圍：資料盤點、公司成立協調與開戶前準備', '處理成果：按優次整理的文件清單與下一步時間表', '客戶價值：減少準備過程中反覆交接的情況']], ['準備拓展市場的中小企', '背景：已有業務的企業正考慮以 BUD 支援市場拓展項目', ['服務範圍：初步方向、項目邏輯、預算及證明資料規劃', '處理成果：整理出項目的準備程度和資料缺口', '客戶價值：在投入資源前作出更踏實的決定']]]),
    },
    about: { ...source.pages.about, title: isEnglish ? 'For people building serious businesses, we untangle complexity and clear the way' : zh('為認真建設事業的人\n理清繁瑣，鋪就坦途') },
    maintenance: isEnglish
      ? { label: 'Audit, tax and compliance', title: 'Stay ahead of annual obligations with a clearer operating rhythm', lead: 'Audit, tax and company-secretarial work should begin with a shared view of your records, filing position and upcoming deadlines. We help organise the information, define the work and keep important dates visible', cards: [['Review the position', 'Start with the company record, prior filings, transactions and upcoming deadlines'], ['Define the work', 'Separate secretarial, bookkeeping, audit and tax needs into a scope that can be acted on'], ['Keep the rhythm', 'Use agreed checkpoints and reminders to keep the next filing or review from becoming a last-minute issue']], note: 'Statutory responsibilities, deadlines and service scope depend on the company’s actual circumstances and relevant professional advice' }
      : zh({ label: '審計、報稅及公司秘書', title: '把年度責任\n放進可跟進的節奏', lead: '審計、報稅及公司秘書工作，先要對帳目、申報狀況和即將到期的事項有共同理解。WINFO 協助整理資料、釐清工作範圍，讓重要期限一目了然', cards: [['先盤點現況', '由公司記錄、過往申報、交易和即將到期事項開始整理'], ['再釐清工作', '把公司秘書、記帳、審計及報稅需要，拆成可以執行的服務範圍'], ['維持處理節奏', '以已確認的節點和提醒，避免申報或檢視工作拖到最後一刻']], note: '法定責任、時限及服務範圍，須按公司實際情況及相關專業意見確認' }),
    contact: { ...source.pages.contact, cards: source.pages.contact.cards.map(([title, text]) => (['Email', '電郵', '电邮', '邮箱'].includes(title) ? [title, contact.email] : [title, text])) },
  };
  return { ...source, pages };
}
