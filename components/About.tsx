import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="wireframe-section-header justify-center mb-6 reveal">
          <span className="wireframe-section-label">05</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
            About.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-8 items-start">
          {/* Headshot Image */}
          <div className="wireframe-card p-0 reveal" data-id="IMG-001" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full aspect-[4/5] bg-[var(--color-surface)] overflow-hidden">
                <Image
                  src="/IMG_3531.jpg"
                  alt="Wally Mo - Founder of One Block Away"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center' }}
                  priority
                />
              </div>
              <div className="px-4 py-3 bg-[var(--color-surface)] border-t-2 border-[var(--color-wireframe)]">
                <p className="text-sm font-mono text-[var(--color-text-secondary)] tracking-wide">
                  Founder, Wally
                </p>
              </div>
          </div>
          
          {/* Content */}
          <div className="wireframe-card reveal" data-id="ABT-001" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed font-light">
              My path to One Block Away started with a simple frustration: Agencies create dependency, not empowerment.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed font-light">
              I spent nearly 14 years in customer experience—from NYC advertising to UX research and design—learning how to bridge business goals and customer needs. But I also saw how agencies gatekeep knowledge, charge retainers, and leave clients dependent on "experts" who won't explain the work.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-light">
              When I expanded into AI implementation and moved to Apex, I decided to build something different: a holistic partner for small businesses who can't afford (or don't want) agency bureaucracy. Design, strategy, AI—whatever you need to compete and grow. I'll teach you as we build, you'll own everything we create, and you'll walk away equipped to thrive without me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
