import { getExtendedContent, getUi } from '../content/site';
import { Icon, consultationUrl } from '../components/SiteShell';
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

function ContactActions({ language }) {
  const copy = getUi(language);
  return <section className="section contact-actions-band"><div className="container contact-actions-inner"><div><span className="section-label">{copy.initialConsultation}</span><h2>{language === 'en' ? 'A short first message is enough to begin.' : '第一句訊息，就足夠讓我們開始了解。'}</h2><p>{language === 'en' ? 'Tell us whether you are setting up, operating, applying for funding or preparing to expand.' : '告訴我們你是準備成立公司、處理營運合規、申請資助，還是計劃跨境拓展。'}</p></div><div className="contact-action-links"><a className="button" href={consultationUrl(copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.whatsappEnquiry} <Icon name="arrow" size={16} /></a><a className="button button-secondary" href="mailto:enquiry@winfo.hk">enquiry@winfo.hk <Icon name="arrow" size={16} /></a></div></div></section>;
}
