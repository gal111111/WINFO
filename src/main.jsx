import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SiteShell } from './components/SiteShell';
import { HomePage } from './pages/HomePage';
import { IncorporationPage } from './pages/IncorporationPage';
import { BudFundPage } from './pages/BudFundPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ContentPage } from './pages/ContentPage';
import { ScienceParkPage } from './pages/ScienceParkPage';
import { CompanyRegistrationWizard } from './pages/CompanyRegistrationWizard';
import { getUi, toSimplified } from './content/site';
import { canonicalUrl, pageMetadata } from './content/pageMetadata';
import './styles.css';

const routes = {
  '/': { component: HomePage, key: 'home' },
  '/company-registration/hong-kong-resident': { component: IncorporationPage, kind: 'local', key: 'local' },
  '/company-registration/mainland-resident': { component: IncorporationPage, kind: 'mainland', key: 'mainland' },
  '/start/company-registration': { component: CompanyRegistrationWizard, key: 'registrationStart', standalone: true },
  '/bud-fund': { component: BudFundPage, key: 'bud' },
  '/pricing': { component: ContentPage, kind: 'pricing', key: 'pricing' },
  '/cases': { component: ContentPage, kind: 'cases', key: 'cases' },
  '/about': { component: ContentPage, kind: 'about', key: 'about' },
  '/contact': { component: ContentPage, kind: 'contact', key: 'contact' },
  '/services/compliance': { component: ContentPage, kind: 'maintenance', key: 'maintenance' },
  '/services/cross-border': { component: ContentPage, kind: 'crossBorder', key: 'crossBorder' },
  '/services/science-park': { component: ScienceParkPage, key: 'sciencePark' },
  '/privacy-policy': { component: LegalPage, kind: 'privacy', key: 'privacy' },
  '/terms-of-use': { component: LegalPage, kind: 'terms', key: 'terms' },
};

function useRoute() {
  const getPath = () => window.location.pathname.replace(/\/$/, '') || '/';
  const [path, setPath] = useState(getPath);
  useEffect(() => { const onPopState = () => setPath(getPath()); window.addEventListener('popstate', onPopState); return () => window.removeEventListener('popstate', onPopState); }, []);
  const navigate = (to) => {
    const [nextPath = '', anchor] = to.split('#');
    if (!nextPath && anchor) { document.querySelector(`#${anchor}`)?.scrollIntoView({ behavior: 'smooth' }); return; }
    const targetPath = nextPath || '/';
    window.history.pushState({}, '', anchor ? `${targetPath}#${anchor}` : targetPath);
    setPath(targetPath.split('?')[0]);
    requestAnimationFrame(() => anchor ? document.querySelector(`#${anchor}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) : window.scrollTo({ top: 0, behavior: 'auto' }));
  };
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (!anchor) return undefined;
    const frame = requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    return () => cancelAnimationFrame(frame);
  }, [path]);
  return [path, navigate];
}

function App() {
  const [path, navigate] = useRoute();
  const [language, setLanguage] = useState(() => localStorage.getItem('winfo-language') || 'en');
  const route = routes[path];
  const copy = getUi(language);
  useEffect(() => { localStorage.setItem('winfo-language', language); document.documentElement.lang = language; }, [language]);
  useEffect(() => {
    if (language !== 'zh-Hans') return undefined;
    const frame = requestAnimationFrame(() => {
      const walker = document.createTreeWalker(document.getElementById('root'), NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach((node) => { node.nodeValue = toSimplified(node.nodeValue); });
    });
    return () => cancelAnimationFrame(frame);
  }, [language, path]);
  useEffect(() => {
    const [title, description] = pageMetadata[path] || [copy.notFound, copy.notFoundText];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl(path));
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl(path));
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }, [path, copy]);
  const Page = route?.component || NotFoundPage;
  if (route?.standalone) return <Page navigate={navigate} language={language} setLanguage={setLanguage} />;
  return <SiteShell key={language} navigate={navigate} path={path} language={language} setLanguage={setLanguage}><main id="main-content" tabIndex="-1"><Page navigate={navigate} kind={route?.kind} language={language} setLanguage={setLanguage} /></main></SiteShell>;
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
