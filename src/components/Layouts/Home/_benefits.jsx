const fadeUp = { "data-aos": "fade-up", "data-aos-duration": "500" };

function Benefits({ profileImage }) {
  return (
    <div className="benefit flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-[5%] md:px-[10%]">
      <div className="w-full md:w-[60%]" {...fadeUp}>
        <h5>Keuntungan</h5>
        <h2 className="leading-[50px] md:leading-[60px]">
          Website Anda Menjadi Lebih Menarik
        </h2>
        <p className="my-5">
          Memiliki programmer yang berpengalaman dan berpendidikan
        </p>
        <ul>
          <li>
            <div className="benefit-icon">
              <img src="/icons/check.svg" alt="check" />
            </div>
            Modern Desain Web App
          </li>
          <li>
            <div className="benefit-icon">
              <img src="/icons/check.svg" alt="check" />
            </div>
            Kodingan Terstruktur
          </li>
          <li>
            <div className="benefit-icon">
              <img src="/icons/check.svg" alt="check" />
            </div>
            Keamanan Terjamin
          </li>
        </ul>
      </div>
      <div className="img w-full md:w-[40%]" {...fadeUp} data-aos-delay="100">
        <img
          src={`${import.meta.env.VITE_STORAGE_URL}/${profileImage}`}
          className="w-[380px] h-[380px] object-cover object-center mx-auto rounded-full shadow-lg"
          alt="image-2"
        />
      </div>
    </div>
  );
}

export default Benefits;
