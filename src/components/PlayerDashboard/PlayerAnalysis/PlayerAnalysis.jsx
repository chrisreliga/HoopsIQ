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
        <span>Contract Grade:</span> {analysis.contractGrade}
      </h2>

      <div className="headline-card">
        <p className="analysis-headline">{analysis.headline}</p>
      </div>
    </section>
  );
}
