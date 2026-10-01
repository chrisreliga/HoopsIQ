import { Link } from "react-router";
import useFetch from "../../../hooks/useFetch";
import { players } from "../../../data/players";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { formatMoney } from "../../../utilities/formatMoney";
import { getGradeTone } from "../../../utilities/getGradeTone";

import RateLimitCountdown from "../../shared/RateLimitCountdown";

import "./TeamRoster.css";

export default function TeamRoster() {
  const playerIds = players.map((player) => player.id);

  const query = playerIds.map((id) => `player_ids[]=${id}`).join("&");

  const { data, loading, error } = useFetch(
    `https://api.balldontlie.io/v1/players?per_page=100&${query}`,
  );

  const isMobile = useMediaQuery("(max-width: 1100px)");

  const apiPlayers = data ? data.data : null;

  const combinedPlayers = apiPlayers
    ? players.map((player) => {
        const apiMatch = apiPlayers.find((p) => p.id === player.id);
        return { ...player, api: apiMatch };
      })
    : null;

  const mobileTeamRoster = combinedPlayers && combinedPlayers.slice(0, 5);

  const visible = isMobile ? mobileTeamRoster : combinedPlayers;

  return (
    <section className="team-roster-section">
      <div className="team-roster-header-styles">
        <h2 className="team-roster-header">Roster</h2>
        <p className="team-roster-subheader">
          Tap a player for the full breakdown
        </p>
      </div>

      <div className="team-roster-tile-container">
        {loading && <p>Loading roster...</p>}
        {error && (
          <div className="team-roster-error">
            <p>Call Limit Reached.</p>
            <RateLimitCountdown />
          </div>
        )}
        {visible &&
          visible.map((player) => (
            <Link
              to={`/player/${player.id}`}
              className="team-roster-tile"
              key={player.id}
            >
              <div className="avatar">
                <img
                  src={player.bio.playerIcon}
                  alt={`${player.api?.first_name} ${player.api?.last_name}`}
                  className="avatar-img"
                />
              </div>
              <div className="roster-player-info">
                <h4
                  className="avatar-name
            "
                >
                  {`${player.api?.first_name} ${player.api?.last_name}`}
                </h4>

                <p className="avatar-position-age">
                  {player.api?.position} {""}
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
