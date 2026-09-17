import { useState } from 'react';
import { formatPrice, getExtendedContent, getUi, googleRating, pricingData } from '../content/site';
import { Icon, LinkButton, consultationUrl } from './SiteShell';
import { submitEnquiry } from '../lib/enquiry';

export function Breadcrumb({ current, navigate, language }) { const copy = getUi(language); return <div className="breadcrumb"><button type="button" onClick={() => navigate('/')}>{copy.home}</button><span>/</span><span>{current}</span></div>; }
export function SectionHeading({ label, title, text, light = false }) { return <div className={`section-heading ${light ? 'light' : ''}`}><span className="section-label">{label}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>; }
export function FAQ({ items, title, language }) { const [open, setOpen] = useState(0); const copy = getUi(language); return <section className="section faq-band"><div className="container faq-layout"><SectionHeading label={copy.faq} title={title || copy.faqTitle} /><div className="faq-list">{items.map(([question, answer], index) => <article key={question} className={open === index ? 'faq-item open' : 'faq-item'}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><Icon name="chevron" size={20} /></button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></div></section>; }
export function FinalCta({ title, text, topic, language }) { const copy = getUi(language); return <section className="final-cta"><div className="container final-cta-inner"><div><h2>{title || copy.setUpTitle}</h2><p>{text || copy.setUpText}</p></div><a className="button button-light" href={consultationUrl(topic || copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.whatsappEnquiry} <Icon name="arrow" size={16} /></a></div></section>; }
export function ProcessList({ items, compact = false }) { return <ol className={`process-list ${compact ? 'compact' : ''}`}>{items.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="process-status" aria-hidden="true" /></li>)}</ol>; }
export function Checklist({ items, dark = false }) { return <ul className={`checklist ${dark ? 'dark' : ''}`}>{items.map((item) => <li key={item}><Icon name="check" size={18} /><span>{item}</span></li>)}</ul>; }
export function ConsultationPanel({ title, text, topic, navigate, language, documentsTarget = '#documents' }) { const copy = getUi(language); return <section id="consultation" className="consultation-panel"><div className="container consultation-grid"><div><span className="section-label">{copy.initialConsultation}</span><h2>{title || copy.consultationTitle}</h2><p>{text || copy.consultationText}</p></div><div className="consultation-actions"><a className="button" href={consultationUrl(topic || copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.whatsappEnquiry} <Icon name="arrow" size={16} /></a><LinkButton to={documentsTarget} navigate={navigate} className="button-secondary">{copy.viewDocuments}</LinkButton><small>{copy.noSensitive}</small></div></div></section>; }

export function TestimonialSection({ language, testimonials, compact = false, serviceType }) {
  const copy = getUi(language);
  const visible = (testimonials || []).filter((item) => item.status !== 'hidden' && (!serviceType || item.serviceType === serviceType));
  return <section className={`section testimonial-section ${compact ? 'testimonial-compact' : ''}`}><div className="container"><div className="testimonial-heading"><div><span className="section-label">{copy.testimonialLabel}</span><h2>{copy.testimonialsTitle || copy.testimonialHeading}</h2><p className="testimonial-intro">{copy.testimonialsIntro}</p></div></div><div className="testimonial-grid">{visible.map((item) => <blockquote key={item.id || item.name}><span className="quote-mark" aria-hidden="true">“</span><p>{item.quote}</p><footer><div className="testimonial-person">{item.avatarUrl ? <img src={item.avatarUrl} alt="" /> : <span className="avatar-fallback" aria-hidden="true">{item.name.slice(0, 1)}</span>}<div><strong>{item.name}</strong><span>{item.context}</span></div></div><small>{copy.exampleTestimonial}</small></footer></blockquote>)}</div>{visible.length === 0 && <p className="testimonial-note">{copy.noTestimonials || ''}</p>}<p className="testimonial-note">{getExtendedContent(language).ratingNote}</p></div></section>;
}

export function GoogleRatingSection({ language }) {
  const copy = getUi(language);
  if (googleRating.status === 'hidden') return null;
  const preview = googleRating.status === 'preview';
  return <section className="section google-rating-section"><div className="container google-rating-layout"><div className="google-score"><span className="google-wordmark">Google</span><strong>{googleRating.rating.toFixed(1)} / 5</strong><span className="sr-only">{`${googleRating.rating.toFixed(1)} out of 5`}</span><div className="star-row" aria-hidden="true">{[1, 2, 3, 4, 5].map((star) => <svg key={star} viewBox="0 0 24 24"><path d="m12 3 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17.2l-5.56 2.92 1.06-6.2L3 9.53l6.22-.9L12 3Z" /></svg>)}</div></div><div><span className="section-label">{copy.googlePreviewKicker}</span><h2>{copy.googlePreviewTitle}</h2><p>{copy.googlePreviewText}</p><strong className="google-preview-note">{copy.googlePreviewScoreNote}</strong>{preview && <p className="google-link-note">{copy.googlePreviewNoLink}</p>}{!preview && googleRating.profileUrl && <a className="inline-link" href={googleRating.profileUrl} target="_blank" rel="noreferrer">{copy.googleViewReviews} <Icon name="arrow" size={15} /></a>}</div></div></section>;
}

export function RegisteredAddressSection({ language, kind = 'local', checked, setChecked }) {
  const copy = getUi(language);
  const base = kind === 'mainland' ? pricingData.mainland : pricingData.local;
  const subtotal = base + (checked ? pricingData.registeredAddress : 0);
  return <section className="section registered-address-section" id="registered-address"><div className="container registered-address-layout"><div className="address-visual"><div className="address-icon" aria-hidden="true"><span>W</span></div><span className="section-label">{copy.registeredAddressKicker}</span><h2>{copy.registeredAddressTitle}</h2><p>{copy.registeredAddressText}</p><div className="address-options"><span>{copy.registeredAddressItemOne}</span><span>{copy.registeredAddressItemTwo}</span></div></div><div className="address-price-card"><span>{copy.priceAddress}</span><strong>{formatPrice(pricingData.registeredAddress)}</strong><p>{copy.registeredAddressNote}</p><label className="address-choice"><input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /><span>{copy.addToPlan || copy.registeredAddressTitle}</span></label>{checked && <div className="subtotal"><span>{copy.selectedSubtotal}</span><strong>{formatPrice(subtotal)}</strong></div>}<small>{copy.noFinalTotal}</small><a className="button" href={consultationUrl(`${copy.registeredAddressTitle} ${formatPrice(pricingData.registeredAddress)}`, language)} target="_blank" rel="noreferrer">{copy.registeredAddressCta} <Icon name="arrow" size={16} /></a></div></div></section>;
}

function EnquiryStatus({ status, copy }) {
  if (status === 'success') return <p className="form-status success" role="status">{copy.enquirySuccess}</p>;
  if (status === 'error') return <p className="form-status error" role="alert">{copy.enquiryFailure}</p>;
  return null;
}

function EnquiryFallback({ language, copy }) {
  return <p className="form-fallback">{copy.enquiryFallback} <a href={consultationUrl(copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.whatsappEnquiry}</a> {copy.enquiryFallbackOr} <a href={`mailto:${copy.contactEmail}`}>{copy.contactEmail}</a></p>;
}

export function RegistrationStart({ language, kind = 'local', navigate }) {
  const copy = getUi(language);
  const startLabel = language === 'en' ? 'Start company registration' : language === 'zh-Hans' ? '开始公司注册' : '開始公司註冊';
  const steps = language === 'en' ? ['Tell us the proposed name', 'Clarify the founder structure', 'Choose the support you need'] : language === 'zh-Hans' ? ['填写心仪公司名称', '说明创办人及公司架构', '选择需要的成立支持'] : ['填寫心儀公司名稱', '說明創辦人及公司架構', '選擇需要的成立支援'];
  return <section className="section registration-start" id="registration-inquiry"><div className="container registration-start-layout"><div><SectionHeading label={copy.registrationInquiry} title={copy.setUpTitle} text={copy.registrationIntro} /><div className="registration-start-steps">{steps.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div><p className="form-note">{copy.noSensitive}</p></div><div className="registration-start-action"><LinkButton to={`/start/company-registration?profile=${kind}`} navigate={navigate}>{startLabel}</LinkButton></div></div></section>;
}

export function ContactInquiry({ language }) {
  const copy = getUi(language);
  const [form, setForm] = useState({ service: copy.enquiryServices[0], timing: copy.enquiryTimings[0] });
  const [status, setStatus] = useState('idle');
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => { event.preventDefault(); setStatus('sending'); try { await submitEnquiry({ ...form, type: 'general', consent: form.consent, website: form.website }); setStatus('success'); event.currentTarget.reset(); setForm({ service: copy.enquiryServices[0], timing: copy.enquiryTimings[0] }); } catch { setStatus('error'); } };
  return <section className="section inquiry-section" id="contact-enquiry"><div className="container inquiry-layout"><div><SectionHeading label={copy.initialConsultation} title={copy.enquiryTitle} text={copy.enquiryText} /><p className="form-note">{copy.noSensitive}</p></div><form className="inquiry-form contact-inquiry-form" onSubmit={submit}><label>{copy.name}<input name="name" value={form.name || ''} onChange={update} autoComplete="name" required /></label><label>{copy.contactMethod}<input name="contact" value={form.contact || ''} onChange={update} autoComplete="email" required /></label><label>{copy.enquiryService}<select name="service" value={form.service} onChange={update}>{copy.enquiryServices.map((item) => <option key={item}>{item}</option>)}</select></label><label>{copy.enquiryTiming}<select name="timing" value={form.timing} onChange={update}>{copy.enquiryTimings.map((item) => <option key={item}>{item}</option>)}</select></label><label>{copy.enquiryMessage}<textarea name="message" rows="4" placeholder={copy.enquiryMessagePlaceholder} value={form.message || ''} onChange={update} /></label><label className="form-consent"><input name="consent" type="checkbox" checked={Boolean(form.consent)} onChange={(event) => setForm({ ...form, consent: event.target.checked })} required /><span>{copy.enquiryConsent} <a href="/privacy-policy">{copy.privacyTitle}</a></span></label><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" value={form.website || ''} onChange={update} /></label><button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? copy.enquirySending : copy.enquirySubmit} <Icon name="arrow" size={16} /></button><EnquiryStatus status={status} copy={copy} /><EnquiryFallback language={language} copy={copy} /></form></div></section>;
}
