import Link from "next/link";

const seasons = [
  "Spring/Summer 2024",
  "Fall/Winter 2024",
  "Resort Collection",
];

const lookbookItems = [
  { name: "The Metropolitan", desc: "Sharp city tailoring with a modern silhouette", height: "h-96" },
  { name: "Evening Elegance", desc: "Black-tie perfection for the discerning gentleman", height: "h-72" },
  { name: "Riviera Casual", desc: "Linen and silk for sun-drenched afternoons", height: "h-80" },
  { name: "The Boardroom", desc: "Power dressing redefined with subtle textures", height: "h-96" },
  { name: "Weekend Retreat", desc: "Effortless style from brunch to cocktails", height: "h-72" },
  { name: "Gala Night", desc: "Showstopping formalwear for unforgettable evenings", height: "h-80" },
  { name: "The Traveler", desc: "Wrinkle-resistant luxury for the modern nomad", height: "h-96" },
  { name: "Heritage Tweed", desc: "Classic British tailoring with contemporary edge", height: "h-72" },
];

const outfitSets = [
  { name: "The Power Move", pieces: "Navy suit, white shirt, burgundy tie, oxford shoes", price: "$1,699" },
  { name: "Weekend in Amalfi", pieces: "Linen blazer, silk tee, tailored shorts, loafers", price: "$899" },
  { name: "Black Tie Ready", pieces: "Tuxedo, pleated shirt, bow tie, patent shoes", price: "$2,199" },
];

export default function LookbookPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          The StitchLine Lookbook
        </h1>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          Inspiration for every occasion, styled by our creative team.
        </p>

        {/* Season Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {seasons.map((season, i) => (
            <span
              key={season}
              className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                i === 0
                  ? "bg-accent text-background border-accent"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {season}
            </span>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-24">
          {lookbookItems.map((item) => (
            <div
              key={item.name}
              className="break-inside-avoid rounded-lg border border-border bg-card overflow-hidden group hover:border-accent/50 transition-colors"
            >
              <div
                className={`${item.height} bg-gradient-to-br from-accent/20 via-card to-background`}
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted text-sm mb-3">{item.desc}</p>
                <Link
                  href="#"
                  className="text-accent text-sm font-medium hover:text-accent-hover transition-colors"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Get the Look */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-2">Get the Look</h2>
          <p className="text-muted text-center mb-12">
            Complete outfit sets curated by our stylists
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {outfitSets.map((set) => (
              <div
                key={set.name}
                className="rounded-lg border border-border bg-card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-accent/30 via-accent/10 to-card" />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-accent">
                    {set.name}
                  </h3>
                  <p className="text-muted text-sm mb-4">{set.pieces}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">{set.price}</p>
                    <Link
                      href="/shop"
                      className="text-accent text-sm font-medium hover:text-accent-hover transition-colors"
                    >
                      Shop Set &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
