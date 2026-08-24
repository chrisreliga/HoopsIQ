import { useState } from "react";
import "./PlayerContract.css";

export default function PlayerContract({ contract, isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h2 className="section-header">Contract</h2>
      <section className={isScrolled ? "visible tile-container" : ""}>
        <p className="player-tile deal-type-tile">
          <span>Type of Deal:</span> {contract.type}
        </p>
        <p className="player-tile">
          <span>Salary:</span> ${contract.salary.toLocaleString()}
        </p>
        <p className="player-tile">
          <span>Length:</span> {contract.length} seasons
        </p>
        <p className="player-tile">
          <span>Contract Term:</span> {contract.startYear}-{contract.endYear}
        </p>
        <p className="player-tile">
          <span>Total Value:</span> ${contract.totalValue.toLocaleString()}
        </p>

        <div className="contract-dropdown">
          {isOpen && (
            <p className="contract-explanation">
              A {contract.type} deal is {contract.explanation}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
