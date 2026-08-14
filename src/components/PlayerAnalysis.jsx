export default function PlayerAnalysis({
  analysis,
  isScrolled,
  isDeepDiveOpen,
  setIsDeepDiveOpen,
}) {
  return (
    <section className={isScrolled ? "visible" : ""}>
      <h2 className="analysis-grade">
        <span>Final Grade:</span> -{analysis.contractGrade.B}
      </h2>
      <p className="analysis-headline">{analysis.headline}</p>

      <div className="analysis-dropdown">
        <button
          className="analysis-btn"
          onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
        >
          Deep Dive <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
