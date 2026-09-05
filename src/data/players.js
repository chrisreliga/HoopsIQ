import SunsLogo from "../assets/sunslogo.png";

import devinBookerImage from "../assets/devinbooker.jpg";
import widescreenBook from "../assets/widescreenBook.jpg";
import devinbookerPlayerIcon from "../assets/devinbookerPlayerIcon.jpg";

import dillonBrooksImage from "../assets/dillonbrooks.jpg";
import dillonbrooksPlayerIcon from "../assets/dillonbrooksPlayerIcon.jpeg";

import jalenGreenImage from "../assets/jalengreen.jpg";
import jalengreenPlayerIcon from "../assets/jalengreenPlayerIcon.png";

const devinBooker = {
  sport: "NBA",
  id: "devin-booker",

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
    contractGrade: "B",
    headline: "A superstar contract with championship pressure",
    ddDeal: `Devin Booker just signed a $55 million-a-year deal that reads like a dare: win now, or wear it. Phoenix bet the whole checkbook on him being a true number one, but he's never dragged a team out of the first round without another star doing half the lifting.`,
    ddSkill: `Nobody's questioning if he can score, that part's not in question.`,
    ddTest: `The real test is whether he can carry guys who aren't as good as him to the finish line, because there's no cap space left to find out any other way.`,
  },
};

const dillonBrooks = {
  sport: "NBA",
  id: "dillon-brooks",

  bio: {
    name: "Dillon Brooks",
    team: "Phoenix Suns",
    position: "Forward",
    playerImage: dillonBrooksImage,
    // widescreenPlayerImage: widescreenBook,
    playerIcon: dillonbrooksPlayerIcon,
    teamLogo: SunsLogo,
    age: 30,
    country: "CAD",
    height: "6'7\"",
    birthplace: "Mississauga, ON",
    college: "ORE",
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
    contractGrade: "A-",
    headline: "Phoenix didn't sign a player. They signed a reputation.",
    ddDeal: `Devin Booker just signed a $55 million-a-year deal that reads like a dare: win now, or wear it. Phoenix bet the whole checkbook on him being a true number one, but he's never dragged a team out of the first round without another star doing half the lifting.`,
  },
};

const jalenGreen = {
  sport: "NBA",
  id: "jalen-green",

  bio: {
    name: "Jalen Green",
    team: "Phoenix Suns",
    position: "Guard",
    playerImage: jalenGreenImage,
    // widescreenPlayerImage: widescreenBook,
    playerIcon: jalengreenPlayerIcon,
    teamLogo: SunsLogo,
    age: 24,
    country: "USA",
    height: "6'4\"",
    birthplace: "Fresno, CA",
    college: "None",
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
    contractGrade: "D+",
    headline: "Phoenix just bought a ceiling nobody's seen him hit yet.",
    ddDeal: `Devin Booker just signed a $55 million-a-year deal that reads like a dare: win now, or wear it. Phoenix bet the whole checkbook on him being a true number one, but he's never dragged a team out of the first round without another star doing half the lifting.`,
  },
};

export const players = [devinBooker, dillonBrooks, jalenGreen];
