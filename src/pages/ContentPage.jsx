import { formatPrice, getExtendedContent, getUi, pricingData } from '../content/site';
import { Icon, LinkButton, consultationUrl } from '../components/SiteShell';
import { Breadcrumb, Checklist, ConsultationPanel, ContactInquiry, FinalCta, SectionHeading, TestimonialSection } from '../components/Sections';

const crumbs = {
  pricing: { en: 'Pricing', zh: '價格方案' },
  cases: { en: 'Engagement scenarios', zh: '案例方向' },
  about: { en: 'About WINFO', zh: '認識 WINFO' },
  contact: { en: 'Contact', zh: '聯絡我們' },
  maintenance: { en: 'Compliance and operations', zh: '合規與營運' },
  crossBorder: { en: 'Cross-border and technology landing', zh: '跨境與科技落地' },
};

export function ContentPage({ kind, navigate, language }) {
  const copy = getUi(language);
  const extended = getExtendedContent(language);
  const page = extended.pages[kind];
  const isPricing = kind === 'pricing';
  const isContact = kind === 'contact';
  const crumb = language === 'en' ? crumbs[kind].en : crumbs[kind].zh;

  if (isPricing) return <PricingPage navigate={navigate} language={language} page={page} copy={copy} />;

  return <>
    <section className="detail-hero content-hero"><div className="container">
      <Breadcrumb current={crumb} navigate={navigate} language={language} />
      <div className="detail-hero-grid"><div><p className="hero-kicker">{page.label}</p><h1>{page.title}</h1><p>{page.lead}</p><div className="hero-actions"><a className="button" href={consultationUrl(page.label, language)} target="_blank" rel="noreferrer">{copy.freeConsultation} <Icon name="arrow" size={16} /></a></div></div>
      <aside><span>{isPricing ? copy.pricing : copy.initialConsultation}</span><strong>{isPricing ? (language === 'en' ? 'A quote built around the work actually needed' : '按實際需要，提供清晰正式報價') : (language === 'en' ? 'Start with the information that matters' : '先由真正重要的資料開始')}</strong><p>{isPricing ? page.note : copy.noSensitive}</p></aside></div>
    </div></section>
    <section className="section"><div className="container"><SectionHeading label={page.label} title={isPricing ? (language === 'en' ? 'Choose a conversation, not a generic package.' : '先選擇合適的對話方向，不用套用制式套餐。') : (language === 'en' ? 'A clear working framework.' : '清楚的服務框架。')} text={isPricing ? page.note : page.lead} />
      <div className={`content-card-grid ${isPricing ? 'pricing-grid' : ''}`}>{page.cards.map(([title, text, items]) => <article key={title}><span>{page.label}</span><h2>{title}</h2><p>{text}</p>{items && <Checklist dark items={items} />}{isContact && title === 'WhatsApp' && <a className="inline-link" href={consultationUrl(copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.whatsappEnquiry} <Icon name="arrow" size={15} /></a>}{isContact && (title === 'Email' || title === '電郵') && <a className="inline-link" href="mailto:enquiry@winfo.hk">enquiry@winfo.hk <Icon name="arrow" size={15} /></a>}{isContact && (title === 'Hong Kong office' || title === '香港辦公室') && <a className="inline-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer">{language === 'en' ? 'Open in Maps' : '在地圖中查看'} <Icon name="arrow" size={15} /></a>}</article>)}</div>
      <p className="page-note">{page.note}</p></div></section>
    <TestimonialSection language={language} testimonials={extended.testimonials} compact />
    {isContact ? <><ContactInquiry language={language} /><ContactActions language={language} /></> : <ConsultationPanel language={language} navigate={navigate} topic={page.label} documentsTarget="/contact#contact-enquiry" />}
    <FinalCta language={language} topic={page.label} />
  </>;
}

function PricingPage({ navigate, language, page, copy }) {
  const isEnglish = language === 'en';
  const plans = [
    {
      label: copy.priceLocalLabel,
      price: pricingData.local,
      description: isEnglish
        ? 'For founders who are ready to prepare a Hong Kong company setup.'
        : '為準備成立香港公司的香港人士而設。',
      items: isEnglish
        ? ['Company setup information preparation', 'Document preparation and filing coordination', 'Clear next-step guidance']
        : ['整理公司成立所需資料', '協調文件準備及提交', '清楚說明下一步安排'],
      to: '/company-registration/hong-kong-resident',
    },
    {
      label: copy.priceMainlandLabel,
      price: pricingData.mainland,
      description: isEnglish
        ? 'For mainland founders preparing documents for a Hong Kong company.'
        : '為準備跨境文件及成立香港公司的內地人士而設。',
      items: isEnglish
        ? ['Cross-border document preparation guidance', 'Company setup and filing coordination', 'Clear document follow-up']
        : ['跨境文件準備方向', '協調公司成立及提交程序', '清楚跟進所需文件'],
      to: '/company-registration/mainland-resident',
    },
  ];
  const otherServices = isEnglish
    ? [['Annual compliance', 'Annual filing, renewal and ongoing operational support are scoped around your company’s actual position.', '/services/maintenance'], ['BUD Fund support', 'Project eligibility, application preparation and coordination are quoted separately by scope.', '/bud-fund']]
    : [['年度合規與營運', '週年申報、續期及日常營運支援，會按公司實際情況釐清範圍。', '/services/maintenance'], ['BUD 申請支援', '項目資格、申請資料及協調工作，會按項目範圍另行報價。', '/bud-fund']];

  return <>
    <section className="detail-hero content-hero pricing-hero"><div className="container">
      <Breadcrumb current={language === 'en' ? crumbs.pricing.en : crumbs.pricing.zh} navigate={navigate} language={language} />
      <div className="pricing-hero-copy"><p className="hero-kicker">{page.label}</p><h1>{isEnglish ? 'Choose the Hong Kong company setup plan that fits you.' : '選擇適合你的香港公司註冊方案。'}</h1><p>{isEnglish ? 'Hong Kong founders HK$5,000. Mainland founders HK$6,500. Add registered address and mail handling for HK$1,500 when needed.' : '香港人士 HK$5,000；內地人士 HK$6,500。需要時可另選註冊地址及郵件代收服務 HK$1,500。'}</p></div>
    </div></section>
    <section className="section pricing-plans"><div className="container">
      <SectionHeading label={page.label} title={isEnglish ? 'Start with a clear plan and price.' : '先把方案與價格說清楚。'} text={copy.priceDetails} />
      <div className="plan-grid">{plans.map((plan) => <article className="plan-card" key={plan.to}><span>{plan.label}</span><strong><small>HK$</small>{plan.price.toLocaleString('en-HK')}</strong><p>{plan.description}</p><Checklist dark items={plan.items} /><LinkButton to={plan.to} navigate={navigate} className="button">{copy.priceEnquiry} <Icon name="arrow" size={16} /></LinkButton></article>)}</div>
      <article className="address-addon-card"><div><span className="section-label">{copy.registeredAddressKicker}</span><h2>{copy.registeredAddressTitle}</h2><p>{copy.registeredAddressText}</p><div className="address-options"><span>{copy.registeredAddressItemOne}</span><span>{copy.registeredAddressItemTwo}</span></div></div><div><strong>{formatPrice(pricingData.registeredAddress)}</strong><p>{copy.registeredAddressNote}</p><LinkButton to="/company-registration/hong-kong-resident#registered-address" navigate={navigate} className="button button-secondary">{copy.registeredAddressCta} <Icon name="arrow" size={16} /></LinkButton></div></article>
    </div></section>
    <section className="section other-services-section"><div className="container"><SectionHeading label={isEnglish ? 'Other business services' : '其他企業服務'} title={isEnglish ? 'Support beyond company setup.' : '公司成立以外，也可繼續支援。'} text={isEnglish ? 'These services are scoped and quoted separately, so there is no confusion with the company setup plans above.' : '以下服務會按實際範圍另行報價，不會與上述公司註冊方案混為一談。'} /><div className="content-card-grid other-services-grid">{otherServices.map(([title, text, to]) => <article key={to}><span>{isEnglish ? 'By scope' : '按項目範圍'}</span><h2>{title}</h2><p>{text}</p><LinkButton to={to} navigate={navigate} className="inline-link">{isEnglish ? 'Explore the service' : '了解服務詳情'} <Icon name="arrow" size={15} /></LinkButton></article>)}</div></div></section>
    <ConsultationPanel language={language} navigate={navigate} topic={page.label} documentsTarget="/contact#contact-enquiry" />
    <FinalCta language={language} topic={page.label} />
  </>;
}

function ContactActions({ language }) {
  const copy = getUi(language);
  return <section className="section contact-actions-band"><div className="container contact-actions-inner"><div><span className="section-label">{copy.initialConsultation}</span><h2>{language === 'en' ? 'A short first message is enough to begin.' : '第一句訊息，就足夠讓我們開始了解。'}</h2><p>{language === 'en' ? 'Tell us whether you are setting up, operating, applying for funding or preparing to expand.' : '告訴我們你是準備成立公司、處理營運合規、申請資助，還是計劃跨境拓展。'}</p></div><div className="contact-action-links"><a className="button" href={consultationUrl(copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.whatsappEnquiry} <Icon name="arrow" size={16} /></a><a className="button button-secondary" href="mailto:enquiry@winfo.hk">enquiry@winfo.hk <Icon name="arrow" size={16} /></a></div></div></section>;
}
