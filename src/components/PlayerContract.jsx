import { useState } from "react";

export default function PlayerContract({ contract }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="contract-section">
      <h2 className="section-header">Contract</h2>

      <p>
        <span>Type of Deal:</span> {contract.type}
      </p>
      <p>
        <span>Salary:</span> ${contract.salary.toLocaleString()}
      </p>
      <p>
        <span>Length:</span> {contract.length} seasons
      </p>
      <p>
        <span>Contract Term:</span> {contract.startYear}-{contract.endYear}
      </p>
      <p>
        <span>Total Value:</span> ${contract.totalValue.toLocaleString()}
      </p>

      <div className="contract-dropdowns">
        <button className="btn" onClick={() => setIsOpen(!isOpen)}>
          Contract Breakdown <i className="fa-solid fa-chevron-down"></i>
        </button>

        {isOpen && (
          <p>
            A {contract.type} deal is {contract.explanation}
          </p>
        )}
      </div>
    </section>
  );
}
