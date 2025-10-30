import { useState } from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-200 ring-2 ring-yellow-500/30 shadow-[0_0_30px_-8px] shadow-yellow-400/50" />
          <span className="text-lg font-semibold tracking-wider text-yellow-100 group-hover:text-yellow-300 transition-colors">FLAMEX</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#collection" className="text-neutral-300 hover:text-yellow-300 transition-colors">Collection</a>
          <a href="#about" className="text-neutral-300 hover:text-yellow-300 transition-colors">About</a>
          <a href="#blog" className="text-neutral-300 hover:text-yellow-300 transition-colors">Blog</a>
          <a href="#contact" className="text-neutral-300 hover:text-yellow-300 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button aria-label="Account" className="p-2 rounded-lg border border-neutral-800 hover:border-yellow-600/40 hover:text-yellow-300 transition-colors">
            <User size={18} />
          </button>
          <button aria-label="Cart" className="relative p-2 rounded-lg border border-neutral-800 hover:border-yellow-600/40 hover:text-yellow-300 transition-colors">
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-yellow-500 text-black text-xs font-semibold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <button className="md:hidden p-2 rounded-lg border border-neutral-800 hover:border-yellow-600/40" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
          <Menu size={18} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-black/90 backdrop-blur-xl">
          <nav className="px-6 py-4 grid gap-3 text-sm">
            <a onClick={() => setOpen(false)} href="#collection" className="text-neutral-300 hover:text-yellow-300 transition-colors">Collection</a>
            <a onClick={() => setOpen(false)} href="#about" className="text-neutral-300 hover:text-yellow-300 transition-colors">About</a>
            <a onClick={() => setOpen(false)} href="#blog" className="text-neutral-300 hover:text-yellow-300 transition-colors">Blog</a>
            <a onClick={() => setOpen(false)} href="#contact" className="text-neutral-300 hover:text-yellow-300 transition-colors">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
