export function getGradeTone(grade) {
  if (!grade) {
    return "neutral-grade";
  }

  const gradeLetter = grade.slice(0, 1);

  if (gradeLetter === "A" || gradeLetter === "B") {
    return "good-grade";
  }
  if (gradeLetter === "C") {
    return "okay-grade";
  }
  if (gradeLetter === "D" || gradeLetter === "F") {
    return "bad-grade";
  }

  return "neutral-grade";
}
