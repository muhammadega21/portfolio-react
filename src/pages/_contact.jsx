import { useEffect } from "react";
import BackToTop from "../components/Elements/_backToTop";
import AOS from "aos";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop top={""} />
      <section className="hero-head w-screen">
        <div className="hero" data-aos="fade-up" data-aos-duration="600">
          <h1>Kontak</h1>
          <p className="mt-3 w-full md:w-1/2 mx-auto">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
