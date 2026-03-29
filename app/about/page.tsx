export default function AboutPage() {
  const pillars = [
    { icon: '\u2702', title: 'Hand-Cut Precision', description: 'Every pattern is hand-drafted and cut by our master tailors, ensuring each garment is crafted with meticulous attention to detail and an unwavering commitment to perfection.' },
    { icon: '\uD83E\uDDF5', title: 'Quality Materials', description: 'We source only the finest fabrics from renowned mills across Italy, England, and Japan. Each material is selected for its drape, durability, and distinctive character.' },
    { icon: '\uD83D\uDCCF', title: 'Perfect Fit', description: 'With over 40 individual measurements taken per client, we create garments that move with you. Our iterative fitting process guarantees a silhouette that is uniquely yours.' },
  ];

  const numbers = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '10,000+', label: 'Garments Crafted' },
    { value: '50+', label: 'Premium Fabrics' },
    { value: '4', label: 'Ateliers Worldwide' },
  ];

  const pressLogos = [
    'GQ Magazine',
    'Vogue',
    'Esquire',
    'Robb Report',
    'Financial Times',
    'Monocle',
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-card via-background to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">The Art of Bespoke</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Where centuries-old craftsmanship meets contemporary design, creating garments that transcend time.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-accent/20 via-card to-accent/5 border border-border" />
            <div>
              <h2 className="text-3xl font-bold mb-6">A Legacy of Craftsmanship</h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  Founded in 2009, StitchLine was born from a singular vision: to revive the art of bespoke
                  tailoring for a modern generation. In an age of fast fashion and disposable garments, we
                  believed there was still a place for clothing made with intention, precision, and soul.
                </p>
                <p>
                  What began as a small atelier in the heart of the city has grown into an internationally
                  recognized house of bespoke tailoring. Our approach marries traditional techniques passed
                  down through generations of master tailors with innovative design sensibilities that speak
                  to the contemporary gentleman.
                </p>
                <p>
                  Every stitch we make carries the weight of tradition and the spark of innovation. From
                  selecting the finest fabrics at European mills to the final pressing of a finished garment,
                  each step in our process is guided by an uncompromising dedication to excellence that our
                  clients have come to expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-accent uppercase tracking-[0.2em] text-sm mb-2">Meet the Founder</p>
              <h2 className="text-3xl font-bold mb-1">Alessandro Moretti</h2>
              <p className="text-muted text-sm mb-6">Master Tailor &amp; Creative Director</p>
              <p className="text-secondary leading-relaxed">
                With over two decades of experience in bespoke tailoring, Alessandro trained under the
                legendary artisans of Naples before establishing StitchLine. His philosophy is simple yet
                profound: a well-made suit should feel like a second skin, empowering the wearer with
                quiet confidence. Alessandro personally oversees every aspect of production, from pattern
                drafting to final fitting, ensuring that the StitchLine standard is never compromised. His
                work has dressed heads of state, industry leaders, and discerning gentlemen the world over.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-accent/30 to-card border border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Craftsmanship</h2>
          <p className="text-muted text-center mb-16 max-w-2xl mx-auto">
            Three pillars guide every garment we create, from first consultation to final stitch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-card rounded-2xl border border-border p-8 text-center">
                <div className="text-5xl mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-accent">{pillar.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">Our Commitment</p>
          <h2 className="text-3xl font-bold mb-6">Sustainability &amp; Responsibility</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-secondary leading-relaxed">
            <p>
              At StitchLine, sustainability is not a trend but a foundational principle. Bespoke tailoring is
              inherently sustainable: garments made to measure produce less waste, last longer, and are designed
              to be repaired and altered over a lifetime rather than discarded.
            </p>
            <p>
              We partner exclusively with mills that uphold the highest environmental and ethical standards. Our
              fabrics are sourced from suppliers who practice responsible water management, fair labor practices,
              and sustainable farming of natural fibers. We are committed to reducing our carbon footprint by
              optimizing our supply chain and investing in local craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-muted uppercase tracking-[0.2em] text-sm mb-10">As Seen In</p>
          <div className="flex flex-wrap justify-center gap-8">
            {pressLogos.map((name) => (
              <div
                key={name}
                className="bg-card border border-border rounded-xl px-8 py-4 flex items-center justify-center"
              >
                <span className="text-secondary font-semibold tracking-wide text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {numbers.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-secondary text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
