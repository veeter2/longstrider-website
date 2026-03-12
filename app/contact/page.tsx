"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const GOLD       = "#c8a96e";
const GOLD_LIGHT = "#d4b87c";

const HS_PORTAL_ID = "243871028";
const HS_FORM_GUID = "6ccbf5d8-fae4-4ee4-8fe5-48f749d33905";
const HS_ENDPOINT  = `https://forms.hubspot.com/uploads/form/v2/${HS_PORTAL_ID}/${HS_FORM_GUID}`;

const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "rgba(255,255,255,0.88)",
} as const;

const inputFocus = (el: HTMLElement) => {
  el.style.borderColor = `${GOLD}70`;
  el.style.boxShadow   = `0 0 0 3px ${GOLD}12, 0 0 20px ${GOLD}14`;
};
const inputBlur = (el: HTMLElement) => {
  el.style.borderColor = "rgba(255,255,255,0.12)";
  el.style.boxShadow   = "none";
};

export default function ContactPage() {
  const [form, setForm] = useState({ firstname: "", lastname: "", email: "", company: "", broken: "" });
  const [status, setStatus] = useState<"idle"|"submitting"|"success"|"error">("idle");

  const set = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const params = new URLSearchParams();
      params.append("firstname", form.firstname);
      params.append("lastname",  form.lastname);
      params.append("email",     form.email.trim().toLowerCase());
      if (form.company) params.append("company", form.company);
      if (form.broken)  params.append("message", form.broken);
      params.append("hs_context", JSON.stringify({
        pageUri: "https://longstrider.ai/contact",
        pageName: "LongStrider — Schedule a Demo",
      }));

      const res = await fetch(HS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (res.ok || res.status === 204 || res.status === 302) {
        setStatus("success");
      } else {
        const errBody = await res.text();
        console.error("HubSpot error", res.status, errBody);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit failed", err);
      setStatus("error");
    }
  };

  return (
    <div className="ls-bg min-h-screen text-white flex flex-col" style={{ fontFamily: "'Lora', Georgia, serif" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
        style={{ backdropFilter: "blur(12px)", background: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)" }}
      >
        <a href="/" className="flex items-center gap-2.5">
          <span
            className="text-sm font-semibold tracking-[0.18em] uppercase"
            style={{ fontFamily: "Inter, system-ui, sans-serif", background: `linear-gradient(135deg, #fff 0%, ${GOLD} 60%, #fff 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            LongStrider
          </span>
        </a>
        <a
          href="/"
          className="px-4 py-2 text-[11px] tracking-[0.18em] uppercase font-medium rounded-full transition-all duration-300"
          style={{ fontFamily: "Inter, system-ui, sans-serif", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.03)" }}
        >
          ← Back
        </a>
      </nav>

      <main className="flex-1 px-6 pt-24 pb-20">
        <motion.div
          className="w-full max-w-xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-10 text-white text-center" style={{ textShadow: "0 0 30px rgba(255,255,255,0.1)" }}>
            Let us show you what{" "}
            <span style={{ color: GOLD }}>living memory</span> looks like.
          </h1>

          {status === "success" ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
              <p className="text-3xl font-light mb-4" style={{ color: GOLD }}>Consider yourself known.</p>
              <p className="text-base text-white/60 font-light leading-relaxed mb-2">
                We'll reach out within one business day to schedule your walkthrough.
              </p>
              <p className="text-sm text-white/35 font-light mb-10">
                LongStrider remembers the first time you reached out.
              </p>
              <a href="/" className="text-xs tracking-[0.2em] uppercase text-white/30 hover:text-white/55 transition-colors" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                ← Back to home
              </a>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl p-8 sm:p-10"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: `0 0 60px rgba(200,169,110,0.05), inset 0 1px 0 rgba(255,255,255,0.05)`,
              }}
            >
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="First Name" value={form.firstname} onChange={v => set("firstname", v)} required />
                <Field label="Last Name"  value={form.lastname}  onChange={v => set("lastname", v)}  required />
              </div>

              <Field label="Email" type="email" value={form.email} onChange={v => set("email", v)} required />
              <Field label="Company (optional)" value={form.company} onChange={v => set("company", v)} />

              {/* The one question */}
              <div>
                <label
                  className="block text-[10px] tracking-[0.28em] uppercase mb-2.5 font-medium"
                  style={{ fontFamily: "Inter, system-ui, sans-serif", color: "rgba(255,255,255,0.55)" }}
                >
                  What's your biggest frustration with AI today?
                </label>
                <textarea
                  rows={4}
                  value={form.broken}
                  onChange={e => set("broken", e.target.value)}
                  placeholder="Be honest. We've heard it all — and we built LongStrider because of it."
                  className="w-full px-5 py-4 rounded-sm text-sm leading-relaxed resize-none focus:outline-none transition-all duration-300"
                  style={inputStyle}
                  onFocus={e => inputFocus(e.currentTarget)}
                  onBlur={e => inputBlur(e.currentTarget)}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 text-sm tracking-[0.18em] uppercase font-medium rounded-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                style={{ fontFamily: "Inter, system-ui, sans-serif", backgroundColor: GOLD, color: "#0f172a" }}
                onMouseEnter={e => { if (status !== "submitting") e.currentTarget.style.backgroundColor = GOLD_LIGHT; }}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = GOLD)}
              >
                {status === "submitting" ? "One moment…" : "Request Early Access"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-400/60 text-center font-light">
                  Something went wrong — email us at hello@longstrider.ai
                </p>
              )}
            </form>
          )}
        </motion.div>
      </main>

      <footer className="py-8 px-8 border-t border-white/[0.04] flex justify-between items-center">
        <p className="text-[10px] text-white/20 tracking-widest" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>© 2026 LongStrider Systems</p>
        <a href="/privacy" className="text-[10px] text-white/20 hover:text-white/40 transition-colors" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>Privacy</a>
      </footer>
    </div>
  );
}

// ── Field component ──────────────────────────────────────────────────────────

function Field({ label, value, onChange, type = "text", required = false }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.28em] uppercase mb-2.5 font-medium" style={{ fontFamily: "Inter, system-ui, sans-serif", color: "rgba(255,255,255,0.55)" }}>
        {label}
      </label>
      <input
        type={type} required={required} value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-5 py-3.5 rounded-sm text-sm focus:outline-none transition-all duration-300"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.88)" }}
        onFocus={e => { e.currentTarget.style.borderColor = `${GOLD}70`; e.currentTarget.style.boxShadow = `0 0 0 3px ${GOLD}12, 0 0 20px ${GOLD}14`; }}
        onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
      />
    </div>
  );
}
