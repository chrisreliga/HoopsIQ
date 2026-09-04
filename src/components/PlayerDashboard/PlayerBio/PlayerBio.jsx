import "./PlayerBio.css";

export default function PlayerBio({ bio, isScrolled }) {
  return (
    <section className={isScrolled ? "visible" : ""}>
      <h2 className="section-header">Bio</h2>

      <div className="player-bio-section tile-container">
        <p className="player-bio-tile">
          <span className="tile-label">Age: </span>
          {bio.age}
        </p>
        <p className="player-bio-tile">
          <span className="tile-label">Country: </span>
          {bio.country}
        </p>
        <p className="player-bio-tile">
          <span className="tile-label">Height: </span>
          {bio.height}
        </p>
        <p className="player-bio-tile">
          <span className="tile-label">Birthplace: </span>
          {bio.birthplace}
        </p>
        <p className="player-bio-tile">
          <span className="tile-label">College: </span>
          {bio.college}
        </p>
        <p className="player-bio-tile">
          <span className="tile-label">Years In College: </span>
          {bio.yearsInCollege}
        </p>
        <p className="player-bio-tile">
          <span className="tile-label">Nickname: </span>
          {bio.nicknames}
        </p>
        <p className="player-bio-tile">
          <span className="tile-label">Years Active: </span>
          {bio.yearsActive}
        </p>
      </div>
    </section>
  );
}
