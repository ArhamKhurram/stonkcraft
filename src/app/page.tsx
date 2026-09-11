import Image from "next/image";
import Link from "next/link";
import CopyIP from "@/components/CopyIP";
import MinigameCard from "@/components/MinigameCard";
import LeaderboardTable from "@/components/LeaderboardTable";
import EmptyBoard from "@/components/EmptyBoard";
import { minigames, leaderboard, stats } from "@/lib/data";

export default function Home() {
  const featured = minigames.filter((g) => g.status === "live").slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Banner backdrop */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/banner.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/75 to-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-bg/30 to-bg/60" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-24 pb-28 md:pt-36 md:pb-40 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 block px-3 py-1.5 text-[11px] text-muted">
            <span className="live-dot inline-block w-2 h-2 bg-up" />
            Season 1 · Pre-alpha · 1.21 Java
          </div>
          <h1 className="pixel pixel-shadow mt-8 text-2xl sm:text-3xl lg:text-[2.8rem] leading-[1.35] text-ice">
            PLAY MINECRAFT.
            <br />
            <span className="text-ice-2">WIN STOCKS.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-text max-w-2xl leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
            StonkCraft is a minigame server where every win pays out in real fractional shares.
            Parkour, PvP, spleef, bed wars. Beat the lobby, grow the portfolio, top the board.
          </p>
          <div className="mt-10">
            <CopyIP large />
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/minigames" className="btn btn-primary">
              ▶ Browse games
            </Link>
            <Link href="/how-it-works" className="btn btn-ghost bg-bg/60">
              How it works
            </Link>
          </div>
        </div>

        {/* STATS */}
        <div className="mx-auto max-w-6xl px-4 pb-4 -mt-12 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="block px-5 py-4">
                <div className="pixel text-sm sm:text-base text-ice">{s.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-wide text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (short) */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeader
          kicker="The loop"
          title="Queue. Win. Get paid."
          blurb="No deposits, no wallets to connect. You play, the server pays. Shares land in your in-game portfolio the moment the match ends."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Join a lobby",
              body: "Connect with any vanilla Java client. Pick a minigame from the hub compass and queue up. Matches fill in seconds.",
              icon: "🧭",
            },
            {
              n: "02",
              title: "Win the match",
              body: "Every minigame has a prize pool of fractional shares. Podium finishes, eliminations and objectives all pay out.",
              icon: "⚔️",
            },
            {
              n: "03",
              title: "Build a portfolio",
              body: "Winnings show up instantly as holdings. Check them with /portfolio, trade them at the hub exchange, or hold them and let the market cook.",
              icon: "📈",
            },
          ].map((s) => (
            <div key={s.n} className="block p-6 relative">
              <span className="pixel text-[10px] text-muted absolute top-4 right-4">{s.n}</span>
              <div className="text-3xl">{s.icon}</div>
              <h3 className="pixel text-xs text-ice mt-4">{s.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MINIGAMES */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeader kicker="Minigames" title="Live right now" />
          <Link href="/minigames" className="btn btn-ghost">
            All games →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((g) => (
            <MinigameCard key={g.slug} game={g} compact />
          ))}
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeader
            kicker="Leaderboard"
            title="Top portfolios"
            blurb="Ranked by total portfolio value at market close. Resets every season; winnings carry over."
          />
          <Link href="/leaderboard" className="btn btn-ghost">
            Full board →
          </Link>
        </div>
        <div className="mt-10">
          {leaderboard.length ? (
            <LeaderboardTable players={leaderboard.slice(0, 5)} />
          ) : (
            <EmptyBoard compact />
          )}
        </div>
      </section>

      {/* JOIN CTA */}
      <section id="join" className="mx-auto max-w-6xl px-4 py-10 scroll-mt-24">
        <div className="block-raised px-6 py-12 sm:px-12 text-center relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(50% 80% at 50% 100%, rgba(159,216,230,0.15), transparent 70%)" }}
          />
          <Image
            src="/logo.png"
            alt=""
            width={160}
            height={160}
            className="float mx-auto mb-6 w-28 sm:w-40 h-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)] relative"
          />
          <h2 className="pixel pixel-shadow text-lg sm:text-2xl text-ice leading-relaxed relative">
            READY TO GO LONG?
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto relative">
            Java Edition 1.21+. No mods, no launcher, no signup form. Paste the address and join.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <CopyIP large />
            <a href="#" className="btn btn-ghost">
              Join the Discord
            </a>
          </div>
          <ol className="mt-10 grid gap-3 sm:grid-cols-3 text-left text-sm relative">
            {[
              "Open Minecraft → Multiplayer → Add Server",
              "Paste play.stonkcraft.gg and save",
              "Join, grab the compass, pick a game",
            ].map((step, i) => (
              <li key={i} className="block px-4 py-3 flex gap-3">
                <span className="pixel text-[10px] text-ice-2 shrink-0">{i + 1}.</span>
                <span className="text-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ kicker, title, blurb }: { kicker: string; title: string; blurb?: string }) {
  return (
    <div>
      <div className="pixel text-[10px] uppercase text-ice-2">{kicker}</div>
      <h2 className="pixel pixel-shadow mt-3 text-lg sm:text-2xl text-ice leading-relaxed">{title}</h2>
      {blurb && <p className="mt-4 text-muted max-w-2xl leading-relaxed">{blurb}</p>}
    </div>
  );
}
