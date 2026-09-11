import type { Player } from "@/lib/data";

const medal = ["🥇", "🥈", "🥉"];

export default function LeaderboardTable({ players, full = false }: { players: Player[]; full?: boolean }) {
  return (
    <div className="block overflow-x-auto">
      <table className="w-full text-sm min-w-[560px]">
        <thead>
          <tr className="pixel text-[9px] uppercase text-muted border-b-2 border-line">
            <th className="text-left px-4 py-3 font-normal">#</th>
            <th className="text-left px-4 py-3 font-normal">Player</th>
            <th className="text-right px-4 py-3 font-normal">Portfolio</th>
            <th className="text-right px-4 py-3 font-normal">24h</th>
            {full && <th className="text-right px-4 py-3 font-normal">W / G</th>}
            {full && <th className="text-right px-4 py-3 font-normal">Win %</th>}
            <th className="text-right px-4 py-3 font-normal">Top</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => {
            const up = p.change24h >= 0;
            return (
              <tr key={p.rank} className="border-b border-line/60 hover:bg-panel-2 transition-colors">
                <td className="px-4 py-3 text-muted">
                  {p.rank <= 3 ? <span className="text-base">{medal[p.rank - 1]}</span> : p.rank}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 shrink-0 block-raised !shadow-none border-2 border-line"
                      style={{ background: hashColor(p.name) }}
                      aria-hidden
                    />
                    <span className="text-ice font-medium">{p.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-text tabular-nums">
                  ${p.portfolio.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums ${up ? "text-up" : "text-down"}`}>
                  {up ? "+" : ""}
                  {p.change24h.toFixed(1)}%
                </td>
                {full && (
                  <td className="px-4 py-3 text-right text-muted tabular-nums">
                    {p.wins} / {p.games}
                  </td>
                )}
                {full && (
                  <td className="px-4 py-3 text-right text-text tabular-nums">
                    {((p.wins / p.games) * 100).toFixed(0)}%
                  </td>
                )}
                <td className="px-4 py-3 text-right">
                  <span className="pixel text-[9px] text-ice-2">{p.topHolding}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function hashColor(s: string) {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0;
  const hue = 170 + (Math.abs(h) % 40);
  return `hsl(${hue} 45% ${35 + (Math.abs(h >> 8) % 25)}%)`;
}
