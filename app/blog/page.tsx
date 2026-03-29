export default function BlogPage() {
  const featuredPost = {
    title: 'The Return of Double-Breasted: Spring 2024 Trends',
    excerpt:
      'The double-breasted silhouette is making a triumphant comeback this season, reinterpreted with modern proportions and unexpected fabric choices. From boardrooms to evening events, discover how this classic style is being reimagined for the contemporary gentleman.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Trends',
  };

  const posts = [
    {
      title: '5 Rules for the Perfect Summer Suit',
      excerpt: 'Navigating warm-weather tailoring requires a delicate balance of structure and breathability. Here are the essential guidelines.',
      date: 'March 8, 2024',
      category: 'Styling Tips',
    },
    {
      title: 'Behind the Seams: A Day in Our Atelier',
      excerpt: 'Step inside our workshop and witness the meticulous process that transforms raw fabric into a masterpiece of tailoring.',
      date: 'February 28, 2024',
      category: 'Behind the Scenes',
    },
    {
      title: 'StitchLine x Laurent: The Capsule Collection',
      excerpt: 'Our latest collaboration brings together bespoke tailoring and contemporary streetwear in an unexpected fusion of styles.',
      date: 'February 20, 2024',
      category: 'Collaborations',
    },
    {
      title: 'The Art of Pattern Matching',
      excerpt: 'Why perfectly aligned stripes and checks separate true bespoke from off-the-rack, and how our tailors achieve it.',
      date: 'February 12, 2024',
      category: 'Behind the Scenes',
    },
    {
      title: 'Accessorizing Your Bespoke: Ties, Squares & Pins',
      excerpt: 'The finishing touches that elevate a tailored outfit from well-dressed to unforgettable. A guide to thoughtful accessorizing.',
      date: 'February 5, 2024',
      category: 'Styling Tips',
    },
    {
      title: 'Sustainable Luxury: The Future of Tailoring',
      excerpt: 'How the bespoke industry is leading the charge in sustainable fashion, from ethical sourcing to zero-waste pattern cutting.',
      date: 'January 28, 2024',
      category: 'Trends',
    },
  ];

  const categories = ['All', 'Trends', 'Styling Tips', 'Behind the Scenes', 'Collaborations'];

  const categoryColor = (cat: string) => {
    switch (cat) {
      case 'Trends': return 'bg-accent/20 text-accent';
      case 'Styling Tips': return 'bg-emerald-900/30 text-emerald-400';
      case 'Behind the Scenes': return 'bg-purple-900/30 text-purple-400';
      case 'Collaborations': return 'bg-blue-900/30 text-blue-400';
      default: return 'bg-accent/20 text-accent';
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-card to-background text-center">
        <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Style &amp; Craft</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">The StitchLine Journal</h1>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Insights, trends, and stories from the world of bespoke tailoring.
        </p>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card rounded-2xl border border-border overflow-hidden">
            <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-accent/30 via-accent/10 to-card" />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColor(featuredPost.category)}`}>
                  {featuredPost.category}
                </span>
                <span className="text-muted text-xs">Featured</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{featuredPost.title}</h2>
              <p className="text-secondary text-sm leading-relaxed mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-muted text-xs mb-6">
                <span>{featuredPost.date}</span>
                <span className="w-1 h-1 rounded-full bg-muted" />
                <span>{featuredPost.readTime}</span>
              </div>
              <a href="#" className="text-accent font-semibold text-sm hover:text-accent-hover transition-colors">
                Read Full Article &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-card rounded-2xl border border-border overflow-hidden group">
                <div className="aspect-[16/10] bg-gradient-to-br from-accent/20 via-card to-accent/5" />
                <div className="p-6">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-4 mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted text-xs">{post.date}</span>
                    <a href="#" className="text-accent text-sm font-medium hover:text-accent-hover transition-colors">
                      Read More &rarr;
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section: Categories + Newsletter */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <div className="space-y-3">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="flex items-center justify-between py-3 px-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors group"
                >
                  <span className="text-secondary group-hover:text-foreground transition-colors">{cat}</span>
                  <span className="text-muted text-sm">&rarr;</span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-xl font-bold mb-2">Stay in Style</h3>
            <p className="text-secondary text-sm mb-6">
              Subscribe to The StitchLine Journal for weekly style insights, tailoring tips, and exclusive previews delivered to your inbox.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="w-full bg-accent text-background py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-muted text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
