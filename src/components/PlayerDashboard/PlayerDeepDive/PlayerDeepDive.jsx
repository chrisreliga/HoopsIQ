export default function PlayerDeepDive({
  currentPlayer,
  isDeepDiveOpen,
  setIsDeepDiveOpen,
}) {
  return (
    <div className="analysis-deepdive">
      <div className="back-btn-spacing">
        <p className="deepdive-text">
          <span className="timeline-marker">The Deal</span>A {""}
          {currentPlayer.contract.type} is {currentPlayer.analysis.ddDeal}
        </p>

        <p className="deepdive-text">
          <span className="timeline-marker">The Skill</span>
          {currentPlayer.analysis.ddSkill}
        </p>

        <p className="deepdive-text">
          <span className="timeline-marker">The Test</span>
          {currentPlayer.analysis.ddTest}
        </p>

        <button
          className="back-btn"
          onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
        >
          <i className="fa-solid fa-chevron-left"></i>Back to Player
        </button>
      </div>
    </div>
  );
}
