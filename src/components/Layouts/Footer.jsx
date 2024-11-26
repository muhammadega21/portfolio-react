import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-wrapper w-full px-[5%] md:px-[10%]">
      <div className="flex justify-between items-center md:items-start flex-col md:flex-row gap-y-10">
        <h4>Personal</h4>
        <div className="footer-menu flex flex-col text-center md:text-left">
          <h5 className="mb-3">Menu</h5>
          <Link to={"about"}>About</Link>
          <Link to={"service"}>Services</Link>
          <Link to={"blog"}>Blog</Link>
          <Link to={"contact"}>Contact</Link>
        </div>
        <div className="footer-service text-center md:text-left">
          <h5 className="mb-3">Service</h5>
          <p>Design</p>
          <p>Development</p>
          <p>Marketing</p>
          <Link to={"service"}>See More</Link>
        </div>
        <div className="footer-socialMedia flex gap-3">
          <div className="social-wrapper">
            <Link to={"https://github.com/muhammadega21"} target="blank">
              <img src="./icons/facebook.svg" alt="facebook" />
            </Link>
          </div>
          <div className="social-wrapper">
            <Link to={"https://github.com/muhammadega21"} target="blank">
              <img src="./icons/twitter.svg" alt="twitter" />
            </Link>
          </div>
          <div className="social-wrapper">
            <Link to={"https://github.com/muhammadega21"} target="blank">
              <img src="./icons/instagram.svg" alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border border-[#3A3C56] my-10"></div>
      <div className="flex flex-col md:flex-row justify-between text-center">
        <p className="text-[#FFFFFFA3]">
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
