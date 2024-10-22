import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="./icons/logo.svg" alt="Logo" />
        </Link>
        <h4>Portfolio</h4>
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/layanan">Layanan</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="contact-btn">
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
