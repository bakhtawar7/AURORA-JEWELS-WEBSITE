import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <NavLink className="navbar-brand brand-logo" to="/">AURORA JEWELS</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link nav-link-custom' + (isActive ? ' active-link' : '')} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link nav-link-custom' + (isActive ? ' active-link' : '')} to="/shop">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link nav-link-custom' + (isActive ? ' active-link' : '')} to="/collections">Collections</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link nav-link-custom' + (isActive ? ' active-link' : '')} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link nav-link-custom' + (isActive ? ' active-link' : '')} to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-register ms-2" to="/registration">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
