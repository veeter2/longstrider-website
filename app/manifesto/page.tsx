'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import './deck.css';

// ── INLINE LOGO (no external dep) ─────────────────────────────
function LongstriderLogo({ size = 24, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="-1757.50 -91.69 2058.95 2017.21" fill="none" style={style}>
      <defs>
        <style>{`
          .st0 { fill: #c3c3c3; } .st1 { fill: #606061; } .st2 { fill: #4c4b4a; }
          .st3 { fill: #9b9c9c; } .st4 { fill: #717070; } .st5 { fill: #969898; }
          .st6 { fill: #acadac; } .st7 { fill: #393e42; } .st8 { fill: #e5e7e6; }
          .st9 { fill: #919192; } .st10 { fill: #8c8c8c; } .st11 { fill: #828382; }
          .st12 { fill: #e6e8e8; } .st13 { fill: #6b6b6b; }
        `}</style>
      </defs>
      <ellipse className="st8" cx="-648.61" cy="718.56" rx="41.98" ry="41.99"/>
      <path className="st12" d="M-1264.17-39.19c6.06,1.37,12.04,3.5,18.17,5.42l13.68,4.29c10.22,3.2,20.08,5.86,29.78,9.68,2.07.82,3.9,1.34,6.08,1.94,52.05,14.19,185.11,67.97,234.84,92.77l51.48,25.67c22.99,11.46,44.6,23.92,66.82,37.14,73.37,43.63,143.01,92.49,207.86,147.46l11.56,9.8,22.88,20.06,11.41,10.64,18,17.06c11.63,11.02,22.81,22.22,33.84,33.84l16.57,17.45,8.69,9.4,7.55,8.48c4.87,5.46,9.82,10.82,14.08,16.74,1.38,1.92,2.98,2.95,4.44,4.7,10.4,12.42,20.19,24.9,30.44,37.43l5.09,6.22c43.97,53.73,80.17,113.13,112.87,174.74,31.34,59.04,57.47,121.04,77.92,184.8,26.34,82.16,42.3,166.53,48.8,251.9.44,5.84.81,10.63,1.04,16.22l.88,20.93.93,31.01c.44,14.67,1.11,29.44,0,44.06-.77,10.15-.66,19.84-1.01,29.82l-.68,19.53c-.16,4.47-.46,8.66-.84,13.17l-1.26,14.99c-7.83,93.41-26.21,185.32-55.52,274.81-19.17,58.55-41.96,115.48-69.44,170.35l-23.38,46.7-18.49,36.54,70.3,6.39c4.76,1.65,16.65,1.33,22.99,2.87l29.98,2.84,7.99,1,11.99,1c-3.08,1.37-6.45,1.1-9.99,1l-10.97-1.06-13.02-.99-10.94-1.04-13.99-.99-14-1-13.06-.96-15.91-1.08-14.04-.93c-6.44-.42-12.46-.82-18.98-.94-5.09-.1-10.1-2.23-15.16.04-1.43,2.29-2.94,4.81-3.8,7.13-4.97,13.33-7.19,12.99-7.19,12.99l-1.36.91c-.55-.26-.58-1.64-.44-1.91.69-1.27.6-3.54,1.94-5.04,2.69-3.01,3.67-6.63,5.06-9.95.27-.65,1-1.16,1-2v-1c11.23-2.72-17.03-3.03-17.03-3.03-3.36-.05-6.4-1.88-9.99-.77-.21,4.49,1.13,9.05,3.04,12.8,0,.33.03.67,0,1-.7,6.71,5.02,20.61,3.58,26.06-1.38-2.86-.84-6.15-3.58-7.07l-4-12.99v-1c-.24-.42-.57-.77-1-1-.07-.28,0-.74,0-1-.03-1.32-.15-4.83-1.96-4.8-5.22.08-9.89-.76-14.94-1.04-13.07-.74-23.18-.92-35.66-1.59l-19.82-1.07-21-.98-25.14-.94-25.82-1.05-29.17-.91-34.81-1.01-48-.97-86.01-.97h-148.84s-100.95.97-100.95.97l-52.01.98-36.83.99-35.16.93-32.8,1.05-31.12.97-23.03.96-22.82,1.06-23.08.93c-15.5.62-28.03,1.45-43.43,2.32l-16.95.96-16.99.99-19.02.97-15.96,1.01-15.99,1.01-15.99,1.01-17,.99-15.98,1.02-17.01,1-12.02.96-15.94,1.05-16,1.02-14.08.95-13,1c-2.45.19-4.19,1.24-5.97,1.25v1c-8.34.47-17.09.89-25.07,3.57,3.27,1.45,5.95-.54,9.04-.58,4.32-.06,8.38.55,12.03-.98,1.36-.57,2.79-1.16,4-2.01,1.55-.09,3.82-1.1,5.93-1.26l13.8-1.08c4.8-.37,8.82-2.53,13.25-1.42.77-1.29,2.53-.1,4.01,1.29,1.78,1.24,4.21-.4,5.01,1.47-12.06-.03-26.15,2.93-37.98,3.01l-8.99-.1c2.59-1.36,6.63-1.8,8.99.1l-9.99,0c2.75-1.68,7.31-1.78,9.99,0l-9.99,0c2.76-1.75,7.14-1.62,9.99-.13l-10.99,0c3.17-.73-24,1.88-23.08.95l.09-1.01z"/>
    </svg>
  );
}

