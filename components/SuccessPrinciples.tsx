export default function SuccessPrinciples() {
  const principles = [
    {
      title: 'Customer-First Approach',
      description: 'At the heart of every successful business is a satisfied customer. I prioritize understanding your customers\' needs and desires, ensuring that every strategy and decision places them at the forefront.',
      id: 'PRIN-001',
    },
    {
      title: 'Informed Decision Making',
      description: 'In today\'s fast-paced business landscape, making decisions on a whim won\'t cut it. We\'ll delve deep into research, providing you with actionable insights and data-driven recommendations.',
      id: 'PRIN-002',
    },
    {
      title: 'Collaborative Partnership',
      description: 'Success is a team sport. I work collaboratively with you, diving deep into your business\'s intricacies. Together, we\'ll navigate the delicate balance between your objectives and customer expectations.',
      id: 'PRIN-003',
    },
    {
      title: 'Transparent Processes',
      description: 'Openness is key. From the initial consultation to project completion, we maintain a clear line of communication. Every decision, every step, is shared and discussed.',
      id: 'PRIN-004',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="wireframe-section-header reveal">
          <span className="wireframe-section-label">04</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
            How We'll Succeed.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ gap: 'calc(var(--grid-baseline) * 4)' }}>
          {principles.map((principle, index) => (
            <div key={index} className="wireframe-card text-center reveal" data-id={principle.id} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4" style={{ letterSpacing: '-0.01em' }}>
                {principle.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed font-light">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
