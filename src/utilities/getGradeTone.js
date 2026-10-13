export function getGradeTone(grade) {
  if (!grade) {
    return "neutral-grade";
  }

  const gradeLetter = grade.slice(0, 1);

  if (gradeLetter === "A" || gradeLetter === "B") {
    return "good-grade good-grade-container";
  }
  if (gradeLetter === "C") {
    return "okay-grade okay-grade-container";
  }
  if (gradeLetter === "D" || gradeLetter === "F") {
    return "bad-grade bad-grade-container";
  }

  return "neutral-grade";
}
