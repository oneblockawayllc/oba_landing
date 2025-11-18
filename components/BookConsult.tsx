export default function BookConsult() {
  return (
    <section id="book-consult" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="wireframe-section-header justify-center mb-8 reveal">
          <span className="wireframe-section-label">05</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
            Book Consult.
          </h2>
        </div>
        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto font-light leading-relaxed reveal" style={{ animationDelay: '0.2s' }}>
          Book a 30-minute intro call, on the house, giving us a chance to get to know each other and dive into your business goals and objectives. Whether you're looking for support by the hour, by deliverable, or for an entire project (no matter the size!), my aim is to collaborate closely with you, ensuring we pave the way to success together.
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
