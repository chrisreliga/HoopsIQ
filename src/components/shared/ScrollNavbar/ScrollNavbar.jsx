import useFetch from "../../../hooks/useFetch";

import RateLimitCountdown from "../../shared/RateLimitCountdown";

import "./ScrollNavbar.css";

export default function ScrollNavbar({ currentPlayer, bio, isScrolled }) {
  const { data, loading, error } = useFetch(
    `https://api.balldontlie.io/v1/players/${currentPlayer.id}`,
  );

  const apiPlayer = data ? data.data : null;

  return (
    <nav className={`${isScrolled ? "show" : ""} scroll-navbar`}>
      {loading && <p>Loading roster...</p>}
      {error && (
        <div className="team-roster-error">
          <p>Call Limit Reached.</p>
          <RateLimitCountdown />
        </div>
      )}
      <div className="team-logo-container">
        <img src={bio.teamLogo} alt={bio.team} className="team-logo-img" />
        <p className="navbar-player-name">
          {apiPlayer && (
            <>
              {apiPlayer.first_name} {apiPlayer.last_name}
            </>
          )}
        </p>
      </div>
    </nav>
  );
}
