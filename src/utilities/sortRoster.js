const GRADE_VALUES = {
  "A+": 12,
  A: 11,
  "A-": 10,
  "B+": 9,
  B: 8,
  "B-": 7,
  "C+": 6,
  C: 5,
  "C-": 4,
  "D+": 3,
  D: 2,
  "D-": 1,
  F: 0,
};

export function sortRoster(players, activeSort) {
  if (!activeSort) return players;

  const sorted = [...players];

  if (activeSort === "Salary") {
    sorted.sort((a, b) => b.contract.salary - a.contract.salary);
  }

  if (activeSort === "Grade") {
    sorted.sort(
      (a, b) =>
        GRADE_VALUES[b.analysis.contractGrade] -
        GRADE_VALUES[a.analysis.contractGrade],
    );
  }

  if (activeSort === "Age") {
    sorted.sort((a, b) => a.bio.age - b.bio.age);
  }

  if (activeSort === "Years Left") {
    sorted.sort((a, b) => b.contract.endYear - a.contract.endYear);
  }

  return sorted;
}
