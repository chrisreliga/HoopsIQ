import { useState, useEffect } from "react";
import { Link } from "react-router";
import { players } from "../../../data/players";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { formatMoney } from "../../../utilities/formatMoney";
import { getGradeTone } from "../../../utilities/getGradeTone";

import "./TeamRoster.css";

export default function TeamRoster() {
  const [apiPlayers, setApiPlayers] = useState(null);

  const mobileTeamRoster = apiPlayers.slice(0, 9);
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const visible = isMobile ? mobileTeamRoster : apiPlayers;
  console.log(apiPlayers);

  useEffect(() => {
    fetch("https://api.balldontlie.io/v1/players?per_page=100&team_ids[]=24", {
      headers: { Authorization: "940ac35f-369c-4483-9555-109472ac7f08" },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setApiPlayers(result.data);
      });
  }, []);

  return (
    <section className="team-roster-section">
      <div className="team-roster-header-styles">
        <h2 className="team-roster-header">Roster</h2>
        <p className="team-roster-subheader">
          Tap a player for the full breakdown
        </p>
      </div>

      <div className="team-roster-tile-container">
        {visible &&
          visible.map((player) => (
            <Link
              to={`/player/${player.id}`}
              className="team-roster-tile"
              key={player.id}
            >
              <div className="avatar">
                <img
                  // src={player.bio.playerIcon}
                  alt={player.last_name}
                  className="avatar-img"
                />
              </div>
              <div className="roster-player-info">
                <h4
                  className="avatar-name
            "
                >
                  {player.first_name}
                  {player.last_name}
                </h4>

                <p className="avatar-position-age">
                  {player.position} {""}
                  <i className="fa-solid fa-circle dot-separator"></i> Age {""}
                  {player.bio.age}
                </p>

                <p className="avatar-salary">
                  {formatMoney(player.contract.salary)} / yr {""}
                  <i className="fa-solid fa-circle dot-separator"></i> thru {""}
                  {player.contract.endYear}
                </p>
              </div>

              <div className="avatar-grade-container">
                <p
                  className={`avatar-grade ${getGradeTone(player.analysis.contractGrade)}`}
                >
                  {player.analysis.contractGrade}
                </p>

                <i className="fa-solid fa-chevron-right team-roster-grade-arrow"></i>
              </div>
            </Link>
          ))}
      </div>

      <Link to="/full-roster" className="full-roster-link">
        <button className="full-roster-btn">See Full Roster</button>
      </Link>
    </section>
  );
}
