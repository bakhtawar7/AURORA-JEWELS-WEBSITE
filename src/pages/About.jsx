import Newsletter from '../components/Newsletter';

function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container text-center py-5">
          <h1 className="page-hero-title">About Aurora Jewels</h1>
          <p className="page-hero-sub">Our story, our mission, our passion for perfection.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img src="/elegent.jpg" alt="Aurora Jewels Story" className="img-fluid rounded-custom shadow-sm" />
            </div>
            <div className="col-md-6">
              <h2 className="section-title">Our Story</h2>
              <p className="about-body">
                AURORA JEWELS is a premium jewelry brand inspired by elegance, luxury, and modern sophistication.
                Founded with the belief that every person deserves to wear something beautiful, we have been crafting
                exquisite pieces since our inception.
              </p>
              <p className="about-body">
                Each jewel is carefully selected and crafted by skilled artisans who bring decades of expertise to
                every piece. From delicate rings to statement necklaces, our collection celebrates every milestone
                and every moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Values</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="value-card">
                <div className="value-icon">💎</div>
                <h5>Quality First</h5>
                <p>Every piece undergoes rigorous quality checks to ensure you receive nothing but the finest.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card">
                <div className="value-icon">✨</div>
                <h5>Timeless Design</h5>
                <p>We craft jewelry that transcends trends — pieces you will treasure for a lifetime.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card">
                <div className="value-icon">🌸</div>
                <h5>Customer Love</h5>
                <p>Your satisfaction is our greatest reward. We are dedicated to a memorable experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-5">
        <div className="container">
          <div className="mission-card text-center mx-auto">
            <h2 className="section-title">Our Mission</h2>
            <p className="about-body">
              To deliver timeless beauty through carefully crafted jewelry that enhances every moment —
              from everyday elegance to life's most special occasions.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

export default About;
