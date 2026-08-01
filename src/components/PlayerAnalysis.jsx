import { useState } from "react";

export default function PlayerAnalysis({ analysis }) {
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);

  return (
    <section>
      <h2 className="section-header">Deep Dive</h2>
      <h3 className="analysis-headline">{analysis.headline}</h3>
      <p>
        <span>Contract Rating:</span> {analysis.contractRating}
      </p>

      <div className="analysis-dropdowns">
        <button
          className="btn analysis-btns"
          onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
        >
          Show Contract Deep Dive <i className="fa-solid fa-chevron-down"></i>
        </button>

        {isDeepDiveOpen && <p>{analysis.deepDive}</p>}
      </div>
    </section>
  );
}
