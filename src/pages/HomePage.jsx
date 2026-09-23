import { useState } from 'react';
import { getContent, getExtendedContent, getUi, toSimplified } from '../content/site';
import { Icon, LinkButton, consultationUrl } from '../components/SiteShell';
import { ConsultationPanel, FAQ, GoogleRatingSection, FinalCta, Reveal, SectionHeading, TestimonialSection } from '../components/Sections';

const JOURNEY_IMAGES = { start: '/images/journey-start.jpg', grow: '/images/journey-grow.jpg' };

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
    ? [['Confirm the need', 'Start with the business goal, practical constraints and information needed for a sound decision'], ['A dedicated lead', 'One responsible adviser keeps the work, milestones and communication moving in the same direction'], ['Start with the application, plan for what follows', 'Keep compliance, operations and the next stage of growth in view from the start']]
    : localize([['確認需求', '先了解業務目標、實際限制與所需資料，再判斷最合適的安排'], ['專項負責人', '由專責顧問統一跟進工作、節點與溝通，讓每一步保持同一方向'], ['始於申請，著眼長遠', '由申請開始，同步整理合規、營運與下一階段拓展需要']]);
  const process = language === 'en'
    ? [['01', 'Needs diagnosis', 'Analyse the business background, current position, timing and the decision that needs to be made'], ['02', 'Fee clarity', 'Set out the service scope, required documents, responsibilities and fees before work begins'], ['03', 'Documents and application handling', 'Coordinate information, signing, submission and important checkpoints in the agreed sequence'], ['04', 'Handover and ongoing support', 'Close the current work and organise the next compliance or growth step']]
    : localize([['01', '需求診斷', '剖析業務背景、現況、時間表，以及真正需要作出的決定'], ['02', '費用釐清', '在開始前說清服務範圍、所需文件、各方責任和費用'], ['03', '文件與申請處理', '按已確認的步驟協調資料、簽署、提交及重要節點'], ['04', '交付及持續支援', '完成目前工作後，整理後續合規或拓展的下一步']]);
  const faq = copy.homeFaq;
  const growLinks = language === 'en'
    ? [['Apply for the BUD Fund', '/bud-fund'], ['Audit, tax and company upkeep', '/services/compliance'], ['Cross-border and technology landing', '/services/cross-border']]
    : [[content.homeServices[1].title, '/bud-fund'], [content.homeServices[2].title, '/services/compliance'], [content.homeServices[3].title, '/services/cross-border']];

  const TextLink = ({ to, children }) => <button type="button" className="journey-link" onClick={() => navigate(to)}>{children}<Icon name="arrow" size={15} /></button>;

  return <>
    <a className="skip-link" href="#main-content">{language === 'en' ? 'Skip to content' : localize('跳至主要內容')}</a>
    <section className="home-hero">
      <div className="hero-image" role="img" aria-label="Hong Kong business skyline" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-kicker">{copy.heroKicker}</p>
        <h1>{copy.heroTitle}</h1>
        <p className="hero-lead">{copy.heroLead}</p>
        <div className="hero-actions"><a className="button" href={consultationUrl(copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.freeConsultation} <Icon name="arrow" size={16} /></a><LinkButton to="#services" navigate={navigate} className="button-ghost">{copy.exploreServices}</LinkButton></div>
        <ul className="hero-proof">{copy.trust.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>

    <section id="services" className="section"><div className="container">
      <SectionHeading label={copy.coreServices} title={copy.servicesTitle} text={copy.servicesText} />
      <div className="journeys">
        <Reveal className="journey">
          <div className="journey-media"><img src={JOURNEY_IMAGES.start} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; }} /></div>
          <div className="journey-body">
            <span className="journey-index">01</span>
            <h3>{copy.journeyStartTitle}</h3>
            <p>{copy.journeyStartText}</p>
            <div className="journey-links"><TextLink to="/company-registration/hong-kong-resident">{copy.journeyLocalLink}</TextLink><TextLink to="/company-registration/mainland-resident">{copy.journeyMainlandLink}</TextLink></div>
          </div>
        </Reveal>
        <Reveal className="journey" delay={90}>
          <div className="journey-media"><img src={JOURNEY_IMAGES.grow} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; }} /></div>
          <div className="journey-body">
            <span className="journey-index">02</span>
            <h3>{copy.journeyGrowTitle}</h3>
            <p>{copy.journeyGrowText}</p>
            <div className="journey-links">{growLinks.map(([label, to]) => <TextLink key={to} to={to}>{label}</TextLink>)}</div>
          </div>
        </Reveal>
      </div>
    </div></section>

    <section className="finder-section"><div className="container finder-layout"><SectionHeading label={copy.serviceFinder} title={copy.finderTitle} text={copy.finderText} /><Reveal className="finder"><div className="finder-options">{finder.map((item, index) => <button type="button" onClick={() => setSelected(index)} className={selected === index ? 'active' : ''} key={item.label}><span>0{index + 1}</span>{item.label}<Icon name="arrow" size={16} /></button>)}</div><div className="finder-result"><span>{copy.finderStart}</span><h3>{current.title}</h3><p>{current.text}</p><LinkButton to={current.to} navigate={navigate}>{copy.firstStep}</LinkButton></div></Reveal></div></section>

    <section id="why-winfo" className="section why-section"><div className="container"><SectionHeading label={copy.valueLabel} title={copy.valueTitle} /><div className="value-list">{principles.map(([title, text], index) => <Reveal className="value-item" key={title} delay={index * 80}><b>0{index + 1}</b><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></section>

    <section id="process" className="section process-section"><div className="container"><SectionHeading label={copy.collaboration} title={copy.processTitle} /><ol className="steps">{process.map(([number, title, text], index) => <Reveal as="li" key={number} delay={index * 80}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</ol></div></section>

    <TestimonialSection language={language} testimonials={extended.testimonials} />
    <GoogleRatingSection language={language} />
    <section className="section inquiry-section"><div className="container inquiry-layout inquiry-single"><div><SectionHeading label={copy.initialConsultation} title={copy.enquiryTitle} text={copy.enquiryText} /><LinkButton to="/contact#contact-enquiry" navigate={navigate} className="inquiry-start">{copy.enquiryCta}</LinkButton></div></div></section>
    <FAQ items={faq} title={copy.homeFaqTitle} language={language} />
    <ConsultationPanel navigate={navigate} language={language} documentsTarget="/company-registration/hong-kong-resident#documents" />
    <FinalCta language={language} />
  </>;
}
