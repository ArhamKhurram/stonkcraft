# StonkCraft

A Minecraft minigame server where every win pays out in fractional shares. This repo is the marketing site.

Built with Next.js (App Router), Tailwind v4 and TypeScript. All data on the site is mock data until the server backend exists.

## Dev

```bash
npm install
npm run dev
```

## Structure

- `src/app` — routes: `/`, `/minigames`, `/leaderboard`, `/how-it-works`
- `src/components` — nav, footer, ticker, cards, tables
- `src/lib/data.ts` — mock tickers, minigames, leaderboard, stats, server IP
- `public/logo.png` — the logo
