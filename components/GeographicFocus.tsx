export default function GeographicFocus() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="wireframe-section-header justify-center mb-6">
            <span className="wireframe-section-label">03</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
              Serving Downtown Apex & RTP Region
            </h2>
          </div>
        </div>
        <div className="max-w-4xl mx-auto reveal" style={{ animationDelay: '0.2s' }}>
          <div className="wireframe-card" data-id="GEO-001">
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed font-light">
              At the heart of every successful business is a clear vision and the right tools to execute it. I prioritize understanding your business needs and goals, ensuring that every strategy and solution places your success at the forefront.
            </p>
            <div className="space-y-6" style={{ marginTop: 'calc(var(--grid-baseline) * 3)', paddingTop: 'calc(var(--grid-baseline) * 3)', borderTop: '1px solid var(--color-wireframe-subtle)' }}>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-3" style={{ letterSpacing: '-0.01em' }}>
                  Local Focus, Regional Reach
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed font-light">
                  Specializing in serving downtown Apex businesses while extending support throughout the Research Triangle Park (RTP) region. Whether you're a local startup or an established business looking to innovate, I'm here to help bring your ideas to life.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-3" style={{ letterSpacing: '-0.01em' }}>
                  Community-Driven Growth
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed font-light">
                  Deep understanding of the Apex and RTP business landscape. By focusing on local businesses, we create solutions that resonate with your community and drive sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
