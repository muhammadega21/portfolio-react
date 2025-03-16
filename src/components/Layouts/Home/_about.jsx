import { Link } from "react-router-dom";
import { WrapperAbout } from "../../Fragments/_wrapper";

const fadeUp = { "data-aos": "fade-up", "data-aos-duration": "500" };
const fadeLeft = { "data-aos": "fade-left", "data-aos-duration": "500" };
const fadeRight = { "data-aos": "fade-right", "data-aos-duration": "500" };

function About() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full px-[5%] md:px-[10%] py-[2rem]">
      <div className=" w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-8">
        <div className="w-full md:w-[40%] " {...fadeRight}>
          <img src="./images/image-1.png" alt="image1" className=" " />
        </div>
        <div className="about-profile w-full md:w-[50%]" {...fadeLeft}>
          <h4>Muhammad Ega Dermawan</h4>
          <h2 className="leading-[50px] md:leading-[64px] mb-5">
            Professional
            <br />
            Web Programming
          </h2>
          <h4 className="my-3">Menyediakan layanan yang terbaik</h4>
          <p className="w-full md:w-5/6 text-[#391400A3] mb-5">
            Membangun website menggunakan berbagai jenis bahasa pemrograman,
            dengan struktur codingan yang rapi dan keamanan aplikasi terjamin
          </p>
          <Link
            to="/about"
            className="bg-white py-3 px-5 rounded-md text-sm font-bold shadow hover:opacity-85 transition-opacity ease-in-out duration-300"
          >
            Tentang Saya
          </Link>
        </div>
      </div>
      <div className="mt-8" {...fadeUp}>
        <WrapperAbout />
      </div>
    </div>
  );
}

export default About;
