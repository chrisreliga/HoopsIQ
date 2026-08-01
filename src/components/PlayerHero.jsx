export default function PlayerHero({ bio }) {
  return (
    <header>
      <div className="hero">
        <img src={bio.image} alt={bio.name} />

        <div className="hero-text">
          <h1>{bio.name}</h1>
          <p className="team-name">{bio.team}</p>
        </div>
      </div>
    </header>
  );
}
