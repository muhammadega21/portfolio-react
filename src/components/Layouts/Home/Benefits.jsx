function Benefits() {
  return (
    <div className="benefit flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-[5%] md:px-[10%]">
      <div className="w-full md:w-4/5">
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
              <img src="./icons/check.svg" alt="check" />
            </div>
            Modern Desain Web App
          </li>
          <li>
            <div className="benefit-icon">
              <img src="./icons/check.svg" alt="check" />
            </div>
            Kodingan Terstruktur
          </li>
          <li>
            <div className="benefit-icon">
              <img src="./icons/check.svg" alt="check" />
            </div>
            Keamanan Terjamin
          </li>
        </ul>
      </div>
      <div className="img ">
        <img src="./images/image-2.png" alt="image-2" />
      </div>
    </div>
  );
}

export default Benefits;