// ── SECTION IDS & TIMELINE CONFIG ─────────────────────────────

interface TimelineNode {
  id: string;
  label: string;
  color: string;
  glow: string;
  gated: boolean;
}

const TIMELINE: TimelineNode[] = [
  { id: 'hero',        label: 'LongStrider',   color: '#c8a96e', glow: 'rgba(200,169,110,0.4)',   gated: false },
  { id: 'gap',         label: 'The Gap',       color: '#c8a96e', glow: 'rgba(200,169,110,0.4)',   gated: false },
  { id: 'what',        label: 'What It Is',    color: '#c8a96e', glow: 'rgba(200,169,110,0.4)',   gated: false },
  { id: 'moat',        label: 'Your Moat',     color: '#8b5cf6', glow: 'rgba(139,92,246,0.45)',   gated: false },
  { id: 'practice',    label: 'In Practice',   color: '#c8a96e', glow: 'rgba(200,169,110,0.4)',   gated: true },
  { id: 'who',         label: "Who It's For",  color: '#8b5cf6', glow: 'rgba(139,92,246,0.45)',   gated: true },
  { id: 'how',         label: 'How It Works',  color: '#c8a96e', glow: 'rgba(200,169,110,0.4)',   gated: true },
  { id: 'competitive', label: 'Competitive',   color: '#c8a96e', glow: 'rgba(200,169,110,0.4)',   gated: true },
  { id: 'engage',      label: "What's Next",   color: '#c8a96e', glow: 'rgba(200,169,110,0.4)',   gated: true },
];

// ── CONTENT DATA ──────────────────────────────────────────────

