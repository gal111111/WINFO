import { useEffect, useRef, useState } from 'react';
import { formatPrice, getExtendedContent, getUi, googleRating, pricingData } from '../content/site';
import { Icon, LinkButton, consultationUrl } from './SiteShell';
import { submitEnquiry } from '../lib/enquiry';

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { node.classList.add('is-visible'); return undefined; }
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { node.classList.add('is-visible'); observer.unobserve(node); } }); }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`.trim()} style={{ '--reveal-delay': `${delay}ms` }} {...rest}>{children}</Tag>;
}

export function Breadcrumb({ current, navigate, language }) { const copy = getUi(language); return <div className="breadcrumb"><button type="button" onClick={() => navigate('/')}>{copy.home}</button><span>/</span><span>{current}</span></div>; }
export function SectionHeading({ label, title, text, light = false }) { return <Reveal className={`section-heading ${light ? 'light' : ''}`}><span className="section-label">{label}</span><h2>{title}</h2>{text && <p>{text}</p>}</Reveal>; }
export function FAQ({ items, title, language }) { const [open, setOpen] = useState(0); const copy = getUi(language); return <section className="section faq-band"><div className="container faq-layout"><SectionHeading label={copy.faq} title={title || copy.faqTitle} /><div className="faq-list">{items.map(([question, answer], index) => <article key={question} className={open === index ? 'faq-item open' : 'faq-item'}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><Icon name="chevron" size={20} /></button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></div></section>; }
export function FinalCta({ title, text, topic, language }) { const copy = getUi(language); return <section className="final-cta"><div className="container final-cta-inner"><div><h2>{title || copy.setUpTitle}</h2><p>{text || copy.setUpText}</p></div><a className="button button-light" href={consultationUrl(topic || copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.whatsappEnquiry} <Icon name="arrow" size={16} /></a></div></section>; }
export function ProcessList({ items, compact = false }) { return <ol className={`process-list ${compact ? 'compact' : ''}`}>{items.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="process-status" aria-hidden="true" /></li>)}</ol>; }
export function Checklist({ items, dark = false }) { return <ul className={`checklist ${dark ? 'dark' : ''}`}>{items.map((item) => <li key={item}><Icon name="check" size={18} /><span>{item}</span></li>)}</ul>; }
export function ConsultationPanel({ title, text, topic, navigate, language, documentsTarget = '#documents' }) { const copy = getUi(language); return <section id="consultation" className="consultation-panel"><div className="container consultation-grid"><div><span className="section-label">{copy.initialConsultation}</span><h2>{title || copy.consultationTitle}</h2><p>{text || copy.consultationText}</p></div><div className="consultation-actions"><a className="button" href={consultationUrl(topic || copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.whatsappEnquiry} <Icon name="arrow" size={16} /></a><LinkButton to={documentsTarget} navigate={navigate} className="button-secondary">{copy.viewDocuments}</LinkButton><small>{copy.noSensitive}</small></div></div></section>; }

export function TestimonialSection({ language, testimonials, compact = false, serviceType }) {
  const copy = getUi(language);
  const trackRef = useRef(null);
  const visible = (testimonials || []).filter((item) => item.status !== 'hidden' && (!serviceType || item.serviceType === serviceType));
  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.testimonial-card');
    const step = (card ? card.offsetWidth : 320) + 18;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };
  return <section className={`section testimonial-section ${compact ? 'testimonial-compact' : ''}`}><div className="container"><div className="testimonial-heading"><div><span className="section-label">{copy.testimonialLabel}</span><h2>{copy.testimonialsTitle || copy.testimonialHeading}</h2><p className="testimonial-intro">{copy.testimonialsIntro}</p></div>{visible.length > 1 && <div className="carousel-controls"><button type="button" className="is-prev" aria-label={copy.carouselPrev} onClick={() => scroll(-1)}><Icon name="arrow" size={18} /></button><button type="button" aria-label={copy.carouselNext} onClick={() => scroll(1)}><Icon name="arrow" size={18} /></button></div>}</div><div className="testimonial-track" ref={trackRef}>{visible.map((item) => <blockquote className="testimonial-card" key={item.id || item.name}><span className="quote-mark" aria-hidden="true">“</span><p>{item.quote}</p><footer><div className="testimonial-person">{item.avatarUrl ? <img src={item.avatarUrl} alt="" /> : <span className="avatar-fallback" aria-hidden="true">{item.name.slice(0, 1)}</span>}<div><strong>{item.name}</strong><span>{item.context}</span></div></div><small>{copy.exampleTestimonial}</small></footer></blockquote>)}</div>{visible.length === 0 && <p className="testimonial-note">{copy.noTestimonials || ''}</p>}<p className="testimonial-note">{getExtendedContent(language).ratingNote}</p></div></section>;
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

export function RegistrationInquiry({ language, kind = 'local', needsAddress = false, setNeedsAddress = () => {} }) {
  const copy = getUi(language);
  const [form, setForm] = useState({ profile: kind === 'mainland' ? copy.mainland : copy.local });
  const [status, setStatus] = useState('idle');
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => { event.preventDefault(); setStatus('sending'); try { await submitEnquiry({ ...form, type: 'company-registration', service: copy.registrationInquiry, needsAddress: needsAddress ? copy.yes : copy.no, consent: form.consent, website: form.website }); setStatus('success'); event.currentTarget.reset(); setForm({ profile: kind === 'mainland' ? copy.mainland : copy.local }); } catch { setStatus('error'); } };
  return <section className="section inquiry-section" id="registration-inquiry"><div className="container inquiry-layout"><div><SectionHeading label={copy.registrationInquiry} title={copy.setUpTitle} text={copy.registrationIntro} /><p className="form-note">{copy.noSensitive}</p></div><form className="inquiry-form" onSubmit={submit}><label>{copy.name}<input name="name" value={form.name || ''} onChange={update} autoComplete="name" required /></label><label>{copy.contactMethod}<input name="contact" value={form.contact || ''} onChange={update} autoComplete="email" required /></label><label>{copy.companyNames}<input name="companyNames" placeholder={copy.companyNamesPlaceholder} value={form.companyNames || ''} onChange={update} /></label><label>{copy.business}<input name="business" value={form.business || ''} onChange={update} /></label><label>{copy.profile}<select name="profile" value={form.profile} onChange={update}><option>{copy.local}</option><option>{copy.mainland}</option><option>{copy.other}</option></select></label><label>{copy.needAddress} <span className="field-hint">(+{formatPrice(pricingData.registeredAddress)})</span><select value={needsAddress ? copy.yes : copy.no} onChange={(event) => setNeedsAddress(event.target.value === copy.yes)}><option>{copy.yes}</option><option>{copy.no}</option></select></label><label>{copy.directors}<input name="directors" value={form.directors || ''} onChange={update} /></label><label className="form-consent"><input name="consent" type="checkbox" checked={Boolean(form.consent)} onChange={(event) => setForm({ ...form, consent: event.target.checked })} required /><span>{copy.enquiryConsent} <a href="/privacy-policy">{copy.privacyTitle}</a></span></label><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" value={form.website || ''} onChange={update} /></label><button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? copy.enquirySending : copy.submitInquiry} <Icon name="arrow" size={16} /></button><EnquiryStatus status={status} copy={copy} /><EnquiryFallback language={language} copy={copy} /></form></div></section>;
}

export function ContactInquiry({ language }) {
  const copy = getUi(language);
  const [form, setForm] = useState({ service: copy.enquiryServices[0], timing: copy.enquiryTimings[0] });
  const [status, setStatus] = useState('idle');
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => { event.preventDefault(); setStatus('sending'); try { await submitEnquiry({ ...form, type: 'general', consent: form.consent, website: form.website }); setStatus('success'); event.currentTarget.reset(); setForm({ service: copy.enquiryServices[0], timing: copy.enquiryTimings[0] }); } catch { setStatus('error'); } };
  return <section className="section inquiry-section" id="contact-enquiry"><div className="container inquiry-layout"><div><SectionHeading label={copy.initialConsultation} title={copy.enquiryTitle} text={copy.enquiryText} /><p className="form-note">{copy.noSensitive}</p></div><form className="inquiry-form contact-inquiry-form" onSubmit={submit}><label>{copy.name}<input name="name" value={form.name || ''} onChange={update} autoComplete="name" required /></label><label>{copy.contactMethod}<input name="contact" value={form.contact || ''} onChange={update} autoComplete="email" required /></label><label>{copy.enquiryService}<select name="service" value={form.service} onChange={update}>{copy.enquiryServices.map((item) => <option key={item}>{item}</option>)}</select></label><label>{copy.enquiryTiming}<select name="timing" value={form.timing} onChange={update}>{copy.enquiryTimings.map((item) => <option key={item}>{item}</option>)}</select></label><label>{copy.enquiryMessage}<textarea name="message" rows="4" placeholder={copy.enquiryMessagePlaceholder} value={form.message || ''} onChange={update} /></label><label className="form-consent"><input name="consent" type="checkbox" checked={Boolean(form.consent)} onChange={(event) => setForm({ ...form, consent: event.target.checked })} required /><span>{copy.enquiryConsent} <a href="/privacy-policy">{copy.privacyTitle}</a></span></label><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" value={form.website || ''} onChange={update} /></label><button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? copy.enquirySending : copy.enquirySubmit} <Icon name="arrow" size={16} /></button><EnquiryStatus status={status} copy={copy} /><EnquiryFallback language={language} copy={copy} /></form></div></section>;
}
