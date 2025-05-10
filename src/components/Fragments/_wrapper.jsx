import { useState } from "react";
import "./index.css";

const fadeUp = { "data-aos": "fade-up", "data-aos-duration": "500" };
function Wrapper({ children, className }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center border border-[#f3d1bf] rounded-[6px] ${className}`}
    >
      {children}
    </div>
  );
}

function WrapperAbout() {
  return (
    <Wrapper>
      <div
        className="list-wrapper about p-[2rem_1rem] md:p-[2rem_3rem]"
        {...fadeUp}
      >
        <div className="icon">
          <img src="/icons/callendar-check.svg" alt="callendar-check" />
        </div>
        <div>
          <h3>2 Tahun</h3>
          <p>Pengalaman Kerja</p>
        </div>
      </div>
      <div
        className="list-wrapper about p-[2rem_1rem] md:p-[2rem_3rem]"
        {...fadeUp}
        data-aos-delay="100"
      >
        <div className="icon">
          <img src="/icons/bag.svg" alt="" />
        </div>
        <div>
          <h3>20+</h3>
          <p>Projek yang dikerjakan</p>
        </div>
      </div>
    </Wrapper>
  );
}

function WrapperLayanan() {
  return (
    <Wrapper>
      <div className="list-wrapper layanan p-[2rem_1.5rem] md:p-[2rem_3rem]">
        <div className="icon-wrapper" {...fadeUp}>
          <div className="icon">
            <img src="/icons/laptop.svg" alt="laptop" />
          </div>
          <h4>Laravel</h4>
        </div>
        <p {...fadeUp} data-aos-delay="100">
          Mengembangkan website menggunakan Laravel versi terbaru dengan
          struktur codingan yang rapi dan keamanan aplikasi terjamin
        </p>
        <div className="more" {...fadeUp} data-aos-delay="100">
          <div className="icon">
            <img src="/icons/plus.svg" alt="plus" />
          </div>
          <span>Learn More</span>
        </div>
      </div>
      <div className="list-wrapper layanan p-[2rem_1.5rem] md:p-[2rem_3rem]">
        <div className="icon-wrapper" {...fadeUp}>
          <div className="icon">
            <img src="/icons/bag.svg" alt="bag" />
          </div>
          <h4>React JS</h4>
        </div>
        <p {...fadeUp} data-aos-delay="100">
          Mengembangkan website menggunakan React JS versi terbaru dengan
          struktur codingan yang rapi dan keamanan aplikasi terjamin
        </p>
        <div className="more" {...fadeUp} data-aos-delay="100">
          <div className="icon">
            <img src="/icons/plus.svg" alt="plus" />
          </div>
          <span>Learn More</span>
        </div>
      </div>
    </Wrapper>
  );
}

function WrapperKontak() {
  return (
    <Wrapper>
      <h4>Wrapper Contact</h4>
    </Wrapper>
  );
}

function WrapperTech({ children, techName, className }) {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper className={`${className} border-x-0 py-5 `}>
      <div className="tech-wrapper w-full">
        <div className="tech">
          <div
            onClick={() => setOpen(!open)}
            className="tech-head flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center gap-x-10">
              <div className="icon">
                <img src="/icons/laptop.svg" alt="laptop" />
              </div>
              <h2>{techName}</h2>
            </div>
            <div className="icon !px-2 !py-2.5">
              {open ? (
                <img src="/icons/bottom2.svg" alt="bottom" />
              ) : (
                <img src="/icons/up2.svg" alt="top" />
              )}
            </div>
          </div>
          <div
            className={`tech-body  w-full sm:w-1/2 block ms-auto my-8 overflow-hidden transition-all duration-500 ease-out ${
              open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export { WrapperAbout, WrapperLayanan, WrapperKontak, WrapperTech };
