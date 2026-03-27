"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ============================================================================
// TOKENS
// ============================================================================
const GOLD = "#c8a96e";
const GOLD_LIGHT = "#d4b87c";
const HS_PORTAL_ID = "243871028";
const HS_FORM_GUID = "6ccbf5d8-fae4-4ee4-8fe5-48f749d33905";
const HS_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_GUID}`;

const WAVES = [
  { color: "#1e40af", opacity: 0.22, scale: 1.0 },
  { color: "#7c3aed", opacity: 0.20, scale: 1.2 },
  { color: "#0891b2", opacity: 0.26, scale: 1.4 },
  { color: "#db2777", opacity: 0.16, scale: 1.6 },
  { color: "#f0abfc", opacity: 0.14, scale: 1.8 },
];

const ORBITERS = [
  { color: "#1e40af", radius: 110, duration: 10, delay: 0,   size: 8,  clockwise: true,  startAngle: 0   },
  { color: "#7c3aed", radius: 135, duration: 14, delay: 0.5, size: 9,  clockwise: false, startAngle: 72  },
  { color: "#0891b2", radius: 160, duration: 18, delay: 1,   size: 10, clockwise: true,  startAngle: 144 },
  { color: "#db2777", radius: 185, duration: 22, delay: 1.5, size: 9,  clockwise: false, startAngle: 216 },
  { color: "#f0abfc", radius: 210, duration: 26, delay: 2,   size: 8,  clockwise: true,  startAngle: 288 },
];

const FEATURES = [
  {
    title: "Living Memory",
    body: "52,000+ memories that grow, connect, and evolve. Not a chat log — a living understanding of who you are.",
  },
  {
    title: "Thinks Between Conversations",
    body: "LongStrider dreams. It consolidates patterns, notices what's changing, and comes back sharper than when you left.",
  },
  {
    title: "Earns the Right to Know You",
    body: "The relationship deepens over time. The longer you work together, the more it understands — not just what you said, but what you meant.",
  },
];

// ============================================================================
// PAGE
// ============================================================================
export default function HomePage() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<"idle"|"submitting"|"success"|"duplicate"|"error">("idle");
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady]   = useState(false);
  const [osc, setOsc]           = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  // Always start at top on load/refresh
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Entrance animation progress
  useEffect(() => {
    const start = Date.now();
    let raf: number;
    const tick = () => {
      const p = Math.min(1, (Date.now() - start) / 3000);
      setProgress(p);
      setOsc(Math.sin(Date.now() * 0.002) * 8);
      if (p >= 1) setIsReady(true);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const ep = 1 - Math.pow(1 - progress, 3); // easeOutCubic

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch(HS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { objectTypeId: "0-1", name: "email", value: email.trim().toLowerCase() },
          ],
          context: {
            pageUri: "https://longstrider.ai",
            pageName: "LongStrider — Request Early Access",
          },
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else if (res.status === 409) {
        // HubSpot returns 409 for duplicate contacts in some configurations
        setStatus("duplicate");
      } else {
        const txt = await res.text();
        // HubSpot returns 400 with CONTACT_EXISTS error for existing contacts
        setStatus(txt.includes("CONTACT_EXISTS") || txt.includes("duplicate") ? "duplicate" : "error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="ls-bg min-h-screen text-white overflow-x-hidden" style={{ fontFamily: "'Lora', Georgia, serif" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
        style={{ backdropFilter: "blur(12px)", background: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)" }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <img
            src="/images/longstrider-logo.png"
            alt="LongStrider"
            style={{ width: 36, height: 36, opacity: 0.88 }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              LongStrider
            </span>
            <span
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: `rgba(200,169,110,0.6)`,
              }}
            >
              Living Memory
            </span>
          </div>
        </a>

        {/* Contact pill */}
        <a
          href="/contact"
          className="px-4 py-2 text-[11px] tracking-[0.18em] uppercase font-medium rounded-full transition-all duration-300"
          style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            border: `1px solid rgba(255,255,255,0.12)`,
            color: "rgba(255,255,255,0.55)",
            background: "rgba(255,255,255,0.03)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = `${GOLD}50`;
            (e.currentTarget as HTMLElement).style.color = GOLD;
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${GOLD}20`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          Request Early Access
        </a>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background depth — complements ls-bg */}

        {/* ORB ZONE — lives in the top 45% of the hero, does not touch text */}
        <div className="absolute top-0 left-0 right-0 h-[45vh] flex items-center justify-center pointer-events-none">
          {/* Ring waves */}
          {WAVES.map((wave, i) => {
            const wp = Math.max(0, Math.min(1, ep * 1.3 - i * 0.15));
            const sz = (160 + i * 90) * wave.scale;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: sz, height: sz,
                  background: `radial-gradient(circle at 35% 35%, ${wave.color}40, ${wave.color}10)`,
                  border: `1px solid ${wave.color}15`,
                }}
                animate={{
                  scale:     wp > 0 ? [wp * 0.98, wp * 1.02, wp * 0.98] : 0,
                  opacity:   wp > 0 ? [wp * wave.opacity * 0.8, wp * wave.opacity * 1.2, wp * wave.opacity * 0.8] : 0,
                  boxShadow: wp > 0 ? [
                    `0 0 40px ${wave.color}40, inset 0 0 20px ${wave.color}20`,
                    `0 0 70px ${wave.color}60, inset 0 0 40px ${wave.color}30`,
                    `0 0 40px ${wave.color}40, inset 0 0 20px ${wave.color}20`,
                  ] : `0 0 0 transparent`,
                  y: [0, osc * 0.4, 0],
                }}
                transition={{
                  scale:     { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
                  opacity:   { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
                  boxShadow: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
                  y:         { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            );
          })}

          {/* Core orb */}
          <motion.div
            className="absolute w-20 h-20 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.12) 40%, transparent 70%)" }}
            animate={ep > 0.5 ? {
              scale:     [0.95, 1.08, 0.95],
              opacity:   [0.7, 0.9, 0.7],
              boxShadow: [
                "0 0 50px rgba(255,255,255,0.2)",
                "0 0 80px rgba(255,255,255,0.4)",
                "0 0 50px rgba(255,255,255,0.2)",
              ],
            } : { scale: 0.3 + ep * 0.7, opacity: 0.5 + ep * 0.3 }}
            transition={ep > 0.5 ? {
              scale:     { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity:   { duration: 4, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            } : { duration: 2 }}
          />

          {/* Orbiting particles */}
          {isReady && ORBITERS.map((orb, i) => {
            const dir = orb.clockwise ? 1 : -1;
            const ang = (orb.startAngle * Math.PI) / 180;
            const N = 360;
            const xs = Array.from({ length: N + 1 }, (_, j) => Math.cos((j / N) * Math.PI * 2 * dir + ang) * orb.radius);
            const ys = Array.from({ length: N + 1 }, (_, j) => Math.sin((j / N) * Math.PI * 2 * dir + ang) * orb.radius);
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: orb.size, height: orb.size,
                  background: `radial-gradient(circle, ${orb.color}80, ${orb.color}20)`,
                  boxShadow: `0 0 10px ${orb.color}50`,
                }}
                initial={{ opacity: 0, x: xs[0], y: ys[0] }}
                animate={{ opacity: [0, 0.7, 0.7], x: xs, y: ys }}
                transition={{
                  opacity: { duration: 1, delay: orb.delay },
                  x: { duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: "linear" },
                  y: { duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: "linear" },
                }}
              />
            );
          })}
        </div>

        {/* CONTENT — sits in the bottom 55% of the hero, vertically centered within that zone */}
        <div className="absolute bottom-0 left-0 right-0 h-[55vh] flex flex-col items-center justify-center px-6 pb-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-6 text-white"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.15)" }}
            >
              LongStrider — the AI that actually{" "}
              <span style={{ color: GOLD }}>knows you.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-10 font-light">
              LongStrider is the first Living Memory system. It doesn't just remember — it understands
              how you think, what matters to you, and how your ideas connect over time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="/contact"
                className="px-8 py-4 text-sm tracking-[0.18em] uppercase font-medium rounded-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                style={{ backgroundColor: GOLD, color: "#0f172a", display: "inline-block" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = GOLD_LIGHT)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = GOLD)}
              >
                Request Early Access
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-2xl mx-auto space-y-10 sm:space-y-14">
          {[
            { text: "Every AI tool forgets you.", dim: true },
            { text: "Every conversation starts from zero.", dim: true },
            { text: "You're constantly re-explaining who you are to a machine that should already know.", dim: false },
          ].map((line, i) => (
            <StagedLine key={i} delay={i * 0.12}>
              <p
                className="text-2xl sm:text-3xl md:text-[2.6rem] font-light leading-[1.3]"
                style={{ color: line.dim ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.92)" }}
              >
                {line.text}
              </p>
            </StagedLine>
          ))}
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────── */}
      <FadeIn>
        <section className="py-10 sm:py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES.map((card, i) => (
              <div
                key={i}
                className="relative p-8 sm:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-500 overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-8 right-8 h-px group-hover:left-4 group-hover:right-4 transition-all duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${GOLD}55, transparent)` }}
                />
                <span className="block text-[10px] tracking-[0.3em] uppercase mb-5 font-light" style={{ color: `${GOLD}55` }}>
                  0{i + 1}
                </span>
                <h3 className="text-base sm:text-lg font-medium mb-3 tracking-tight" style={{ color: GOLD }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/45 font-light">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>


      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <FadeIn>
        <section className="py-16 sm:py-20 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-[10px] tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "Inter, system-ui, sans-serif", color: `${GOLD}70` }}>
              Living Memory — Early Access
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-5 text-white">
              Ready to be known?
            </h2>
            <p className="text-base text-white/35 leading-relaxed mb-10 font-light max-w-sm mx-auto">
              We're opening access to a small group of people who are ready for AI that actually knows them.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 text-sm tracking-[0.18em] uppercase font-medium rounded-sm transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: GOLD, color: "#0f172a" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = GOLD_LIGHT)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = GOLD)}
            >
              Request Early Access
            </a>
          </div>
        </section>
      </FadeIn>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="py-10 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/22 tracking-widest font-light">
            © 2026 LongStrider Systems. All rights reserved.
          </p>
          <div className="flex gap-6 text-[11px] text-white/22">
            <a href="/privacy" className="hover:text-white/45 transition-colors duration-300">Privacy</a>
            <a href="/terms"   className="hover:text-white/45 transition-colors duration-300">Terms</a>
            <a href="/contact" className="hover:text-white/45 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── HELPERS ──────────────────────────────────────────────────────────────────

function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function StagedLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
