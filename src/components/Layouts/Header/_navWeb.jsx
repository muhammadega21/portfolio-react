import CustomLink from "./_customLink";

function NavWeb() {
  return (
    <nav className="hidden md:flex justify-between items-center px-[10%] h-[70px]  dark">
      <CustomLink to="/" className="logo">
        <img src="/images/logo.png" alt="Logo" />
        <h4>Portfolio</h4>
      </CustomLink>
      <div className="nav-link">
        <ul className="flex items-center gap-[2rem] lg:gap-[5rem]">
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/layanan">Services</CustomLink>
          </li>
          <li>
            <CustomLink to="/portfolio">Portfolio</CustomLink>
          </li>
          <li>
            <CustomLink to="/blog">Blog</CustomLink>
          </li>
        </ul>
      </div>
      <div className="contact-btn">
        <CustomLink to="/contact">CONTACT</CustomLink>
      </div>
    </nav>
  );
}

export default NavWeb;
