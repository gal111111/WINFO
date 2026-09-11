import { useState } from 'react';
import { getContent, getExtendedContent, getUi, toSimplified } from '../content/site';
import { Icon, LinkButton, consultationUrl } from '../components/SiteShell';
import { Checklist, ConsultationPanel, FinalCta, ProcessList, SectionHeading, TestimonialSection } from '../components/Sections';

export function HomePage({ navigate, language }) {
  const content = getContent(language);
  const extended = getExtendedContent(language);
  const copy = getUi(language);
  const localize = (value) => language === 'zh-Hans' ? toSimplified(value) : value;
  const [selected, setSelected] = useState(0);
  const finder = language === 'en'
    ? [
        { label: 'I am setting up a Hong Kong company', title: 'Start with company setup', text: 'Choose the route for a Hong Kong or mainland founder and clarify the required documents.', to: '/company-registration/hong-kong-resident' },
        { label: 'I need compliance or funding support', title: 'Put annual compliance in order', text: 'Review your current company status, BUD direction and the next information to prepare.', to: '/services/compliance' },
        { label: 'I am preparing to expand cross-border', title: 'Clarify your landing conditions', text: 'Discuss your market, business model and existing company before choosing the next move.', to: '/services/cross-border' },
      ]
    : [
        { label: copy.companyStatus, title: copy.freshCompany, text: copy.setUpText, to: '/company-registration/hong-kong-resident' },
        { label: copy.existingCompany, title: copy.currentSupport, text: copy.caseNote, to: '/services/compliance' },
        { label: copy.mainlandFounder, title: copy.mainland, text: copy.setUpText, to: '/services/cross-border' },
      ];
  const current = finder[selected];
  const principles = language === 'en'
    ? [['Clarify the scope first', 'Confirm scope, fees, timing and responsibilities before work begins.'], ['One person owns the next step', 'A dedicated adviser coordinates the moving parts and reduces unnecessary back-and-forth.'], ['Support beyond the filing', 'Keep incorporation, banking, finance and growth needs in view.']]
    : localize([['先把範圍說清楚', '開始前確認服務、費用、時程與各方責任，讓每個決定有依據。'], ['每一步都有負責人', '由專責顧問統一協調，減少跨境溝通與文件來回。'], ['不止完成申請', '同時考慮成立後的合規、銀行、財務與下一階段增長需要。']]);
  const process = language === 'en'
    ? [['01', 'Understand the situation', 'Clarify your background, current state, timing and the decision in front of you.'], ['02', 'Confirm the scope and quote', 'Set out services, documents, responsibilities and fees.'], ['03', 'Coordinate documents and filing', 'Work through information, signing, submission and important checkpoints.'], ['04', 'Handover and ongoing support', 'Finish the current task and organise the next compliance or growth step.']]
    : localize([['01', '初步了解', '釐清你的業務背景、現況、時程與真正要作的決定。'], ['02', '確認方案及報價', '把服務範圍、所需文件、各方責任及費用說明清楚。'], ['03', '文件與申請處理', '按已確認的步驟協調資料、簽署、提交及重要節點。'], ['04', '交付及持續支援', '完成目前工作後，整理後續合規或拓展的下一步。']]);
  const faq = language === 'en' ? ['Should I set up a company before speaking to a bank?', 'Do mainland founders need to travel to Hong Kong?', 'Are government fees included in the quote?', 'Can you provide a registered address?', 'Is BUD approval guaranteed?', 'When will I hear back after an enquiry?'] : localize(['我應該先成立公司，還是先諮詢銀行開戶？', '內地人士是否需要親身到香港？', '服務報價是否包括政府費用？', 'WINFO 是否可以提供註冊地址？', 'BUD 申請是否保證獲批？', '提交查詢後多久會收到回覆？']);

  return <>
    <section className="home-hero">
      <div className="hero-image" role="img" aria-label="Hong Kong business skyline" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-kicker">{copy.heroKicker}</p>
        <h1>{copy.heroTitle}</h1>
        <p className="hero-lead">{copy.heroLead}</p>
        <div className="hero-actions"><a className="button" href={consultationUrl(copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.freeConsultation} <Icon name="arrow" size={16} /></a><LinkButton to="#services" navigate={navigate} className="button-ghost">{copy.exploreServices}</LinkButton></div>
      </div>
      <div className="container hero-shortcuts"><button type="button" onClick={() => navigate('/company-registration/hong-kong-resident')}>{copy.localFounder} <Icon name="arrow" size={16} /></button><button type="button" onClick={() => navigate('/company-registration/mainland-resident')}>{copy.mainlandFounder} <Icon name="arrow" size={16} /></button><button type="button" onClick={() => navigate('/bud-fund')}>{copy.budFounder} <Icon name="arrow" size={16} /></button></div>
    </section>
    <section className="trust-strip"><div className="container">{copy.trust.map((item) => <span key={item}>{item}</span>)}</div></section>
    <section id="services" className="section"><div className="container"><SectionHeading label={copy.coreServices} title={copy.servicesTitle} text={copy.servicesText} /><div className="service-grid">{content.homeServices.map((service) => <article className="service-card" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><button type="button" onClick={() => navigate(service.to)}>{service.cta}<Icon name="arrow" size={16} /></button></article>)}</div></div></section>
    <section className="finder-section"><div className="container finder-layout"><SectionHeading label={copy.serviceFinder} title={copy.finderTitle} text={copy.finderText} /><div className="finder"><div className="finder-options">{finder.map((item, index) => <button type="button" onClick={() => setSelected(index)} className={selected === index ? 'active' : ''} key={item.label}><span>0{index + 1}</span>{item.label}<Icon name="arrow" size={16} /></button>)}</div><div className="finder-result"><span>{copy.finderStart}</span><h3>{current.title}</h3><p>{current.text}</p><LinkButton to={current.to} navigate={navigate}>{copy.firstStep}</LinkButton></div></div></div></section>
    <section id="why-winfo" className="section why-section"><div className="container"><SectionHeading label={copy.whyWinfo} title={copy.whyTitle} /><div className="principles">{principles.map(([title, text], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section id="process" className="section process-section"><div className="container process-layout"><SectionHeading label={copy.collaboration} title={copy.processTitle} /><ProcessList items={process} /></div></section>
    <section className="section home-faq"><div className="container faq-layout"><SectionHeading label={copy.faq} title={copy.faqTitle} /><Checklist dark items={faq} /></div></section>
    <TestimonialSection language={language} testimonials={extended.testimonials} />
    <ConsultationPanel navigate={navigate} language={language} documentsTarget="/company-registration/hong-kong-resident#documents" />
    <FinalCta language={language} />
  </>;
}
