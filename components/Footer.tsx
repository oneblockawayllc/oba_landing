export default function Footer() {
  return (
    <footer className="border-t-2 border-[var(--color-wireframe)] bg-[var(--color-surface)]" style={{ paddingTop: 'calc(var(--grid-baseline) * 4)', paddingBottom: 'calc(var(--grid-baseline) * 4)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-[var(--color-text-secondary)] text-sm mb-4 md:mb-0 font-[var(--font-mono)]">
            © 2025 One Block Away, LLC
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/wallymo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] transition-colors font-[var(--font-mono)] text-sm uppercase tracking-wider"
            >
              LinkedIn
            </a>
            <a
              href="mailto:wallymollc@gmail.com"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] transition-colors font-[var(--font-mono)] text-sm uppercase tracking-wider"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
