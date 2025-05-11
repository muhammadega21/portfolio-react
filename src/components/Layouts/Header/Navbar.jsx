import "./index.css";
import NavWeb from "./NavWeb";
import NavMobile from "./NavMobile";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header data-aos="fade-down" data-aos-duration="800">
      <NavWeb />
      <NavMobile />
    </header>
  );
}

export default Navbar;
