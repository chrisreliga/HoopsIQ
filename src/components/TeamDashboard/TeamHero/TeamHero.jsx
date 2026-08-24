import { teams } from "../../../data/teams";
import "./TeamHero.css";

export default function TeamHero() {
  return (
    <header className="team-hero">
      <div className="team-hero-header">
        <img src={teams[0].info.teamLogo} alt={teams[0].info.name} />

        <h1>{teams[0].info.name}</h1>

        <div className="team-standings">
          <p className="team-division">
            {teams[0].info.standings}th in the {teams[0].info.division}
          </p>
          <i className="fa-solid fa-circle dot-separator"></i>
          <p className="team-record">{teams[0].info.record}</p>
        </div>
      </div>
    </header>
  );
}
