import { motion } from 'framer-motion';
import NavHUD from '../components/portfolio/NavHUD';
import CustomCursor from '../components/portfolio/CustomCursor';
import RevealSection from '../components/portfolio/RevealSection';
import SectionDivider from '../components/portfolio/SectionDivider';
import StaticAirSection from '../components/portfolio/StaticAirSection';
import SourceCodeSection from '../components/portfolio/SourceCodeSection';
import HydroPlaneSection from '../components/portfolio/HydroPlaneSection';
import ReflectionSection from '../components/portfolio/ReflectionSection';

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--void)', color: 'var(--manuscript)' }}>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Terminal spine */}
      <div className="terminal-spine hidden lg:block" aria-hidden="true" />

      {/* Navigation */}
      <NavHUD />

      {/* ── HERO / HOME ─────────────────────────── */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">

        {/* Background ambience */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(157,123,255,0.05) 0%, transparent 70%)',
          }}
        />

        {/* Floating rift line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(157,123,255,0.15) 40%, rgba(157,123,255,0.15) 60%, transparent 100%)',
            boxShadow: '0 0 40px 2px rgba(157,123,255,0.07)',
          }}
        />

        <div className="relative z-10 max-w-3xl w-full text-center">
          {/* Course info */}
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-xs tracking-widest uppercase mb-8"
            style={{ color: 'var(--amber)' }}
          >
            The Writer's Craft — EWC4U1
          </motion.p>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <h1 className="font-body font-thin tracking-[0.25em] uppercase text-xl sm:text-2xl mb-2" style={{ color: 'rgba(232,228,223,0.6)' }}>
              The Iterative
            </h1>
            <span
              className="font-heading italic font-bold block"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                color: 'var(--manuscript)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Voice
            </span>
          </motion.div>

          {/* Subtitle / tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="font-mono text-xs tracking-widest mb-12"
            style={{ color: 'var(--rift)' }}
          >
            — A Digital Writer's Portfolio —
          </motion.p>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mb-16"
          >
            <p className="font-heading text-3xl sm:text-4xl italic" style={{ color: 'var(--manuscript)' }}>
              Kidus Liyew
            </p>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mx-auto mb-16 h-px max-w-xs"
            style={{ background: 'linear-gradient(to right, transparent, var(--trace), transparent)', transformOrigin: 'center' }}
            aria-hidden="true"
          />

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="text-left max-w-2xl mx-auto space-y-5"
          >
            <p className="font-body leading-relaxed" style={{ fontSize: '1.05rem', color: 'rgba(232,228,223,0.88)' }}>
              Writing and programming are driven by the exact same impulse: the desire to build a functional system out of a blank screen. Whether I am writing logic loops or arranging a free-verse poem, my goal is to organize raw, chaotic ideas into a clean architecture that moves an audience.
            </p>
            <p className="font-body leading-relaxed" style={{ fontSize: '1.05rem', color: 'rgba(232,228,223,0.88)' }}>
              Growing up surrounded by the vast mountains and ancient heritage of Ethiopia, and later moving to the rigid, organized grids of Southern Ontario, my worldview has been shaped by contrast. I specialize in minimalist suspense narratives and identity-driven poetry that examine what it means to bridge completely different worlds. I write because code can solve systemic problems, but creative storytelling is the only framework capable of processing the human experiences behind them.
            </p>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-20 flex flex-col items-center gap-2"
            aria-hidden="true"
          >
            <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--trace)' }}>scroll to read</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-px h-10"
              style={{ background: 'linear-gradient(to bottom, var(--trace), transparent)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── WRITING PIECES ───────────────────────── */}
      <SectionDivider label="writing pieces" />
      <StaticAirSection />
      <SectionDivider label="next piece" />
      <SourceCodeSection />
      <SectionDivider label="next piece" />
      <HydroPlaneSection />
      <SectionDivider label="final reflection" />
      <ReflectionSection />

    </div>
  );
}