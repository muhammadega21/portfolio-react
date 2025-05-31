import CustomLink from "./_customLink";

function NavWeb() {
  return (
    <nav className="hidden md:flex justify-between items-center px-[8%] h-[70px]  dark">
      <CustomLink to="/" className="logo">
        <img src="/images/logo.png" alt="Logo" />
        <h4>Portfolio</h4>
      </CustomLink>
      <div className="nav-link">
        <ul className="flex items-center gap-[2rem] lg:gap-[5rem]">
          <li>
            <CustomLink to="/about" className={"pointer-events-none"}>
              About
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/layanan" className={"pointer-events-none"}>
              Services
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/portfolio" className={"pointer-events-none"}>
              Portfolio
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/blog">Blog</CustomLink>
          </li>
        </ul>
      </div>
      <div className="contact-btn">
        <CustomLink to="/contact" className={"pointer-events-none"}>
          CONTACT
        </CustomLink>
      </div>
    </nav>
  );
}

export default NavWeb;
