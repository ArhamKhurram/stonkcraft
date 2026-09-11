export type Ticker = { symbol: string; price: number; change: number };

export const tickers: Ticker[] = [
  { symbol: "AAPL", price: 231.14, change: 1.24 },
  { symbol: "NVDA", price: 188.42, change: 3.87 },
  { symbol: "TSLA", price: 262.9, change: -2.11 },
  { symbol: "MSFT", price: 512.33, change: 0.42 },
  { symbol: "AMZN", price: 224.7, change: 1.02 },
  { symbol: "GME", price: 27.55, change: 6.9 },
  { symbol: "AMD", price: 164.02, change: -0.88 },
  { symbol: "META", price: 741.6, change: 0.15 },
  { symbol: "COIN", price: 318.2, change: -3.4 },
  { symbol: "SPY", price: 655.8, change: 0.31 },
  { symbol: "PLTR", price: 172.4, change: 2.6 },
  { symbol: "GOOG", price: 244.1, change: 0.77 },
];

export type Minigame = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  players: string;
  duration: string;
  payout: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  icon: string;
  status: "live" | "beta" | "soon";
};

export const minigames: Minigame[] = [
  {
    slug: "bull-run",
    name: "Bull Run",
    tagline: "Parkour race. First to the bell rings it.",
    description:
      "A timed parkour gauntlet across a floating stock-exchange floor. Checkpoints pay fractional shares; the first player to hit the closing bell takes the pot.",
    players: "2-16",
    duration: "5 min",
    payout: "Up to 0.25 shares",
    difficulty: 3,
    icon: "🐂",
    status: "live",
  },
  {
    slug: "bear-pit",
    name: "Bear Pit",
    tagline: "Last one standing keeps the bag.",
    description:
      "Free-for-all PvP in a shrinking pit. Every elimination transfers a slice of the victim's staked shares to the eliminator. Survive to cash out.",
    players: "8-24",
    duration: "8 min",
    payout: "Winner takes 60%",
    difficulty: 4,
    icon: "🐻",
    status: "live",
  },
  {
    slug: "spleef-street",
    name: "Spleef Street",
    tagline: "Dig the floor out from under Wall Street.",
    description:
      "Classic spleef with a twist: the arena floor is tiled with tickers. Break a tile, the price drops. Fall through and your position gets liquidated.",
    players: "4-12",
    duration: "3 min",
    payout: "Up to 0.1 shares",
    difficulty: 2,
    icon: "⛏️",
    status: "live",
  },
  {
    slug: "diamond-hands",
    name: "Diamond Hands",
    tagline: "Hold the diamond. Don't get paper-handed.",
    description:
      "One diamond block spawns in the arena. Whoever is holding it when the timer ends wins. Everyone else is trying to make you drop it.",
    players: "6-20",
    duration: "6 min",
    payout: "Up to 0.5 shares",
    difficulty: 3,
    icon: "💎",
    status: "live",
  },
  {
    slug: "margin-call",
    name: "Margin Call",
    tagline: "Bed Wars, but the bank wants its money back.",
    description:
      "Team base-defense. Your bed is your margin. Lose it and every death costs you shares. Destroy every other team's bed to close them out.",
    players: "4 teams of 4",
    duration: "15 min",
    payout: "Team pool split",
    difficulty: 5,
    icon: "🛏️",
    status: "beta",
  },
  {
    slug: "pump-and-jump",
    name: "Pump & Jump",
    tagline: "TNT run on a chart that won't stop climbing.",
    description:
      "The floor is a candlestick chart. Blocks vanish behind you as you sprint. Green candles are safe. Red candles are not. Don't look down.",
    players: "4-16",
    duration: "4 min",
    payout: "Up to 0.15 shares",
    difficulty: 2,
    icon: "🚀",
    status: "beta",
  },
  {
    slug: "ipo-rush",
    name: "IPO Rush",
    tagline: "Build the tallest tower before the market opens.",
    description:
      "A build-battle sprint. Teams race to construct the tallest stable structure before the opening bell. Judged on height, stability, and style.",
    players: "2-8",
    duration: "10 min",
    payout: "Podium payouts",
    difficulty: 3,
    icon: "🏗️",
    status: "soon",
  },
  {
    slug: "short-squeeze",
    name: "Short Squeeze",
    tagline: "Hide and seek. The hunters are short on time.",
    description:
      "Hiders disguise as blocks on a trading floor. Seekers have three minutes. Each hider still hidden at the bell earns a payout; each one found forfeits it.",
    players: "6-18",
    duration: "5 min",
    payout: "Up to 0.2 shares",
    difficulty: 2,
    icon: "🫣",
    status: "soon",
  },
];

export type Player = {
  rank: number;
  name: string;
  portfolio: number;
  change24h: number;
  wins: number;
  games: number;
  topHolding: string;
};

// Empty until the server is live. Shape is what the site expects from the API.
export const leaderboard: Player[] = [];

export const stats = [
  { label: "Players online", value: "1" },
  { label: "Shares paid out", value: "0" },
  { label: "Games today", value: "1" },
  { label: "Top payout", value: "None yet" },
];

export const SERVER_IP = "play.stonkcraft.gg";
