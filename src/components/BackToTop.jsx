import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function BackToTop({ top }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${show ? "show" : ""}`}>
      <a href={`#${top}`}>
        <img src="./icons/up.svg" alt="up" />
      </a>
    </div>
  );
}

BackToTop.propTypes = {
  top: PropTypes.string.isRequired,
};

export default BackToTop;
