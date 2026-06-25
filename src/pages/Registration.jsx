import { useState } from 'react';

function Registration() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    products: [],
    country: 'Pakistan',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        products: checked
          ? [...prev.products, value]
          : prev.products.filter((p) => p !== value),
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="registration-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container text-center py-5">
          <h1 className="page-hero-title">Create Your Account</h1>
          <p className="page-hero-sub">Join Aurora Jewels and unlock exclusive member benefits.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="form-card">
                {submitted ? (
                  <div className="text-center py-5">
                    <div className="success-icon mb-3">🎉</div>
                    <h3>Welcome to Aurora Jewels!</h3>
                    <p className="text-muted">Your registration was successful. Start exploring our collections.</p>
                    <a href="/" className="btn btn-primary-custom mt-3">Go to Home</a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h4 className="mb-4">Personal Information</h4>

                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control custom-input"
                        placeholder="Your full name"
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
                        placeholder="Your email address"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label fw-bold">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control custom-input"
                        placeholder="Choose a password"
                        value={form.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Gender</label>
                      <div className="d-flex gap-4">
                        <div className="form-check">
                          <input
                            className="form-check-input custom-radio"
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                            checked={form.gender === 'Male'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input custom-radio"
                            type="radio"
                            name="gender"
                            id="female"
                            value="Female"
                            checked={form.gender === 'Female'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Preferred Jewellery</label>
                      <div className="d-flex gap-4 flex-wrap">
                        {['Ring', 'Necklace', 'Bracelet', 'Earrings'].map((item) => (
                          <div className="form-check" key={item}>
                            <input
                              className="form-check-input custom-check"
                              type="checkbox"
                              name="products"
                              id={item}
                              value={item}
                              checked={form.products.includes(item)}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor={item}>{item}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="country" className="form-label fw-bold">Country</label>
                      <select
                        id="country"
                        name="country"
                        className="form-select custom-input"
                        value={form.country}
                        onChange={handleChange}
                      >
                        <option>Pakistan</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>UAE</option>
                        <option>Canada</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-primary-custom w-100">Create Account</button>
                    <p className="text-center mt-3 text-muted small">
                      Already have an account? <a href="#" className="link-rose">Sign in</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
