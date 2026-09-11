import type { Metadata } from "next";
import Link from "next/link";
import CopyIP from "@/components/CopyIP";

export const metadata: Metadata = {
  title: "How it works",
  description: "How StonkCraft turns minigame wins into fractional shares.",
};

const faqs = [
  {
    q: "Are these real stocks?",
    a: "That's the plan. Winnings are tracked as fractional share positions in your StonkCraft portfolio. Cash-out to a brokerage account is on the roadmap and will require age and identity verification where we operate.",
  },
  {
    q: "Do I have to put money in?",
    a: "No. There is no deposit and no entry fee for standard queues. Prize pools are funded by the server. Ranked queues with staked entries may come later and will be opt-in.",
  },
  {
    q: "Which version do I need?",
    a: "Java Edition 1.21 or newer. No mods or resource packs required. Bedrock support is being looked at.",
  },
  {
    q: "What happens to my shares between seasons?",
    a: "They're yours. The leaderboard resets every season but your portfolio carries over.",
  },
  {
    q: "Can I lose shares?",
    a: "In standard queues, no. Some modes like Bear Pit and Margin Call describe 'staked' shares: those are match-only chips that come out of the prize pool, not your portfolio.",
  },
  {
    q: "Is this legal?",
    a: "We're building it to be. Prize payouts with no entry fee are structured as promotional rewards. Availability may vary by region and we'll publish full disclosures before public launch.",
  },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="pixel text-[10px] uppercase text-ice-2">How it works</div>
      <h1 className="pixel pixel-shadow mt-3 text-xl sm:text-3xl text-ice leading-relaxed">
        FROM LOBBY TO LEDGER
      </h1>
      <p className="mt-4 text-muted max-w-2xl leading-relaxed">
        StonkCraft is a normal Minecraft minigame server on the surface. Under the hood, every match has a prize pool
        denominated in fractional shares, and the server does the bookkeeping.
      </p>

      {/* Flow */}
      <div className="mt-14 grid gap-4 md:grid-cols-4">
        {[
          { icon: "🧭", t: "Queue", d: "Grab the compass in the hub and pick a game. Lobbies fill fast; most start in under 30 seconds." },
          { icon: "🏆", t: "Compete", d: "Each game defines its own payout table: podium, eliminations, objectives, survival time." },
          { icon: "🧾", t: "Settle", d: "When the match ends the server splits the pool and credits fractional shares to each winner." },
          { icon: "📊", t: "Hold or trade", d: "Run /portfolio anytime. Swap holdings at the hub exchange using live prices, or just hold." },
        ].map((s, i) => (
          <div key={s.t} className="block p-6 relative">
            <span className="pixel text-[10px] text-muted absolute top-4 right-4">0{i + 1}</span>
            <div className="text-3xl">{s.icon}</div>
            <h3 className="pixel text-xs text-ice mt-4">{s.t}</h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>

      {/* Commands */}
      <section className="mt-20 grid gap-8 md:grid-cols-[1fr_1.2fr] items-start">
        <div>
          <div className="pixel text-[10px] uppercase text-ice-2">In-game</div>
          <h2 className="pixel pixel-shadow mt-3 text-lg sm:text-2xl text-ice leading-relaxed">Commands</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Everything you need is a slash command away. No website login required to play.
          </p>
        </div>
        <div className="block p-5 font-body text-sm">
          {[
            ["/portfolio", "Show your holdings and total value"],
            ["/prices", "Live prices for every listed ticker"],
            ["/trade AAPL NVDA 0.1", "Swap 0.1 AAPL for NVDA at market"],
            ["/history", "Your last 20 payouts"],
            ["/queue bull-run", "Join a queue without the compass"],
            ["/top", "Leaderboard, right in chat"],
          ].map(([cmd, desc]) => (
            <div key={cmd} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2.5 border-b border-line/60 last:border-0">
              <code className="text-ice-2 sm:w-52 shrink-0">{cmd}</code>
              <span className="text-muted">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <div className="pixel text-[10px] uppercase text-ice-2">FAQ</div>
        <h2 className="pixel pixel-shadow mt-3 text-lg sm:text-2xl text-ice leading-relaxed">Questions</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="block group">
              <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 text-ice">
                <span className="text-sm font-medium">{f.q}</span>
                <span className="pixel text-[10px] text-muted group-open:rotate-90 transition-transform">▶</span>
              </summary>
              <p className="px-5 pb-5 text-sm text-muted leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-20 block-raised p-8 sm:p-12 text-center">
        <h2 className="pixel pixel-shadow text-lg sm:text-2xl text-ice leading-relaxed">SOUNDS GOOD?</h2>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CopyIP large />
          <Link href="/minigames" className="btn btn-ghost">
            See the games
          </Link>
        </div>
      </section>
    </div>
  );
}
