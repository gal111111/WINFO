import { getExtendedContent, getUi } from '../content/site';
import { Icon, consultationUrl } from '../components/SiteShell';
import { Breadcrumb, Checklist, ConsultationPanel, FAQ, FinalCta, HeroMedia, SectionHeading, TestimonialSection } from '../components/Sections';

export function ScienceParkPage({ navigate, language }) {
  const copy = getUi(language);
  const extended = getExtendedContent(language);
  const page = extended.pages.sciencePark;
  return <>
    <section className="detail-hero has-media"><HeroMedia image="/cross-border.jpg" /><div className="container">
      <Breadcrumb current={page.label} navigate={navigate} language={language} />
      <div className="content-hero-copy"><p className="hero-kicker">{page.label}</p><h1>{page.title}</h1><p>{page.lead}</p><div className="hero-actions"><a className="button" href={consultationUrl(page.label, language)} target="_blank" rel="noreferrer">{copy.freeConsultation} <Icon name="arrow" size={16} /></a><button className="button button-secondary" type="button" onClick={() => document.querySelector('#science-park-tiers')?.scrollIntoView({ behavior: 'smooth' })}>{page.tiersLabel}</button></div></div>
    </div></section>
    <section id="science-park-tiers" className="section"><div className="container"><SectionHeading label={page.tiersLabel} title={page.tiersTitle} text={page.tiersText} /><div className="category-grid">{page.tiers.map((tier) => <article key={tier.name}><span>{tier.stage}</span><h2>{tier.name}</h2><p>{tier.who}</p><p><strong>{tier.amount}</strong> · {tier.term}</p><Checklist dark items={tier.items} /></article>)}</div></div></section>
    <section className="section soft-band"><div className="container two-column"><SectionHeading label={page.tenantLabel} title={page.tenantTitle} text={page.tenantText} /><Checklist dark items={page.tenantItems} /></div></section>
    <section className="section"><div className="container"><SectionHeading label={page.helpLabel} title={page.helpTitle} text={page.helpText} /><div className="responsibility-grid"><article><h3>{copy.winfoResponsibilities}</h3><Checklist dark items={page.winfoItems} /></article><article><h3>{copy.clientResponsibilities}</h3><Checklist dark items={page.clientItems} /></article></div></div></section>
    <section id="science-park-note" className="section documents-band"><div className="container documents-layout"><SectionHeading label={page.noteLabel} title={page.noteTitle} /><Checklist items={page.noteItems} /></div></section>
    <FAQ items={page.faqs} title={page.faqTitle} language={language} />
    <TestimonialSection language={language} testimonials={extended.testimonials} compact />
    <ConsultationPanel navigate={navigate} language={language} topic={page.label} title={page.panelTitle} text={page.panelText} documentsTarget="#science-park-note" />
    <FinalCta language={language} title={page.finalTitle} text={page.finalText} topic={page.label} />
  </>;
}
