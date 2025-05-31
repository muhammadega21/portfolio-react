import { Link, useLocation } from "react-router-dom";
import BackToTop from "../components/Elements/_backToTop";
import Service from "../components/Fragments/_service";
import Footer from "../components/Layouts/_footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircleLoading from "../components/Elements/_circleLoading";
import { getBlogs, showBlog } from "../services/publicService";
import NotFound from "./_notFound";
import parse from "html-react-parser";

function SinglePost() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { slug, username } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        const response = await showBlog(slug);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);
  console.log(blog);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await getBlogs(username);
        const filteredBlogs = response.data.filter(
          (blog) => blog.slug !== slug
        );
        setRelatedBlogs(filteredBlogs.slice(0, 6));
      } catch (error) {
        console.error("Error fetching related blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRelatedBlogs();
  }, [username, slug]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <CircleLoading />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="w-full h-screen">
        <NotFound />
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop top="" />
      {blog && (
        <>
          <section className="pt-16 hero-head background-light">
            <div
              className="mx-auto w-[90%] sm:w-1/2 pt-10"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Link
                to={username ? `/${username}/blog` : "/blog"}
                className="flex items-center gap-x-3"
              >
                <div className="img">
                  <img src="/icons/left.svg" alt="left" />
                </div>
                <span className="text-xs font-bold">BACK TO BLOG</span>
              </Link>
              <h2 className="my-3 text-[40px]">{blog.title}</h2>
              <div className="flex justify-between items-center">
                <span>
                  in <span className="underline">{blog.category}</span> by{" "}
                  {blog.creator?.name}
                </span>
                <span>
                  {new Date(blog.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </section>
          <section
            className="hero-body grid justify-center px-[5%] sm:px-[15%]"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="border-b border-[#F3D1BF] pb-10">
              <img
                className="h-full max-w-[500px] mx-auto w-full object-cover rounded-md"
                src={`${import.meta.env.VITE_STORAGE_URL}/${blog.blog_img}`}
                alt={blog.title}
              />
            </div>
            <div className="pt-5 pb-10 border-b border-[#F3D1BF]">
              <div className="blog-content border-b border-[#F3D1BF] pb-10 ">
                {parse(blog.content)}
              </div>
              <div className="pt-10 flex flex-col sm:flex-row items-center justify-around gap-5">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div className="img max-w-20 max-h-20 rounded-full overflow-hidden shadow-md">
                    <img
                      src={`${import.meta.env.VITE_STORAGE_URL}/${
                        blog.creator?.profile_image
                      }`}
                      alt={blog.creator?.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl text-[#391400]">
                      {blog.creator?.name}
                    </span>
                    <span className="text-[#391400A3]">Editor</span>
                  </div>
                </div>
                <div className="social-media flex gap-3 pointer-events-none">
                  {["facebook", "twitter", "instagram"].map((platform) => (
                    <div
                      key={platform}
                      className="bg-[#EF6D58] w-[48px] h-[48px] grid place-items-center rounded-full"
                    >
                      <Link to="#" target="blank">
                        <img src={`/icons/${platform}.svg`} alt={platform} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="px-[5%] sm:px-[15%] mb-10">
            <h4 data-aos="fade-up" data-aos-duration="600">
              Related Articles
            </h4>
            <div className="blog-subhero mt-10 flex justify-start gap-x-5 gap-y-10 flex-wrap">
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((relatedBlog) => (
                  <Link
                    to={
                      username
                        ? `/${username}/blog/${relatedBlog.slug}`
                        : `/blog/${relatedBlog.slug}`
                    }
                    className="card min-w-0 sm:min-w-[300px] max-w-[300px]"
                    key={relatedBlog.slug}
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <div className="card-head w-full">
                      <img
                        className="rounded-md min-w-[300px] max-w-[300px] h-[225px] object-cover"
                        src={`${import.meta.env.VITE_STORAGE_URL}/${
                          relatedBlog.blog_img
                        }`}
                        alt={relatedBlog.title}
                      />
                    </div>
                    <div className="card-body mt-3">
                      <span className="text-xl">{relatedBlog.category}</span>
                      <h4 className="mb-3">{relatedBlog.title}</h4>
                      <span className="text-sm text-[#391400A3]">
                        {new Date(relatedBlog.date).toLocaleDateString(
                          "id-ID",
                          {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <p data-aos="fade-up" data-aos-duration="600">
                  No related articles found.
                </p>
              )}
            </div>
            <Service />
          </section>
          <div className="py-10">
            <Footer copyColor="#391400A3" page="Blog" borderColor="#F3D1BF" />
          </div>
        </>
      )}
    </div>
  );
}

export default SinglePost;
