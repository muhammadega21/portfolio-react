import { Link } from "react-router-dom";

function Service() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-10 sm:gap-20 bg-[#EF6D58] rounded-md p-10 sm:p-20 mt-20">
      <div
        className="w-full sm:w-1/2"
        data-aos="fade-right"
        data-aos-duration="600"
      >
        <h4 className="leading-[64px] !text-white">Coming soon...</h4>
        {/* <h2 className="leading-[64px] !text-white">
          Membantu Membangun Project Anda
        </h2>
        <p className="!text-[#FFFFFFA3]">
          Menyediakan berbagai layanan lengkap termasuk keterampilan teknis,
          desain, pemahaman bisnis.
        </p> */}
        {/* <Link
          to={"/contact"}
          className="text-[#391400] inline-block bg-white px-6 py-3 uppercase font-extrabold rounded-md mt-4"
        >
          Hubungi Kami
        </Link> */}
      </div>
      <div
        className="img w-full sm:w-1/2"
        data-aos="fade-left"
        data-aos-duration="600"
      >
        {/* <img src="/images/service.png" alt="service" /> */}
      </div>
    </div>
  );
}

export default Service;
