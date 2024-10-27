function Hero() {
  return (
    <div className=" dark flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:justify-between h-full px-[5%] md:px-[10%]">
      <div className="hero-profile ">
        <h4 className="text-color-accent">Muhammad Ega Dermawan</h4>
        <h1 className="leading-[50px] md:leading-[80px]">Web Programming</h1>
        <p className="text-[#FFFFFFA3] my-6">
          Menyediakan Layanan Jasa Pembuatan Aplikasi Berbasis Mobile Dengan
          Kualitas Terbaik
        </p>
        <a
          href="#portfolio"
          className="bg-color-accent py-3 px-5 rounded-md text-sm font-bold hover:opacity-85 transition-opacity ease-in-out duration-300"
        >
          Lihat Portfolio
        </a>
      </div>
      <div className="hero-img ">
        <img
          src="./images/banner.png"
          alt="Hero"
          className="w-4/5 md:w-full mx-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
