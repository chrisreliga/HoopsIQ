export default function PlayerAnalysis({
  analysis,
  isScrolled,
  isDeepDiveOpen,
  setIsDeepDiveOpen,
}) {
  return (
    <section className={isScrolled ? "visible" : ""}>
      <h2 className="analysis-headline">
        <span>Final Grade:</span> {analysis.contractRating}
      </h2>
      <div className="analysis-dropdown">
        <button
          className="analysis-btn"
          onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
        >
          Deep Dive <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      {/* <div className={`analysis-deepdive ${isDeepDiveOpen ? "show" : ""}`}>
        <p>{analysis.deepDive}</p>
      </div> */}
    </section>
  );
}
