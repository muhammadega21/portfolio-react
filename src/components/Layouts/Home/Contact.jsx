function Contact() {
  return (
    <div className="contact-wrapper flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-[5%] md:px-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div className="suggestion bg-white rounded-md py-6 md:py-12 px-8">
          <h4 className="text-[#391400]">Kotak Saran</h4>
          <form action="" className="mt-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Anda"
            />
            <select name="title" id="title">
              <option value="">Judul</option>
              <option value="">Judul</option>
              <option value="">Judul</option>
            </select>
            <textarea
              name="message"
              id="message"
              placeholder="Pesan"
            ></textarea>
            <div className="btn ml-auto">
              <button className="bg-color-accent px-12 py-2 rounded-md font-bold mt-4 hover:opacity-80 transition">
                KIRIM
              </button>
            </div>
          </form>
        </div>
        <div className="contact pt-6 pb-3 px-8 mt-6 md:mt-0">
          <h5>KOTAK</h5>
          <h2>Hubungi Saya</h2>
          <p className="text-[#FFFFFFA3] my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            qui tempore modi. Ipsam recusandae eius repellat a nam, laboriosam
            nobis!
          </p>
          <ul className="contact-link ">
            <li>
              <div className="contact-icon">
                <img src="./icons/compas.svg" alt="compas" />
              </div>
              Payakumbuh
            </li>
            <li>
              <div className="contact-icon">
                <img src="./icons/phone.svg" alt="phone" />
              </div>
              085763000486
            </li>
            <li>
              <div className="contact-icon">
                <img src="./icons/envelope.svg" alt="envelope" />
              </div>
              dermawane988@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
