import { players } from "../../data/players.js";

import "./TeamDashboard.css";

import TeamHero from "./TeamHero/TeamHero.jsx";
import TeamGrade from "./TeamGrade/TeamGrade.jsx";
import BackButton from "../shared/BackButton/BackButton.jsx";
import TeamFinances from "./TeamFinances/TeamFinances.jsx";
import TeamRoster from "./TeamRoster/TeamRoster.jsx";

export default function TeamDashboard() {
  return (
    <main className="team-dashboard-container">
      <BackButton />

      <TeamHero />

      <TeamGrade />

      <TeamFinances />

      <TeamRoster />

      <button className="team-deep-dive-btn">
        Team Deep Dive <i className="fa-solid fa-chevron-right"></i>
      </button>
    </main>
  );
}
