import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';

const allProducts = [
  { image: '/luxuryring.jpg', name: 'Luxury Ring', price: 100, category: 'Rings' },
  { image: '/elegent.jpg', name: 'Elegant Bracelet', price: 120, category: 'Bracelets' },
  { image: '/clasic.jpg', name: 'Classic Earrings', price: 90, category: 'Earrings' },
  { image: '/premium.jpg', name: 'Premium Necklace', price: 150, category: 'Necklaces' },
  { image: '/diamond.jpg', name: 'Diamond Ring', price: 299, category: 'Rings' },
  { image: '/gold.jpg', name: 'Gold Bracelet', price: 129, category: 'Bracelets' },
  { image: '/pearl.jpg', name: 'Pearl Earrings', price: 149, category: 'Earrings' },
  { image: '/goldnecklace.jpg', name: 'Gold Necklace', price: 179, category: 'Necklaces' },
];

const categories = ['All', 'Rings', 'Earrings', 'Necklaces', 'Bracelets'];

function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="shop-page">
      <section className="page-hero">
        <div className="container text-center py-5">
          <h1 className="page-hero-title">Our Shop</h1>
          <p className="page-hero-sub">Browse our full collection of handcrafted jewelry.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          {/* Category Filter */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn btn-filter ${activeCategory === cat ? 'btn-filter-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="row justify-content-center">
            {filtered.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

export default Shop;
