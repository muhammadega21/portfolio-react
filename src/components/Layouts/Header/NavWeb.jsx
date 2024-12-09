import { NavLink } from "react-router-dom";

function NavWeb() {
  return (
    <nav className="hidden md:flex justify-between items-center px-[10%] h-[70px]  dark">
      <NavLink to={"/"} className="logo">
        <img src="./images/logo.png" alt="Logo" />
        <h4>Portfolio</h4>
      </NavLink>
      <div className="nav-link">
        <ul className="flex items-center gap-[2rem] lg:gap-[5rem]">
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/layanan"}>Layanan</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="contact-btn">
        <NavLink to={"/contact"}>CONTACT</NavLink>
      </div>
    </nav>
  );
}

export default NavWeb;
