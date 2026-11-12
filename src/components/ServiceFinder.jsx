import { useState } from 'react';
import { toSimplified } from '../content/site';
import { serviceFinderCopy } from '../content/serviceFinder';
import { Icon } from './SiteShell';
import { Reveal, SectionHeading } from './Sections';

export function ServiceFinder({ language, navigate }) {
  const baseCopy = language === 'en' ? serviceFinderCopy.en : serviceFinderCopy['zh-Hant'];
  const copy = language === 'zh-Hans' ? toSimplified(baseCopy) : baseCopy;
  const [selected, setSelected] = useState(null);
  const current = copy.options.find(option => option.id === selected);
  const followLink = (event, to) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    navigate(to);
  };
  return (
    <section className="finder-section" id="service-finder" aria-label={copy.question}>
      <div className="container finder-layout">
        <SectionHeading title={copy.title} text={copy.text} />
        <Reveal className="finder intent-finder">
          <fieldset className="finder-options">
            <legend className="sr-only">{copy.question}</legend>
            {copy.options.map(option => (
              <label className={`finder-choice${selected === option.id ? ' active' : ''}`} key={option.id}>
                <input type="radio" name="service-intent" value={option.id}
                  checked={selected === option.id} onChange={() => setSelected(option.id)} />
                <span>{option.label}</span><Icon name="arrow" size={16} />
              </label>
            ))}
          </fieldset>
          <div className="finder-result" aria-live="polite" aria-atomic="true">
            <h3>{current?.title || copy.emptyTitle}</h3>
            <p>{current?.text || copy.emptyText}</p>
            {current && (
              <div className="finder-links">
                {current.links.map(link => (
                  <a className="button button-light" key={link.to} href={link.to}
                    onClick={event => followLink(event, link.to)}>
                    {link.label}<Icon name="arrow" size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
