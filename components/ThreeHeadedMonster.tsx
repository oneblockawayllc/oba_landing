export default function ThreeHeadedMonster() {
  const methodology = [
    {
      title: 'Start Anywhere, Expand as Needed',
      description: "No rigid packages or forced roadmaps. Stuck on customer experience? We start with design. Need strategic clarity first? We begin with workshops. Every business is different, so we'll figure out what you need first, then expand from there as your business evolves.",
      id: 'MTHD-001',
    },
    {
      title: 'Learn as We Build',
      description: "I don't gatekeep knowledge or create dependency. As we work together, I'll teach you the frameworks, show you the tools, and explain the 'why' behind every decision. You'll walk away equipped to make smart choices long after our engagement ends.",
      id: 'MTHD-002',
    },
    {
      title: 'Own Everything We Create',
      description: "Every strategy document, design file, AI implementation, and piece of code belongs to you. No proprietary systems you can't access. No ongoing dependencies. Everything we build together is yours to keep, modify, and build upon.",
      id: 'MTHD-003',
    },
  ];

  return (
    <section id="how-well-succeed" className="py-16 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="wireframe-section-header justify-center mb-6">
            <span className="wireframe-section-label">02</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
              How We'll Work Together
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto font-light leading-relaxed">
            You don't just get deliverables. You get knowledge. My approach is built on collaboration, education, and ownership. Here's what makes this different from working with an agency:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ gap: 'calc(var(--grid-baseline) * 4)' }}>
          {methodology.map((item, index) => (
            <div key={index} className="wireframe-card reveal" data-id={item.id} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-6" style={{ letterSpacing: '-0.01em' }}>
                {item.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
