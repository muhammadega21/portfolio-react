import { useEffect } from "react";
import BackToTop from "../components/Elements/BackToTop";
import Footer from "../components/Layouts/Footer";
import {
  Hero,
  About,
  Layanan,
  Benefits,
  Blog,
  Contact,
} from "../components/Layouts/Home";
import Portfolio from "../components/Layouts/Home/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop top="home" />
      <section className="pt-4 md:pt-0 dark flex items-center " id="home">
        <Hero />
      </section>
      <section className="light py-10 ">
        <Layanan />
      </section>
      <section className="dark py-10 ">
        <Portfolio />
      </section>
      <section className="light py-10 ">
        <About />
      </section>
      <section className="dark py-10 grid place-items-center ">
        <Benefits />
      </section>
      <section className="light py-10 grid place-items-center ">
        <Blog />
      </section>
      <section className="dark py-10 grid place-items-center ">
        <Contact />
      </section>
      <div className="dark py-10 grid place-items-center">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
