import Link from "next/link";
import Image from "next/image";
import { SERVER_IP } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t-2 border-line bg-[#031012] mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={48} height={48} />
            <span className="pixel text-ice text-sm">STONKCRAFT</span>
          </div>
          <p className="mt-4 text-sm text-muted max-w-sm leading-relaxed">
            A Minecraft minigame server where winning pays out in fractional shares.
            Not affiliated with Mojang or Microsoft.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 block px-3 py-2 text-xs">
            <span className="text-muted">IP</span>
            <span className="text-ice font-semibold">{SERVER_IP}</span>
          </div>
        </div>

        <FooterCol
          title="Play"
          links={[
            ["Minigames", "/minigames"],
            ["Leaderboard", "/leaderboard"],
            ["How it works", "/how-it-works"],
            ["Join", "/#join"],
          ]}
        />
        <FooterCol
          title="Community"
          links={[
            ["Discord", "#"],
            ["Twitter / X", "#"],
            ["YouTube", "#"],
            ["Status", "#"],
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            ["Terms", "#"],
            ["Privacy", "#"],
            ["Rules", "#"],
            ["Disclosures", "#"],
          ]}
        />
      </div>
      <div className="border-t-2 border-line">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row gap-2 justify-between text-[11px] text-muted">
          <span>© {new Date().getFullYear()} StonkCraft. Not investment advice. Stocks go down too.</span>
          <span className="pixel text-[9px]">v0.1.0 · PRE-ALPHA</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="pixel text-[10px] text-ice-2 uppercase mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-muted hover:text-ice transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
