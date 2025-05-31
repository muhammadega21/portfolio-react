function Hero({ username, profession, profileImage }) {
  return (
    <div className=" dark flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:justify-between h-full px-[5%] md:px-[10%]">
      <div
        className="hero-profile max-w-[60%]"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <h4 className="text-color-accent">{username}</h4>
        <h2 className="leading-[50px] md:leading-[60px]">{profession}</h2>
        <p className="text-[#FFFFFFA3] mt-3 mb-6 w-full md:w-5/6">
          Menyediakan Layanan Jasa Pembuatan Website dengan Desain Responsif dan
          Fungsionalitas Tinggi.
        </p>
        <a
          href="#portfolio"
          className="bg-color-accent py-3 px-5 rounded-md text-sm font-bold hover:opacity-85 transition-opacity ease-in-out duration-300"
        >
          Lihat Portfolio
        </a>
      </div>
      <div
        className="hero-img max-w-[40%]"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <img
          src={`${import.meta.env.VITE_STORAGE_URL}/${profileImage}`}
          alt="Hero"
          className="w-[400px] h-[400px] object-cover object-center mx-auto rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
