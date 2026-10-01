import useFetch from "../../../hooks/useFetch";

import RateLimitCountdown from "../../shared/RateLimitCountdown";

import "./PlayerHero.css";

export default function PlayerHero({ isScrolled, currentPlayer }) {
  const { data, loading, error } = useFetch(
    `https://api.balldontlie.io/v1/players/${currentPlayer.id}`,
  );

  const apiPlayer = data ? data.data : null;

  return (
    <header>
      <div className={isScrolled ? "player-hero scrolled" : "player-hero"}>
        {loading && <p>Loading roster...</p>}
        {error && (
          <div className="player-hero-error">
            <p>Call Limit Reached.</p>
            <RateLimitCountdown />
          </div>
        )}
        {apiPlayer && (
          <>
            <picture>
              <source
                media="(min-width: 800px)"
                // srcSet={bio.widescreenPlayerImage}
              />
              <img
                src={currentPlayer.bio.playerImage}
                alt={`${apiPlayer.first_name} ${apiPlayer.last_name}`}
              />
            </picture>

            <div className="player-hero-text">
              <h1>{`${apiPlayer.first_name} ${apiPlayer.last_name}`}</h1>
              <p className="team-name">{apiPlayer.team.name}</p>
              <i className="fa-solid fa-chevron-down scroll-down-icon"></i>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
