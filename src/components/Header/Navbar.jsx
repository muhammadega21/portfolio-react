import "./index.css";
import NavWeb from "./NavWeb";
import NavMobile from "./NavMobile";

function Navbar() {
  return (
    <header>
      <NavWeb />
      <NavMobile />
    </header>
  );
}

export default Navbar;
