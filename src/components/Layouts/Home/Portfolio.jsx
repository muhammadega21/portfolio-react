import { Link } from "react-router-dom";
function Portfolio() {
  return (
    <div className="py-[2rem]">
      <div>
        <div>
          <h4>PORTFOLIO</h4>
          <h2>Amazing Projects</h2>
        </div>
        <Link to={"/portfolio"}>Lebih Lanjut</Link>
      </div>
      <div>projects</div>
    </div>
  );
}

export default Portfolio;
