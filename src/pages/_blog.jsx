import { useEffect } from "react";
import "aos/dist/aos.css";
import BackToTop from "../components/Elements/_backToTop";
import "./about.css";
import { useState } from "react";
import Service from "./../components/Fragments/_service";
import Footer from "../components/Layouts/_footer";
import { tabTitle } from "../utils/generalFunctions";
import { useLocation } from "react-router-dom";
import CustomLink from "../components/Layouts/Header/CustomLink";

function Blog() {
  tabTitle("Portfolio | Blog");

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const articles = [
    {
      id: 1,
      category: "Stories",
      title: "Performance marketing agencies specialize",
      slug: "performance-marketing-agencies-specialize",
      img: "images/blog/blog-4.png",
      date: "7 Dec, 2021",
    },
    {
      id: 2,
      category: "Design",
      title: "Digital marketing channels",
      slug: "digital-marketing-channels",
      img: "images/blog/blog-8.png",
      date: "23 Nov, 2021",
    },
    {
      id: 3,
      category: "Stories",
      title: "Agency is a business you hire to outsource",
      slug: "agency-is-a-business-you-hire-to-outsource",
      img: "images/blog/blog-1.png",
      date: "5 Nov, 2021",
    },
    {
      id: 4,
      category: "Design",
      title: "Outsource your digital marketing efforts",
      slug: "outsource-your-digital-marketing-efforts",
      img: "images/blog/blog-3.png",
      date: "29 Oct, 2021",
    },
    {
      id: 5,
      category: "Marketing",
      title: "Your business with a variety of digital",
      slug: "your-business-with-a-variety-of-digital",
      img: "images/blog/blog-5.png",
      date: "21 Oct, 2021",
    },
    {
      id: 6,
      category: "Design",
      title: "Analytics to track and report on results",
      slug: "analytics-to-track-and-report-on-results",
      img: "images/blog/blog-6.png",
      date: "17 Nov, 2021",
    },
    {
      id: 7,
      category: "Branding",
      title: "The most well known performance",
      slug: "the-most-well-known-performance",
      img: "images/blog/blog-7.png",
      date: "12 Oct, 2021",
    },
    {
      id: 8,
      category: "Stories",
      title: "Marketing channels native advertising",
      slug: "marketing-channels-native-advertising",
      img: "images/blog/blog-1.png",
      date: "9 Oct, 2021",
    },
    {
      id: 9,
      category: "Design",
      title: "Analytics to track and report on results",
      slug: "analytics-to-track-and-report-on-results",
      img: "images/blog/blog-6.png",
      date: "17 Nov, 2021",
    },
    {
      id: 10,
      category: "Branding",
      title: "The most well known performance",
      slug: "the-most-well-known-performance",
      img: "images/blog/blog-7.png",
      date: "12 Oct, 2021",
    },
    {
      id: 11,
      category: "Stories",
      title: "Marketing channels native advertising",
      slug: "marketing-channels-native-advertising",
      img: "images/blog/blog-1.png",
      date: "9 Oct, 2021",
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const [loadArticle, setLoadArticle] = useState(
    articles.slice(0, -2).slice(0, 6)
  );

  const handleLoadMore = () => {
    if (isExpanded) {
      setLoadArticle(articles.slice(0, -2).slice(0, 6));
    } else {
      setLoadArticle(articles.slice(0, -2));
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop top={""} />
      <section className="pt-10 hero-head bg-background-dark">
        <div
          className=" text-center py-16 px-4"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h1>Blog Artikel</h1>
          <p className="mt-3 w-full md:w-1/2 mx-auto">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </section>
      <section className="hero-body">
        <div className="blog-hero flex flex-col sm:flex-row justify-center flex-wrap gap-10 border-b-0 sm:border-b border-[#F3D1BF] pb-0 sm:pb-10">
          {articles.slice(-2).map((article) => (
            <CustomLink
              to={`/blog/${article.slug}`}
              className="card min-w-0 sm:min-w-[520px] max-w-[520px]"
              key={article.id}
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="card-head w-full">
                <img
                  className="w-full"
                  src={`/${article.img}`}
                  alt={article.title}
                />
              </div>
              <div className="card-body mt-3">
                <span className="text-xl">{article.category}</span>
                <h3 className="mb-3">{article.title}</h3>
                <span className="text-sm text-[#391400A3]">{article.date}</span>
              </div>
            </CustomLink>
          ))}
        </div>

        <div className="blog-subhero mt-10 flex justify-center gap-x-5 gap-y-10 flex-wrap">
          {loadArticle.map((article) => (
            <CustomLink
              to={`/blog/${article.slug}`}
              className="card min-w-0 sm:min-w-[340px] max-w-[340px]"
              key={article.id}
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="card-head w-full">
                <img
                  className="w-full"
                  src={`/${article.img}`}
                  alt={article.title}
                />
              </div>
              <div className="card-body mt-3">
                <span className="text-xl">{article.category}</span>
                <h4 className="mb-3">{article.title}</h4>
                <span className="text-sm text-[#391400A3]">{article.date}</span>
              </div>
            </CustomLink>
          ))}
        </div>
        <div
          className="w-full flex justify-center mt-10"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <button
            onClick={handleLoadMore}
            className="bg-white text-[#391400] font-bold px-6 py-2 rounded-md shadow-md"
          >
            {isExpanded ? "Load Less" : "Load More"}
          </button>
        </div>
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
