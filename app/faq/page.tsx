'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: 'Sizing & Fit',
    question: 'How do I get measured?',
    answer:
      'You can visit any of our ateliers for a complimentary measurement session with one of our master tailors, who will take over 40 individual measurements. We also offer at-home measurement kits with detailed video instructions for clients who prefer to measure remotely.',
  },
  {
    category: 'Sizing & Fit',
    question: 'What if my measurements change?',
    answer:
      'We keep your measurements on file and recommend a quick re-measurement every 12 months. If your body changes between orders, we can adjust your pattern at no additional charge during your next fitting.',
  },
  {
    category: 'Sizing & Fit',
    question: 'Do you offer virtual fittings?',
    answer:
      'Yes, we offer virtual fitting consultations via video call for existing clients whose measurements are already on file. For new clients, we recommend an in-person initial measurement for the most accurate results.',
  },
  {
    category: 'Shipping',
    question: 'How long does a custom order take?',
    answer:
      'A standard bespoke garment takes 4 to 6 weeks from initial consultation to delivery. This includes pattern drafting, a first fitting, and final adjustments. Rush orders can be accommodated within 2 to 3 weeks for an additional fee.',
  },
  {
    category: 'Shipping',
    question: 'Do you ship internationally?',
    answer:
      'Absolutely. We ship worldwide via insured express courier. International orders typically arrive within 3 to 5 business days after completion. All customs duties and taxes are calculated at checkout for a seamless experience.',
  },
  {
    category: 'Returns',
    question: 'What is your return policy?',
    answer:
      'Because each garment is made to your unique measurements, we do not offer traditional returns. However, we guarantee the fit. If a garment does not fit perfectly, we will alter it at no charge until you are completely satisfied.',
  },
  {
    category: 'Returns',
    question: 'Can I exchange for a different size?',
    answer:
      'Since our garments are bespoke and made specifically for you, size exchanges are not applicable. Instead, we offer complimentary alterations to ensure every piece fits you perfectly, no matter what.',
  },
  {
    category: 'Care',
    question: 'How do I care for my suit?',
    answer:
      'We recommend hanging your suits on wide wooden hangers and allowing 24 hours between wears. Brush after each wear with a natural bristle brush, and dry clean sparingly. We include a detailed care card with every garment.',
  },
  {
    category: 'Care',
    question: 'Do you offer pressing services?',
    answer:
      'Yes, we offer complimentary pressing for all StitchLine garments at any of our ateliers. Premium and VIP Style Club members also receive pressing services as part of their membership benefits.',
  },
  {
    category: 'Custom Orders',
    question: 'Can I bring my own fabric?',
    answer:
      'We welcome client-supplied fabrics, provided they meet our quality standards. Our tailors will assess the fabric for suitability and advise on the best garment styles for the material. A small handling fee may apply.',
  },
  {
    category: 'Custom Orders',
    question: 'What customization options are available?',
    answer:
      'Nearly every element is customizable: lapel style, button configuration, pocket design, lining fabric, monogramming, and more. During your consultation, your tailor will walk you through all available options to create a truly one-of-a-kind garment.',
  },
  {
    category: 'Sustainability',
    question: 'What sustainable practices do you follow?',
    answer:
      'We minimize waste through made-to-order production, use natural and biodegradable materials wherever possible, and partner with mills that adhere to strict environmental standards. Our zero-waste pattern cutting technique reduces fabric waste by up to 15%.',
  },
  {
    category: 'Sustainability',
    question: 'Where are your fabrics sourced?',
    answer:
      'Our fabrics are sourced from renowned mills in Italy, England, Scotland, and Japan. We personally visit each supplier to verify their environmental practices, fair labor conditions, and material quality before establishing a partnership.',
  },
];

const categories = ['All', 'Sizing & Fit', 'Shipping', 'Returns', 'Care', 'Custom Orders', 'Sustainability'];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredFaqs =
    activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-card to-background text-center">
        <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Support</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Find answers to common questions about our services, policies, and craftsmanship.
        </p>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-accent text-background'
                  : 'bg-card border border-border text-secondary hover:border-accent/50 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-card/80 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="text-accent text-xs font-medium bg-accent/10 px-2 py-1 rounded flex-shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-semibold text-foreground truncate">{faq.question}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-muted flex-shrink-0 ml-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-secondary text-sm leading-relaxed border-t border-border/50 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/10 to-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Our team of tailoring experts is here to help. Reach out and we will get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+1234567890"
              className="border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-background transition-colors"
            >
              Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
