import type { Metadata } from "next";
import LeaderboardTable from "@/components/LeaderboardTable";
import EmptyBoard from "@/components/EmptyBoard";
import { leaderboard } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leaderboard",
  description: "Top StonkCraft portfolios this season.",
};

export default function LeaderboardPage() {
  const hasPlayers = leaderboard.length > 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="pixel text-[10px] uppercase text-ice-2">Leaderboard</div>
          <h1 className="pixel pixel-shadow mt-3 text-xl sm:text-3xl text-ice leading-relaxed">SEASON 1</h1>
          <p className="mt-4 text-muted max-w-2xl leading-relaxed">
            Ranked by portfolio value at the last market close. Updates every 15 minutes while markets are open.
          </p>
        </div>
        <div className="block px-4 py-3 text-xs text-muted">
          Season starts <span className="text-ice">when the server opens</span>
        </div>
      </div>

      {hasPlayers ? <FullBoard /> : (
        <div className="mt-12">
          <EmptyBoard />
        </div>
      )}
    </div>
  );
}

function FullBoard() {
  const top = leaderboard.slice(0, 3);
  const totalValue = leaderboard.reduce((a, p) => a + p.portfolio, 0);
  const bestDay = [...leaderboard].sort((a, b) => b.change24h - a.change24h)[0];
  const bestRate = [...leaderboard].sort((a, b) => b.wins / b.games - a.wins / a.games)[0];
  const podiumOrder = [top[1], top[0], top[2]].filter(Boolean);

  return (
    <>
      <div className="mt-12 grid gap-4 sm:grid-cols-3 items-end">
        {podiumOrder.map((p) => {
          const medal = p.rank === 1 ? "🥇" : p.rank === 2 ? "🥈" : "🥉";
          return (
            <div key={p.rank} className={`block-raised p-6 text-center ${p.rank === 1 ? "sm:pt-10" : "sm:pt-4"}`}>
              <div className="text-3xl">{medal}</div>
              <div className="pixel text-xs text-ice mt-3 break-all">{p.name}</div>
              <div className="mt-3 text-lg text-text tabular-nums">
                ${p.portfolio.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
              <div className={`text-xs mt-1 ${p.change24h >= 0 ? "text-up" : "text-down"}`}>
                {p.change24h >= 0 ? "+" : ""}
                {p.change24h.toFixed(1)}% today
              </div>
              <div className="mt-4 text-[11px] text-muted">
                {p.wins} wins · {((p.wins / p.games) * 100).toFixed(0)}% rate · top {p.topHolding}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Total value on board" value={`$${totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} />
        <Stat label="Biggest mover today" value={`${bestDay.name} +${bestDay.change24h}%`} />
        <Stat label="Best win rate" value={`${bestRate.name} ${((bestRate.wins / bestRate.games) * 100).toFixed(0)}%`} />
      </div>

      <div className="mt-10">
        <LeaderboardTable players={leaderboard} full />
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="block px-5 py-4">
      <div className="text-[10px] uppercase tracking-wide text-muted">{label}</div>
      <div className="mt-2 text-sm text-ice break-words">{value}</div>
    </div>
  );
}
