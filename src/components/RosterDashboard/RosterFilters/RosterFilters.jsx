import "./RosterFilters.css";

export default function RosterFilters() {
  return (
    <div className="roster-filters-container">
      <button className="roster-filter-pill salary">Salary</button>
      <button className="roster-filter-pill grade">Grade</button>
      <button className="roster-filter-pill age">Age</button>
      <button className="roster-filter-pill expiring">Expiring</button>
    </div>
  );
}
