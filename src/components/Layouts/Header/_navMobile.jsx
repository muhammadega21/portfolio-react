import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CustomLink from "./_customLink";
function NavMobile() {
  const [open, setOpen] = useState(false);
  const navRef = useRef();

  const handleClick = () => {
    setOpen(!open);
    document.body.style.overflow = open ? "auto" : "hidden";
  };

  const handleOutsideClick = (e) => {
    // Jika klik terjadi di luar elemen nav, tutup menu
    if (navRef.current && !navRef.current.contains(e.target)) {
      setOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const handleLinkClick = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`h-[${
        open ? "315px" : "70px"
      }] navMobile flex flex-col md:hidden px-[5%] dark`}
    >
      <div className="logo py-3 justify-between">
        <CustomLink to={"/"} className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" />
          <h4>Portfolio</h4>
        </CustomLink>
        <div
          className={`menu ${open ? "open" : "close"}`}
          onClick={handleClick}
        >
          {open ? (
            <svg
              className="svg-icon fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          ) : (
            <svg
              className="svg-icon fill-current "
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          )}
        </div>
      </div>
      <div className="nav-link flex flex-col w-full">
        <ul className="w-full">
          <li>
            <CustomLink
              to={"/about"}
              className={"pointer-events-none"}
              onClick={handleLinkClick}
            >
              About
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to={"/layanan"}
              className={"pointer-events-none"}
              onClick={handleLinkClick}
            >
              Services
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to={"/portfolio"}
              className={"pointer-events-none"}
              onClick={handleLinkClick}
            >
              Portfolio
            </CustomLink>
          </li>
          <li>
            <CustomLink to={"/blog"} onClick={handleLinkClick}>
              Blog
            </CustomLink>
          </li>
        </ul>
        <div className="contact-btn my-3 w-full">
          <CustomLink
            to={"/contact"}
            className="w-full block text-center pointer-events-none"
            onClick={handleLinkClick}
          >
            CONTACT
          </CustomLink>
        </div>
      </div>
    </nav>
  );
}

export default NavMobile;
