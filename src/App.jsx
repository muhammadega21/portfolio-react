import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Header/_navbar";
import {
  Home,
  Layanan,
  Portfolio,
  Blog,
  Contact,
  About,
  NotFound,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="layanan" element={<Layanan />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
