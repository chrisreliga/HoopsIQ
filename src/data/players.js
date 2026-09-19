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
  },

  analysis: {
    contractRating: "Good But Risky",
    contractGrade: "B",
    headline: "A superstar contract with championship pressure",
    ddDeal: `A supermax is the one contract only your current team is allowed to offer — more money, more years, built so stars never leave. Phoenix spent theirs on Booker through 2030`,
    ddSkill: `Nobody's debating the scoring. Whether scoring alone is worth the biggest cap hit on the roster is the part still open`,
    ddTest: `He has to lift a flawed roster in May, not just fill the box score in January. Phoenix has no cap room left to fix it another way`,
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
  },

  analysis: {
    contractRating: "Great Value, Character Risk",
    contractGrade: "A-",
    headline: "Phoenix didn't sign a player. They signed a reputation.",
    ddDeal: `A veteran extension lets a team lock a player in before he ever reaches free agency — no bidding, no meetings, no other offers. Phoenix used one on Brooks: three years, $73 million, through 2030`,
    ddSkill: `The defense and the edge were never in question, and he just posted a career-high 20.2 a night. Whether that adds up to $24 million a year is the argument`,
    ddTest: `He has to keep the scoring jump without losing the defensive bite. Phoenix paid for both, and if the offense was a one-year spike, this deal ages fast`,
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
  },

  analysis: {
    contractRating: "Steep Price, Unproven Value",
    contractGrade: "D+",
    headline: "Phoenix just bought a ceiling nobody's seen him hit yet.",
    ddDeal: `A rookie extension is the first real payday off a first contract, and Green's ends with a player option — $36 million that he decides on, not Phoenix. The leverage sits with him`,
    ddSkill: `He can drop 30 on anybody and the athleticism is genuinely rare. Whether it has ever made a team better is the question nobody has answered yet`,
    ddTest: `He has to make the game easier for Booker instead of taking turns with him. A 1.4 assist-to-turnover ratio won't survive a front office deciding whether to pay him twice`,
  },
};

// TEST PLAYER
const jalenGreens = {
  sport: "NBA",
  id: "jalen-greens",

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
  },

  analysis: {
    contractRating: "Steep Price, Unproven Value",
    contractGrade: "D+",
    headline: "Phoenix just bought a ceiling nobody's seen him hit yet.",
    ddDeal: `A rookie extension is the first real payday off a first contract, and Green's ends with a player option — $36 million that he decides on, not Phoenix. The leverage sits with him`,
    ddSkill: `He can drop 30 on anybody and the athleticism is genuinely rare. Whether it has ever made a team better is the question nobody has answered yet`,
    ddTest: `He has to make the game easier for Booker instead of taking turns with him. A 1.4 assist-to-turnover ratio won't survive a front office deciding whether to pay him twice`,
  },
};
// TEST PLAYER

const milesBridges = {
  sport: "NBA",
  id: "miles-bridges",

  bio: {
    name: "Miles Bridges",
    team: "Phoenix Suns",
    position: "",
    playerImage: "",
    widescreenPlayerImage: "",
    playerIcon: "",
    teamLogo: SunsLogo,
    age: "",
    country: "USA",
    height: "",
    birthplace: "",
    college: "",
    yearsActive: "",
  },

  contract: {
    type: "",
    salary: "$$$$",
    length: "",
    startYear: "",
    endYear: "",
    totalValue: "$$$$",
  },

  analysis: {
    contractRating: "",
    contractGrade: "",
    headline:
      "Beat the shit out of his girlfriend... kind of a controversial signing",
    ddDeal: `A rookie extension is the first real payday off a first contract, and Green's ends with a player option — $36 million that he decides on, not Phoenix. The leverage sits with him`,
    ddSkill: `He can drop 30 on anybody and the athleticism is genuinely rare. Whether it has ever made a team better is the question nobody has answered yet`,
    ddTest: `He has to make the game easier for Booker instead of taking turns with him. A 1.4 assist-to-turnover ratio won't survive a front office deciding whether to pay him twice`,
  },
};

export const players = [
  devinBooker,
  dillonBrooks,
  jalenGreen,
  jalenGreens,
  milesBridges,
];
