export default function PlayerBio({ bio, isScrolled }) {
  return (
    <section className={isScrolled ? "visible" : ""}>
      <h2 className="section-header">Bio</h2>

      <div className="tile-container">
        <p className="tile">
          <span>Age: </span>
          {bio.age}
        </p>
        <p className="tile">
          <span>Country: </span>
          {bio.country}
        </p>
        <p className="tile">
          <span>Height: </span>
          {bio.height}
        </p>
        <p className="tile">
          <span>Birthplace: </span>
          {bio.birthplace}
        </p>
        <p className="tile">
          <span>College: </span>
          {bio.college}
        </p>
        <p className="tile">
          <span>Years In College: </span>
          {bio.yearsInCollege}
        </p>
        <p className="tile">
          <span>Nickname: </span>
          {bio.nicknames}
        </p>
        <p className="tile">
          <span>Years Active: </span>
          {bio.yearsActive}
        </p>
      </div>
    </section>
  );
}
