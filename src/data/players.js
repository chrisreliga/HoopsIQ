import SunsLogo from "../assets/sunslogo.png";

import devinBookerAvatar from "../assets/devinBookerAvatar.avif";
import devinBookerDashboard from "../assets/devinbooker.jpg";
import widescreenBook from "../assets/widescreenBook.jpg";

import dillonBrooksAvatar from "../assets/dillonBrooksAvatar.avif";
import dillonBrooksImage from "../assets/dillonbrooks.jpg";

import jalenGreenAvatar from "../assets/jalenGreenAvatar.webp";
import jalenGreenDashboard from "../assets/jalengreen.jpg";

import milesBridgesAvatar from "../assets/milesBridgesAvatar.webp";

import markWilliamsAvatar from "../assets/markWilliamsAvatar.avif";

import collinGillespieAvatar from "../assets/collinGillespieAvatar.avif";

import khamanMaluachAvatar from "../assets/khamanMaluachAvatar.avif";

import ryanDunnAvatar from "../assets/ryanDunnAvatar.avif";

import osoIghodaroAvatar from "../assets/osoIghodaroAvatar.avif";

import lukeKennardAvatar from "../assets/lukeKennardAvatar.avif";

import rasheerFlemingAvatar from "../assets/rasheerFlemingAvatar.avif";

import jordanGoodwinAvatar from "../assets/jordanGoodwinAvatar.avif";

import haywoodHighsmithAvatar from "../assets/haywoodHighsmithAvatar.avif";

