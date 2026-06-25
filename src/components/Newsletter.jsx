import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section py-5">
      <div className="container text-center">
        <h2 className="section-title">Join Our Newsletter</h2>
        <p className="newsletter-sub">Get exclusive offers, new arrivals & jewelry tips delivered to your inbox.</p>
        {subscribed ? (
          <div className="alert alert-success d-inline-block mt-3">
            Thank you for subscribing! ✨
          </div>
        ) : (
          <form className="newsletter-form d-flex justify-content-center gap-2 flex-wrap mt-3" onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control newsletter-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary-custom">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
