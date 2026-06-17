import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from './RevealSection';
import LabelBadge from './LabelBadge';

const PROMPT = `Write a free verse poem that explores your identity. Start lines with "I am from..." (repeat for effect). Include at least 10-15 lines, use at least 3 strong images (sensory details), and focus on specific memories, objects, and experiences. Rhyme is not required.`;

const ORIGINAL_LINES = [
  "I am from Ethiopia, from a place with mountains and the Abay river.",
  "I am from Lalibela where the churches are carved into the deep red volcanic rock.",
  "I am from a place where I miss the natural taste of the drinking water, because in Canada it tastes totally different.",
  "I am from woodbine streets in Ontario where it is always raining gray water.",
  "I am from the cold blue lights of a tv screen and the calluses on my thumbs from a controller grip.",
  "I am from lines of code that don't work until they finally compile.",
  "I am from the transition between high school and whatever comes next.",
];

const FINAL_LINES = [
  "I am from the high, jagged peaks of Ethiopia,",
  "where the Abay cuts through the earth like an open vein.",
  "I am from Lalibela, born from the shadows of holy sanctuaries,",
  "hewn directly into the ancient, deep red volcanic rock.",
  "I am from a memory of water, the crisp, natural taste of a mountain spring,",
  "now traded for the flat, chemical stillness of a western tap.",
  "I am from the sterile symmetry of Western streets,",
  "where concrete sidewalks line up in perfectly organized, rigid grids.",
  "I am from a pitch-black room at midnight,",
  "where my eyes hyper-focus, tracking fast-moving pixels across the dark.",
  "I am from the precise architecture of a controller grip,",
  "its worn plastic switches answering to the calluses on my thumbs.",
  "I am from the quiet thrill of creation,",
  "building an entire universe inside a machine where I control all the rules.",
  "I am from a framework still compiling",
  "unfinished, unexecuted, but moving forward.",
];

const REFLECTION = `For Quick Write 7, my objective was to explore and express the structural intersection between my cultural heritage and my digital identity without relying on generic tech clichés. In my original draft, my observations about moving from Ethiopia to Canada were superficial. During revision, I stripped away passive imagery and intentionally contrasted the organic, volcanic red rock of Lalibela against the rigid grids of western streets. Furthermore, I tried to elevate the description of my programming and gaming lifestyle by focusing on the physical sensation of hyper-focusing on rapid pixels in a pitch-black room, transforming the act of coding into a thematic exploration of agency, building digital universes where I control all the rules.`;

export default function SourceCodeSection() {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <section id="source-code" className="relative px-6 py-20 overflow-hidden">

      {/* Dual-plane background: volcanic left / grid right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Volcanic side */}
        <div
          className="absolute left-0 top-0 bottom-0"
          style={{
            width: '45%',
            background: 'radial-gradient(ellipse at 30% 60%, rgba(160,50,20,0.12) 0%, rgba(100,20,5,0.06) 50%, transparent 80%)',
          }}
        />
        {/* Grid side */}
        <div
          className="absolute right-0 top-0 bottom-0"
          style={{
            width: '45%',
            backgroundImage: 'linear-gradient(rgba(51,51,54,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,51,54,0.25) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.6), transparent)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.6), transparent)',
          }}
        />
        {/* Center fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(8,8,10,0.85) 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Title */}
        <RevealSection>
          <div className="mb-12">
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--trace)' }}>
              Writing Piece 02
            </p>
            <h2
              className="font-heading font-bold italic mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', color: 'var(--manuscript)', lineHeight: 1.1 }}
            >
              Source Code
            </h2>
            {/* Dual contrast bar */}
            <div className="mt-6 flex items-center gap-0 h-1 rounded overflow-hidden" aria-hidden="true">
              <div className="flex-1 h-full" style={{ background: 'linear-gradient(to right, rgba(160,50,20,0.7), rgba(160,50,20,0.3))' }} />
              <div className="w-px h-full" style={{ background: 'var(--manuscript)', opacity: 0.3 }} />
              <div className="flex-1 h-full" style={{ background: 'linear-gradient(to right, rgba(51,51,54,0.6), rgba(80,100,130,0.4))' }} />
            </div>
            <p className="font-mono text-xs text-center tracking-widest mt-3" style={{ color: 'rgba(207,158,66,0.5)' }}>
              free-verse identity poem
            </p>
          </div>
        </RevealSection>

        {/* Prompt */}
        <RevealSection delay={0.05}>
          <div className="mb-8 pl-4 border-l-2" style={{ borderColor: 'var(--trace)' }}>
            <LabelBadge color="trace">Prompt</LabelBadge>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: '#888' }}>
              {PROMPT}
            </p>
          </div>
        </RevealSection>

        {/* Toggle */}
        <RevealSection delay={0.1}>
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShowOriginal(false)}
              className="ghost-toggle px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all"
              style={!showOriginal ? { borderColor: 'var(--rift)', color: 'var(--rift)', background: 'rgba(157,123,255,0.07)' } : { color: '#888' }}
              aria-pressed={!showOriginal}
            >
              Final Poem
            </button>
            <button
              onClick={() => setShowOriginal(true)}
              className="ghost-toggle px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all"
              style={showOriginal ? { borderColor: 'var(--amber)', color: 'var(--amber)', background: 'rgba(207,158,66,0.07)' } : { color: '#888' }}
              aria-pressed={showOriginal}
            >
              Original Draft
            </button>
          </div>
        </RevealSection>

        {/* Poem display */}
        <RevealSection delay={0.15}>
          <AnimatePresence mode="wait">
            {!showOriginal ? (
              <motion.div
                key="final-poem"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <LabelBadge color="rift">Final Poem</LabelBadge>
                <div className="mt-6 relative">
                  {/* Decorative vertical line beside poem */}
                  <div
                    className="absolute -left-4 top-0 bottom-0 w-px"
                    aria-hidden="true"
                    style={{ background: 'linear-gradient(to bottom, rgba(157,123,255,0.4), rgba(207,158,66,0.3), transparent)' }}
                  />
                  <div className="pl-2">
                    {FINAL_LINES.map((line, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.4 }}
                        className="poetry-text"
                        style={{
                          color: line.startsWith('I am from') ? 'var(--manuscript)' : 'rgba(232,228,223,0.78)',
                          paddingLeft: line.startsWith('I am from') ? '0' : '1.5rem',
                          fontSize: '1.05rem',
                          lineHeight: '1.9',
                        }}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="original-poem"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <LabelBadge color="amber">Original Quick Write</LabelBadge>
                <div className="mt-6 pl-2">
                  {ORIGINAL_LINES.map((line, i) => (
                    <p
                      key={i}
                      className="poetry-text"
                      style={{
                        color: 'rgba(232,228,223,0.55)',
                        fontSize: '1.05rem',
                        lineHeight: '1.9',
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </RevealSection>

        {/* Reflection */}
        <RevealSection delay={0.2}>
          <div className="mt-14 pl-5 border-l-2" style={{ borderColor: 'rgba(207,158,66,0.3)' }}>
            <LabelBadge color="trace">Process Reflection</LabelBadge>
            <p className="mt-4 leading-relaxed text-base" style={{ color: 'rgba(232,228,223,0.7)' }}>
              {REFLECTION}
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}