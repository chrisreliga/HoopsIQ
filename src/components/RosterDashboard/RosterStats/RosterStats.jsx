import { teams } from "../../../data/teams";
import { formatMoney } from "../../../utilities/formatMoney";

import "./RosterStats.css";

export default function RosterStats() {
  return (
    <div className="roster-stats-container">
      <div className="roster-stat">
        <p className="roster-stat-header">players</p>
        <p className="roster-stat-players">13</p>
      </div>

      <div className="roster-stat borders">
        <p className="roster-stat-header">payroll</p>
        <p className="roster-stat-payroll">
          {formatMoney(teams[0].finances.totalPayroll)}
        </p>
      </div>

      <div className="roster-stat">
        <p className="roster-stat-header">avg grade</p>
        <p className="roster-stat-grade">B</p>
      </div>
    </div>
  );
}
