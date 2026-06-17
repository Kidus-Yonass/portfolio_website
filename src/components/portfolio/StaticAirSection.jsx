import RevealSection from './RevealSection';
import GhostToggle from './GhostToggle';
import LabelBadge from './LabelBadge';

const PROMPT = `Write the opening scene of a children's picture storybook or narrative scene. Start immediately with the main problem. Focus on one main character with one strong trait. Include only one conflict. Build tension around the exact moment he realizes a closet portal is real and decides whether or not to enter.`;

const ORIGINAL = `When I opened the door of my closet to look for my black hoodie, it wasn't there. The back wall of the closet looked totally different. It was vibrating. Not like a magical Narnia door that would transport you to a fantasy land of talking animals and quests, but more like a tear in the air, glowing a pixelated purple light. The air felt freezing to the touch with a low buzzing sound. I stood in the center of my closet for five minutes thinking about what would happen if I stepped through the portal. My room began to feel small and confined in comparison. Taking a deep breath, I lifted my left foot and began to step through the portal.`;

const FINAL = `Eyasu pulled back on the coat hangers, but his fingers did not move away from the fabric of his jacket. The back drywall was gone, replaced with a jagged tear in reality—two feet in height and humming with a static that made his eyes hurt. The rift glowed a cold violet in the closet, illuminating his bedroom floor.

His index finger hovered over the rift. The air near it was noticeably cold to the touch and smelled faintly of ozone. A rhythmic, mechanical pulse from the void shattered the fragile silence of the suburban house.

To go through the rift was to enter an absolute variable; to stay was to enter a known stagnation. His bedroom suddenly seemed small, a cramped cage in the face of the infinite unknown. Closing his eyes and ignoring the sound of the television below, Eyasu shifted his weight forward onto his toes. Finally breaking his paralysis, he took a blind step into the dark unknown of the rift.`;

const REFLECTION = `In my original quick write, I relied on a first person writing/perspective to capture the immediate shock of the discovery. During the revision process, I intentionally shifted to a limited third-person perspective ("Eyasu") to create a sense of cinematic detachment, allowing me to focus more deeply on the atmospheric and sensory details of the environment. To elevate the piece to a sophisticated standard, I stripped away generic fantasy tropes (like the reference to Narnia) and replaced them with neo-noir imagery such as the scent of scorched copper wires and unnatural geometric shadows to build a more grounded, high-stakes psychological tension around his final choice.`;

export default function StaticAirSection() {
  return (
    <section id="static-air" className="relative px-6 py-20 overflow-hidden">

      {/* Violet rift visual behind the column */}
      <div
        className="absolute left-1/2 top-0 bottom-0 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '1px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(157,123,255,0.25) 30%, rgba(157,123,255,0.25) 70%, transparent 100%)',
          boxShadow: '0 0 60px 20px rgba(157,123,255,0.08)',
          animation: 'rift-pulse 3s ease-in-out infinite',
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 40% 50% at 50% 50%, rgba(157,123,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Piece number + title */}
        <RevealSection>
          <div className="mb-12">
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--trace)' }}>
              Writing Piece 01
            </p>
            <h2
              className="font-heading font-bold italic mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', color: 'var(--manuscript)', lineHeight: 1.1 }}
            >
              Static Air
            </h2>
            {/* Decorative rift illustration */}
            <div className="mt-6 mb-2 flex items-center gap-3" aria-hidden="true">
              <div className="h-px flex-1" style={{ background: 'var(--trace)' }} />
              <div
                style={{
                  width: '2px',
                  height: '48px',
                  background: 'linear-gradient(to bottom, transparent, var(--rift), transparent)',
                  boxShadow: '0 0 12px 4px rgba(157,123,255,0.4)',
                  borderRadius: '2px',
                }}
              />
              <div className="h-px flex-1" style={{ background: 'var(--trace)' }} />
            </div>
            <p className="font-mono text-xs text-center tracking-widest" style={{ color: 'rgba(157,123,255,0.5)' }}>
              neo-noir suspense / short fiction
            </p>
          </div>
        </RevealSection>

        {/* Ghost Toggle */}
        <RevealSection delay={0.1}>
          <GhostToggle prompt={PROMPT} originalText={ORIGINAL} finalText={<p className="prose-piece" style={{ whiteSpace: 'pre-wrap' }}>{FINAL}</p>} />
        </RevealSection>

        {/* Reflection */}
        <RevealSection delay={0.15}>
          <div className="mt-14 pl-5 border-l-2" style={{ borderColor: 'rgba(157,123,255,0.3)' }}>
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