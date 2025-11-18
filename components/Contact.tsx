'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Client-side validation
    if (!formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success - show message and clear form
      setSubmitted(true);
      setFormData({ firstName: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="say-hi" className="py-24 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'calc(var(--grid-baseline) * 12)', paddingBottom: 'calc(var(--grid-baseline) * 12)' }}>
      <div className="max-w-2xl mx-auto">
        <div className="wireframe-section-header justify-center mb-6 reveal">
          <span className="wireframe-section-label">07</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: '-0.02em' }}>
            Say Hi!
          </h2>
        </div>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 font-light text-lg reveal" style={{ animationDelay: '0.2s' }}>
          <span className="font-[var(--font-mono)] text-[var(--color-energy-primary)]">wallymollc@gmail.com</span> or leave a message!
        </p>
        <form onSubmit={handleSubmit} className="wireframe-card reveal" data-id="FORM-001" style={{ animationDelay: '0.4s' }}>
          <div className="wireframe-input-group">
            <label htmlFor="firstName" className="wireframe-input-label">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="wireframe-input-field"
              placeholder="Enter your first name"
            />
          </div>
          <div className="wireframe-input-group">
            <label htmlFor="email" className="wireframe-input-label">
              Email <span style={{ color: 'var(--color-energy-primary)' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="wireframe-input-field"
              placeholder="your@email.com"
            />
          </div>
          <div className="wireframe-input-group">
            <label htmlFor="message" className="wireframe-input-label">
              Message <span style={{ color: 'var(--color-energy-primary)' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="wireframe-input-field"
              placeholder="Describe your project or inquiry..."
            />
          </div>
          {error && (
            <div className="mb-4 p-4 border-2 border-red-500 rounded" style={{ 
              background: 'rgba(239, 68, 68, 0.1)', 
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem'
            }}>
              {error}
            </div>
          )}
          {submitted && (
            <div className="mb-4 p-4 border-2 border-[var(--color-energy-primary)] rounded" style={{ 
              background: 'rgba(255, 113, 206, 0.1)', 
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem'
            }}>
              Thank you! Your message has been sent successfully.
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="wireframe-btn wireframe-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}
