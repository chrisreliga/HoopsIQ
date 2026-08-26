import "./TeamRoster.css";
import { players } from "../../../data/players";

export default function TeamRoster() {
  return (
    <section className="team-roster-section">
      <div className="team-roster-header-styles">
        <h2 className="team-roster-header">Roster</h2>
        <p className="team-roster-subheader">
          Tap a player for the full breakdown
        </p>
      </div>

      <div className="team-roster-tile-container">
        <div className="team-roster-tile">
          <div className="avatar">
            <img
              src={players[0].bio.playerIcon}
              alt={players[0].bio.name}
              className="avatar-img"
            />
          </div>

          <div className="roster-player-info">
            <h4
              className="avatar-name
            "
            >
              {players[0].bio.name}
            </h4>
            <p className="avatar-position-age">
              {players[0].bio.position}
              <i className="fa-solid fa-circle dot-separator"></i> Age <></>
              {players[0].bio.age}
            </p>
            <p className="avatar-salary">
              ${players[0].contract.salary.toLocaleString()} / yr
              <i className="fa-solid fa-circle dot-separator"></i> thru
              {players[0].contract.endYear}
            </p>
          </div>

          <div className="avatar-grade-container">
            <p className="avatar-grade">
              {players[1].analysis.contractGrade.B}
            </p>
          </div>

          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <div className="team-roster-tile">
          <div className="avatar">
            <img
              src={players[1].bio.playerIcon}
              alt={players[1].bio.name}
              className="avatar-img"
            />
          </div>

          <div className="roster-player-info">
            <h4
              className="avatar-name
            "
            >
              {players[1].bio.name}
            </h4>
            <p className="avatar-position-age">
              {players[1].bio.position}
              <i className="fa-solid fa-circle dot-separator"></i> Age <></>
              {players[1].bio.age}
            </p>
            <p className="avatar-salary">
              ${players[1].contract.salary.toLocaleString()} / yr
              <i className="fa-solid fa-circle dot-separator"></i> thru
              {players[1].contract.endYear}
            </p>
          </div>

          <div className="avatar-grade-container">
            <p className="avatar-grade">
              {players[1].analysis.contractGrade.A}-
            </p>
          </div>

          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <div className="team-roster-tile">
          <div className="avatar">
            <img
              src={players[2].bio.playerIcon}
              alt={players[2].bio.name}
              className="avatar-img"
            />
          </div>

          <div className="roster-player-info">
            <h4
              className="avatar-name
            "
            >
              {players[2].bio.name}
            </h4>
            <p className="avatar-position-age">
              {players[2].bio.position}
              <i className="fa-solid fa-circle dot-separator"></i> Age <></>
              {players[2].bio.age}
            </p>
            <p className="avatar-salary">
              ${players[2].contract.salary.toLocaleString()} / yr
              <i className="fa-solid fa-circle dot-separator"></i> thru
              {players[2].contract.endYear}
            </p>
          </div>

          <div className="avatar-grade-container">
            <p className="avatar-grade">
              {players[2].analysis.contractGrade.D}+
            </p>
          </div>

          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
}
