import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';

const featuredCategories = [
  { name: 'Rings', image: '/ring.jpg', link: '/collections' },
  { name: 'Earrings', image: '/earings.jpg', link: '/collections' },
  { name: 'Necklaces', image: '/necklace.jpg', link: '/collections' },
  { name: 'Bracelets', image: '/bracelet.jpg', link: '/collections' },
];

const bestSellers = [
  { image: '/diamond.jpg', name: 'Diamond Ring', price: 299 },
  { image: '/gold.jpg', name: 'Gold Bracelet', price: 129 },
  { image: '/pearl.jpg', name: 'Pearl Earrings', price: 149 },
  { image: '/goldnecklace.jpg', name: 'Gold Necklace', price: 179 },
];

const showcaseImages = ['/s1.jpg', '/s2.jpg', '/s3.jpg', '/s4.jpg', '/s5.jpg', '/s6.jpg'];

function Home() {
  return (
    <div className="home-page">

      {/* Hero Banner */}
      <section className="hero-section">
        <img src="/banner.png" alt="Aurora Jewels Banner" className="hero-banner" />
        <div className="hero-overlay">
          <div className="hero-text">
            <h1 className="hero-title">Elevate Your Elegance</h1>
            <p className="hero-subtitle">Discover timeless luxury jewelry for every occasion.</p>
            <Link to="/shop" className="btn btn-hero">Shop Now</Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-5 bg-light-rose">
        <div className="container">
          <h2 className="section-title text-center mb-4">Featured Collections</h2>
          <div className="row justify-content-center">
            {featuredCategories.map((cat) => (
              <div key={cat.name} className="col-6 col-md-3 mb-4">
                <Link to={cat.link} className="text-decoration-none">
                  <div className="category-card">
                    <img src={cat.image} alt={cat.name} className="category-img" />
                    <h5 className="category-name">{cat.name}</h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Marquee */}
      <section className="py-4 showcase-section">
        <div className="container">
          <h2 className="section-title text-center mb-4">Jewelry Showcase</h2>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...showcaseImages, ...showcaseImages].map((img, i) => (
              <img key={i} src={img} alt={`showcase-${i}`} className="marquee-img" />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Best Sellers</h2>
          <div className="row justify-content-center">
            {bestSellers.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="about-snippet py-5">
        <div className="container text-center">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">AURORA JEWELS crafts luxurious, elegant, and timeless pieces designed to shine forever.</p>
          <Link to="/about" className="btn btn-outline-custom">Read More</Link>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

export default Home;
