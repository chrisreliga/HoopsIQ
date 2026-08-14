import devinBookerImage from "../assets/devinbooker.jpeg";
import SunsLogo from "../assets/sunslogo.png";

export const devinBooker = {
  sport: "NBA",

  bio: {
    name: "Devin Booker",
    team: "Phoenix Suns",
    playerImage: devinBookerImage,
    teamLogo: SunsLogo,
    age: 29,
    country: "USA",
    height: "6'5\"",
    birthplace: "Grand Rapids, MI",
    college: "UKY",
    yearsInCollege: 1,
    nicknames: "Book, D-Book",
    yearsActive: 11,
  },

  contract: {
    type: "Designated Veteran Extension (Supermax)",
    salary: 55110496,
    length: 4,
    startYear: 2024,
    endYear: 2027,
    totalValue: 220441984,
    explanation:
      "a special NBA contract for elite players that lets their team offer the most money and longest deal possible to keep them.",
  },

  analysis: {
    contractRating: "Good But Risky",
    contractGrade: { A: "A", B: "B", C: "C", D: "D", F: "F" },
    headline: "A superstar contract with championship pressure",
    deepDive:
      "Devin Booker is getting paid like a true franchise superstar, and the Suns are betting their future on him being the guy who leads them to a championship. The problem is that a $55 million annual salary leaves Phoenix with very little flexibility to improve the roster around him. Booker is absolutely good enough to earn big money, but this contract puts pressure on him to prove he's more than an elite scorer — he has to be the player who makes a team a contender.",
  },
};
