export const serviceFinderCopy = {
  en: {
    title: 'Find the right\nstarting point',
    text: 'Choose the support you need to see the relevant service and next step.',
    question: 'Which service do you need?',
    emptyTitle: 'What would you like to work on?',
    emptyText: 'Company setup, funding, annual compliance and cross-border expansion each have their own preparation route.',
    options: [
      { id: 'setup', label: 'Set up a Hong Kong company', title: 'Start with your founder profile', text: 'Explore the structure, documents and support relevant to your team.', links: [{ label: 'Hong Kong founders', to: '/company-registration/hong-kong-resident' }, { label: 'Mainland founders', to: '/company-registration/mainland-resident' }] },
      { id: 'bud', label: 'Explore BUD funding', title: 'Review the company and project fit', text: 'Check the initial requirements and information to prepare for a BUD discussion.', links: [{ label: 'Explore BUD support', to: '/bud-fund' }] },
      { id: 'compliance', label: 'Manage annual compliance', title: 'Organise company upkeep', text: 'Review company-secretarial, bookkeeping, audit and tax support around your current records and deadlines.', links: [{ label: 'Explore compliance support', to: '/services/compliance' }] },
      { id: 'cross-border', label: 'Expand across borders', title: 'Prepare your next market move', text: 'Clarify the market, business model and technology or landing arrangements before committing resources.', links: [{ label: 'Explore cross-border support', to: '/services/cross-border' }] },
    ],
  },
  'zh-Hant': {
    title: '找到適合你的\n服務起點',
    text: '選擇目前需要的支援，查看對應服務及下一步。',
    question: '你需要哪一項服務？',
    emptyTitle: '你想先處理甚麼？',
    emptyText: '開公司、資助、年度合規及跨境拓展，各有對應的準備路線。',
    options: [
      { id: 'setup', label: '成立香港公司', title: '先按創辦人身份了解', text: '查看適合團隊的公司架構、文件準備及成立支援。', links: [{ label: '香港創辦人', to: '/company-registration/hong-kong-resident' }, { label: '內地創辦人', to: '/company-registration/mainland-resident' }] },
      { id: 'bud', label: '了解 BUD 資助', title: '先看公司及項目是否適合', text: '了解初步要求，以及與顧問討論 BUD 前可準備的資料。', links: [{ label: '查看 BUD 支援', to: '/bud-fund' }] },
      { id: 'compliance', label: '處理年度合規', title: '為持續營運排好次序', text: '按現有紀錄及申報日期，了解公司秘書、記帳、審計及報稅支援。', links: [{ label: '查看合規支援', to: '/services/compliance' }] },
      { id: 'cross-border', label: '規劃跨境拓展', title: '整理下一個市場的落地條件', text: '先釐清市場、業務模式、科技及落地安排，再決定資源投放。', links: [{ label: '查看跨境支援', to: '/services/cross-border' }] },
    ],
  },
};
