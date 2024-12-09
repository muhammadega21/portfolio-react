import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "../components/Elements/BackToTop";
import "./index.css";
import "./about.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop />
      <section className="hero-head">
        <div className="hero">
          <h1>Tentang Saya</h1>
          <p className="mt-3 w-full md:w-1/2 mx-auto">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </section>
      <section className="hero-body">
        <div className="about-profile">
          <div className="img">
            <img src="images/about-hero.png" alt="about-hero.png" />
          </div>
          <div className="py-10">
            <h5>Muhammad Ega Dermawan</h5>
            <h2>Professional Web Programming</h2>
            <p>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p>
            <p>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
