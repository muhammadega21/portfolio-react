import { Link } from "react-router-dom";
function Blog() {
  return (
    <div className="px-[5%] md:px-[10%]">
      <h5>BLOG SAYA</h5>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h2 className="leading-[48px] md:leading-[68px]">
          Artikel Blog
          <br />
          Terbaru
        </h2>
        <Link to={"/blog"} className="self-start md:self-end">
          JELAJAHI SEMUA
        </Link>
      </div>
      <div className="articles">
        <div className="card card-hero">
          <div className="card-head">
            <img src="images/blog-1.png" alt="blog-1" />
          </div>
          <div className="card-body">
            <p>Laravel</p>
            <h4>Penginstalan Breeze Pada Laravel</h4>
            <span>5 Nov, 2021</span>
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img src="images/blog-2.png" alt="blog-2" />
          </div>
          <div className="card-body">
            <p>React JS</p>
            <h4>Membuat Kalkulator dengan React JS</h4>
            <span>5 Nov, 2021</span>
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img src="images/blog-3.png" alt="blog-3" />
          </div>
          <div className="card-body">
            <p>HTML & CSS</p>
            <h4>Pengenalan HTML & CSS Dasar</h4>
            <span>5 Nov, 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
