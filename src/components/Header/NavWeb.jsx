function NavWeb() {
  return (
    <nav className="hidden md:flex justify-between items-center px-[10%] h-[70px]  dark">
      <div className="logo">
        <img src="./images/logo.png" alt="Logo" />
        <h4>Portfolio</h4>
      </div>
      <div className="nav-link">
        <ul className="flex items-center gap-[2rem] lg:gap-[5rem]">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#layanan">Layanan</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>
      <div className="contact-btn">
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
}

export default NavWeb;
