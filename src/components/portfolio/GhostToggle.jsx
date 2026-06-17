import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LabelBadge from './LabelBadge';

export default function GhostToggle({ prompt, originalText, finalText }) {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className="relative">
      {/* Toggle control */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => setShowOriginal(false)}
          className={`ghost-toggle px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all ${
            !showOriginal ? 'border-rift text-rift' : 'text-trace'
          }`}
          style={!showOriginal ? { borderColor: 'var(--rift)', color: 'var(--rift)' } : {}}
          aria-pressed={!showOriginal}
        >
          Final Piece
        </button>
        <button
          onClick={() => setShowOriginal(true)}
          className={`ghost-toggle px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all ${
            showOriginal ? 'border-amber text-amber-accent' : 'text-trace'
          }`}
          style={showOriginal ? { borderColor: 'var(--amber)', color: 'var(--amber)' } : {}}
          aria-pressed={showOriginal}
        >
          Original Draft
        </button>
        <span className="text-trace font-mono text-xs hidden sm:inline">
          {showOriginal ? '// v1.0 — proof of concept' : '// v2.0 — optimized'}
        </span>
      </div>

      {/* Prompt block */}
      <div className="mb-8 pl-4 border-l-2" style={{ borderColor: 'var(--trace)' }}>
        <LabelBadge color="trace">Prompt</LabelBadge>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: '#888' }}>
          {prompt}
        </p>
      </div>

      {/* Content area */}
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          {!showOriginal ? (
            <motion.div
              key="final"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <LabelBadge color="rift">Final Piece</LabelBadge>
              <div className="mt-4 prose-piece" style={{ color: 'var(--manuscript)' }}>
                {finalText}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="original"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <LabelBadge color="amber">Original Quick Write</LabelBadge>
              <div
                className="mt-4 prose-piece"
                style={{ color: 'rgba(232,228,223,0.65)' }}
              >
                {originalText}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}