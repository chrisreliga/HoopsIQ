import { Link } from "react-router";
import { players } from "../../data/players";
import "./FullRoster.css";

import RateLimitCountdown from "../shared/RateLimitCountdown";
import BackButton from "../shared/BackButton/BackButton";
import useFetch from "../../hooks/useFetch";

export default function FullRoster() {
  const playerIds = players.map((player) => player.id);
  const query = playerIds.map((id) => `player_ids[]=${id}`).join("&");

  const { data, error } = useFetch(
    `https://api.balldontlie.io/v1/players?per_page=100&${query}`,
  );

  const apiPlayers = data ? data.data : null;

  const combinedPlayers = apiPlayers
    ? players.map((player) => {
        const apiMatch = apiPlayers.find((p) => p.id === player.id);
        return { ...player, api: apiMatch };
      })
    : [];

  return (
    <section className="team-roster-section">
      <BackButton />

      <div className="team-roster-header-styles">
        <h2 className="team-full-roster-header">Roster</h2>
        <p className="team-roster-subheader">
          Tap a player for the full breakdown
        </p>
      </div>

      <div className="team-roster-tile-container">
        {error && (
          <div className="full-roster-error">
            <p>Call Limit Reached.</p>
            <RateLimitCountdown />
          </div>
        )}
        {combinedPlayers.map((player) => (
          <Link
            to={`/player/${player.id}`}
            className="team-roster-tile"
            key={player.api?.id}
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
                {player.bio.name}
              </h4>
              <p className="avatar-position-age">
                {player.bio.position} {""}
                <i className="fa-solid fa-circle dot-separator"></i> Age {""}
                {player.bio.age}
              </p>
              <p className="avatar-salary">
                ${player.contract.salary.toLocaleString()} / yr {""}
                <i className="fa-solid fa-circle dot-separator"></i> thru {""}
                {player.contract.endYear}
              </p>
            </div>
            <div className="avatar-grade-container">
              <p className="avatar-grade">{player.analysis.contractGrade}</p>

              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
