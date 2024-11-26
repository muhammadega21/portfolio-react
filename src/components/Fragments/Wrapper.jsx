import { PropTypes } from "prop-types";
import "./index.css";
function Wrapper({ children }) {
  return (
    <div className="flex flex-col md:flex-row items-center border border-[#f3d1bf] rounded-[6px]">
      {children}
    </div>
  );
}

function WrapperAbout() {
  return (
    <Wrapper>
      <div className="list-wrapper about p-[2rem_1rem] md:p-[2rem_3rem]">
        <div className="icon">
          <img src="./icons/callendar-check.svg" alt="callendar-check" />
        </div>
        <div>
          <h3>2 Tahun</h3>
          <p>Pengalaman Kerja</p>
        </div>
      </div>
      <div className="list-wrapper about p-[2rem_1rem] md:p-[2rem_3rem]">
        <div className="icon">
          <img src="./icons/bag.svg" alt="" />
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
        <div className="icon-wrapper">
          <div className="icon">
            <img src="./icons/laptop.svg" alt="laptop" />
          </div>
          <h4>Laravel</h4>
        </div>
        <p>
          Mengembangkan website menggunakan Laravel versi terbaru dengan
          struktur codingan yang rapi dan keamanan aplikasi terjamin
        </p>
        <div className="more">
          <div className="icon">
            <img src="./icons/plus.svg" alt="plus" />
          </div>
          <span>Learn More</span>
        </div>
      </div>
      <div className="list-wrapper layanan p-[2rem_1.5rem] md:p-[2rem_3rem]">
        <div className="icon-wrapper">
          <div className="icon">
            <img src="./icons/bag.svg" alt="bag" />
          </div>
          <h4>React JS</h4>
        </div>
        <p>
          Mengembangkan website menggunakan React JS versi terbaru dengan
          struktur codingan yang rapi dan keamanan aplikasi terjamin
        </p>
        <div className="more">
          <div className="icon">
            <img src="./icons/plus.svg" alt="plus" />
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

Wrapper.propTypes = {
  children: PropTypes.node,
};

export { WrapperAbout, WrapperLayanan, WrapperKontak };
