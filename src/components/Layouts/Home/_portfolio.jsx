import { Link } from "react-router-dom";
const fadeUp = { "data-aos": "fade-up" };
const fadeUpDuration = { "data-aos": "fade-up", "data-aos-duration": "500" };
const fadeLeft = { "data-aos": "fade-left", "data-aos-duration": "500" };
const fadeRight = { "data-aos": "fade-right", "data-aos-duration": "500" };
function Portfolio() {
  return (
    <div className="py-[2rem]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-[5%] md:px-[10%] gap-[1rem]">
        <div {...fadeRight}>
          <h5>PORTFOLIO</h5>
          <h2 className="leading-[48px] md:leading-[68px]">Amazing Projects</h2>
        </div>
        <Link
          to={"/portfolio"}
          className="border border-[#FFFFFF4B] px-5 py-2 rounded hover:bg-white hover:text-color-dark transition ease-in-out duration-300"
          {...fadeLeft}
        >
          LEBIH LANJUT
        </Link>
      </div>
      <div className="flex flex-col md:flex-row mt-16" {...fadeUpDuration}>
        <div className="project-list">
          <div
            className="img"
            {...fadeUp}
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <img src="./images/project-1.png" alt="project-1" />
            <div className="project-desc">
              <p>Laravel</p>
              <h3>E-Commerce</h3>
            </div>
          </div>
        </div>
        <div className="project-list">
          <div
            className="img"
            {...fadeUp}
            data-aos-duration="600"
            data-aos-delay="150"
          >
            <img src="./images/project-2.png" alt="project-1" />
            <div className="project-desc">
              <p>Python</p>
              <h3>AI Chat</h3>
            </div>
          </div>
        </div>
        <div className="project-list">
          <div
            className="img"
            {...fadeUp}
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <img src="./images/project-3.png" alt="project-1" />
            <div className="project-desc">
              <p>React JS</p>
              <h3>Todo List App</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
