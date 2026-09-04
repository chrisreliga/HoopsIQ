import "./PlayerAnalysis.css";

export default function PlayerAnalysis({
  analysis,
  isScrolled,
  isDeepDiveOpen,
  setIsDeepDiveOpen,
}) {
  return (
    <section className={isScrolled ? "visible" : ""}>
      <h2 className="analysis-grade">
        <span>Final Grade:</span> {analysis.contractGrade}
      </h2>

      <div className="headline-card">
        <p className="analysis-headline">{analysis.headline}</p>
      </div>

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
