'use client';

import { useState } from "react";

const categories = ["All", "Suits", "Shirts", "Trousers", "Accessories", "Seasonal"];

const products = [
  { name: "Classic Navy Suit", category: "Suits", price: "$1,299", colors: ["#1e3a5f", "#374151", "#000"], sizes: "36-48" },
  { name: "Charcoal Pinstripe", category: "Suits", price: "$1,449", colors: ["#374151", "#1e3a5f"], sizes: "38-46" },
  { name: "Ivory Linen Suit", category: "Seasonal", price: "$1,099", colors: ["#d4c9a8", "#c2b280"], sizes: "36-44" },
  { name: "French Cuff Dress Shirt", category: "Shirts", price: "$189", colors: ["#fff", "#d6e4f0", "#1e3a5f"], sizes: "S-XXL" },
  { name: "Mandarin Collar Shirt", category: "Shirts", price: "$169", colors: ["#000", "#fff", "#374151"], sizes: "S-XL" },
  { name: "Slim Wool Trousers", category: "Trousers", price: "$349", colors: ["#374151", "#1e3a5f", "#5c3a21"], sizes: "30-40" },
  { name: "Pleated Dress Pants", category: "Trousers", price: "$299", colors: ["#000", "#374151"], sizes: "30-38" },
  { name: "Silk Tie Collection", category: "Accessories", price: "$89", colors: ["#8b0000", "#1e3a5f", "#d4a853"], sizes: "One Size" },
  { name: "Leather Belt", category: "Accessories", price: "$129", colors: ["#000", "#5c3a21"], sizes: "S-XL" },
  { name: "Summer Blazer", category: "Seasonal", price: "$899", colors: ["#c2b280", "#d6e4f0"], sizes: "38-46" },
  { name: "Tuxedo Shirt", category: "Shirts", price: "$219", colors: ["#fff", "#f5f0e6"], sizes: "S-XXL" },
  { name: "Cashmere Scarf", category: "Accessories", price: "$149", colors: ["#374151", "#8b0000", "#1e3a5f"], sizes: "One Size" },
];

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Collections
        </h1>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          Explore our curated range of bespoke garments, each crafted with
          meticulous attention to detail.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeFilter === cat
                  ? "bg-accent text-background border-accent"
                  : "border-border text-muted hover:text-foreground hover:border-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.name}
              className="group rounded-lg border border-border bg-card overflow-hidden hover:border-accent/60 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="h-56 bg-gradient-to-br from-accent/25 via-card to-background" />
              <div className="p-5">
                <span className="text-[11px] uppercase tracking-wider text-accent font-medium">
                  {product.category}
                </span>
                <h3 className="font-semibold text-lg mt-1 mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1.5 mb-3">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-accent font-semibold">{product.price}</p>
                  <p className="text-muted text-xs">Sizes: {product.sizes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
