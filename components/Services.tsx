export default function Services() {
  const services = [
    {
      title: 'Roadmap & Strategy',
      description: 'Getting your ideas on paper with executable roadmaps. From concept to execution, I help you create clear, actionable strategies that turn vision into reality.',
      titleComponent: 'Roadmap & Strategy',
      id: 'SVC-001',
    },
    {
      title: 'AI Implementation & Orchestration',
      description: 'Bringing ideas to life through AI solutions. I design, implement, and orchestrate AI systems that solve real business challenges and drive growth.',
      titleComponent: <><span className="font-[var(--font-mono)]">AI</span> Implementation & Orchestration</>,
      id: 'SVC-002',
    },
    {
      title: 'UX/UI Design',
      description: 'User-centered design for digital experiences. Creating intuitive interfaces that align with business goals while delighting customers.',
      titleComponent: 'UX/UI Design',
      id: 'SVC-003',
    },
    {
      title: 'Account Management & Employee Relations',
      description: 'Business operations and team alignment. Building strong relationships, managing accounts effectively, and fostering positive workplace cultures.',
      titleComponent: 'Account Management & Employee Relations',
      id: 'SVC-004',
    },
  ];

  return (
    <section id="how-i-can-help" className="py-24 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="wireframe-section-header reveal">
          <span className="wireframe-section-label">01</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
            How I Can Help.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gap: 'calc(var(--grid-baseline) * 4)' }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="wireframe-card reveal"
              data-id={service.id}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-4" style={{ letterSpacing: '-0.01em' }}>
                {service.titleComponent}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
