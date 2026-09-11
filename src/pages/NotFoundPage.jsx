import { getUi } from '../content/site';
import { LinkButton } from '../components/SiteShell';
export function NotFoundPage({ navigate, language }) { const copy = getUi(language); return <section className="not-found"><div className="container"><span>404</span><h1>{copy.notFoundTitle}</h1><p>{copy.notFoundText}</p><LinkButton to="/" navigate={navigate}>{copy.returnHome}</LinkButton></div></section>; }
