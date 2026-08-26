import SunsLogo from "../assets/sunslogo.png";

import devinBookerImage from "../assets/devinbooker.jpeg";
import widescreenBook from "../assets/widescreenBook.jpg";
import devinbookerPlayerIcon from "../assets/devinbookerPlayerIcon.jpg";

import dillonbrooksPlayerIcon from "../assets/dillonbrooksPlayerIcon.jpeg";

import jalengreenPlayerIcon from "../assets/jalengreenPlayerIcon.png";

const devinBooker = {
  sport: "NBA",

  bio: {
    name: "Devin Booker",
    team: "Phoenix Suns",
    position: "Guard",
    playerImage: devinBookerImage,
    widescreenPlayerImage: widescreenBook,
    playerIcon: devinbookerPlayerIcon,
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
    deepDive: `Devin Booker just signed a $55 million-a-year deal that reads like a dare: win now, or wear it. Phoenix bet the whole checkbook on him being a true number one, but he's never dragged a team out of the first round without another star doing half the lifting. Nobody's questioning if he can score, that part's not in question. The real test is whether he can carry guys who aren't as good as him to the finish line, because there's no cap space left to find out any other way.`,
  },
};

const dillonBrooks = {
  sport: "NBA",

  bio: {
    name: "Dillon Brooks",
    team: "Phoenix Suns",
    position: "Forward",
    // playerImage: devinBookerImage,
    // widescreenPlayerImage: widescreenBook,
    playerIcon: dillonbrooksPlayerIcon,
    teamLogo: SunsLogo,
    age: 30,
    country: "CAD",
    height: "6'7\"",
    birthplace: "Mississauga, ON",
    college: "ORE",
    yearsInCollege: 3,
    nicknames: "The Villain",
    yearsActive: 9,
  },

  contract: {
    type: "Standard Veteran Extension",
    salary: 24300000,
    length: 3,
    startYear: 2027,
    endYear: 2030,
    totalValue: 73000000,
    explanation:
      "a standard way for teams to add more years and money onto a player already on their roster, without the extra perks that are only reserved for a small group of top-tier superstars.",
  },

  analysis: {
    contractRating: "Great Value, Character Risk",
    contractGrade: { A: "A", B: "B", C: "C", D: "D", F: "F" },
    headline: "Phoenix didn't sign a player. They signed a reputation.",
    deepDive: `Dillon Brooks didn't luck into this money, he earned every dollar of it. Nobody in the league brings it harder, night in and night out, and there were stretches last season where he was flat out outplaying Booker, not just keeping up with him. That reputation as tough, gritty, and relentless isn't a persona, it's just who he is on the floor. The real question now isn't whether he deserves the bag, he clearly does. It's whether Phoenix can keep getting that same fire out of him for three more years, because the same intensity that makes him unguardable is the same intensity that's gotten him tossed more than anyone in the league.`,
  },
};

const jalenGreen = {
  sport: "NBA",

  bio: {
    name: "Jalen Green",
    team: "Phoenix Suns",
    position: "Guard",
    // playerImage: devinBookerImage,
    // widescreenPlayerImage: widescreenBook,
    playerIcon: jalengreenPlayerIcon,
    teamLogo: SunsLogo,
    age: 24,
    country: "USA",
    height: "6'4\"",
    birthplace: "Fresno, CA",
    college: "",
    yearsInCollege: 0,
    nicknames: "Bounce, JG4",
    yearsActive: 5,
  },

  contract: {
    type: "Rookie Scale Extension",
    salary: 35000000,
    length: 3,
    startYear: 2025,
    endYear: 2028,
    totalValue: 105000000,
    explanation:
      "a deal a team offers a young player still on his rookie contract, usually before his fourth season ends, to lock him up long-term before the rest of the league gets a chance to bid on him.",
  },

  analysis: {
    contractRating: "Steep Price, Unproven Value",
    contractGrade: { A: "A", B: "B", C: "C", D: "D", F: "F" },
    headline: "Phoenix just bought a ceiling nobody's seen him hit yet.",
    deepDive: `Jalen Green might be the most explosive athlete on this roster, and Phoenix just paid him like it. The problem is nobody's ever won consistently with him as the focal point — in Houston he put up buckets on a team that kept losing, and that's the exact question mark he's bringing with him. $35 million a year isn't superstar money, but it's not bench money either, and right now he's getting paid off potential more than proof. If those highlight dunks turn into winning basketball next to Booker and Brooks, this extension looks like a steal. If not, Phoenix just overpaid for a career highlight reel.`,
  },
};

export const players = [devinBooker, dillonBrooks, jalenGreen];
