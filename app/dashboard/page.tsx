'use client';

import { useState } from "react";

const navItems = [
  "Overview",
  "Orders",
  "Wishlist",
  "Measurements",
  "Style Preferences",
  "Returns",
];

const orders = [
  {
    id: "STL-2024-0891",
    date: "Mar 15, 2024",
    status: "Completed",
    items: "Classic Navy Suit, French Cuff Shirt",
    total: "$1,488",
  },
  {
    id: "STL-2024-1023",
    date: "Mar 22, 2024",
    status: "In Progress",
    items: "Charcoal Pinstripe Suit",
    total: "$1,449",
  },
  {
    id: "STL-2024-1105",
    date: "Mar 28, 2024",
    status: "Shipped",
    items: "Silk Tie Collection, Cashmere Scarf",
    total: "$238",
  },
];

const measurements = [
  { label: "Chest", value: '42"' },
  { label: "Waist", value: '34"' },
  { label: "Hips", value: '40"' },
  { label: "Shoulders", value: '18.5"' },
  { label: "Sleeve", value: '25"' },
  { label: "Inseam", value: '32"' },
];

function statusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-900/40 text-green-400 border-green-800";
    case "In Progress":
      return "bg-yellow-900/40 text-yellow-400 border-yellow-800";
    case "Shipped":
      return "bg-blue-900/40 text-blue-400 border-blue-800";
    default:
      return "bg-card text-muted border-border";
  }
}

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("Overview");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">My Account</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar — horizontal scroll on mobile */}
          <nav className="lg:w-56 shrink-0">
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded text-sm font-medium transition-colors text-left ${
                    activeSection === item
                      ? "bg-accent text-background"
                      : "text-muted hover:text-foreground hover:bg-card"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {activeSection === "Overview" && <OverviewSection />}
            {activeSection === "Orders" && <OrdersSection />}
            {activeSection === "Measurements" && <MeasurementsSection />}
            {activeSection === "Wishlist" && (
              <PlaceholderSection
                title="Wishlist"
                desc="You have 2 items saved. Browse our collections to add more."
              />
            )}
            {activeSection === "Style Preferences" && (
              <PlaceholderSection
                title="Style Preferences"
                desc="Set your preferred fits, fabrics, and colors so we can tailor recommendations to your taste."
              />
            )}
            {activeSection === "Returns" && (
              <PlaceholderSection
                title="Returns"
                desc="No active returns. Our bespoke guarantee ensures every piece fits perfectly."
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function OverviewSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Welcome back, <span className="text-accent">James</span>
      </h2>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Orders", value: "3" },
          { label: "Wishlist Items", value: "2" },
          { label: "Measurements", value: "Updated" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-card p-5 text-center"
          >
            <p className="text-2xl font-bold text-accent">{stat.value}</p>
            <p className="text-muted text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Order */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Most Recent Order</h3>
          <span
            className={`text-xs px-3 py-1 rounded-full border ${statusColor(
              "Shipped"
            )}`}
          >
            Shipped
          </span>
        </div>
        <div className="flex items-start gap-5">
          <div className="w-20 h-20 rounded bg-gradient-to-br from-accent/30 to-card shrink-0" />
          <div>
            <p className="font-medium">Silk Tie Collection, Cashmere Scarf</p>
            <p className="text-muted text-sm mt-1">
              Order STL-2024-1105 &middot; Mar 28, 2024
            </p>
            <p className="text-accent font-semibold mt-2">$238</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrdersSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg border border-border bg-card p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div>
                <p className="font-semibold">{order.id}</p>
                <p className="text-muted text-sm">{order.date}</p>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full border ${statusColor(
                  order.status
                )}`}
              >
                {order.status}
              </span>
            </div>
            <p className="text-secondary text-sm mb-2">{order.items}</p>
            <p className="text-accent font-semibold">{order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MeasurementsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Your Measurements</h2>
      <p className="text-muted mb-8">
        Last updated: March 10, 2024. Visit us in-store for a re-measurement.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {measurements.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-border bg-card p-5 flex items-center justify-between"
          >
            <span className="text-muted text-sm">{m.label}</span>
            <span className="text-xl font-bold text-accent">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceholderSection({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-card mx-auto mb-4" />
        <p className="text-muted">{desc}</p>
      </div>
    </div>
  );
}