const devinBooker = {
  sport: "NBA",
  id: 57,

  bio: {
    playerImage: devinBookerDashboard,
    widescreenPlayerImage: widescreenBook,
    playerIcon: devinBookerAvatar,
    teamLogo: SunsLogo,
    age: 29,
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
  id: 66,

  bio: {
    playerImage: dillonBrooksImage,
    // widescreenPlayerImage: widescreenBook,
    playerIcon: dillonBrooksAvatar,
    teamLogo: SunsLogo,
    age: 30,
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
  id: 17895966,

  bio: {
    playerImage: jalenGreenDashboard,
    // widescreenPlayerImage: widescreenBook,
    playerIcon: jalenGreenAvatar,
    teamLogo: SunsLogo,
    age: 24,
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

const milesBridges = {
  sport: "NBA",
  id: 62,

  bio: {
    playerImage: null,
    widescreenPlayerImage: null,
    playerIcon: milesBridgesAvatar,
    teamLogo: SunsLogo,
    age: 28,
    height: "6'7\"",
    birthplace: "Flint, MI",
    college: "MSU",
    yearsActive: 7,
  },

  contract: {
    type: "Veteran Contract (Acquired via Trade)",
    salary: 25000000,
    length: 3,
    startYear: 2024,
    endYear: 2027,
    totalValue: 75000000,
  },

  analysis: {
    contractRating: "Real Production, Ugly Baggage",
    contractGrade: "C",
    headline:
      "Phoenix traded two shooters for a guy most teams wouldn't touch.",
    ddDeal: `Charlotte's 3-year, $75M deal is now Phoenix's. It expires after this season, so he's a one-year rental`,
    ddSkill: `17.1 points a night is real. But Phoenix gave up two 40% shooters to get it`,
    ddTest: `Produce enough to make people stop asking why he's here. His 2022 domestic violence plea still follows him`,
  },
};

const markWilliams = {
  sport: "NBA",
  id: 38017698,

  bio: {
    playerImage: null,
    widescreenPlayerImage: null,
    playerIcon: markWilliamsAvatar,
    teamLogo: SunsLogo,
    age: 24,
    height: "7'1\"",
    birthplace: "Norfolk, VA",
    college: "DUKE",
    yearsActive: 4,
  },

  contract: {
    type: "Restricted Free Agent Re-Signing",
    salary: 12666667,
    length: 3,
    startYear: 2026,
    endYear: 2029,
    totalValue: 38000000,
  },

  analysis: {
    contractRating: "Bargain If Healthy",
    contractGrade: "B+",
    headline:
      "$12.7M for a starting center? Only the injury report can ruin this.",
    ddDeal: `As a restricted free agent, Phoenix could match any offer. He stayed for $38M over three years`,
    ddSkill: `64% from the field and 8 boards a night. Starter production at a bench price`,
    ddTest: `60 games was a career high. He has to beat it, because his health is the whole risk`,
  },
};

const collinGillespie = {
  sport: "NBA",
  id: 38017727,

  bio: {
    playerImage: null,
    widescreenPlayerImage: null,
    playerIcon: collinGillespieAvatar,
    teamLogo: SunsLogo,
    age: 27,
    height: "6'1\"",
    birthplace: "Philadelphia, PA",
    college: "NOVA",
    yearsActive: 3,
  },

  contract: {
    type: "Free Agent Re-Signing",
    salary: 12000000,
    length: 4,
    startYear: 2026,
    endYear: 2030,
    totalValue: 48000000,
  },

  analysis: {
    contractRating: "Steal of the Summer",
    contractGrade: "A",
    headline:
      "Three years on a two-way. Now he owns the Suns' three-point record.",
    ddDeal: `Four years, $48M, fully guaranteed. $12M a year for a starting guard is under market`,
    ddSkill: `Hit 40.1% from three and made 232 of them, the most in Suns history`,
    ddTest: `Prove the breakout wasn't a fluke. Every defense is game-planning for him now`,
  },
};

const khamanMaluach = {
  sport: "NBA",
  id: 1057268513,

  bio: {
    playerImage: null,
    widescreenPlayerImage: null,
    playerIcon: khamanMaluachAvatar,
    teamLogo: SunsLogo,
    age: 20,
    height: "7'1\"",
    birthplace: "Rumbek, South Sudan",
    college: "DUKE",
    yearsActive: 1,
  },

  contract: {
    type: "Rookie Scale Contract",
    salary: 6846700,
    length: 4,
    startYear: 2025,
    endYear: 2029,
    totalValue: 27386799,
  },

  analysis: {
    contractRating: "Pure Projection",
    contractGrade: "C+",
    headline: "A 7'1\" lottery bet who barely left the bench as a rookie.",
    ddDeal: `Rookie scale pay is set by draft slot. Phoenix holds team options on years three and four`,
    ddSkill: `The size and shot-blocking are real. Everything else was 3 points in 9 minutes`,
    ddTest: `Earn real minutes behind Williams, or the No. 10 pick starts to look like a miss`,
  },
};

const ryanDunn = {
  sport: "NBA",
  id: 1028025723,

  bio: {
    playerImage: null,
    widescreenPlayerImage: null,
    playerIcon: ryanDunnAvatar,
    teamLogo: SunsLogo,
    age: 23,
    height: "6'7\"",
    birthplace: "Baldwin, NY",
    college: "UVA",
    yearsActive: 2,
  },

  contract: {
    type: "Rookie Scale Contract",
    salary: 3249588,
    length: 4,
    startYear: 2024,
    endYear: 2028,
    totalValue: 12998353,
  },

  analysis: {
    contractRating: "Cheap, Jumper Still Broken",
    contractGrade: "B-",
    headline: "Elite defender, broken jumper. The option clock is ticking.",
    ddDeal: `A late first-round rookie deal. Phoenix has until November to pick up his $5M fourth year`,
    ddSkill: `The perimeter defense is legit. Shooting 33% from three makes him hard to keep on the floor`,
    ddTest: `Fix the jumper or lose the job. A 3-and-D wing without the 3 is just a D`,
  },
};

const osoIghodaro = {
  sport: "NBA",
  id: 1028036515,

  bio: {
    playerImage: null,
    widescreenPlayerImage: null,
    playerIcon: osoIghodaroAvatar,
    teamLogo: SunsLogo,
    age: 24,
    height: "6'11\"",
    birthplace: "Mesa, AZ",
    college: "MARQ",
    yearsActive: 2,
  },

  contract: {
    type: "Second-Round Rookie Contract",
    salary: 1973949,
    length: 4,
    startYear: 2024,
    endYear: 2028,
    totalValue: 7895796,
  },

  analysis: {
    contractRating: "Absolute Heist",
    contractGrade: "A",
    headline: "The 40th pick played all 82 games for under $2.3 million.",
    ddDeal: `Second-round deals are cheap and flexible. Phoenix guaranteed this year early and holds a $2.5M option next year`,
    ddSkill: `Smart passer, 65% finisher, never misses a game. Just don't ask him to shoot threes`,
    ddTest: `Stretch his range or cap his role. Non-shooting bigs get squeezed in the playoffs`,
  },
};

const lukeKennard = {
  sport: "NBA",
  id: 254,

  bio: {
    playerImage: null,
    widescreenPlayerImage: null,
    playerIcon: lukeKennardAvatar,
    teamLogo: SunsLogo,
    age: 30,
    height: "6'5\"",
    birthplace: "Middletown, OH",
    college: "DUKE",
    yearsActive: 9,
  },

  contract: {
    type: "Taxpayer Mid-Level Exception",
    salary: 6215600,
    length: 2,
    startYear: 2026,
    endYear: 2028,
    totalValue: 12431200,
  },

  analysis: {
    contractRating: "Bargain Sniper",
    contractGrade: "A-",
    headline: "The NBA's best three-point shooter cost Phoenix pocket change.",
    ddDeal: `Two years on the taxpayer mid-level, with a player option in year two. He can walk next summer`,
    ddSkill: `Led the league at 47.8% from three. Defense is where opponents go hunting`,
    ddTest: `Stay on the floor in May. Shooters who can't guard get played off the court in the playoffs`,
  },
};

const jordanGoodwin = {
  sport: "NBA",
  id: 18678058,

  bio: {
    playerImage: null,
    widescreenPlayerImage: null,
    playerIcon: jordanGoodwinAvatar,
    teamLogo: SunsLogo,
    age: 27,
    height: "6'3\"",
    birthplace: "Centreville, IL",
    college: "SLU",
    yearsActive: 5,
  },

  contract: {
    type: "Free Agent Re-Signing",
    salary: 6333333,
    length: 3,
    startYear: 2026,
    endYear: 2029,
    totalValue: 19000000,
  },

  analysis: {
    contractRating: "Fair Price for Grit",
    contractGrade: "B",
    headline: "Phoenix paid $19M for the guy who does all the dirty work.",
    ddDeal: `Three years, $19M. The last year is a player option, so he controls the exit`,
    ddSkill: `1.5 steals in 22 minutes and he rebounds like a forward. The jumper comes and goes`,
    ddTest: `Keep defending at this level as he ages. That's the only thing Phoenix is paying for`,
  },
};

const haywoodHighsmith = {
  sport: "NBA",
  id: 3092,

  bio: {
    playerImage: null,
    widescreenPlayerImage: null,
    playerIcon: haywoodHighsmithAvatar,
    teamLogo: SunsLogo,
    age: 29,
    height: "6'5\"",
    birthplace: "Baltimore, MD",
    college: "Wheeling",
    yearsActive: 6,
  },

  contract: {
    type: "Veteran Minimum",
    salary: 3066143,
    length: 1,
    startYear: 2026,
    endYear: 2027,
    totalValue: 3066143,
  },

  analysis: {
    contractRating: "Low Risk, Low Ceiling",
    contractGrade: "B",
    headline: "Waived and re-signed in five days. This was about cap math.",
    ddDeal: `A veteran minimum is the cheapest deal in the league. Phoenix cut him and brought him back to save cap space`,
    ddSkill: `A switchable wing defender out of the Miami system. He barely played last season`,
    ddTest: `Prove he can still guard. On a minimum deal, one bad month and he's gone`,
  },
};

const rasheerFleming = {
  sport: "NBA",
  id: 1057383369,

  bio: {
    playerImage: null,
    widescreenPlayerImage: null,
    playerIcon: rasheerFlemingAvatar,
    teamLogo: SunsLogo,
    age: 22,
    height: "6'9\"",
    birthplace: "Camden, NJ",
    college: "SJU",
    yearsActive: 1,
  },

  contract: {
    type: "Second-Round Rookie Contract",
    salary: 2171347,
    length: 4,
    startYear: 2025,
    endYear: 2029,
    totalValue: 8685386,
  },

  analysis: {
    contractRating: "Cheap Lottery Ticket",
    contractGrade: "B-",
    headline: "A second-round flyer who has to show something this year.",
    ddDeal: `Four years, $8.7M. Second-round deals are this cheap, and year four is a team option`,
    ddSkill: `Long and hit 34.6% from three. But just 4.3 points a night in limited minutes`,
    ddTest: `Earn rotation minutes. With Dunn and Koa Peat around, the wing spots are crowded`,
  },
};

export const players = [
  devinBooker,
  dillonBrooks,
  jalenGreen,
  milesBridges,
  markWilliams,
  collinGillespie,
  khamanMaluach,
  ryanDunn,
  osoIghodaro,
  lukeKennard,
  jordanGoodwin,
  haywoodHighsmith,
  rasheerFleming,
];
