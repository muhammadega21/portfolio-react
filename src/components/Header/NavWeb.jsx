import { Link } from "react-router-dom";
function NavWeb() {
  return (
    <nav className="hidden md:flex justify-between items-center px-[10%] h-[70px] dark ">
      <div className="logo">
        <Link to="/">
          <img src="./images/logo.png" alt="Logo" />
        </Link>
        <h4>Portfolio</h4>
      </div>
      <div className="nav-link">
        <ul className="flex items-center gap-[2rem] lg:gap-[5rem]">
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
        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
}

export default NavWeb;
