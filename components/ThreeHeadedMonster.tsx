export default function ThreeHeadedMonster() {
  const competencies = [
    {
      title: 'Account Management & Employee Relations',
      titleComponent: 'Account Management & Employee Relations',
      benefits: [
        'Deep Understanding: Capture the essence of your workplace culture through informed insights.',
        'Tangible Outputs: Actionable documentation such as onboarding guides and employee growth roadmaps.',
        'Direct Impact: Improve team productivity by fostering a positive work environment.',
      ],
      id: 'COMP-001',
    },
    {
      title: 'UX/UI Design',
      titleComponent: 'UX/UI Design',
      benefits: [
        'User-Centered Approach: Design solutions that prioritize user needs and business objectives.',
        'Strategic Design: Create interfaces that drive engagement and conversion.',
        'Collaborative Process: Work closely with stakeholders to ensure alignment.',
      ],
      id: 'COMP-002',
    },
    {
      title: 'AI Implementation & Orchestration',
      titleComponent: <><span className="font-[var(--font-mono)]">AI</span> Implementation & Orchestration</>,
      benefits: [
        'Innovation: Transform ideas into working AI solutions that solve real problems.',
        'Strategic Integration: Seamlessly orchestrate AI systems within existing workflows.',
        'Measurable Results: Deliver AI implementations that drive business growth and efficiency.',
      ],
      id: 'COMP-003',
    },
  ];

  return (
    <section id="how-well-succeed" className="py-16 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="wireframe-section-header justify-center mb-6">
            <span className="wireframe-section-label">02</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
              Three Areas of Expertise
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto font-light leading-relaxed">
            A unique combination of skills that brings together business strategy, user experience, and cutting-edge <span className="font-[var(--font-mono)] text-[var(--color-energy-primary)]">AI</span> technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ gap: 'calc(var(--grid-baseline) * 4)' }}>
          {competencies.map((competency, index) => (
            <div key={index} className="wireframe-card reveal" data-id={competency.id} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-6" style={{ letterSpacing: '-0.01em' }}>
                {competency.titleComponent}
              </h3>
              <ul className="space-y-4">
                {competency.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="text-[var(--color-text-secondary)] font-light leading-relaxed">
                    <span className="font-semibold text-[var(--color-energy-primary)]">{benefit.split(':')[0]}:</span>
                    {benefit.split(':')[1]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
