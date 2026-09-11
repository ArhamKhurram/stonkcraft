"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import XIcon from "@/components/XIcon";
import { X_URL } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/minigames", label: "Minigames" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/how-it-works", label: "How it works" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b-2 border-line">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="StonkCraft"
            width={40}
            height={40}
            className="group-hover:-translate-y-0.5 transition-transform"
            priority
          />
          <span className="pixel text-ice text-xs sm:text-sm">STONKCRAFT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = path === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`pixel text-[10px] uppercase px-3 py-2 transition-colors ${
                  active
                    ? "text-bg bg-ice-2"
                    : "text-muted hover:text-ice hover:bg-panel"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-2 text-xs text-muted">
            <span className="live-dot inline-block w-2 h-2 bg-up" />
            1 online
          </span>
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="StonkCraft on X"
            title="Follow on X"
            className="block w-9 h-9 flex items-center justify-center text-muted hover:text-ice hover:bg-panel-2 transition-colors"
          >
            <XIcon />
          </a>
          <Link href="/#join" className="btn btn-primary !py-2.5 !px-4 !text-[9px]">
            Play now
          </Link>
        </div>

        <button
          className="md:hidden pixel text-[10px] text-ice px-3 py-2 block"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "X" : "MENU"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-line bg-bg px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`pixel text-[10px] uppercase px-3 py-3 ${
                path === l.href ? "text-bg bg-ice-2" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#join" onClick={() => setOpen(false)} className="btn btn-primary mt-2 justify-center">
            Play now
          </Link>
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost justify-center"
          >
            <XIcon /> Follow on X
          </a>
        </div>
      )}
    </header>
  );
}
