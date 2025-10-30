import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import CollectionGrid from './components/CollectionGrid';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-yellow-400/30 selection:text-yellow-300">
      <Navbar cartCount={cart.length} />
      <main>
        <HeroSpline />
        <section id="collection" className="relative z-0">
          <CollectionGrid onAddToCart={addToCart} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
