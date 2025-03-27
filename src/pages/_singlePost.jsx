import { Link, useLocation } from "react-router-dom";
import BackToTop from "../components/Elements/_backToTop";
import DOMPurify from "dompurify";
import Service from "../components/Fragments/_service";
import Footer from "./../components/Layouts/_footer";
import { useEffect } from "react";

function SinglePost() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const article = [
    {
      id: 1,
      creator: "Gabriel Pires",
      category: "Stories",
      title: "Performance marketing agencies specialize",
      slug: "performance-marketing-agencies-specialize",
      img: "/images/blog/blog-4.png",
      date: "7 Dec, 2021",
      quote:
        "Provide your business with a variety of digital solutions to promote your product or service online and help you.",
      content: `
      <p>
        Agency provides a full service range including technical skills, design, business understanding.
        </p>
      <p className="opacity-50">
       Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
        </p>
        <h4>Promote your product</h4>
        <p className="opacity-50">
       Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
        </p>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Digital marketing</li>
            <li>Efforts instead</li>
            <li>Handling in-house</li>
        </ul>
        <p className="opacity-50">
      A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
        </p>
        <h4>Service online and help</h4>
        <p className="opacity-50">
      Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
        </p>
        <ol style="list-style-type: decimal; margin-left: 15px;">
            <li>Marketing efforts</li>
            <li>Instead of handling</li>
            <li>In-house</li>
        </ol>
        <p className="opacity-50">
      Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
        </p>
        <p className="opacity-50">
        Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
        </p>
      `,
    },
  ];

  const relatedArticle = [
    {
      id: 1,
      category: "Stories",
      title: "Performance marketing agencies specialize",
      slug: "performance-marketing-agencies-specialize",
      img: "/images/blog/blog-4.png",
      date: "7 Dec, 2021",
    },
    {
      id: 2,
      category: "Design",
      title: "Digital marketing channels",
      slug: "digital-marketing-channels",
      img: "/images/blog/blog-8.png",
      date: "23 Nov, 2021",
    },
    {
      id: 3,
      category: "Stories",
      title: "Agency is a business you hire to outsource",
      slug: "agency-is-a-business-you-hire-to-outsource",
      img: "/images/blog/blog-1.png",
      date: "5 Nov, 2021",
    },
  ];

  const sanitizedContent = DOMPurify.sanitize(article[0].content);
  return (
    <div className="w-full overflow-x-hidden">
      <BackToTop top={""} />
      <section className="pt-16 hero-head background-light ">
        <div
          className="mx-auto w-[90%] sm:w-1/2 pt-10 "
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Link to="/blog" className="flex items-center gap-x-3">
            <div className="img">
              <img src="/icons/left.svg" alt="left" />
            </div>
            <span className="text-xs font-bold">BACK TO BLOG</span>
          </Link>
          <h2 className="mt-5 mb-10">{article[0].title}</h2>
          <div className=" flex justify-between items-center">
            <span>
              in {article[0].category} by {article[0].creator}
            </span>
            <span>Date {article[0].date}</span>
          </div>
        </div>
      </section>
      <section
        className="hero-body grid justify-center px-[5%] sm:px-[15%] "
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="">
          <img className="w-full" src={article[0].img} alt={article[0].title} />
        </div>
        <div className="px-[15%] py-10 border-b border-[#F3D1BF]">
          <div
            className="border-b border-[#F3D1BF] pb-10"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="img w-20 rounded-full overflow-hidden">
                <img src="/images/ega.jpg" alt="ega" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl text-[#391400]">
                  {article[0].creator}
                </span>
                <span className="text-[#391400A3]">Editor</span>
              </div>
            </div>
            <div className="social-media flex gap-3">
              <div className="bg-[#EF6D58] w-[48px] h-[48px] grid place-items-center rounded-full">
                <Link to={"https://github.com/muhammadega21"} target="blank">
                  <img src="/icons/facebook.svg" alt="facebook" />
                </Link>
              </div>
              <div className="bg-[#EF6D58] w-[48px] h-[48px] grid place-items-center rounded-full">
                <Link to={"https://github.com/muhammadega21"} target="blank">
                  <img src="/icons/twitter.svg" alt="twitter" />
                </Link>
              </div>
              <div className="bg-[#EF6D58] w-[48px] h-[48px] grid place-items-center rounded-full">
                <Link to={"https://github.com/muhammadega21"} target="blank">
                  <img src="/icons/instagram.svg" alt="instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[5%] sm:px-[15%] mb-10">
        <h4 data-aos="fade-up" data-aos-duration="600">
          Related Articles
        </h4>
        <div className="blog-subhero mt-10 flex justify-center gap-x-5 gap-y-10 flex-wrap">
          {relatedArticle.map((article) => (
            <Link
              to={`/blog/${article.slug}`}
              className="card min-w-0 sm:min-w-[300px] max-w-[300px]"
              key={article.id}
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="card-head w-full">
                <img className="w-full" src={article.img} alt={article.title} />
              </div>
              <div className="card-body mt-3">
                <span className="text-xl">{article.category}</span>
                <h4 className="mb-3">{article.title}</h4>
                <span className="text-sm text-[#391400A3]">{article.date}</span>
              </div>
            </Link>
          ))}
        </div>
        <Service />
      </section>
      <div className="py-10">
        <Footer copyColor={"#391400A3"} page={"Blog"} borderColor={"#F3D1BF"} />
      </div>
    </div>
  );
}

export default SinglePost;
