import { players } from "./players";
import SunsLogo from "../assets/sunslogo.png";

const phoenixSuns = {
  sport: "NBA",

  info: {
    name: "Phoenix Suns",
    city: "Phoenix, AZ",
    conference: "Western",
    record: "45-37",
    standings: 8,
    division: "West",
    teamLogo: SunsLogo,
    teamColors: ["#fff", "#333", "#d9d"],
  },

  finances: {
    totalPayroll: 187000000,
    capSpace: -46000000,
    taxBill: 71000000,
    topThreeSalary: 114000000,
    valueRating: 71,
  },

  analysis: {
    teamGrade: "C+",
    headline:
      "Star power they can't build around, and no money left to fix it.",
    statusChips: [
      { label: "Over the cap", tone: "bad" },
      { label: "2 bad contracts", tone: "warn" },
      { label: "Young core", tone: "good" },
    ],
    deepDive: `Phoenix is paying championship prices for a play-in roster. Booker's supermax eats a third of the payroll on its own, and once you stack Green's extension on top of it, 61% of the books are tied to three guys who have never won a series together. Brooks is the one honest deal on the sheet. The problem isn't that they're expensive, plenty of good teams are expensive. The problem is they're expensive AND stuck: no cap space, a tax bill on the way, and no obvious way to move the money without attaching something they'd rather keep.`,
  },
};

export const teams = [phoenixSuns];
