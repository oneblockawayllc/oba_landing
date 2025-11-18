export default function BookConsult() {
  return (
    <section id="book-consult" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="wireframe-section-header justify-center mb-8 reveal">
          <span className="wireframe-section-label">04</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
            Let's Figure It Out Together
          </h2>
        </div>
        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto font-light leading-relaxed reveal" style={{ animationDelay: '0.2s' }}>
          <strong className="text-[var(--color-text-primary)] font-semibold">Not sure what you need or where to start? That's exactly what the intro call is for.</strong>
        </p>
        <p className="text-lg text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto font-light leading-relaxed reveal" style={{ animationDelay: '0.3s' }}>
          Book a free 30-minute conversation where we'll talk about what's keeping you stuck, what you've already tried, and what success looks like for your business. No sales pitch, no pressure—just an honest conversation about whether I can help and what that might look like.
        </p>
        <p className="text-lg text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto font-light leading-relaxed reveal" style={{ animationDelay: '0.4s' }}>
          Whether you need one Discovery Workshop or ongoing partnership across design, strategy, and AI—we'll figure out what makes sense for you.
        </p>
        <div className="reveal" style={{ animationDelay: '0.4s' }}>
          <a
            href="#say-hi"
            className="wireframe-btn wireframe-btn-primary"
          >
            Schedule Free Consult
          </a>
        </div>
      </div>
    </section>
  );
}
