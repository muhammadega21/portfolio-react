function Service() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-10 sm:gap-20 bg-[#EF6D58] rounded-md p-10 sm:p-20 mt-20">
      <div
        className="w-full sm:w-1/2"
        data-aos="fade-right"
        data-aos-duration="600"
      >
        <h2 className="leading-[64px] !text-white">
          Membantu Membangun Project Anda
        </h2>
        <p className="!text-[#FFFFFFA3]">
          A digital agency is a business you hire to outsource your digital
          marketing efforts, instead of handling in-house.
        </p>
        <button className="text-[#391400] bg-white px-6 py-3 uppercase font-extrabold rounded-md mt-4">
          Hubungi Kami
        </button>
      </div>
      <div
        className="img w-full sm:w-1/2"
        data-aos="fade-left"
        data-aos-duration="600"
      >
        <img src="./images/service.png" alt="service" />
      </div>
    </div>
  );
}

export default Service;
