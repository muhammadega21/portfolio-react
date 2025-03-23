import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "../components/Elements/_backToTop";
import "./about.css";

function Blog() {
  useEffect(() => {
    AOS.init();
  }, []);

  const articles = [
    {
      id: 1,
      category: "Stories",
      title: "Performance marketing agencies specialize",
      img: "images/blog/blog-4.png",
      date: "7 Dec, 2021",
    },
    {
      id: 2,
      category: "Design",
      title: "Digital marketing channels",
      img: "images/blog/blog-8.png",
      date: "23 Nov, 2021",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop />
      <section className="py-10 hero-head">
        <div className="bg-background-dark text-center py-16 px-4">
          <h1>Blog Artikel</h1>
          <p className="mt-3 w-full md:w-1/2 mx-auto">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </section>
      <section className="hero-body">
        <div className="blog-hero flex flex-col sm:flex-row gap-10">
          {articles.map((article) => (
            <div className="card min-w-0 sm:min-w-[570px]" key={article.id}>
              <div className="card-head w-full">
                <img className="w-full" src={article.img} alt={article.title} />
              </div>
              <div className="card-body mt-3">
                <span className="text-xl">{article.category}</span>
                <h3 className="mb-3">{article.title}</h3>
                <span className="text-sm text-[#391400A3]">{article.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-subhero"></div>
      </section>
    </div>
  );
}

export default Blog;
