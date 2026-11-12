import { preparationChecklist, preparationChecklistText } from './preparationModel';

export function PreparationChecklist({ data, language }) {
  const checklist = preparationChecklist(data, language);
  const { copy, groups, sources } = checklist;
  const download = `data:text/plain;charset=utf-8,${encodeURIComponent('\uFEFF' + preparationChecklistText(checklist))}`;
  return (
    <section className="wizard-preparation" aria-labelledby="wizard-preparation-title">
      <h3 id="wizard-preparation-title">{copy.title}</h3>
      <p>{copy.intro}</p>
      <div className="preparation-groups">
        {groups.map(group => (
          <details key={group.id}>
            <summary>{group.title}</summary>
            <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </details>
        ))}
      </div>
      <a className="button button-secondary" href={download} download={`WINFO-checklist-${language}.txt`}>
        {copy.download}
      </a>
      <p className="preparation-privacy">{copy.privacy}</p>
      <p>{copy.note}</p>
      <details className="preparation-sources">
        <summary>{copy.sources}</summary>
        <ul>{sources.map(source => (
          <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>
        ))}</ul>
        <p>{copy.checked}</p>
      </details>
    </section>
  );
}
