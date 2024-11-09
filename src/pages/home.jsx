import BackToTop from "../components/Elements/BackToTop";
import {
  Hero,
  About,
  Layanan,
  Benefits,
  Blog,
} from "../components/Layouts/Home";
import Portfolio from "../components/Layouts/Home/Portfolio";

function Home() {
  return (
    <>
      <BackToTop top="home" />
      <section className="pt-4 md:pt-0 dark flex items-center" id="home">
        <Hero />
      </section>
      <section className="light py-10">
        <Layanan />
      </section>
      <section className="dark py-10">
        <Portfolio />
      </section>
      <section className="light py-10">
        <About />
      </section>
      <section className="dark py-10 grid place-items-center">
        <Benefits />
      </section>
      <section className="light py-10">
        <Blog />
      </section>
    </>
  );
}

export default Home;
