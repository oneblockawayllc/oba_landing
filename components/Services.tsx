export default function Services() {
  const services = [
    {
      title: 'UX/UI Design',
      description: "Customers leaving your site confused? Let's create experiences that convert. I'll design interfaces that work for your business—and show you how to think about user experience so you can make smart decisions going forward.",
      titleComponent: 'UX/UI Design',
      id: 'SVC-001',
    },
    {
      title: 'Business Strategy & Roadmaps',
      description: "Ideas scattered across sticky notes and late-night thoughts? Let's get them organized into an executable roadmap. Through structured workshops, I'll help you clarify your vision, identify opportunities, and create a plan you actually understand and own.",
      titleComponent: 'Business Strategy & Roadmaps',
      id: 'SVC-002',
    },
    {
      title: 'AI Implementation & Orchestration',
      description: "Know AI could help your business but don't have time to figure it out? I'll implement the tools you need and teach you how to use them. From automating repetitive tasks to enhancing customer experiences—you'll own the systems and the knowledge to maintain them.",
      titleComponent: 'AI Implementation & Orchestration',
      id: 'SVC-003',
    },
    {
      title: 'Discovery Workshops',
      description: "Not sure where to start or what you actually need? Book a facilitated workshop session where we'll extract your ideas, identify your biggest opportunities, and create a clear action plan—whether that leads to design work, strategy development, AI implementation, or all three.",
      titleComponent: 'Discovery Workshops',
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
        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed font-light reveal" style={{ animationDelay: '0.2s' }}>
          Start with what's urgent. Expand as you're ready. Whether you need better customer experiences, clearer direction, or modern tools that save time—we'll figure out which one your business needs first, then grow from there.
        </p>
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
