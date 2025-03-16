import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "../components/Elements/BackToTop";
import "./about.css";
import { WrapperTech } from "../components/Fragments/Wrapper";
import Footer from "./../components/Layouts/Footer";

function Layanan() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop top={""} />
      <section className="hero-head">
        <div className="hero" data-aos="fade-up" data-aos-duration="600">
          <h1>Layanan</h1>
          <p className="mt-3 w-full md:w-1/2 mx-auto">
            Aplikasi mobile dengan beragam jenis ragam bahasa pemrograman,
            dengan struktur codingan yang rapi dan keamanan aplikasi terjamin.
          </p>
        </div>
      </section>
      <section className="hero-body">
        <h5>LAYANAN</h5>
        <div className="flex justify-between gap-3 mt-8">
          <h3>
            Digital agency is a business you hire to outsource your digital
            marketing efforts
          </h3>
          <div>
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
        <div className="my-20">
          <WrapperTech techName={"Laravel"} className={"border-b-0"} />
          <WrapperTech techName={"React Js"} className={"border-b-0"} />
          <WrapperTech techName={"Vue Js"} />
        </div>
        <div>
          <h5>Bagaimana Project Kami</h5>
          <div className="flex  gap-5">
            <div className="w-1/2">
              <h3>
                Membuat Projectmu
                <br />
                Terlihat Baik
              </h3>
              <p className="pe-8">
                Technical skills, design, business understanding, ability to put
                themselves in the merchant's shoes.
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <h4 className="flex items-center gap-x-10">
                <h1 className="">1</h1> Layanan Satu
              </h4>
              <h4 className="flex items-center gap-x-10">
                <h1 className="">2</h1> Layanan Dua
              </h4>
              <h4 className="flex items-center gap-x-10">
                <h1 className="">3</h1> Layanan Tiga
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Layanan;
