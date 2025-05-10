// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ada.</p>
      <Link to="/" className="home-link">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
