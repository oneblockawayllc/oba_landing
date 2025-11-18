'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[var(--color-surface)]/90 backdrop-blur-md border-b-2 border-[var(--color-wireframe)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img
                src="/Group-38.png"
                alt="One Block Away"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
                Home
              </a>
              <a href="#how-i-can-help" className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
                How I Can Help
              </a>
              <a href="#how-well-succeed" className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
                How We'll Succeed
              </a>
              <a href="#book-consult" className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
                Book Consult
              </a>
              <a href="#about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
                About
              </a>
              <a href="#say-hi" className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
                Say Hi!
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] focus:outline-none transition-colors border-2 border-transparent hover:border-[var(--color-wireframe)]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--color-surface)] border-t-2 border-[var(--color-wireframe)]">
            <a href="#home" onClick={handleLinkClick} className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] block px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
              Home
            </a>
            <a href="#how-i-can-help" onClick={handleLinkClick} className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] block px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
              How I Can Help
            </a>
            <a href="#how-well-succeed" onClick={handleLinkClick} className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] block px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
              How We'll Succeed
            </a>
            <a href="#book-consult" onClick={handleLinkClick} className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] block px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
              Book Consult
            </a>
            <a href="#about" onClick={handleLinkClick} className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] block px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
              About
            </a>
            <a href="#say-hi" onClick={handleLinkClick} className="text-[var(--color-text-secondary)] hover:text-[var(--color-energy-secondary)] block px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors font-[var(--font-mono)]">
              Say Hi!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
