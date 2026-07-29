export default function PlayerHeader({ bio }) {
  return (
    <header>
      <div className="player-image">
        <img src={bio.image} alt={bio.name} />
      </div>

      <h1>{bio.name}</h1>

      <p>Team: {bio.team}</p>
      <p>Age: {bio.age}</p>
      <p>Country: {bio.country}</p>
      <p>Height: {bio.height}</p>
      <p>Birthplace: {bio.birthplace}</p>
      <p>College: {bio.college}</p>
      <p>Years In College: {bio.yearsInCollege}</p>
      <p>Nickname(s): {bio.nicknames}</p>
      <p>Years Active: {bio.yearsActive}</p>
    </header>
  );
}
