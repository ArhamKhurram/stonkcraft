import Link from "next/link";

export default function EmptyBoard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`block text-center ${compact ? "px-6 py-12" : "px-6 py-20"}`}>
      <div className="text-4xl" aria-hidden>
        📉
      </div>
      <h3 className="pixel text-xs sm:text-sm text-ice mt-5 leading-relaxed">NO POSITIONS YET</h3>
      <p className="mt-3 text-sm text-muted max-w-md mx-auto leading-relaxed">
        Season 1 opens with the server. The first player to win a match takes the top spot, at least for a while.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/#join" className="btn btn-primary">
          Be first
        </Link>
        {!compact && (
          <Link href="/minigames" className="btn btn-ghost">
            See the games
          </Link>
        )}
      </div>
    </div>
  );
}
