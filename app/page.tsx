import Link from "next/link";

const collections = [
  { name: "Spring Suiting", desc: "Light fabrics, modern cuts for the warmer months" },
  { name: "Evening Formal", desc: "Black-tie elegance crafted to perfection" },
  { name: "Casual Linen", desc: "Relaxed sophistication for every occasion" },
];

const stats = [
  { value: "500+", label: "Custom Suits" },
  { value: "50", label: "Premium Fabrics" },
  { value: "15", label: "Years Experience" },
  { value: "98%", label: "Satisfaction" },
];

const trending = [
  { name: "The Diplomat Suit", price: "$1,299" },
  { name: "Oxford Dress Shirt", price: "$189" },
  { name: "Slim Wool Trousers", price: "$349" },
  { name: "Silk Pocket Square Set", price: "$79" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-card" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            StitchLine Tailoring
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Bespoke Tailoring,{" "}
            <span className="text-accent">Redefined</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Hand-crafted custom suits, shirts, and garments tailored to your
            exact measurements. Experience the art of precision fit and
            uncompromising quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-block bg-accent hover:bg-accent-hover text-background font-semibold px-10 py-4 rounded transition-colors text-lg"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-accent text-accent hover:bg-accent hover:text-background font-semibold px-10 py-4 rounded transition-colors text-lg"
            >
              Book a Fitting
            </Link>
          </div>
        </div>
      </section>

      {/* New Collection Spotlight */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          New Collection Spotlight
        </h2>
        <p className="text-muted text-center mb-12">
          Discover what&apos;s defining style this season
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((c) => (
            <div
              key={c.name}
              className="group rounded-lg overflow-hidden border border-border bg-card"
            >
              <div className="h-64 bg-gradient-to-br from-accent/30 to-card" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {c.name}
                </h3>
                <p className="text-muted text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-accent mb-1">{s.value}</p>
              <p className="text-muted text-sm uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Items */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Trending Now</h2>
        <p className="text-muted text-center mb-12">
          Our most sought-after pieces this season
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-border bg-card overflow-hidden group hover:border-accent/50 transition-colors"
            >
              <div className="h-56 bg-gradient-to-br from-accent/20 via-card to-background" />
              <div className="p-5">
                <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="text-accent font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 text-center bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Begin Your Bespoke Journey
          </h2>
          <p className="text-muted text-lg mb-10">
            Every stitch tells a story. Let us craft yours with precision,
            passion, and the finest materials from around the world.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-hover text-background font-semibold px-10 py-4 rounded transition-colors text-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
