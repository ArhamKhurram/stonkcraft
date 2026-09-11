import { tickers } from "@/lib/data";

export default function Ticker() {
  const items = [...tickers, ...tickers];
  return (
    <div className="w-full overflow-hidden bg-[#031012] border-b-2 border-line text-[11px] select-none">
      <div className="ticker-track flex w-max whitespace-nowrap py-1.5">
        {items.map((t, i) => {
          const up = t.change >= 0;
          return (
            <span key={i} className="flex items-center gap-2 px-5">
              <span className="pixel text-[9px] text-ice">{t.symbol}</span>
              <span className="text-text">${t.price.toFixed(2)}</span>
              <span className={up ? "text-up" : "text-down"}>
                {up ? "▲" : "▼"} {Math.abs(t.change).toFixed(2)}%
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
