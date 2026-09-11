import type { Metadata } from "next";
import MinigameCard from "@/components/MinigameCard";
import { minigames } from "@/lib/data";

export const metadata: Metadata = {
  title: "Minigames",
  description: "Every StonkCraft minigame, what it pays, and how hard it is.",
};

const groups: { key: "live" | "beta" | "soon"; label: string; blurb: string }[] = [
  { key: "live", label: "Live", blurb: "Open queues. Full payouts." },
  { key: "beta", label: "Beta", blurb: "Playable, still being balanced. Payouts at 50%." },
  { key: "soon", label: "Coming soon", blurb: "In the workshop. Vote on priority in Discord." },
];

export default function MinigamesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="pixel text-[10px] uppercase text-ice-2">Minigames</div>
      <h1 className="pixel pixel-shadow mt-3 text-xl sm:text-3xl text-ice leading-relaxed">
        PICK YOUR POSITION
      </h1>
      <p className="mt-4 text-muted max-w-2xl leading-relaxed">
        Every game has its own prize pool, paid in fractional shares. Difficulty is a rough guide to how sweaty the
        lobby usually is. Payouts listed are the maximum for a single match at full lobby.
      </p>

      {groups.map((g) => {
        const list = minigames.filter((m) => m.status === g.key);
        if (!list.length) return null;
        return (
          <section key={g.key} className="mt-14">
            <div className="flex items-baseline gap-4 border-b-2 border-line pb-3">
              <h2 className="pixel text-sm text-ice">{g.label}</h2>
              <span className="text-xs text-muted">{g.blurb}</span>
              <span className="ml-auto pixel text-[9px] text-muted">{list.length}</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((m) => (
                <MinigameCard key={m.slug} game={m} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
