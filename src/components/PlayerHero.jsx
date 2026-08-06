export default function PlayerHero({ bio, isScrolled }) {
  return (
    <header>
      <div className={isScrolled ? "hero scrolled" : "hero"}>
        <img src={bio.playerImage} alt={bio.name} />

        <div className="hero-text">
          <h1>{bio.name}</h1>
          <p className="team-name">{bio.team}</p>
          <i className="fa-solid fa-chevron-down scroll-down-icon"></i>
        </div>
      </div>
    </header>
  );
}
