export default function PlayerBio({ bio, isScrolled }) {
  return (
    <section className={isScrolled ? "visible" : ""}>
      <h2 className="section-header">Bio</h2>

      <p>
        <span>Age: </span>
        {bio.age}
      </p>
      <p>
        <span>Country: </span>
        {bio.country}
      </p>
      <p>
        <span>Height: </span>
        {bio.height}
      </p>
      <p>
        <span>Birthplace: </span>
        {bio.birthplace}
      </p>
      <p>
        <span>College: </span>
        {bio.college}
      </p>
      <p>
        <span>Years In College: </span>
        {bio.yearsInCollege}
      </p>
      <p>
        <span>Nickname(s): </span>
        {bio.nicknames}
      </p>
      <p>
        <span>Years Active: </span>
        {bio.yearsActive}
      </p>
    </section>
  );
}
