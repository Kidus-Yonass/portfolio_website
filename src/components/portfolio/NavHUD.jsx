import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { id: 'home', label: 'Home', accent: 'rgba(157,123,255,0.12)' },
  { id: 'static-air', label: 'Static Air', accent: 'rgba(157,123,255,0.18)' },
  { id: 'source-code', label: 'Source Code', accent: 'rgba(180,80,30,0.15)' },
  { id: 'hydroplane', label: 'Hydroplane', accent: 'rgba(40,80,120,0.18)' },
  { id: 'reflection', label: 'Reflection', accent: 'rgba(207,158,66,0.12)' },
];

export default function NavHUD() {
  const [progress, setProgress] = useState(0);
  const [hoveredAccent, setHoveredAccent] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);

      // Determine active section
      for (const link of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(link.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="nav-hud fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-6 py-3 flex items-center justify-between"
      style={{
        transition: 'background 0.4s ease',
        background: hoveredAccent
          ? `rgba(8,8,10,0.85)`
          : 'rgba(8,8,10,0.75)',
      }}
      aria-label="Portfolio navigation"
    >
      {/* Left: Monogram */}
      <button
        onClick={() => scrollTo('home')}
        className="font-mono text-xs tracking-widest text-amber-accent opacity-70 hover:opacity-100 transition-opacity"
        style={{ color: 'var(--amber)' }}
        aria-label="Go to Home"
      >
        K.L.
      </button>

      {/* Center: Links */}
      <div className="flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            onMouseEnter={() => setHoveredAccent(link.accent)}
            onMouseLeave={() => setHoveredAccent(null)}
            className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 relative ${
              activeSection === link.id
                ? 'text-rift'
                : 'text-trace hover:text-manuscript'
            }`}
            style={{
              color: activeSection === link.id ? 'var(--rift)' : undefined,
            }}
            aria-current={activeSection === link.id ? 'page' : undefined}
          >
            {link.label}
            {activeSection === link.id && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute -bottom-1 left-0 right-0 h-px"
                style={{ background: 'var(--rift)' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="nav-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </nav>
  );
}