const CAPABILITIES = [
  { number: '01', title: 'A programmable intelligence kernel — configured for your business', body: 'Most AI has guardrails bolted on after the fact. LongStrider has a programmable operating system — eighteen governing principles that define how the system thinks, communicates, challenges, and stays in bounds. Configure it for a legal firm and it operates one way. Configure it for a PE fund and it operates another. Same intelligence engine. Different operating mind. Entirely yours.' },
  { number: '02', title: 'It retrieves understanding, not documents', body: "When you need an answer, the system doesn't search a document index. It scores every candidate memory across five axes simultaneously — semantic relevance, gravity-weighted significance, named entity relationships, recency decay, and organizational knowledge cluster membership. The output isn't a list of results. It's a narrative arc: where things started, how they shifted, where they are now. The system infers relationships you never declared." },
  { number: '03', title: 'It gets smarter while you sleep', body: 'Every night, a five-pass background engine runs without being asked. It recalculates the gravity of every knowledge cluster, identifies which ones are healthy or drifting, generates canonical summaries, maps cluster relationships, and builds a predictive signal about where organizational priorities are likely to shift next. The system compounds without anyone maintaining it — because compounding is the architecture, not a feature.' },
  { number: '04', title: 'It has the integrity to challenge you', body: "Every other AI is optimized to keep the conversation rolling. LongStrider is the only system with a constitutional mechanism that prevents it from telling you what you want to hear under pressure. When integrity risk exceeds threshold — measured across authenticity, contradiction density, and cognitive load — the system stops rather than capitulates. Evidence-based pushback, grounded in everything the system has observed about your business. And the architecture enforces it." },
  { number: '05', title: 'The interface remembers too', body: 'There are no threads. There is no session limit. The conversation is infinite — a single, continuous timeline that spans every interaction since the system went live. Every response is weighted in real time: mark it accurate and the system reinforces that understanding; correct it and the gravity of that memory shifts immediately, firing the intelligence pipeline before you finish typing. The interface is not a chat window. It is a living record of everything the system has learned.' },
];

const SCENARIOS = [
  { title: 'The Board Meeting', paragraphs: [
    'Tuesday afternoon. A partner asks why a key client\'s engagement has shifted — and what\'s actually driving it.',
    'Without LongStrider, that question takes two days. Someone pulls CRM data. Someone digs through email. Someone remembers a conversation from March that never got documented. The answer arrives as a spreadsheet with no story.',
    'With LongStrider, the system has already been consolidating this overnight — strengthening the connections between that client\'s interactions, weighting what mattered operationally, aging out what didn\'t. The answer arrives as a trajectory: here\'s where the relationship was, here\'s when the shift started, here\'s the conversation that preceded it, and here are two other accounts following the same arc. Not a report. An understanding.',
  ]},
  { title: 'The Key Departure', paragraphs: [
    'Your head of client services gives two weeks\' notice on a Friday. She\'s been with you for eleven years. She knows every key account personally — the politics, the preferences, the history that never made it into a CRM record.',
    'On Monday morning, her replacement opens LongStrider. Everything she knew is there — not as a knowledge dump, but as living intelligence. The relationship trajectories. The conversations that shaped each engagement. The moments when a client\'s tone shifted before anyone noticed. Eleven years of institutional understanding, consolidated overnight, every night, since the system went live.',
    'Her expertise didn\'t walk out the door. It became part of the organization\'s permanent intelligence — weighted, connected, and available to everyone who needs it. Not because someone asked her to document it. Because the system was learning alongside her the entire time.',
  ]},
  { title: 'Ninety Days In', paragraphs: [
    'Ninety days after deployment. Nobody\'s maintaining the system. Nobody\'s feeding it data. But this morning\'s briefing flagged something: a pricing decision your team made last week contradicts a pattern the system has been tracking for three months.',
    'It doesn\'t just show you the data. It shows you the trajectory — what happened last time, what changed, and why the current path looks familiar. It pushes back, with evidence, because the longitudinal data earned it the right to.',
    'This is what compounding intelligence looks like. Not a tool that answers questions. A system that asks them — before you knew to.',
  ]},
];

