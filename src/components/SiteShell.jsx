import { useEffect, useRef, useState } from 'react';
import { contact, getContent, getUi, languages, toSimplified } from '../content/site';

export function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />, menu: <path d="M4 7h16M4 12h16M4 17h16" />, close: <path d="m6 6 12 12M18 6 6 18" />,
    chevron: <path d="m7 10 5 5 5-5" />, check: <path d="m5 12 4.2 4L19 6.5" />, chat: <path d="M20 11.5a7.5 7.5 0 0 1-10.8 6.7L4 20l1.9-4.7A7.5 7.5 0 1 1 20 11.5Z" />,
  };
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function consultationUrl(topic = 'initial consultation', language = 'en') {
  const greeting = language === 'en' ? `Hello, I would like to learn about WINFO's ${topic}.` : `你好，我想了解 WINFO 的${topic}。`;
  return `${contact.whatsapp}?text=${encodeURIComponent(greeting)}`;
}

export function LinkButton({ to, navigate, children, className = '', external = false }) {
  if (external) return <a className={`button ${className}`} href={to} target="_blank" rel="noreferrer">{children}<Icon name="arrow" size={16} /></a>;
  return <button className={`button ${className}`} type="button" onClick={() => navigate(to)}>{children}<Icon name="arrow" size={16} /></button>;
}

function LanguageSwitch({ language, setLanguage }) {
  return <div className="language-switch" aria-label="Language selector">{languages.map(({ code, label }) => <button type="button" className={language === code ? 'active' : ''} onClick={() => setLanguage(code)} key={code} aria-pressed={language === code}>{label}</button>)}</div>;
}

export function Header({ navigate, language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const content = getContent(language);
  const copy = getUi(language);
  const go = (to) => { setOpen(false); setMobileOpen(false); navigate(to); };
  const closeSoon = () => window.setTimeout(() => { if (!headerRef.current?.matches(':hover')) setOpen(false); }, 120);
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') { setOpen(false); setMobileOpen(false); } };
    const onClick = (event) => { if (!headerRef.current?.contains(event.target)) setOpen(false); };
    window.addEventListener('keydown', onKey); document.addEventListener('pointerdown', onClick);
    return () => { window.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onClick); };
  }, []);
  return <header className="site-header" ref={headerRef} onMouseLeave={closeSoon}>
    <div className="nav-wrap">
      <button type="button" className="brand" onClick={() => go('/')} aria-label="WINFO home"><img src="/WINFO-blue.png" alt="WINFO Business Solutions Ltd" /></button>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <button type="button" className={`nav-service ${open ? 'is-open' : ''}`} onMouseEnter={() => setOpen(true)} onFocus={() => setOpen(true)} onClick={() => setOpen(!open)} aria-expanded={open}>{copy.services} <Icon name="chevron" size={15} /></button>
        <button type="button" onClick={() => go('/#process')}>{copy.ourApproach}</button>
        <button type="button" onClick={() => go('/pricing')}>{copy.pricingNav}</button>
        <button type="button" onClick={() => go('/cases')}>{copy.casesNav}</button>
        <button type="button" onClick={() => go('/about')}>{copy.aboutNav}</button>
        <button type="button" onClick={() => go('/contact')}>{copy.contactNav}</button>
      </nav>
      <LanguageSwitch language={language} setLanguage={setLanguage} />
      <a className="button header-cta" href={consultationUrl(copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.freeConsultation} <Icon name="arrow" size={15} /></a>
      <button type="button" className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? copy.closeMenu : copy.menu} aria-expanded={mobileOpen}><Icon name={mobileOpen ? 'close' : 'menu'} /></button>
    </div>
    {open && <MegaMenu groups={content.serviceGroups} go={go} />}
    {mobileOpen && <MobileMenu groups={content.serviceGroups} copy={copy} language={language} setLanguage={setLanguage} go={go} />}
  </header>;
}

function MegaMenu({ groups, go }) { return <div className="mega-menu" role="dialog" aria-label="Services menu"><div className="mega-grid">{groups.map((group) => <div key={group.title} className="mega-group"><p>{group.title}</p>{group.items.map((item) => <button type="button" onClick={() => go(item.to)} key={item.title}><strong>{item.title}</strong><span>{item.description}</span><Icon name="arrow" size={15} /></button>)}</div>)}</div></div>; }

