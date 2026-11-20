import { ChartLineUp, CheckSquare, FolderOpen, UsersThree } from "@phosphor-icons/react";

const SECTION_META = Object.freeze({
  timeline: { kicker: "CHRONOLOGY / CAUSE AND EFFECT", title: "Timeline of a Revolution", description: "Move through four turning points, then reveal how one crisis shaped the next.", Icon: ChartLineUp },
  people: { kicker: "PEOPLE / PERSPECTIVE", title: "People in the Conflict", description: "Compare the goals and pressures that placed neighbors on different sides of imperial rule.", Icon: UsersThree },
  evidence: { kicker: "ARCHIVE / SOURCE REASONING", title: "Evidence Room", description: "Inspect what each source can support, and what it cannot prove on its own.", Icon: FolderOpen },
  memory: { kicker: "UNIT REVIEW / SYNTHESIS", title: "Reconstruct the Argument", description: "Complete a five-question end-of-unit assessment using chronology, perspective, and evidence.", Icon: CheckSquare },
});

export function UnitSectionHeader({ section, trailing }) {
  const meta = SECTION_META[section];
  const Icon = meta.Icon;
  return (
    <header className="unit-section-header">
      <div className="unit-section-title">
        <span className="unit-section-icon"><Icon size={24} weight="duotone" /></span>
        <div>
          <span className="unit-context-title">American Revolution · The Road to Independence</span>
          <small>{meta.kicker}</small>
          <h1 id={`unit-${section}-title`}>{meta.title}</h1>
          <p>{meta.description}</p>
        </div>
      </div>
      {trailing}
    </header>
  );
}
