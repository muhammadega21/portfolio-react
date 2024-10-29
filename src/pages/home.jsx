import BackToTop from "../components/Elements/BackToTop";
import { Hero, About, Layanan } from "../components/Layouts/Home";

function Home() {
  return (
    <>
      <BackToTop top="home" />
      <section className="pt-4 md:pt-0 dark flex items-center" id="home">
        <Hero />
      </section>
      <section className="light " id="about">
        <About />
      </section>
      {/* <section className="light" id="layanan">
        <Layanan />
      </section> */}
    </>
  );
}

export default Home;
