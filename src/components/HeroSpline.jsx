import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSpline() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.85)_85%)]" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-yellow-300/80 tracking-widest text-xs uppercase mb-4">Luxury • Technology • Precision</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            <span className="text-neutral-100">Precision.</span>{' '}
            <span className="text-neutral-200">Power.</span>{' '}
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">Perfection.</span>
          </h1>
          <p className="mt-4 text-neutral-300/90 leading-relaxed">
            Experience time reimagined. Crafted with Swiss-level engineering and a futuristic edge, our timepieces blend luxury with high performance.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#collection"
              className="relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-[0_0_40px_-10px] shadow-yellow-400/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
            >
              Explore Collection
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-neutral-700 text-neutral-200 hover:border-yellow-600/60 hover:text-yellow-300 transition-colors"
            >
              Our Legacy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
