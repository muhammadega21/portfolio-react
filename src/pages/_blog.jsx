import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import BackToTop from "../components/Elements/_backToTop";
import "./about.css";
import Service from "../components/Fragments/_service";
import Footer from "../components/Layouts/_footer";
import { tabTitle } from "../utils/generalFunctions";
import { useLocation, useParams } from "react-router-dom";
import CustomLink from "../components/Layouts/Header/_customLink";
import { getBlogs } from "../services/publicService";
import CircleLoading from "../components/Elements/_circleLoading";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const username = useParams().username;
  const initialDisplayCount = 6;

  tabTitle("Portfolio | Blog");

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await getBlogs(username);
        setBlogs(response.data);
        setDisplayedBlogs(response.data.slice(0, initialDisplayCount));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, [username]);

  const handleLoadMore = () => {
    if (isExpanded) {
      setDisplayedBlogs(blogs.slice(0, initialDisplayCount));
    } else {
      setDisplayedBlogs(blogs);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop top={""} />
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <CircleLoading />
        </div>
      ) : (
        <>
          <section className="pt-10 hero-head bg-background-dark">
            <div
              className="text-center py-16 px-4"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1>Artikel Saya</h1>
              <p className="mt-3 w-full md:w-1/2 mx-auto">
                Agency provides a full service range including technical skills,
                design, business understanding.
              </p>
            </div>
          </section>
          <section className="hero-body">
            <div className="blog-subhero mt-10 flex justify-center gap-x-14  gap-y-10 flex-wrap">
              {displayedBlogs.length > 0 ? (
                displayedBlogs.map((blog) => (
                  <CustomLink
                    to={`/blog/${blog.slug}`}
                    className="card min-w-0 sm:min-w-[340px] max-w-[340px]"
                    key={blog.slug}
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <div className="card-head w-full rounded-md overflow-hidden">
                      <img
                        className="w-full h-[225px] object-center object-contain"
                        src={`${import.meta.env.VITE_STORAGE_URL}/${
                          blog.blog_img
                        }`}
                        alt={blog.title}
                      />
                    </div>
                    <div className="card-body mt-3">
                      <span className="text-xl">{blog.category}</span>
                      <h4 className="mb-3">{blog.title}</h4>
                      <span className="text-sm text-[#391400A3]">
                        {new Date(blog.date).toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </CustomLink>
                ))
              ) : (
                <p className="text-center">Artikel kosong</p>
              )}
            </div>
            {blogs.length > initialDisplayCount && (
              <div
                className="w-full flex justify-center mt-10"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <button
                  onClick={handleLoadMore}
                  className="bg-white hover:bg-gray-100 text-primary font-bold px-6 py-3 rounded-md shadow-md transition-colors duration-300"
                >
                  {isExpanded
                    ? "Tampilkan Lebih Sedikit"
                    : "Tampilkan Lebih Banyak"}
                </button>
              </div>
            )}

            <div
              className="flex flex-col sm:flex-row justify-between items-center mt-10 py-10 border-y border-[#F3D1BF] gap-5"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h3>Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email"
                  className="px-6 py-2 border border-[#F3D1BF] rounded-md min-w-0 w-full sm:min-w-[370px] max-w-[370px]"
                />
                <button className="bg-white text-[#391400] font-bold px-6 py-2 rounded-md shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
            <Service />
          </section>
        </>
      )}
      <div className="py-10">
        <Footer
          copyColor={"#391400A3"}
          page={"Layanan"}
          borderColor={"#F3D1BF"}
        />
      </div>
    </div>
  );
}

export default Blog;
