import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SiteShell } from './components/SiteShell';
import { HomePage } from './pages/HomePage';
import { IncorporationPage } from './pages/IncorporationPage';
import { BudFundPage } from './pages/BudFundPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ContentPage } from './pages/ContentPage';
import { getUi, toSimplified } from './content/site';
import './styles.css';

const routes = {
  '/': { component: HomePage, key: 'home' },
  '/company-registration/hong-kong-resident': { component: IncorporationPage, kind: 'local', key: 'local' },
  '/company-registration/mainland-resident': { component: IncorporationPage, kind: 'mainland', key: 'mainland' },
  '/bud-fund': { component: BudFundPage, key: 'bud' },
  '/pricing': { component: ContentPage, kind: 'pricing', key: 'pricing' },
  '/cases': { component: ContentPage, kind: 'cases', key: 'cases' },
  '/about': { component: ContentPage, kind: 'about', key: 'about' },
  '/contact': { component: ContentPage, kind: 'contact', key: 'contact' },
  '/services/compliance': { component: ContentPage, kind: 'maintenance', key: 'maintenance' },
  '/services/cross-border': { component: ContentPage, kind: 'crossBorder', key: 'crossBorder' },
  '/privacy-policy': { component: LegalPage, kind: 'privacy', key: 'privacy' },
  '/terms-of-use': { component: LegalPage, kind: 'terms', key: 'terms' },
};

const metadata = {
  home: ['WINFO | Hong Kong Business Solutions', 'Company setup, BUD Fund applications and practical business support for Hong Kong and cross-border founders.'],
  local: ['Set up a Hong Kong company | WINFO', 'A clear company incorporation process for Hong Kong founders.'],
  mainland: ['Hong Kong company setup for mainland founders | WINFO', 'Cross-border incorporation preparation, company secretarial and banking readiness.'],
  bud: ['BUD Fund application support | WINFO', 'Initial BUD Fund assessment, project planning, document preparation and coordination.'],
  pricing: ['Pricing | WINFO', 'WINFO service scope and pricing framework.'],
  cases: ['Engagement scenarios | WINFO', 'Illustrative WINFO business service scenarios.'],
  about: ['About WINFO | Hong Kong Business Solutions', 'How WINFO supports Hong Kong and cross-border businesses.'],
  contact: ['Contact WINFO', 'Contact WINFO for Hong Kong business service enquiries.'],
  maintenance: ['Compliance and operations | WINFO', 'Ongoing company maintenance, accounting and tax coordination.'],
  crossBorder: ['Cross-border and technology landing | WINFO', 'Cross-border expansion and technology landing preparation.'],
  privacy: ['Privacy policy | WINFO', 'WINFO privacy policy draft and personal-data handling information.'],
  terms: ['Terms of use | WINFO', 'WINFO website terms of use.'],
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
    setPath(targetPath);
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
  useEffect(() => { const [title, description] = metadata[route?.key] || [copy.notFound, copy.notFoundText]; document.title = title; document.querySelector('meta[name="description"]')?.setAttribute('content', description); document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${window.location.origin}${window.location.pathname}`); }, [path, route, copy]);
  const Page = route?.component || NotFoundPage;
  return <SiteShell key={language} navigate={navigate} path={path} language={language} setLanguage={setLanguage}><main id="main-content" tabIndex="-1"><Page navigate={navigate} kind={route?.kind} language={language} /></main></SiteShell>;
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
