import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "../components/Elements/_backToTop";
import "./about.css";
import { WrapperTech } from "../components/Fragments/_wrapper";
import Footer from "../components/Layouts/_footer";

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
        <h5 data-aos="fade-up" data-aos-duration="600">
          LAYANAN
        </h5>
        <div className="flex justify-between gap-3 mt-8">
          <h3
            className="leading-[48px]"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Digital agency is a business you hire to outsource your digital
            marketing efforts
          </h3>
          <div data-aos="fade-up" data-aos-duration="600">
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
          <div data-aos="fade-up" data-aos-duration="600">
            <WrapperTech techName={"Laravel"} className={"border-b-0"}>
              <h3>
                Agency is a business you hire to outsource your digital
                marketing efforts
              </h3>
              <p>
                Business you hire to outsource your digital marketing efforts,
                instead of handling in-house. They can provide your business
                with a variety of digital solutions to promote your product or
                service online and help you.
              </p>
              <div className="mt-4 flex flex-col gap-y-3">
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#EF6C57] inline-flex py-1.5 px-1 rounded-full">
                    <img src="./icons/check.svg" alt="check" />
                  </div>
                  <span>Web Development</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#EF6C57] inline-flex py-1.5 px-1 rounded-full">
                    <img src="./icons/check.svg" alt="check" />
                  </div>
                  <span>Brand Strategy</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#EF6C57] inline-flex py-1.5 px-1 rounded-full">
                    <img src="./icons/check.svg" alt="check" />
                  </div>
                  <span>Art Direction</span>
                </div>
              </div>
            </WrapperTech>
          </div>
          <div data-aos="fade-up" data-aos-duration="600">
            <WrapperTech techName={"React Js"} className={"border-b-0"}>
              <h3>
                Agency is a business you hire to outsource your digital
                marketing efforts
              </h3>
              <p>
                Business you hire to outsource your digital marketing efforts,
                instead of handling in-house. They can provide your business
                with a variety of digital solutions to promote your product or
                service online and help you.
              </p>
              <div className="mt-4 flex flex-col gap-y-3">
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#EF6C57] inline-flex py-1.5 px-1 rounded-full">
                    <img src="./icons/check.svg" alt="check" />
                  </div>
                  <span>Web Development</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#EF6C57] inline-flex py-1.5 px-1 rounded-full">
                    <img src="./icons/check.svg" alt="check" />
                  </div>
                  <span>Brand Strategy</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#EF6C57] inline-flex py-1.5 px-1 rounded-full">
                    <img src="./icons/check.svg" alt="check" />
                  </div>
                  <span>Art Direction</span>
                </div>
              </div>
            </WrapperTech>
          </div>
          <div data-aos="fade-up" data-aos-duration="600">
            <WrapperTech techName={"Vue Js"}>
              <h3>
                Agency is a business you hire to outsource your digital
                marketing efforts
              </h3>
              <p>
                Business you hire to outsource your digital marketing efforts,
                instead of handling in-house. They can provide your business
                with a variety of digital solutions to promote your product or
                service online and help you.
              </p>
              <div className="mt-4 flex flex-col gap-y-3">
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#EF6C57] inline-flex py-1.5 px-1 rounded-full">
                    <img src="./icons/check.svg" alt="check" />
                  </div>
                  <span>Web Development</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#EF6C57] inline-flex py-1.5 px-1 rounded-full">
                    <img src="./icons/check.svg" alt="check" />
                  </div>
                  <span>Brand Strategy</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="bg-[#EF6C57] inline-flex py-1.5 px-1 rounded-full">
                    <img src="./icons/check.svg" alt="check" />
                  </div>
                  <span>Art Direction</span>
                </div>
              </div>
            </WrapperTech>
          </div>
        </div>
        <div>
          <h5 data-aos="fade-up" data-aos-duration="600">
            Bagaimana Project Kami
          </h5>
          <div
            className="flex gap-5 mt-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="w-1/2">
              <h3 className="leading-[48px]">
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
          <div className="flex justify-between items-center gap-x-20 bg-[#EF6D58] rounded-md p-20 mt-20">
            <div
              className="w-1/2"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <h2 className="leading-[64px] !text-white">
                Membantu Membangun Project Anda
              </h2>
              <p className="!text-[#FFFFFFA3]">
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house.
              </p>
              <button className="text-[#391400] bg-white px-6 py-3 uppercase font-extrabold rounded-md mt-4">
                Hubungi Kami
              </button>
            </div>
            <div
              className="img w-1/2"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <img src="./images/service.png" alt="service" />
            </div>
          </div>
        </div>
      </section>
      <div className="py-10">
        <Footer
          copyColor={"#391400A3"}
          page={"Layanan"}
          borderColor={"#F3D1BF"}
        />
      </div>
    </div>
  );
}

export default Layanan;
