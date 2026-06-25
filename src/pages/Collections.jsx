import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

const collections = [
  {
    title: 'Rings',
    image: '/ring.jpg',
    description: 'From dainty solitaires to bold statement pieces — find the ring that tells your story.',
  },
  {
    title: 'Necklaces',
    image: '/necklace.jpg',
    description: 'Graceful chains and pendants that rest beautifully close to your heart.',
  },
  {
    title: 'Earrings',
    image: '/earings.jpg',
    description: 'Frame your face with our stunning collection of studs, hoops, and drops.',
  },
  {
    title: 'Bracelets',
    image: '/bracelet.jpg',
    description: 'Wrap your wrist in elegance — from delicate bangles to layered charm bracelets.',
  },
];

function Collections() {
  return (
    <div className="collections-page">
      <section className="page-hero">
        <div className="container text-center py-5">
          <h1 className="page-hero-title">Our Collections</h1>
          <p className="page-hero-sub">Curated with love — jewels for every occasion and every style.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          {collections.map((col, i) => (
            <div key={col.title} className={`row align-items-center mb-5 ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <div className="col-md-5 mb-4 mb-md-0">
                <img src={col.image} alt={col.title} className="img-fluid rounded-custom shadow-sm collection-img" />
              </div>
              <div className="col-md-7 px-md-5">
                <h2 className="section-title">{col.title}</h2>
                <p className="about-body">{col.description}</p>
                <Link to="/shop" className="btn btn-primary-custom">Shop {col.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

export default Collections;
