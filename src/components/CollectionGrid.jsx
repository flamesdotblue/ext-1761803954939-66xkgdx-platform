import { motion } from 'framer-motion';

const products = [
  {
    id: 'omega-x1',
    name: 'AURUM X1 Chronometer',
    price: 12990,
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1696005686641-d54b6dda101c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBVVJVTSUyMFgxJTIwQ2hyb25vbWV0ZXJ8ZW58MHwwfHx8MTc2MTgwNDMzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'onyx-s',
    name: 'ONYX S Automatic',
    price: 8990,
    badge: 'Signature',
    image:
      'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1540&auto=format&fit=crop',
  },
  {
    id: 'titan-gt',
    name: 'TITAN GT Skeleton',
    price: 15800,
    badge: 'Limited',
    image:
      'https://images.unsplash.com/photo-1704918577143-f2d9e33e1ee3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUSVRBTiUyMEdUJTIwU2tlbGV0b258ZW58MHwwfHx8MTc2MTgwNDMzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'nebula-luxe',
    name: 'NEBULA Luxe Ceramic',
    price: 10250,
    badge: 'Ceramic',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1540&auto=format&fit=crop',
  },
];

export default function CollectionGrid({ onAddToCart }) {
  return (
    <div className="relative py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(255,213,0,0.08),transparent_60%),radial-gradient(600px_300px_at_90%_20%,rgba(255,213,0,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-14 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">The Collection</h2>
            <p className="mt-2 text-neutral-400">Hand-finished details. Swiss movements. Built to endure.</p>
          </div>
          <a href="#shop" className="hidden sm:inline-flex text-sm text-yellow-300 hover:text-yellow-200">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/20 hover:border-yellow-600/40 hover:bg-neutral-900/40 transition-colors"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute left-3 top-3">
                <span className="rounded-full bg-yellow-500/90 text-black text-[10px] font-bold tracking-wider px-2 py-1 uppercase">{p.badge}</span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-neutral-100">{p.name}</h3>
                <p className="mt-1 text-yellow-300 font-semibold">${(p.price).toLocaleString()}</p>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => onAddToCart && onAddToCart(p)}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-black text-xs font-semibold py-2.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                  >
                    Add to Cart
                  </button>
                  <a
                    href="#details"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 text-neutral-200 text-xs font-medium py-2.5 px-4 hover:border-yellow-600/60 hover:text-yellow-300"
                  >
                    Details
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div id="about" className="relative max-w-7xl mx-auto px-6 mt-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl md:text-3xl font-semibold">Our Legacy</h3>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Since our founding, we have pursued a singular vision: craft timepieces where innovation meets artistry. Each component is meticulously engineered, hand-assembled, and tested beyond industry standards.
            </p>
            <p className="mt-3 text-neutral-400 leading-relaxed">
              We partner with leading materials scientists and master watchmakers to push the boundaries of durability and precision—delivering a modern classic built for generations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-[linear-gradient(135deg,rgba(255,220,100,0.08),transparent_40%),linear-gradient(0deg,rgba(255,255,255,0.02),transparent)]"
          >
            <div className="aspect-video">
              <img
                src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1540&auto=format&fit=crop"
                alt="Watchmaking craftsmanship"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div id="blog" className="relative max-w-7xl mx-auto px-6 mt-24">
        <h3 className="text-2xl md:text-3xl font-semibold">From The Journal</h3>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/20 hover:border-yellow-600/40 hover:bg-neutral-900/40"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1520975922284-9e0ce82759b6?q=80&w=1540&auto=format&fit=crop`}
                  alt="Journal cover"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-yellow-300/80 tracking-widest uppercase">Lifestyle</p>
                <h4 className="mt-1 font-medium">Care Guide: Keeping Your Timepiece Pristine</h4>
                <p className="mt-2 text-sm text-neutral-400">Expert tips to maintain water resistance, finish, and accuracy for decades.</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div id="contact" className="relative max-w-7xl mx-auto px-6 mt-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Contact</h3>
            <p className="mt-3 text-neutral-400">Questions about sizing, orders, or bespoke commissions? We would love to assist.</p>
            <div className="mt-6 text-sm text-neutral-400 space-y-1">
              <p>Email: support@flamex.studio</p>
              <p>Phone: +1 (212) 555-0199</p>
              <p>HQ: 88 Hudson Yards, New York, NY</p>
            </div>
          </div>
          <form className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/20">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <label className="text-xs text-neutral-400">First name</label>
                <input className="rounded-lg bg-black/60 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:border-yellow-600/60" placeholder="Alex" />
              </div>
              <div className="grid gap-1">
                <label className="text-xs text-neutral-400">Last name</label>
                <input className="rounded-lg bg-black/60 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:border-yellow-600/60" placeholder="Morgan" />
              </div>
            </div>
            <div className="mt-4 grid gap-1">
              <label className="text-xs text-neutral-400">Email</label>
              <input type="email" className="rounded-lg bg-black/60 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:border-yellow-600/60" placeholder="alex@example.com" />
            </div>
            <div className="mt-4 grid gap-1">
              <label className="text-xs text-neutral-400">Message</label>
              <textarea rows={4} className="rounded-lg bg-black/60 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:border-yellow-600/60" placeholder="I’m interested in the Nebula Luxe…" />
            </div>
            <button type="button" className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-[0_0_30px_-10px] shadow-yellow-400/70">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
