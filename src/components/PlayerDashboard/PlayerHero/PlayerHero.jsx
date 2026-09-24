import "./PlayerHero.css";

export default function PlayerHero({ bio, isScrolled }) {
  return (
    <header>
      <div className={isScrolled ? "player-hero scrolled" : "player-hero"}>
        <picture>
          <source
            media="(min-width: 800px)"
            // srcSet={bio.widescreenPlayerImage}
          />
          <img src={bio.playerImage} alt={bio.name} />
        </picture>

        <div className="player-hero-text">
          <h1>{bio.name}</h1>
          <p className="team-name">{bio.team}</p>
          <i className="fa-solid fa-chevron-down scroll-down-icon"></i>
        </div>
      </div>
    </header>
  );
}
