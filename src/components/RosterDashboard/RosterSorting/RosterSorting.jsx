import "./RosterSorting.css";

export default function RosterSorting({ activeSort, setActiveSort }) {
  const sortOptions = ["Salary", "Grade", "Age", "Years Left"];

  return (
    <div className="roster-sorting-container">
      {sortOptions.map((sortOption) => (
        <button
          onClick={() => setActiveSort(sortOption)}
          className={`roster-sorting-pill ${activeSort === sortOption ? "active" : ""}`}
          key={sortOption}
        >
          {sortOption}
        </button>
      ))}
    </div>
  );
}
