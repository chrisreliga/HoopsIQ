import { teams } from "../../../data/teams";

import { formatMoney } from "../../../utilities/formatMoney.js";

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
          <span>Total Payroll</span>
          {formatMoney(teams[0].finances.totalPayroll)}
        </p>
        <p className="team-finance-tile">
          <span>Cap Space</span>
          {formatMoney(teams[0].finances.capSpace)}
        </p>
        <p className="team-finance-tile">
          <span>Tax Bill</span> {formatMoney(teams[0].finances.taxBill)}
        </p>

        <div className="team-finance-tile top-three-salary-tile">
          <span>Money tied up in the top 3 players</span>
          <div className="top-three-salary-flexbox">
            {formatMoney(teams[0].finances.topThreeSalary)}
            <i className="fa-solid fa-circle dot-separator"></i>
            61% of payroll
          </div>
        </div>

        {/* Money Meter */}
        <div className="team-finance-tile team-meter-tile">
          <div className="top-meter">
            <p>Value for money</p>
            <p className="above-line-highlight">Paying above the line</p>
          </div>

          <div className="meter-bar">
            <div className="meter-fill"></div>
          </div>

          <div className="meter-marks">
            <p>Bargain</p>
            <p>Fair</p>
            <p>Overpaying</p>
          </div>
        </div>
      </div>
    </section>
  );
}
