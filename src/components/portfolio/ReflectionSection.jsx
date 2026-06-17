import RevealSection from './RevealSection';

const REFLECTIONS = [
  {
    num: '01',
    heading: 'My growth as a writer this semester',
    body: `Entering this semester, I viewed writing purely as a functional tool. My background in programming taught me to prioritize absolute efficiency using language to deliver precise data points rather than artistic depth. However, throughout this process of drafting, editing, and compiling this Digital Portfolio, my understanding of the writer's craft has fundamentally evolved. I have learned that creative writing is an iterative design process. Words are not just transactional; they are the core infrastructure used to build tension, establish atmosphere, and map the internal complexities of human identity.`,
  },
  {
    num: '02',
    heading: 'My strengths and challenges',
    body: `My greatest strength as a writer lies in structural pacing and atmospheric grounding. Because my mind is trained to look at how different components interact within a system, I find it intuitive to design environments where external elements like the failing mechanics of a dead battery in Hydroplane or the low-frequency humming of the rift in Static Air exert immediate psychological pressure on a character.

My most significant obstacle this semester was resisting the temptation to rely on predictable formulas or over-descriptive clichés. In early drafts, my instinct was to use heavy adjectives to force an emotional reaction from the reader. The revision process strictly challenged me to that. To achieve a Level 4 standard of communication, I had to learn that minimalism is often much more powerful than over-explanation. Trimming away artificial filler but at the same time using the right vocabularies allowed the actual narrative tension to speak for itself.`,
  },
  {
    num: '03',
    heading: 'How revision improved my writing',
    body: `Revision is essentially debugging a narrative. Through this portfolio, I realized that a first draft is simply a proof of concept, while true writing happens during optimization. For instance, in my poem Source Code, my initial raw draft was just a flat, superficial list of literal memories. Revision allowed me to actively employ lineation to control the reader's pacing, slowing down the lines to create sharp contrasts between the organic volcanic rock of Lalibela and the grids of my current Western environment. Revision helped me to transform a basic school assignment into a deliberate, high-contrast exploration of my personal history.`,
  },
  {
    num: '04',
    heading: 'Which piece best represents me and why',
    body: `The piece that best represents my growth this semester is the free-verse poem, Source Code. This poem acts as a clean synthesis of my dual realities, merging my deep roots in Ethiopia with the hyper-focused digital landscape I operate in today. By concluding the poem with the metaphor of a "framework still compiling," the structure itself reflects my current state: transitioning out of high school, unfinished, but constantly iterating and moving forward. Ultimately, this course has proven to me that writing is never a finished product; it is an ongoing, evolving system that requires constant refinement to reach its highest potential.`,
  },
  {
    num: '05',
    heading: 'What I have learned about the writing process',
    body: `The most critical thing I learned about the writing process is that a first draft is never a finished product; it is merely a proof of concept. Writing is an inherently iterative architecture. Just like software development, a narrative requires cycles of testing, debugging, and optimization to function efficiently.`,
  },
];

export default function ReflectionSection() {
  return (
    <section id="reflection" className="relative px-6 py-20 overflow-hidden">

      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 60%, rgba(207,158,66,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Section header */}
        <RevealSection>
          <div className="mb-16 text-center">
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--trace)' }}>
              Page 05
            </p>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--manuscript)', lineHeight: 1.15 }}
            >
              Final Writer's Reflection
            </h2>
            <div className="mt-6 mx-auto h-px max-w-xs" style={{ background: 'linear-gradient(to right, transparent, var(--amber), transparent)' }} aria-hidden="true" />
          </div>
        </RevealSection>

        {/* Reflection entries */}
        <div className="space-y-16">
          {REFLECTIONS.map((r, i) => (
            <RevealSection key={r.num} delay={i * 0.07}>
              <div className="relative pl-12">
                {/* Big number */}
                <span className="reflection-number" aria-hidden="true">{r.num}</span>

                {/* Heading */}
                <h3
                  className="font-heading italic font-bold mb-5"
                  style={{ fontSize: '1.5rem', color: 'var(--manuscript)', lineHeight: 1.2 }}
                >
                  {r.heading}
                </h3>

                {/* Body */}
                <div
                  className="leading-relaxed text-base space-y-4"
                  style={{ color: 'rgba(232,228,223,0.8)', whiteSpace: 'pre-wrap' }}
                >
                  {r.body.split('\n\n').map((para, pi) => (
                    <p key={pi}>{para}</p>
                  ))}
                </div>

                {/* Amber accent line left */}
                {i < REFLECTIONS.length - 1 && (
                  <div
                    className="absolute left-0 top-0 w-px h-full"
                    aria-hidden="true"
                    style={{ background: `linear-gradient(to bottom, rgba(207,158,66,${0.15 + i * 0.05}), transparent)` }}
                  />
                )}
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Closing signature */}
        <RevealSection delay={0.4}>
          <div className="mt-20 text-center">
            <div className="mx-auto mb-8 h-px max-w-sm" style={{ background: 'linear-gradient(to right, transparent, var(--trace), transparent)' }} aria-hidden="true" />
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--trace)' }}>
              // end of portfolio
            </p>
            <p
              className="font-heading italic text-2xl"
              style={{ color: 'var(--manuscript)' }}
            >
              Kidus Liyew
            </p>
            <p className="font-mono text-xs mt-2" style={{ color: 'var(--amber)' }}>
              The Writer's Craft — EWC4U1
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}