"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const QRCodeSVG = dynamic(
  () => import("qrcode.react").then(m => m.QRCodeSVG),
  { ssr: false }
);

const GOLD = "#c8a96e";
const URL  = "https://longstrider-landing.vercel.app";

export default function SlidePage() {
  return (
    <div
      className="ls-bg w-screen h-screen overflow-hidden flex"
      style={{ fontFamily: "'Lora', Georgia, serif" }}
    >
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, rgba(0,0,0,0.55) 100%)" }}
      />

      {/* ── LEFT — Copy ──────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center pl-16 pr-12"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Wordmark */}
        <div className="flex items-center mb-16">
          <span
            className="font-semibold tracking-[0.22em] uppercase"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.8rem)",
              background: `linear-gradient(135deg, #fff 0%, ${GOLD} 55%, #fff 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LongStrider
          </span>
        </div>

        {/* Statement lines */}
        <div className="space-y-3">
          {[
            { text: "Living Memory.", color: "rgba(255,255,255,0.92)", delay: 0.2 },
            { text: "Knows you.", color: GOLD, delay: 0.35 },
            { text: "Private by design.", color: "rgba(255,255,255,0.92)", delay: 0.5 },
            { text: "Yours — not a subscription.", color: "rgba(255,255,255,0.75)", delay: 0.65 },
          ].map((line, i) => (
            <motion.p
              key={i}
              className="font-light leading-tight"
              style={{
                fontSize: "clamp(2rem, 4.2vw, 4rem)",
                color: line.color,
                textShadow: line.color === GOLD ? `0 0 40px ${GOLD}40` : "none",
              }}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: line.delay, ease: [0.16, 1, 0.3, 1] }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div
        className="relative z-10 w-px self-stretch my-16 flex-shrink-0"
        style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}30, transparent)` }}
      />

      {/* ── RIGHT — QR ───────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glow */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 400, height: 400, background: `radial-gradient(ellipse at center, ${GOLD}18 0%, transparent 70%)` }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* QR container */}
        <div
          className="relative rounded-2xl p-8"
          style={{
            background: "rgba(255,255,255,0.97)",
            boxShadow: `0 0 0 1px ${GOLD}40, 0 0 100px ${GOLD}30, 0 40px 80px rgba(0,0,0,0.6)`,
          }}
        >
          <QRCodeSVG
            value={URL}
            size={360}
            level="H"
            fgColor="#050510"
            bgColor="transparent"
            includeMargin={false}
          />
        </div>

        <div className="text-center">
          <p
            className="tracking-[0.18em] uppercase text-xs"
            style={{ fontFamily: "Inter, system-ui, sans-serif", color: "rgba(255,255,255,0.25)" }}
          >
            Scan to request early access
          </p>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-12 py-5"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
          backdropFilter: "blur(12px)",
          borderTop: `1px solid ${GOLD}35`,
          boxShadow: `0 -1px 30px ${GOLD}12`,
        }}
      >
        <span style={{
          fontFamily: "Inter, system-ui, sans-serif",
          background: `linear-gradient(135deg, ${GOLD} 0%, #fff 50%, ${GOLD} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "13px",
          letterSpacing: "0.38em",
          fontWeight: 600,
        }}>
          LONGSTRIDER SYSTEMS
        </span>

        <span style={{
          fontFamily: "Inter, system-ui, sans-serif",
          color: "rgba(255,255,255,0.45)",
          fontSize: "11px",
          letterSpacing: "0.32em",
        }}>
          PRIVATE AI · LIVING MEMORY
        </span>

        <span style={{
          fontFamily: "Inter, system-ui, sans-serif",
          background: `linear-gradient(135deg, ${GOLD} 0%, #fff 50%, ${GOLD} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "13px",
          letterSpacing: "0.38em",
          fontWeight: 600,
        }}>
          longstrider.ai
        </span>
      </div>

    </div>
  );
}
