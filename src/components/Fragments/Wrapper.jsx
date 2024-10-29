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
      <div className="list-wrapper ">
        <div className="icon">
          <img src="./icons/callendar-check.svg" alt="callendar-check" />
        </div>
        <div>
          <h3>2 Tahun</h3>
          <p>Pengalaman Kerja</p>
        </div>
      </div>
      <div className="list-wrapper">
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
      <h4>Wrapper Layanan</h4>
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
