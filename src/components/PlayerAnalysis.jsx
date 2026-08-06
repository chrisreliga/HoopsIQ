import { useState } from "react";

export default function PlayerAnalysis({ analysis, isScrolled }) {
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);

  return (
    <section className={isScrolled ? "visible" : ""}>
      <h2 className="analysis-headline">
        <span>Final Grade:</span> {analysis.contractRating}
      </h2>

      <div className="analysis-dropdown">
        <button
          className="btn analysis-btn"
          onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
        >
          Deep Dive <i className="fa-solid fa-chevron-right"></i>
        </button>

        {isDeepDiveOpen && (
          <p className="analysis-deepdive">{analysis.deepDive}</p>
        )}
      </div>
    </section>
  );
}
