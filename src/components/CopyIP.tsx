"use client";

import { useState } from "react";
import { SERVER_IP } from "@/lib/data";

export default function CopyIP({ large = false }: { large?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <button
      onClick={copy}
      className={`block-raised group inline-flex items-center gap-3 text-left transition-transform active:translate-y-1 ${
        large ? "px-6 py-4" : "px-4 py-3"
      }`}
      title="Copy server address"
    >
      <span className="pixel text-[9px] text-muted uppercase">IP</span>
      <span className={`font-semibold text-ice ${large ? "text-lg sm:text-2xl" : "text-sm"}`}>
        {SERVER_IP}
      </span>
      <span
        className={`pixel text-[9px] uppercase px-2 py-1 ${
          copied ? "bg-up text-bg" : "bg-ice-2 text-bg group-hover:brightness-110"
        }`}
      >
        {copied ? "Copied!" : "Copy"}
      </span>
    </button>
  );
}
