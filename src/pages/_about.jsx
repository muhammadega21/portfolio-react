import { useEffect } from "react";
import "aos/dist/aos.css";
import BackToTop from "../components/Elements/_backToTop";
import "./index.css";
import "./about.css";
import { WrapperAbout } from "../components/Fragments/_wrapper";
import Footer from "../components/Layouts/_footer";
import { tabTitle } from "../utils/generalFunctions";
import { useLocation } from "react-router-dom";

function About() {
  tabTitle("Portfolio | About");

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop top={""} />
      <section className="hero-head">
        <div className="hero" data-aos="fade-up" data-aos-duration="600">
          <h1>Tentang Saya</h1>
          <p className="mt-3 w-full md:w-1/2 mx-auto">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </section>
      <section className="hero-body">
        <div className="about-profile">
          <div className="img" data-aos="fade-up" data-aos-duration="600">
            <img src="/images/about-hero.png" alt="about-hero.png" />
          </div>
          <div className="py-10 w-full md:w-1/2 mx-auto">
            <h5 data-aos="fade-up" data-aos-duration="600">
              Muhammad Ega Dermawan
            </h5>
            <h2
              className="leading-[45px] md:leading-[60px] my-4 mb-5"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Professional Web Programming
            </h2>
            <p data-aos="fade-up" data-aos-duration="600">
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p>
            <p data-aos="fade-up" data-aos-duration="600">
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
          </div>
        </div>
        <div className="my-4" data-aos="fade-up" data-aos-duration="600">
          <WrapperAbout />
        </div>
        <div className="about-rell w-full md:w-1/2 mx-auto">
          <h3
            className="leading-[45px] md:leading-[50px] my-4 mb-5"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Video Perkenalan Tentang Saya
          </h3>
          <p data-aos="fade-up" data-aos-duration="600">
            Design, business understanding, ability to put themselves in the
            merchant's shoes meant to partner.
          </p>
          <video
            className="w-full rounded my-6"
            controls
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <source src={"videos/intro.mp4"} type={"video/mp4"} />
          </video>
          <p data-aos="fade-up" data-aos-duration="600">
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team
          </p>
          <p data-aos="fade-up" data-aos-duration="600">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house. They can provide
            your business with a variety of digital solutions to promote your
            product or service online and help you.
          </p>
        </div>
        <div className="bg-[#F3D1BF] h-[1px] w-full my-12"></div>
        <div
          className="quote w-full md:w-1/2 mx-auto "
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h5>FOUNDER WORDS</h5>
          <div className="relative">
            <h3 className="leading-[40px] md:leading-[50px] my-5 relative z-10">
              Digital agency is a business you hire to outsource your digital
              marketing efforts
            </h3>
            <img
              src="icons/quote.svg"
              alt="quote"
              className="absolute -top-10 right-0"
            />
            <p className="!text-[#391400]">Gabriel Pires</p>
            <span className="text-[#391400A3] text-sm">Founder</span>
          </div>
        </div>
        <div className="bg-[#F3D1BF] h-[1px] w-full my-12"></div>
        <div className="text-center">Organizations...</div>
      </section>
      <div className="dark py-14">
        <Footer page={"About"} />
      </div>
    </div>
  );
}

export default About;