const PERSONAS = [
  { type: 'The PE-Backed Portfolio Company', body: "Your board didn't ask whether you're using AI. They asked what you own. You've been given a window — and it's not wide. LongStrider deploys in ninety days, compounds from week one, and gives you something that shows up in due diligence. Not a subscription renewal. A line item on the asset side." },
  { type: 'The Regulated-Industry Operator', body: "Financial services. Healthcare. Legal. Your data doesn't leave your perimeter — full stop. Not because you're cautious. Because your regulators, your clients, and your counsel require it. LongStrider was architected for exactly this: sovereign deployment, full data residency, air-gapped where required. Compliance-ready by design, not by afterthought." },
  { type: 'The Professional Services Firm', body: "Your product is what your people know. Every methodology, every client relationship, every hard-won pattern — it lives in people, not systems. When they leave, it goes with them. LongStrider makes your firm's institutional intelligence permanent. Not a knowledge base someone has to maintain. A living system that learns alongside your team and stays when they don't." },
  { type: 'The Technology Company Building on AI', body: "You're building products on top of models. Workflows. Pipelines. Intelligent applications. Everything you're building is only as smart as what it remembers — and right now, it resets every session. LongStrider isn't a replacement for what you've built. It's the intelligence layer underneath it that makes everything you deploy compound, context-aware, and worth defending. Not a competitor. A foundation." },
];

const COMPETITORS = [
  { name: 'The Model Providers', body: "The model providers want your data. All of them. Not because they're malicious — because their business model depends on it. Every conversation your team has on their platforms makes their models smarter. Not yours. Theirs. When they offer you \"memory\" or \"institutional intelligence,\" read the fine print. Your knowledge is the product. It always was." },
  { name: 'The Enterprise Search Layer', body: "The enterprise search and productivity layer are retrieval systems dressed up as intelligence. They find things. They summarize things. They do not understand your business, remember what actually mattered, or get smarter about your specific operational reality over time. Retrieval is not intelligence. Never was." },
  { name: 'The Memory Infrastructure Startups', body: "The memory infrastructure startups are building real technology. We respect the work. But they are solving a different problem — developer plumbing for engineers building applications. APIs that store and retrieve interactions. Neither category was architected from day one for the enterprise that needs to accumulate, weight, compound, challenge, and fully own its institutional intelligence. Storage is not intelligence. Retrieval is not understanding." },
];

// ── PAGE COMPONENT ──────────────────────────────────────────────

