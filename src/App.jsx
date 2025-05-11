import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Header/_navbar";
import {
  Home,
  Layanan,
  Portfolio,
  Blog,
  Contact,
  About,
  SinglePost,
  NotFound,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Default routes without username */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
          <Route path="/contact" element={<Contact />} />

          {/* Routes with username - more specific paths */}
          <Route path="/:username">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="layanan" element={<Layanan />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<SinglePost />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
