import { useEffect } from "react";
import BackToTop from "../components/Elements/_backToTop";
import Footer from "../components/Layouts/_footer";
import {
  Hero,
  About,
  Layanan,
  Benefits,
  Blog,
  Contact,
} from "../components/Layouts/Home";
import Portfolio from "../components/Layouts/Home/_portfolio";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop top="" />
      <section className="home pt-4 md:pt-0 dark flex items-center ">
        <Hero />
      </section>
      <section className="home light py-10 ">
        <Layanan />
      </section>
      <section className="home dark py-10 ">
        <Portfolio />
      </section>
      <section className="home light py-10 ">
        <About />
      </section>
      <section className="home dark py-10 grid place-items-center ">
        <Benefits />
      </section>
      <section className="home light py-10 grid place-items-center ">
        <Blog />
      </section>
      <section className="home dark py-10 grid place-items-center ">
        <Contact />
      </section>
      <div className="dark py-10 grid place-items-center">
        <Footer page={"Personal"} />
      </div>
    </div>
  );
}

export default Home;
