import BackToTop from "../components/Elements/BackToTop";
import { Hero, About, Layanan } from "../components/Layouts/Home";
import Portfolio from "../components/Layouts/Home/Portfolio";

function Home() {
  return (
    <>
      <BackToTop top="home" />
      <section className="pt-4 md:pt-0 dark flex items-center" id="home">
        <Hero />
      </section>
      <section className="light py-10" id="layanan">
        <Layanan />
      </section>
      <section className="dark py-10" id="portfolio">
        <Portfolio />
      </section>
      <section className="light py-10" id="about">
        <About />
      </section>
    </>
  );
}

export default Home;
