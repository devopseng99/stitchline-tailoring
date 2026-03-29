'use client';

import { useState } from "react";

const sizes = [36, 38, 40, 42, 44, 46, 48];

const colors = [
  { name: "Navy", hex: "#1e3a5f" },
  { name: "Charcoal", hex: "#374151" },
  { name: "Black", hex: "#000000" },
  { name: "Tan", hex: "#c2a36e" },
  { name: "Burgundy", hex: "#6b1c2a" },
];

const lapelStyles = ["Notch", "Peak", "Shawl"];
const ventOptions = ["Single", "Double", "None"];
const pocketOptions = ["Flap", "Jetted", "Patch"];

const fabrics = [
  { name: "Italian Wool", weight: "260g", origin: "Biella, Italy" },
  { name: "Cashmere Blend", weight: "280g", origin: "Scotland" },
  { name: "Super 150s", weight: "240g", origin: "Yorkshire, England" },
  { name: "Tropical Wool", weight: "200g", origin: "Australia" },
  { name: "Flannel", weight: "320g", origin: "Huddersfield, UK" },
  { name: "Mohair Blend", weight: "220g", origin: "South Africa" },
];

const related = [
  { name: "Matching Waistcoat", price: "$349" },
  { name: "French Cuff Shirt", price: "$189" },
  { name: "Silk Tie", price: "$89" },
  { name: "Leather Oxford Shoes", price: "$449" },
];

export default function ShopPage() {
  const [selectedSize, setSelectedSize] = useState<number | null>(42);
  const [selectedColor, setSelectedColor] = useState("Navy");
  const [lapel, setLapel] = useState("Notch");
  const [vent, setVent] = useState("Single");
  const [pocket, setPocket] = useState("Flap");

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Featured Product */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Image */}
          <div className="rounded-lg overflow-hidden border border-border">
            <div className="aspect-[3/4] bg-gradient-to-br from-accent/30 via-accent/10 to-card" />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-accent uppercase tracking-[0.2em] text-sm mb-2 font-medium">
              Bespoke Collection
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              The Classic Bespoke Suit
            </h1>
            <p className="text-muted mb-8 leading-relaxed">
              Hand-cut and constructed from the finest fabrics, this two-piece
              suit is the cornerstone of any distinguished wardrobe. Full canvas
              construction ensures a drape and fit that improves with wear.
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">
                Size:{" "}
                <span className="text-accent">{selectedSize ?? "Select"}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-12 h-10 rounded border text-sm font-medium transition-colors ${
                      selectedSize === s
                        ? "bg-accent text-background border-accent"
                        : "border-border text-muted hover:border-secondary hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Picker */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">
                Color: <span className="text-accent">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === c.name
                        ? "border-accent scale-110"
                        : "border-border hover:border-secondary"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Customization Options */}
            <div className="space-y-5 mb-8">
              <OptionRow
                label="Lapel Style"
                options={lapelStyles}
                selected={lapel}
                onSelect={setLapel}
              />
              <OptionRow
                label="Vent"
                options={ventOptions}
                selected={vent}
                onSelect={setVent}
              />
              <OptionRow
                label="Pockets"
                options={pocketOptions}
                selected={pocket}
                onSelect={setPocket}
              />
            </div>

            {/* Price & CTA */}
            <div className="flex items-center gap-6">
              <p className="text-3xl font-bold text-accent">$1,299</p>
              <button className="flex-1 bg-accent hover:bg-accent-hover text-background font-semibold py-3.5 rounded transition-colors text-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Fabric Selector */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Select Your Fabric
          </h2>
          <p className="text-muted text-center mb-12">
            Premium materials sourced from the world&apos;s finest mills
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabrics.map((f) => (
              <div
                key={f.name}
                className="rounded-lg border border-border bg-card p-5 hover:border-accent/50 transition-colors cursor-pointer group"
              >
                <div className="h-32 rounded bg-gradient-to-br from-accent/20 via-card to-background mb-4" />
                <h3 className="font-semibold group-hover:text-accent transition-colors">
                  {f.name}
                </h3>
                <p className="text-muted text-sm">
                  {f.weight} &middot; {f.origin}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Items */}
        <section>
          <h2 className="text-3xl font-bold mb-2 text-center">
            Complete the Look
          </h2>
          <p className="text-muted text-center mb-12">
            Pair with these essentials
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-border bg-card overflow-hidden group hover:border-accent/50 transition-colors"
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 via-card to-background" />
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
      </div>
    </main>
  );
}

function OptionRow({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">
        {label}: <span className="text-accent">{selected}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`px-4 py-2 rounded border text-sm font-medium transition-colors ${
              selected === opt
                ? "bg-accent text-background border-accent"
                : "border-border text-muted hover:border-secondary hover:text-foreground"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