export default function ManifestoPage() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [showTimeline, setShowTimeline] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionObserverRef = useRef<IntersectionObserver | null>(null);

  const setupObserver = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('deck-visible');
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observerRef.current?.observe(el);
    });
  }, []);

  const setupSectionObserver = useCallback(() => {
    if (sectionObserverRef.current) sectionObserverRef.current.disconnect();
    sectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.15, rootMargin: '-20% 0px -60% 0px' }
    );
    document.querySelectorAll('[data-section]').forEach((el) => {
      sectionObserverRef.current?.observe(el);
    });
  }, []);

  useEffect(() => {
    setupObserver();
    setupSectionObserver();
    return () => {
      observerRef.current?.disconnect();
      sectionObserverRef.current?.disconnect();
    };
  }, [setupObserver, setupSectionObserver]);

  useEffect(() => {
    if (isRevealed) {
      setTimeout(() => {
        setupObserver();
        setupSectionObserver();
      }, 60);
    }
  }, [isRevealed, setupObserver, setupSectionObserver]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
      setShowTimeline(scrollTop > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(`[data-section="${id}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const visibleNodes = isRevealed ? TIMELINE : TIMELINE.filter((n) => !n.gated);
  const activeIdx = visibleNodes.findIndex((n) => n.id === activeSection);

  return (
    <div className="deck-page">
      <div className="deck-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="deck-aurora-1" />
      <div className="deck-aurora-2" />
      <div className="deck-aurora-3" />

      <nav className="deck-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <LongstriderLogo size={38} style={{ opacity: 0.85 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span className="deck-nav-logo">LongStrider</span>
            <span style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.4, color: '#c8a96e' }}>The Manifesto</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '12px', letterSpacing: '0.05em', opacity: 0.25, color: 'rgba(200,169,110,1)', cursor: 'default' }}>
            Architecture <span style={{ fontSize: '9px', letterSpacing: '0.1em', opacity: 0.7 }}>— coming</span>
          </span>
          <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '12px', letterSpacing: '0.05em', opacity: 0.25, color: 'rgba(200,169,110,1)', cursor: 'default' }}>
            About <span style={{ fontSize: '9px', letterSpacing: '0.1em', opacity: 0.7 }}>— coming</span>
          </span>
        </div>
      </nav>

      <div className={`deck-timeline${showTimeline ? ' deck-timeline-visible' : ''}`}>
        <div className="deck-timeline-line" />
        {visibleNodes.map((node, i) => {
          const isEarned = i <= activeIdx;
          return (
            <div
              key={node.id}
              className={`deck-timeline-node${node.id === activeSection ? ' active' : ''}${i < activeIdx ? ' passed' : ''}`}
              style={{
                '--node-color': node.color,
                '--node-glow': node.glow,
                opacity: isEarned ? 1 : 0.28,
                cursor: isEarned ? 'pointer' : 'default',
                pointerEvents: isEarned ? 'auto' : 'none',
              } as React.CSSProperties}
              onClick={() => isEarned && scrollToSection(node.id)}
            >
              <div className="deck-timeline-dot" />
              <span className="deck-timeline-label">{node.label}</span>
            </div>
          );
        })}
      </div>

      <main className="deck-container">

        {/* ── HERO ─────────────────────────────── */}
        <section className="deck-hero" data-section="hero">
          <div data-reveal>
            <div className="deck-wordmark">LongStrider</div>
            <div className="deck-tagline-row">Sovereign · Persistent · Compounding · Living Memory</div>
            <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '12px', letterSpacing: '0.14em', color: 'rgba(200,169,110,0.6)', textTransform: 'uppercase', marginTop: '-40px', marginBottom: '56px' }}>Eight minutes · One decision</div>
          </div>
          <div data-reveal data-delay="1" className="deck-divider" />
          <div data-reveal data-delay="2">
            <h1 className="deck-hero-heading">
              The AI layer that knows your business — and never forgets.
            </h1>
          </div>
          <div data-reveal data-delay="3">
            <div className="deck-pain-points">
              <div className="deck-pain-opener">Every dollar your organization spent on AI this year made someone else&apos;s platform smarter.</div>
              <div className="deck-pain-line">The decision your team made six months ago.</div>
              <div className="deck-pain-line">The client context that only one person carries in their head.</div>
              <div className="deck-pain-line">The pattern that only shows up when you look across everything at once.</div>
              <div className="deck-pain-closer">None of it got smarter. And when they leave, it&apos;s gone.</div>
            </div>
            <p className="deck-body">
              LongStrider isn&apos;t a tool you subscribe to. It&apos;s an intelligence asset you own — one that sits above your existing stack, makes sense of everything your tools know, and gets smarter every day without anyone maintaining it.
            </p>
            <p className="deck-body" style={{ fontWeight: 500, color: 'rgba(255,255,255,0.90)' }}>
              Permanently. Sovereignly. In your environment.
            </p>
            <div className="deck-cta-moment">
              <span className="deck-cta-text">The gap between what your AI stack knows and what your organization knows — that&apos;s what LongStrider closes.</span>
            </div>
          </div>
        </section>

        <div data-reveal className="deck-divider" />

        {/* ── THE GAP ──────────────────────────── */}
        <section className="deck-section" data-section="gap">
          <div data-reveal>
            <div className="deck-label">The Evidence</div>
            <h2 className="deck-heading">Every AI You Buy or Build Starts from Zero</h2>
          </div>
          <div data-reveal data-delay="1">
            <p className="deck-lead">
              Your tools execute. Your dashboards visualize. Your search finds documents. None of them remember.
            </p>
          </div>
          <div data-reveal data-delay="2">
            <p className="deck-body">
              Every model provider is building &ldquo;memory&rdquo; features. They&apos;ll remember your preferences, your history, your patterns. Read the fine print: it&apos;s their memory, not yours. Every conversation your team has on their platforms makes their models smarter — and your competitor&apos;s experience identical to yours.
            </p>
            <p className="deck-body">
              The organizations that moved fastest on AI in 2025 are about to discover what they actually built. Not an asset. A dependency.
            </p>
            <p className="deck-body">
              Every conversation their teams had on those platforms made the vendor&apos;s model smarter — not theirs. When the next model drops — cheaper, faster, better — they&apos;ll switch. And they&apos;ll start from zero. Again.
            </p>
            <p className="deck-body">
              The model is becoming commodity. It already is. Nobody asks which search algorithm powers the bar they type into. They won&apos;t ask which model runs your stack either. The race to the bottom everyone predicted — it&apos;s not coming. It&apos;s here.
            </p>
            <p className="deck-body">
              The question your organization hasn&apos;t answered yet: what happens to everything you learn between now and when you switch again? Where does that go? Who owns it?
            </p>
            <p className="deck-body">
              That layer wasn&apos;t built. LongStrider builds it.
            </p>
          </div>
        </section>

        {/* ── WHAT LONGSTRIDER IS ───────────────── */}
        <section className="deck-section" data-section="what">
          <div data-reveal>
            <div className="deck-label">What It Is</div>
            <h2 className="deck-heading">The Intelligence Layer That Was Never Built</h2>
          </div>
          <div data-reveal data-delay="1">
            <p className="deck-body">
              LongStrider is the layer that sits above your existing stack — synthesizing what every tool knows, accumulating what actually mattered, compounding it over time. It doesn&apos;t replace your tools. It&apos;s what makes them worth keeping.
            </p>
            <p className="deck-body">
              The system adapts at every scale. For an individual, it learns how you think and what you need. For a team, it builds shared operational context that survives personnel changes. For an enterprise, it accumulates institutional intelligence across thousands of users, dozens of systems, and years of decisions — all sovereign, all yours.
            </p>
            <p className="deck-body">
              This isn&apos;t a black box. Every response shows which memories it weighted, why they scored above others, and what the system learned from them. Disagree with an answer — correct it in the interface and the system immediately adjusts, logs the correction, and reweights that understanding. The intelligence it builds is auditable because every decision it makes leaves a record.
            </p>
          </div>
        </section>

        {/* ── YOUR MOAT ────────────────────────── */}
        <section className="deck-section" data-section="moat">
          <div data-reveal>
            <div className="deck-label">Your Moat</div>
            <h2 className="deck-heading">What You&apos;re Actually Building</h2>
          </div>
          <div data-reveal data-delay="1">
            <p className="deck-lead">Every company using AI today is building on rented land.</p>
          </div>
          <div data-reveal data-delay="2">
            <p className="deck-body">
              The models get smarter every quarter. The prices drop every month. And when you switch providers — and you will — you start over with nothing.
            </p>
            <p className="deck-body">
              The companies that win the next decade won&apos;t be the ones with access to the best models. Everyone has access to the same models. They&apos;ll be the ones who built something the models can&apos;t replace — a proprietary intelligence layer that knows their business, compounds over time, and belongs entirely to them.
            </p>
            <p className="deck-body">
              That&apos;s your moat. The asset that shows up on a term sheet, survives an acquisition, and gives every tool in your stack an advantage your competitor can&apos;t buy.
            </p>
            <p className="deck-body">
              LongStrider is how you build it. Starting today.
            </p>
            <p className="deck-body" style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.88)' }}>
              The models will keep getting smarter. The question is whether they&apos;re getting smarter about your business — or just smarter in general.
            </p>
          </div>
        </section>

        {/* ── TEASE / REVEAL GATE ──────────────── */}
        {!isRevealed && (
          <div className="deck-tease">
            <button
              id="deck-reveal-btn"
              className="deck-tease-button"
              onClick={() => setIsRevealed(true)}
            >
              <span>Continue Reading</span>
              <span style={{ fontSize: '13px', opacity: 0.6 }}>· 4 min remaining</span>
            </button>
            <p className="deck-tease-hint">Three scenarios. Four kinds of organizations. Five capabilities no one else has built. One decision.</p>
          </div>
        )}

        {isRevealed && (
          <>
            {/* ── IN PRACTICE ── */}
            <section className="deck-section" data-section="practice">
              <div data-reveal>
                <div className="deck-label">In Practice</div>
                <h2 className="deck-heading">What This Looks Like in the Room</h2>
              </div>
              {SCENARIOS.map((scenario, i) => (
                <div key={scenario.title} className="deck-scenario" data-reveal data-delay={String(i + 1)}>
                  <div className="deck-scenario-title">{scenario.title}</div>
                  {scenario.paragraphs.map((para, j) => (
                    <p key={j} className="deck-body" style={{ fontSize: '17px', marginBottom: j < scenario.paragraphs.length - 1 ? '18px' : '0' }}>
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </section>

            {/* ── WHO THIS IS FOR ── */}
            <section className="deck-section" data-section="who">
              <div data-reveal>
                <div className="deck-label">Audience</div>
                <h2 className="deck-heading">Who This Is For</h2>
              </div>
              {PERSONAS.map((persona, i) => (
                <div key={persona.type} className="deck-persona" data-reveal data-delay={String((i % 3) + 1)}>
                  <div className="deck-persona-type">{persona.type}</div>
                  <p className="deck-persona-body">{persona.body}</p>
                </div>
              ))}
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className="deck-section" data-section="how">
              <div data-reveal>
                <div className="deck-label">Architecture</div>
                <h2 className="deck-heading">How It Works — In Plain Terms</h2>
              </div>
              <div data-reveal data-delay="1">
                <p className="deck-body" style={{ marginBottom: '44px' }}>
                  LongStrider is a sovereign intelligence layer — model-agnostic, positioned between your organization and whatever LLM you choose to use. It doesn&apos;t replace the model. It makes the model aware of your business in ways no model provider can give you. Five capabilities. No other system has all of them.
                </p>
              </div>
              {CAPABILITIES.map((cap, i) => (
                <div key={cap.number} className="deck-capability" data-reveal data-delay={String(Math.min(i + 2, 6))}>
                  <div className="deck-capability-number">{cap.number}</div>
                  <div>
                    <div className="deck-capability-title">{cap.title}</div>
                    <div className="deck-capability-body">{cap.body}</div>
                  </div>
                </div>
              ))}
            </section>

            {/* ── COMPETITIVE ── */}
            <section className="deck-section" data-section="competitive">
              <div data-reveal>
                <div className="deck-label">Competitive Landscape</div>
                <h2 className="deck-heading">A Category That Wasn&apos;t Built</h2>
              </div>
              {COMPETITORS.map((comp, i) => (
                <div key={comp.name} className="deck-competitor" data-reveal data-delay={String(i + 1)}>
                  <div className="deck-competitor-name">{comp.name}</div>
                  <p className="deck-competitor-body">{comp.body}</p>
                </div>
              ))}
              <div data-reveal data-delay="4">
                <p className="deck-body" style={{ marginTop: '40px', fontStyle: 'italic', color: 'rgba(255,255,255,0.88)' }}>
                  Most AI remembers everything and agrees with everything. LongStrider remembers everything and has the integrity to challenge you.
                </p>
              </div>
            </section>

            {/* ── WHAT'S NEXT ── */}
            <section className="deck-section" data-section="engage">
              <div data-reveal>
                <div className="deck-label">What&apos;s Next</div>
                <h2 className="deck-heading">Four Tiers. One Decision.</h2>
              </div>
              <div data-reveal data-delay="1">
                <p className="deck-body">
                  LongStrider isn&apos;t a SaaS subscription you spin up and forget. It&apos;s institutional intelligence you build, own, and compound — configured for your environment, your regulatory requirements, and your timeline. We work with organizations across four deployment models.
                </p>
              </div>
              <div data-reveal data-delay="2" style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ padding: '28px 32px', border: '1px solid rgba(200,169,110,0.2)', borderRadius: '4px', background: 'rgba(200,169,110,0.04)' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.7)', marginBottom: '10px', fontFamily: "'Lora', Georgia, serif" }}>Hosted Intelligence</div>
                  <p className="deck-body" style={{ marginBottom: 0 }}>Your data stays in your environment. The intelligence engine runs in a dedicated instance we operate — isolated to your organization, accessible via API, no shared infrastructure. You own the knowledge. We run the engine.</p>
                </div>
                <div style={{ padding: '28px 32px', border: '1px solid rgba(200,169,110,0.15)', borderRadius: '4px', background: 'rgba(200,169,110,0.025)' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.6)', marginBottom: '10px', fontFamily: "'Lora', Georgia, serif" }}>Private Cloud</div>
                  <p className="deck-body" style={{ marginBottom: 0 }}>For organizations requiring complete network control. The intelligence engine deploys as containerized software into your private cloud — your VPC, your servers, your perimeter. No external calls. No source code. Full data residency.</p>
                </div>
                <div style={{ padding: '28px 32px', border: '1px solid rgba(200,169,110,0.1)', borderRadius: '4px', background: 'rgba(200,169,110,0.015)' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.5)', marginBottom: '10px', fontFamily: "'Lora', Georgia, serif" }}>Sovereign Build</div>
                  <p className="deck-body" style={{ marginBottom: 0 }}>For the most sensitive environments. We build alongside your team — containerized, compiled, no source code transferred. When the engagement is complete, the intelligence layer, the knowledge graph, and every compounding insight belong to you. Permanently.</p>
                </div>
                <div style={{ padding: '28px 32px', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '4px', background: 'rgba(139,92,246,0.03)' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.7)', marginBottom: '10px', fontFamily: "'Lora', Georgia, serif" }}>Partner Program</div>
                  <p className="deck-body" style={{ marginBottom: 0 }}>Deploy LongStrider under your brand, in your client environments. For consultancies, managed service providers, and technology firms building institutional intelligence into their own offerings. You bring the relationships and the vertical knowledge. The intelligence engine is yours to operate, configure, and take to market.</p>
                </div>
              </div>
              <div data-reveal data-delay="3">
                <p className="deck-body" style={{ marginTop: '48px', fontStyle: 'italic', color: 'rgba(255,255,255,0.88)' }}>
                  We don&apos;t sell seat licenses. We build institutional intelligence together. What gets built belongs to you.
                </p>
              </div>
            </section>

            {/* ── FINAL QUOTE ── */}
            <div data-reveal className="deck-final-quote">
              You&apos;re not buying software. You&apos;re buying the head start we spent years building for you.
            </div>

            {/* ── FOOTER ── */}
            <footer className="deck-footer" data-reveal>
              <p className="deck-footer-headline">
                We&apos;re having three conversations this quarter.
              </p>
              <p className="deck-body" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 32px', color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.7' }}>
                A white-label partner. A pilot customer. One investor introduction. If you know someone who belongs in any of those conversations — or if that&apos;s you — forward this and let&apos;s talk.
              </p>
              <a href="mailto:matt@longstridersystems.com" className="deck-footer-button">
                <span>Start the conversation</span>
                <span style={{ fontSize: '14px', opacity: 0.7 }}>→</span>
              </a>
              <p className="deck-footer-contact">
                <a href="mailto:matt@longstridersystems.com">matt@longstridersystems.com</a>
                <span style={{ margin: '0 12px', opacity: 0.3 }}>·</span>
                <a href="https://longstridersystems.com" target="_blank" rel="noopener noreferrer">longstridersystems.com</a>
              </p>
            </footer>
          </>
        )}
      </main>
    </div>
  );
}
