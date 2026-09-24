import "./TeamGrade.css";
import { teams } from "../../../data/teams";

import { getGradeTone } from "../../../utilities/getGradeTone";

export default function TeamGrade() {
  return (
    <section className="team-grade-section">
      <div className="team-grade-flexbox">
        <h2 className="team-grade-header">Team Grade:</h2>
        <span
          className={`team-grade-letter ${getGradeTone(teams[0].analysis.teamGrade)}`}
        >
          {teams[0].analysis.teamGrade}
        </span>
      </div>
      <p className="team-analysis-headline">{teams[0].analysis.headline}</p>
      <ul className="status-chips">
        {teams[0].analysis.statusChips.map((chip) => (
          <li key={chip.label} className={`chip ${chip.tone}`}>
            {chip.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
