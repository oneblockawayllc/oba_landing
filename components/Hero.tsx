export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ paddingTop: 'calc(var(--grid-baseline) * 20)' }}>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center reveal">
          <h1 
            className="text-[var(--color-text-primary)] mb-8 relative inline-block"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.03em'
            }}
          >
            <span 
              className="block relative"
              style={{
                background: 'linear-gradient(135deg, var(--color-wireframe) 0%, var(--color-wireframe-light) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              One Block Away.
              <span 
                className="absolute left-0 origin-left"
                style={{
                  bottom: '-8px',
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--color-energy-primary) 0%, var(--color-energy-secondary) 50%, var(--color-energy-accent) 100%)',
                  transform: 'scaleX(0)',
                  animation: 'line-draw 1.5s var(--spring-smooth) forwards'
                }}
              ></span>
            </span>
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-text-primary)] mb-8 reveal" style={{ animationDelay: '0.3s' }}>
            <span className="font-[var(--font-mono)] text-[var(--color-energy-primary)] font-bold">AI</span> Implementation & Orchestration Specialist.
          </h2>
          <p className="text-lg sm:text-xl font-light text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed reveal" style={{ animationDelay: '0.5s' }}>
            empowering downtown Apex and RTP region businesses by bringing ideas to life through AI solutions, strategic roadmaps, and transformative digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ animationDelay: '0.7s' }}>
            <a
              href="#book-consult"
              className="wireframe-btn wireframe-btn-primary"
            >
              <span>Free Intro Call</span>
            </a>
            <a
              href="#how-i-can-help"
              className="wireframe-btn"
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
