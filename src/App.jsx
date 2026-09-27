import { useState, useEffect } from 'react';
import './index.css';

const products = [
  {
    id: 1,
    title: 'AudioLuxe Pro',
    category: 'Audio',
    price: '$349',
    image: '/premium_headphones_1790509898323.jpg',
    badge: 'New Arrival'
  },
  {
    id: 2,
    title: 'Nexus SmartWatch',
    category: 'Wearables',
    price: '$299',
    image: '/smart_watch_1790509913568.jpg',
    badge: 'Best Seller'
  },
  {
    id: 3,
    title: 'NeonFlow X1',
    category: 'Footwear',
    price: '$189',
    image: '/modern_sneakers_1790509924522.jpg',
    badge: 'Limited Edition'
  }
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  // Mouse tracking for hover effect on product cards
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.product-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      <header>
        <div className="container nav-container">
          <div className="logo">AURA.</div>
          <nav className="nav-links">
            <a href="#">Shop</a>
            <a href="#">Collections</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <div className="nav-actions">
            <button className="cart-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button className="btn btn-outline">Sign In</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-pill">Next Gen Commerce</div>
          <h1>Discover the future of <span>curated lifestyle</span></h1>
          <p>Explore our exclusive collection of premium products designed for the modern aesthetic. Elevate your everyday experience with cutting-edge design and unparalleled quality.</p>
          <div className="hero-actions">
            <button className="btn btn-primary">Shop Collection</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </section>

        <section className="products-section container">
          <h2 className="section-title">Trending Now</h2>
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-badge">{product.badge}</div>
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-price-row">
                    <span className="product-price">{product.price}</span>
                    <button className="add-to-cart" onClick={addToCart} aria-label="Add to cart">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <div className="logo">AURA.</div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © 2026 Aura Commerce. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
