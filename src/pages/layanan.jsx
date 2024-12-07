import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "../components/Elements/BackToTop";
import "./about.css";

function Layanan() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop />
      <section className="py-10 ">
        <div className="bg-background-dark text-center py-16 px-4">
          <h1>Layanan</h1>
          <p className="mt-3 w-full md:w-1/2 mx-auto">
            Aplikasi mobile dengan beragam jenis ragam bahasa pemrograman,
            dengan struktur codingan yang rapi dan keamanan aplikasi terjamin.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Layanan;
