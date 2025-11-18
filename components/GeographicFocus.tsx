export default function GeographicFocus() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="wireframe-section-header justify-center mb-6">
            <span className="wireframe-section-label">03</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
              Rooted in Downtown Apex & RTP
            </h2>
          </div>
        </div>
        <div className="max-w-4xl mx-auto reveal" style={{ animationDelay: '0.2s' }}>
          <div className="wireframe-card" data-id="GEO-001">
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed font-light">
              <strong className="text-[var(--color-text-primary)] font-semibold">Big agency results without big agency prices—because I'm your neighbor, not a vendor.</strong> I live and work in downtown Apex. I understand the unique challenges small businesses face in our community, from competing with RTP tech giants for talent to standing out in a growing market.
            </p>
            <div className="space-y-6" style={{ marginTop: 'calc(var(--grid-baseline) * 3)', paddingTop: 'calc(var(--grid-baseline) * 3)', borderTop: '1px solid var(--color-wireframe-subtle)' }}>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-3" style={{ letterSpacing: '-0.01em' }}>
                  Here's what local means for you:
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="text-[var(--color-text-secondary)] leading-relaxed font-light">
                  <span className="font-semibold text-[var(--color-energy-primary)]">Flexible, face-to-face collaboration</span> when it matters (coffee in downtown Apex, not just Zoom calls)
                </li>
                <li className="text-[var(--color-text-secondary)] leading-relaxed font-light">
                  <span className="font-semibold text-[var(--color-energy-primary)]">Deep market understanding</span> (I know your customers, your competitors, and your challenges)
                </li>
                <li className="text-[var(--color-text-secondary)] leading-relaxed font-light">
                  <span className="font-semibold text-[var(--color-energy-primary)]">No agency overhead</span> (no hourly minimums or rigid contracts designed for enterprise budgets)
                </li>
                <li className="text-[var(--color-text-secondary)] leading-relaxed font-light">
                  <span className="font-semibold text-[var(--color-energy-primary)]">Invested in your success</span> because your growth strengthens our community
                </li>
              </ul>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-light" style={{ marginTop: 'calc(var(--grid-baseline) * 3)' }}>
                Whether you're in Peak City or the RTP corridor, One Block Away exists to help small businesses modernize, compete, and grow—without breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
