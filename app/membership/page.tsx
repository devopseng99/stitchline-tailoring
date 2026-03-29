export default function MembershipPage() {
  const tiers = [
    {
      name: 'Classic',
      price: 49,
      badge: null,
      highlighted: false,
      features: [
        'Priority booking',
        '10% off alterations',
        'Seasonal style guide',
        'Members lounge access',
      ],
    },
    {
      name: 'Premium',
      price: 99,
      badge: 'Most Popular',
      highlighted: true,
      features: [
        'Everything in Classic',
        'Personal stylist consultation',
        '20% off all services',
        'Early collection access',
        'Complimentary pressing',
      ],
    },
    {
      name: 'VIP',
      price: 199,
      badge: null,
      highlighted: false,
      features: [
        'Everything in Premium',
        'Unlimited alterations',
        'Exclusive fabric access',
        'Private fittings',
        'Annual bespoke gift',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Can I change my membership tier?',
      a: 'Yes, you can upgrade or downgrade your membership at any time. Changes take effect at the start of your next billing cycle.',
    },
    {
      q: 'Is there a commitment period?',
      a: 'No long-term commitment is required. You can cancel your membership at any time with 30 days notice.',
    },
    {
      q: 'How do I access member benefits?',
      a: 'Once enrolled, you will receive a digital membership card and access to our members portal where you can book appointments and track your benefits.',
    },
    {
      q: 'Can I gift a membership?',
      a: 'Absolutely. Gift memberships are available for all tiers. Contact us for custom gift packaging and personalized membership cards.',
    },
    {
      q: 'Do unused benefits roll over?',
      a: 'Most benefits are available on a monthly basis and do not roll over. However, loyalty points earned through purchases do accumulate over time.',
    },
  ];

  const comparisonFeatures = [
    { feature: 'Priority Booking', classic: true, premium: true, vip: true },
    { feature: 'Alteration Discount', classic: '10%', premium: '20%', vip: 'Unlimited' },
    { feature: 'Seasonal Style Guide', classic: true, premium: true, vip: true },
    { feature: 'Members Lounge', classic: true, premium: true, vip: true },
    { feature: 'Personal Stylist', classic: false, premium: true, vip: true },
    { feature: 'Early Collection Access', classic: false, premium: true, vip: true },
    { feature: 'Complimentary Pressing', classic: false, premium: true, vip: true },
    { feature: 'Exclusive Fabric Access', classic: false, premium: false, vip: true },
    { feature: 'Private Fittings', classic: false, premium: false, vip: true },
    { feature: 'Annual Bespoke Gift', classic: false, premium: false, vip: true },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Exclusive Membership</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">The StitchLine Style Club</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Join an exclusive community of discerning gentlemen who appreciate the art of bespoke tailoring.
            Unlock premium benefits, priority access, and personalized style services.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 transition-all ${
                tier.highlighted
                  ? 'bg-card border-2 border-accent scale-105 shadow-2xl shadow-accent/10 md:-my-4 py-12'
                  : 'bg-card border border-border'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background text-sm font-semibold px-4 py-1 rounded-full">
                  {tier.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-accent' : 'text-foreground'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-muted text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-accent' : 'text-accent/70'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  tier.highlighted
                    ? 'bg-accent text-background hover:bg-accent-hover'
                    : 'border border-accent text-accent hover:bg-accent hover:text-background'
                }`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Perks Comparison Table */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Compare Membership Perks</h2>
          <p className="text-muted text-center mb-12">A detailed breakdown of what each tier offers</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-4 text-secondary font-medium">Feature</th>
                  <th className="py-4 px-4 text-center font-semibold">Classic</th>
                  <th className="py-4 px-4 text-center font-semibold text-accent">Premium</th>
                  <th className="py-4 px-4 text-center font-semibold">VIP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 px-4 text-secondary text-sm">{row.feature}</td>
                    {(['classic', 'premium', 'vip'] as const).map((tier) => (
                      <td key={tier} className="py-4 px-4 text-center text-sm">
                        {typeof row[tier] === 'boolean' ? (
                          row[tier] ? (
                            <span className="text-accent">&#10003;</span>
                          ) : (
                            <span className="text-muted">&#8212;</span>
                          )
                        ) : (
                          <span className="text-foreground font-medium">{row[tier]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Membership FAQ</h2>
          <p className="text-muted text-center mb-12">Everything you need to know about joining the Style Club</p>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card rounded-xl border border-border p-6">
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/10 to-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Style?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Join The StitchLine Style Club today and experience the finest in bespoke tailoring with exclusive member benefits.
          </p>
          <button className="bg-accent text-background px-10 py-4 rounded-lg font-semibold hover:bg-accent-hover transition-colors text-lg">
            Become a Member
          </button>
        </div>
      </section>
    </main>
  );
}
