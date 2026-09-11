import type { Minigame } from "@/lib/data";

const statusStyle: Record<Minigame["status"], string> = {
  live: "bg-up text-bg",
  beta: "bg-gold text-bg",
  soon: "bg-line text-muted",
};

export default function MinigameCard({ game, compact = false }: { game: Minigame; compact?: boolean }) {
  return (
    <article className="block p-5 flex flex-col gap-3 hover:-translate-y-1 transition-transform relative">
      <div className="flex items-start justify-between gap-3">
        <span className="text-3xl leading-none" aria-hidden>
          {game.icon}
        </span>
        <span className={`pixel text-[8px] uppercase px-2 py-1 ${statusStyle[game.status]}`}>
          {game.status === "soon" ? "Coming soon" : game.status}
        </span>
      </div>
      <div>
        <h3 className="pixel text-xs text-ice">{game.name}</h3>
        <p className="mt-2 text-sm text-ice-2">{game.tagline}</p>
      </div>
      {!compact && <p className="text-sm text-muted leading-relaxed">{game.description}</p>}
      <dl className="mt-auto grid grid-cols-3 gap-2 pt-3 border-t-2 border-line text-[11px]">
        <Stat label="Players" value={game.players} />
        <Stat label="Length" value={game.duration} />
        <Stat label="Diff." value={"★".repeat(game.difficulty) + "☆".repeat(5 - game.difficulty)} />
      </dl>
      <div className="text-[11px] text-muted">
        Payout: <span className="text-ice">{game.payout}</span>
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted uppercase tracking-wide text-[9px]">{label}</dt>
      <dd className="text-text mt-0.5">{value}</dd>
    </div>
  );
}
