import BackToTop from "../components/BackToTop";
import { Hero, About } from "../components/Home";

function Home() {
  return (
    <>
      <BackToTop top="home" />
      <section className="pt-4 md:pt-0 dark" id="home">
        <Hero />
      </section>
      <section id="about" className="light">
        <About />
      </section>
    </>
  );
}

export default Home;
