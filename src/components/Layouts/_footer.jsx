import { Link } from "react-router-dom";
function Footer({ page, borderColor, copyColor }) {
  return (
    <div className="footer-wrapper w-full px-[5%] md:px-[10%]">
      <div className="flex justify-between items-center md:items-start flex-col md:flex-row gap-y-10">
        <h4>{page}</h4>
        <div className="footer-menu flex flex-col text-center md:text-left pointer-events-none">
          <h5 className="mb-3">Menu</h5>
          <Link to={"#"}>About</Link>
          <Link to={"#"}>Services</Link>
          <Link to={"#"}>Portfolio</Link>
          <Link to={"#"}>Blog</Link>
        </div>
        <div className="footer-service text-center md:text-left">
          <h5 className="mb-3">Service</h5>
          <p>Design</p>
          <p>Development</p>
          <p>Marketing</p>
          <Link to={"#"}>See More</Link>
        </div>
        <div className="footer-socialMedia flex gap-3 pointer-events-none">
          <div className="social-wrapper ">
            <Link to={"#"} target="blank">
              <img src="/icons/facebook.svg" alt="facebook" />
            </Link>
          </div>
          <div className="social-wrapper">
            <Link to={"#"} target="blank">
              <img src="/icons/twitter.svg" alt="twitter" />
            </Link>
          </div>
          <div className="social-wrapper">
            <Link to={"#"} target="blank">
              <img src="/icons/instagram.svg" alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`border ${
          borderColor ? borderColor : "border-[#3A3C56]"
        } my-10`}
      ></div>
      <div className="flex flex-col md:flex-row justify-between text-center">
        <p className={`${copyColor ? copyColor : "text-[#FFFFFFA3]"}`}>
          Copyright © 2022 Laaqiq. <br className="block md:hidden" />
          All Rights Reserved.
        </p>
        <div className="flex gap-x-10 justify-center mt-10 md:mt-0">
          <Link to={"#"}>Term of Use</Link>
          <Link to={"#"}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
