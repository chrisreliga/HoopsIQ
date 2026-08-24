import { players } from "../../data/players.js";

import "./TeamDashboard.css";

import TeamHero from "./TeamHero/TeamHero.jsx";
import TeamGrade from "./TeamGrade/TeamGrade.jsx";
import BackButton from "../shared/BackButton/BackButton.jsx";
import TeamFinances from "./TeamFinances/TeamFinances.jsx";

export default function TeamDashboard() {
  return (
    <main className="team-dashboard-container">
      <div className="">
        <BackButton />

        <TeamHero />

        <TeamGrade />

        <TeamFinances />
      </div>
    </main>
  );
}
