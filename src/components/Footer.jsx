import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-brand">AURORA JEWELS</h5>
            <p className="footer-tagline">Crafting timeless elegance, one jewel at a time.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="footer-heading">Contact Us</h6>
            <p className="footer-contact">
              <i className="bi bi-envelope me-2"></i>info@aurorajewels.com<br />
              <i className="bi bi-geo-alt me-2"></i>Lahore, Pakistan<br />
              <i className="bi bi-telephone me-2"></i>+92 300 1234567
            </p>
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="text-center footer-copy mb-0">&copy; 2026 AURORA JEWELS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
