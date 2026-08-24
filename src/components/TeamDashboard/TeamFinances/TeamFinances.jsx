import { teams } from "../../../data/teams";
import "./TeamFinances.css";

export default function TeamFinances() {
  return (
    <section className="team-finance-section">
      <div className="team-finance-header-flexbox">
        <h2 className="team-finance-header">The Money</h2>
        <p className="team-finance-subheader">
          Where the payroll sits right now
        </p>
      </div>

      <div className="team-finance-tile-container">
        <p className="team-finance-tile">
          <span>Total Payroll</span> ${teams[0].finances.totalPayroll}
        </p>
        <p className="team-finance-tile">
          <span>Cap Space</span>
          {teams[0].finances.capSpace}
        </p>
        <p className="team-finance-tile">
          <span>Tax Bill</span> ${teams[0].finances.taxBill}
        </p>
        <p className="team-finance-tile top-three-salary-tile">
          <span>Money tied up in the top 3 players</span>
          <div className="top-three-salary-flexbox">
            ${teams[0].finances.topThreeSalary}
            <i className="fa-solid fa-circle dot-separator"></i>
            61% of payroll
          </div>
        </p>
        <p className="team-finance-tile team-value-rating">
          <span>Value Rating Meter</span>
          /* WILL BUILD LATER */
        </p>
      </div>
    </section>
  );
}
