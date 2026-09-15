import "./TeamDashboard.css";

import TeamHero from "./TeamHero/TeamHero.jsx";
import TeamGrade from "./TeamGrade/TeamGrade.jsx";
import TeamFinances from "./TeamFinances/TeamFinances.jsx";
import TeamRoster from "./TeamRoster/TeamRoster.jsx";

export default function TeamDashboard() {
  return (
    <main className="team-dashboard-container">
      <TeamHero />

      <TeamGrade />

      <TeamFinances />

      <TeamRoster />
    </main>
  );
}
