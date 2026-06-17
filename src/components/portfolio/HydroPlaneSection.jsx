import RevealSection from './RevealSection';
import GhostToggle from './GhostToggle';
import LabelBadge from './LabelBadge';

const PROMPT = `Create a poem or write a scene that takes place during a heavy rainstorm at night. A character is waiting for someone who may never come. Use the rain as a reflection of the character's emotions. Include at least 3 sensory details, one object with symbolic meaning, a feeling of tension/loneliness, and an unsettling ending.`;

const ORIGINAL = `I sat in my car under the broken street lamp while the rain slammed against the roof. It was completely pouring out. I kept looking at my phone screen waiting for a text from Sarah but nothing came. The clock on the dashboard said 3:33 AM. The air smelled like wet asphalt and cold car seats. I had this old keychain she gave me in my hand, twisting it around until my fingers hurt. She's not coming. I know she's not coming because the road is completely empty. Then I looked in my rearview mirror and saw a shadow sitting in my backseat.`;

const FINAL = `Rain heavy enough to blur the diner sign down the road slammed against the windshield. Inside the sedan, the air was warm, stale, and smelled like old fabric.

Thirty minutes late.

Julian swiped up on his phone screen. Still no service. The pale light flickered across the passenger seat, catching the edge of a plastic USB drive. The tiny red status light stayed dead. It was just a worthless piece of hardware now, a physical reminder that the plan was compromised.

The constant, heavy drumming on the roof was not peaceful; it was loud enough to cut him off from the rest of the world, trapping him inside a dark box of cold steel. She was not coming. The realization did not hit him with a sudden panic. It just settled heavily into his chest.

He reached out and turned the ignition key, desperate to get moving. The engine clicked, sputtered, and died. In the sudden quiet between the heavy slaps of the windshield wipers, he heard a distinct, wet breath draw from the darkness behind his seat.`;

const REFLECTION = `In my original quick write, I relied on a first person writing/perspective to capture the immediate shock of the discovery. During the revision process, I intentionally shifted to a limited third-person perspective to create a sense of cinematic detachment, allowing me to focus more deeply on the atmospheric and sensory details of the environment. To elevate the piece, I replaced the personal keychain with a functionally dead USB drive — a more loaded symbol that implies a broader, more sinister context while reinforcing the theme of a plan gone wrong. The minimalist sentence "Thirty minutes late." creates an isolated beat of pure tension, and the final line delivers an unsettling, open-ended horror beat that refuses easy resolution.`;

export default function HydroplaneSection() {
  return (
    <section id="hydroplane" className="relative px-6 py-20 overflow-hidden">

      {/* Rain atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(30,55,90,0.1) 0%, transparent 70%)',
          }}
        />
        {/* Rain streaks */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${(i * 5.8) % 100}%`,
              top: 0,
              bottom: 0,
              width: '1px',
              background: `linear-gradient(to bottom, transparent ${(i * 7) % 40}%, rgba(100,140,180,${0.04 + (i % 4) * 0.02}) ${40 + (i * 5) % 30}%, transparent 100%)`,
              transform: `skewX(${-8 + (i % 5)}deg)`,
            }}
          />
        ))}
        {/* Windshield refraction at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(to bottom, rgba(20,40,70,0.08), transparent)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Title */}
        <RevealSection>
          <div className="mb-12">
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--trace)' }}>
              Writing Piece 03
            </p>
            <h2
              className="font-heading font-bold italic mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', color: 'var(--manuscript)', lineHeight: 1.1 }}
            >
              Hydroplane
            </h2>
            {/* Rain visual element */}
            <div className="mt-6 flex gap-1 items-end h-8" aria-hidden="true">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '1px',
                    height: `${20 + (i % 5) * 8}px`,
                    background: `rgba(80,120,180,${0.15 + (i % 4) * 0.1})`,
                    borderRadius: '1px',
                  }}
                />
              ))}
            </div>
            <p className="font-mono text-xs tracking-widest mt-3" style={{ color: 'rgba(80,120,180,0.5)' }}>
              psychological noir / short fiction
            </p>
          </div>
        </RevealSection>

        {/* Ghost Toggle */}
        <RevealSection delay={0.1}>
          <GhostToggle
            prompt={PROMPT}
            originalText={ORIGINAL}
            finalText={<p className="prose-piece" style={{ whiteSpace: 'pre-wrap' }}>{FINAL}</p>}
          />
        </RevealSection>

        {/* Reflection */}
        <RevealSection delay={0.15}>
          <div className="mt-14 pl-5 border-l-2" style={{ borderColor: 'rgba(80,120,180,0.35)' }}>
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