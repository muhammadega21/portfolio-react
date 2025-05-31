import { Link } from "react-router-dom";

const fadeUp = { "data-aos": "fade-up", "data-aos-duration": "500" };

function Blog({ blogs, username }) {
  return (
    <div className="px-[5%] md:px-[10%] ">
      <h5 {...fadeUp}>BLOG SAYA</h5>
      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-4 my-4"
        {...fadeUp}
      >
        <h2 className="leading-[48px] md:leading-[68px]">
          Artikel Blog
          <br />
          Terbaru
        </h2>
        <Link
          to={username ? `/${username}/blog` : "/blog"}
          className="self-start md:self-end px-6 py-4 bg-white font-extrabold rounded-md shadow-[0px_3px_9px_#39140014] hover:opacity-80 transition"
        >
          JELAJAHI SEMUA
        </Link>
      </div>
      <div
        className="articles mt-10 flex flex-col md:flex-row justify-between gap-8"
        {...fadeUp}
      >
        <Link
          to={
            username
              ? `/blog/${username}/${blogs[0]?.slug}`
              : `/blog/${blogs[0]?.slug}`
          }
          className="card card-hero w-full min-w-0 md:min-w-[770px] pe-0 md:pe-16"
        >
          <div className="card-head ">
            <img
              src={`${import.meta.env.VITE_STORAGE_URL}/${blogs[0]?.blog_img}`}
              alt={blogs[0]?.title}
              className="w-full object-center object-cover rounded-md"
            />
          </div>
          <div className="card-body">
            <p>{blogs[0]?.category}</p>
            <h4>{blogs[0]?.title}</h4>
            <span>
              {new Date(blogs[0]?.date).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </Link>
        <div>
          {blogs.length > 1 &&
            blogs.slice(1).map((blog, index) => (
              <Link
                to={
                  username
                    ? `/blog/${username}/${blog.slug}`
                    : `/blog/${blog.slug}`
                }
                className="card"
                key={index}
              >
                <div className="card-head">
                  <img
                    src={`${import.meta.env.VITE_STORAGE_URL}/${blog.blog_img}`}
                    alt={blog.title}
                    className="w-full object-center object-cover rounded-md"
                  />
                </div>
                <div className="card-body">
                  <p>{blog.category}</p>
                  <h4>{blog.title}</h4>
                  <span>
                    {new Date(blog.date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#F3D1BF]"></div>
      <form
        action=""
        className="flex my-10 gap-x-6 gap-y-3 justify-end items-center flex-col md:flex-row"
      >
        <input
          type="email"
          name="email"
          id="email"
          className="max-w-[370px] w-full py-2 px-4 outline-none border border-[#F3D1BF] rounded-md"
          placeholder="Email Anda"
        />
        <button className="px-8 py-2 w-full md:w-auto bg-white text-color-dark font-bold shadow-[0_3px_9px_#39140014] rounded-md hover:opacity-80 transition">
          KIRIM
        </button>
      </form>
    </div>
  );
}

export default Blog;
