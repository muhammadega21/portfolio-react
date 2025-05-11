import { useEffect, useState } from "react";
import BackToTop from "../components/Elements/_backToTop";
import Footer from "../components/Layouts/_footer";
import {
  Hero,
  About,
  Layanan,
  Benefits,
  Blog,
  Contact,
} from "../components/Layouts/Home";
import Portfolio from "../components/Layouts/Home/Portfolio";
import "aos/dist/aos.css";
import { tabTitle } from "../utils/generalFunctions";
import { useLocation, useParams } from "react-router-dom";
import { userProfile } from "../services/publicService";
import CircleLoading from "../components/Elements/CircleLoading";

function Home() {
  tabTitle("Portfolio | Home");

  const username = useParams().username;

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        setIsLoading(true);
        const response = await userProfile(username);
        setUser(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchUserProfile();
  }, [username]);

  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop top="" />
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <CircleLoading />
        </div>
      ) : (
        <>
          <section className="home pt-4 md:pt-0 dark flex items-center ">
            <Hero username={user?.name} profession={user?.profession} />
          </section>
          <section className="home light py-10 ">
            <Layanan />
          </section>
          <section className="home dark py-10 ">
            <Portfolio />
          </section>
          <section className="home light py-10 ">
            <About />
          </section>
          <section className="home dark py-10 grid place-items-center ">
            <Benefits />
          </section>
          <section className="home light py-10 grid place-items-center ">
            <Blog />
          </section>
          <section className="home dark py-10 grid place-items-center ">
            <Contact />
          </section>
          <div className="dark py-10 grid place-items-center">
            <Footer page={"Personal"} />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
