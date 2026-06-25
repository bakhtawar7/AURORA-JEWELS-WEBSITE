import { useState } from 'react';
import Newsletter from '../components/Newsletter';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container text-center py-5">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-sub">We'd love to hear from you. Reach out anytime.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center gap-4">

            {/* Contact Info */}
            <div className="col-md-4">
              <div className="contact-info-card">
                <h4 className="mb-4">Get In Touch</h4>
                <div className="contact-detail">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>info@aurorajewels.com</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>+92 300 1234567</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="contact-icon">🕐</span>
                  <div>
                    <strong>Hours</strong>
                    <p>Mon–Sat: 10am – 7pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <div className="form-card">
                <h4 className="mb-4">Send a Message</h4>
                {submitted ? (
                  <div className="alert alert-success">
                    ✅ Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-bold">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control custom-input"
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control custom-input"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label fw-bold">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control custom-input"
                        rows="5"
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary-custom w-100">Send Message</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

export default Contact;
