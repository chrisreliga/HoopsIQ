export default function ScrollNavbar({ bio, isScrolled }) {
  return (
    <nav className={isScrolled ? "show" : ""}>
      <div className="team-logo-container">
        <img src={bio.teamLogo} alt={bio.team} className="team-logo-img" />
      </div>

      <h2>{bio.name}</h2>
    </nav>
  );
}
