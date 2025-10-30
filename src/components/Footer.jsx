export default function Footer() {
  return (
    <footer className="mt-28 border-t border-neutral-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-200 ring-2 ring-yellow-500/30" />
            <span className="font-semibold tracking-wider text-yellow-100">FLAMEX</span>
          </div>
          <p className="mt-3 text-neutral-400 max-w-sm">Where avant‑garde technology meets timeless craftsmanship. Designed for those who command their time.</p>
        </div>
        <div className="grid grid-cols-3 gap-6 md:gap-8">
          <div className="space-y-2">
            <p className="text-neutral-200 font-medium">Explore</p>
            <a href="#collection" className="block text-neutral-400 hover:text-yellow-300">Collection</a>
            <a href="#about" className="block text-neutral-400 hover:text-yellow-300">About</a>
            <a href="#blog" className="block text-neutral-400 hover:text-yellow-300">Blog</a>
          </div>
          <div className="space-y-2">
            <p className="text-neutral-200 font-medium">Support</p>
            <a href="#contact" className="block text-neutral-400 hover:text-yellow-300">Contact</a>
            <a href="#" className="block text-neutral-400 hover:text-yellow-300">Warranty</a>
            <a href="#" className="block text-neutral-400 hover:text-yellow-300">Care Guide</a>
          </div>
          <div className="space-y-2">
            <p className="text-neutral-200 font-medium">Legal</p>
            <a href="#" className="block text-neutral-400 hover:text-yellow-300">Privacy</a>
            <a href="#" className="block text-neutral-400 hover:text-yellow-300">Terms</a>
            <a href="#" className="block text-neutral-400 hover:text-yellow-300">Cookies</a>
          </div>
        </div>
        <div className="md:text-right text-neutral-500 text-xs md:self-end">© {new Date().getFullYear()} FLAMEX Studio. All rights reserved.</div>
      </div>
    </footer>
  );
}
