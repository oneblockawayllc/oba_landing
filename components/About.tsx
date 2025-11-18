export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="wireframe-section-header reveal">
          <span className="wireframe-section-label">06</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
            About.
          </h2>
        </div>
        <div className="wireframe-card reveal" data-id="ABT-001" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed font-light">
            With nearly 14 years immersed in the world of customer experience, my journey has been both diverse and enlightening. My roots are in advertising, where I collaborated with a spectrum of clients, from local gems to industry giants, across New York City's bustling agency landscape. As an Account Executive, I honed my skills in understanding client needs and translating them into actionable campaigns.
          </p>
          <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed font-light">
            However, my passion truly ignited when I transitioned into user experience research and design. This shift allowed me to delve deeper, striking a harmonious balance between business objectives and the ever-evolving expectations of users and customers.
          </p>
          <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed font-light">
            Today, I've expanded my expertise to include <span className="font-[var(--font-mono)] text-[var(--color-energy-primary)]">AI</span> Implementation & Orchestration, completing what I call my "three areas of expertise": Account Management & Employee Relations, UX/UI Design, and <span className="font-[var(--font-mono)] text-[var(--color-energy-primary)]">AI</span> Implementation & Orchestration. This unique combination allows me to help businesses in downtown Apex and the RTP region bring their ideas to life—from getting concepts on paper through strategic roadmaps, to creating solutions from scratch, to implementing <span className="font-[var(--font-mono)] text-[var(--color-energy-primary)]">AI</span> systems that drive real business value.
          </p>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-light">
            I firmly believe that the cornerstone of a business's longevity lies not just in profits, but in crafting solutions that resonate with what customers genuinely seek. It's this alignment that fosters unwavering customer loyalty, sustainable growth, and a lasting legacy. By bringing ideas to life through strategic planning, thoughtful design, and innovative <span className="font-[var(--font-mono)] text-[var(--color-energy-primary)]">AI</span> solutions, we set the foundation for lasting success.
          </p>
        </div>
      </div>
    </section>
  );
}
