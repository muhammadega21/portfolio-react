import { WrapperLayanan } from "../../Fragments/_wrapper";
import { Link } from "react-router-dom";

const fadeUp = { "data-aos": "fade-up", "data-aos-duration": "500" };

function Layanan() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full px-[5%] md:px-[10%] py-[2rem]">
      <h5 {...fadeUp}>LAYANAN</h5>
      <h2 className="text-center leading-[50px] md:leading-[64px]" {...fadeUp}>
        Saya Akan
        <br />
        Membantu Anda Dengan
      </h2>
      <div className="my-14" {...fadeUp} data-aos-delay="100">
        <WrapperLayanan />
      </div>
      <div {...fadeUp}>
        <p className="text-[#391400A3]">
          Want more service?{" "}
          <Link
            to={"/layanan"}
            className="text-color-primary hover:underline hover:text-[#391400] transition-colors ease-in-out duration-200"
          >
            Explore Now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Layanan;
