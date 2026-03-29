'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const locations = [
    {
      city: 'New York',
      address: '142 Fifth Avenue, Suite 300\nNew York, NY 10011',
      hours: 'Mon-Sat: 10am - 7pm',
    },
    {
      city: 'London',
      address: '28 Savile Row\nLondon, W1S 3PR',
      hours: 'Mon-Sat: 10am - 6pm',
    },
    {
      city: 'Milan',
      address: 'Via Montenapoleone 15\nMilan, 20121',
      hours: 'Mon-Sat: 10am - 7pm',
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-card to-background text-center">
        <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Reach Out</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Whether you have a question about our services or want to schedule a consultation, we are here to help.
        </p>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                <p className="text-secondary max-w-sm">
                  Thank you for reaching out. Our team will review your message and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'General', message: '' });
                  }}
                  className="mt-8 text-accent text-sm font-medium hover:text-accent-hover transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted text-sm mb-8">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@email.com"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                    >
                      <option value="General">General Inquiry</option>
                      <option value="Appointment">Appointment Booking</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Wholesale">Wholesale</option>
                      <option value="Press">Press</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent text-background py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right: Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-lg">&#9873;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Flagship Atelier</h3>
                  <p className="text-secondary text-sm">142 Fifth Avenue, Suite 300</p>
                  <p className="text-secondary text-sm">New York, NY 10011</p>
                  <p className="text-muted text-sm mt-2">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  <p className="text-muted text-sm">Sun: By Appointment Only</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-lg">&#9742;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone &amp; Email</h3>
                  <p className="text-secondary text-sm">+1 (212) 555-0184</p>
                  <p className="text-secondary text-sm">hello@stitchline.com</p>
                  <p className="text-muted text-sm mt-2">Response within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-lg">&#9878;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Wholesale Inquiries</h3>
                  <p className="text-secondary text-sm">For bulk orders and retail partnerships</p>
                  <p className="text-secondary text-sm">wholesale@stitchline.com</p>
                  <p className="text-muted text-sm mt-2">Minimum order: 20 units</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-lg">&#9998;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Press Contact</h3>
                  <p className="text-secondary text-sm">For media inquiries, interviews, and features</p>
                  <p className="text-secondary text-sm">press@stitchline.com</p>
                  <p className="text-muted text-sm mt-2">Press kit available upon request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Locations */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Showrooms</h2>
          <p className="text-muted text-center mb-12">Visit us at any of our locations worldwide</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-accent/20 via-card to-accent/10" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{loc.city}</h3>
                  <p className="text-secondary text-sm whitespace-pre-line mb-2">{loc.address}</p>
                  <p className="text-muted text-sm">{loc.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/10 to-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book a Private Consultation</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Experience the StitchLine difference with a one-on-one session with our master tailors. Complimentary for first-time clients.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-background px-10 py-4 rounded-lg font-semibold hover:bg-accent-hover transition-colors text-lg"
          >
            Schedule an Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
