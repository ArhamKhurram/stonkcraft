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

export const leaderboard: Player[] = [
  { rank: 1, name: "Diamond_Dan", portfolio: 318.4, change24h: 4.1, wins: 19, games: 44, topHolding: "NVDA" },
  { rank: 2, name: "xX_Buffett_Xx", portfolio: 276.9, change24h: 1.3, wins: 16, games: 51, topHolding: "AAPL" },
  { rank: 3, name: "creeper_capital", portfolio: 241.05, change24h: -1.8, wins: 17, games: 39, topHolding: "TSLA" },
  { rank: 4, name: "Enderman_ETF", portfolio: 198.2, change24h: 2.6, wins: 12, games: 33, topHolding: "SPY" },
  { rank: 5, name: "PaperHands69", portfolio: 164.7, change24h: -5.4, wins: 8, games: 41, topHolding: "GME" },
  { rank: 6, name: "Notch_Trades", portfolio: 152.3, change24h: 1.1, wins: 11, games: 30, topHolding: "MSFT" },
  { rank: 7, name: "SteveJobs_", portfolio: 139.8, change24h: 0.4, wins: 10, games: 28, topHolding: "AAPL" },
  { rank: 8, name: "Blaze_Bull", portfolio: 121.6, change24h: 2.2, wins: 9, games: 27, topHolding: "AMD" },
  { rank: 9, name: "villager_hft", portfolio: 104.0, change24h: -0.3, wins: 8, games: 24, topHolding: "META" },
  { rank: 10, name: "OreGainz", portfolio: 88.5, change24h: 3.0, wins: 6, games: 19, topHolding: "PLTR" },
  { rank: 11, name: "Redstone_Ray", portfolio: 73.2, change24h: 0.7, wins: 6, games: 21, topHolding: "AMZN" },
  { rank: 12, name: "moon_boi", portfolio: 61.9, change24h: 8.9, wins: 4, games: 17, topHolding: "COIN" },
];

export const stats = [
  { label: "Players online", value: "1" },
  { label: "Shares paid out", value: "0" },
  { label: "Games today", value: "1" },
  { label: "Top payout", value: "None yet" },
];

export const SERVER_IP = "play.stonkcraft.gg";