function MobileMenu({ groups, copy, language, setLanguage, go }) {
  const [serviceOpen, setServiceOpen] = useState(true);
  return <div className="mobile-menu"><div className="mobile-menu-head"><LanguageSwitch language={language} setLanguage={setLanguage} /></div><button type="button" className="mobile-services" onClick={() => setServiceOpen(!serviceOpen)} aria-expanded={serviceOpen}>{copy.services} <Icon name="chevron" size={16} /></button>{serviceOpen && groups.map((group) => <div key={group.title} className="mobile-group"><span>{group.title}</span>{group.items.map((item) => <button type="button" onClick={() => go(item.to)} key={item.title}>{item.title}<Icon name="arrow" size={15} /></button>)}</div>)}<button type="button" onClick={() => go('/#process')}>{copy.ourApproach}</button><button type="button" onClick={() => go('/pricing')}>{copy.pricingNav}</button><button type="button" onClick={() => go('/cases')}>{copy.casesNav}</button><button type="button" onClick={() => go('/about')}>{copy.aboutNav}</button><button type="button" onClick={() => go('/contact')}>{copy.contactNav}</button><a className="button" href={consultationUrl(copy.initialConsultation, language)} target="_blank" rel="noreferrer">{copy.freeConsultation} <Icon name="arrow" size={15} /></a></div>;
}

export function Footer({ navigate, language }) {
  const copy = getUi(language);
  const localize = (value) => language === 'zh-Hans' ? toSimplified(value) : value;
  return <footer className="site-footer"><div className="footer-main"><div><img src="/WINFO-gold.png" alt="WINFO Business Solutions Ltd" className="footer-logo" /><p>{copy.footerLine}</p></div><div><h2>{copy.core}</h2><button type="button" onClick={() => navigate('/company-registration/hong-kong-resident')}>{language === 'en' ? 'Hong Kong company setup' : localize('香港公司註冊')}</button><button type="button" onClick={() => navigate('/company-registration/mainland-resident')}>{language === 'en' ? 'Mainland founder setup' : localize('內地人士註冊香港公司')}</button><button type="button" onClick={() => navigate('/bud-fund')}>BUD Fund</button><button type="button" onClick={() => navigate('/services/compliance')}>{language === 'en' ? 'Compliance support' : localize('合規與營運')}</button></div><div><h2>{copy.contactDetails}</h2><a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><address>{language === 'zh-Hans' ? localize(contact.address) : contact.address}</address><button type="button" onClick={() => navigate('/pricing')}>{copy.pricingNav}</button><button type="button" onClick={() => navigate('/cases')}>{copy.casesNav}</button><button type="button" onClick={() => navigate('/about')}>{copy.aboutNav}</button><button type="button" onClick={() => navigate('/contact')}>{copy.contactNav}</button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} WINFO Business Solutions Ltd. {copy.rights}</span><div><button type="button" onClick={() => navigate('/privacy-policy')}>{copy.privacyTitle}</button><button type="button" onClick={() => navigate('/terms-of-use')}>{copy.termsTitle}</button></div></div></footer>;
}

function CookieNotice({ language }) {
  const copy = getUi(language);
  const [visible, setVisible] = useState(() => !localStorage.getItem('winfo-cookie-choice'));
  const save = (choice) => { localStorage.setItem('winfo-cookie-choice', choice); setVisible(false); };
  if (!visible) return null;
  return <aside className="cookie-notice" aria-label={copy.cookieTitle}><strong>{copy.cookieTitle}</strong><p>{copy.cookieText}</p><div><button type="button" className="button" onClick={() => save('essential')}>{copy.cookieAccept}</button><button type="button" onClick={() => save('rejected')}>{copy.cookieReject}</button></div></aside>;
}

export function SiteShell({ children, navigate, path, language, setLanguage }) {
  const copy = getUi(language);
  return <><Header navigate={navigate} path={path} language={language} setLanguage={setLanguage} /><main>{children}</main><Footer navigate={navigate} language={language} /><a className="whatsapp-float" href={consultationUrl(copy.initialConsultation, language)} target="_blank" rel="noreferrer"><Icon name="chat" size={19} /> {copy.whatsappEnquiry}</a><CookieNotice language={language} /></>;
}
