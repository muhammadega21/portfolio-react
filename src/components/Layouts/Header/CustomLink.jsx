import { Link, useLocation } from "react-router-dom";

function CustomLink({
  to,
  children,
  className,
  activeClass = "active",
  ...props
}) {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  // Cek jika segment pertama bukan route yang diketahui (anggap sebagai username)
  const knownRoutes = ["about", "layanan", "portfolio", "blog", "contact"];
  const hasUsername = segments.length > 0 && !knownRoutes.includes(segments[0]);

  const path = hasUsername ? `/${segments[0]}${to}` : to;
  const isActive = location.pathname === path;
  const combinedClass = `${className} ${isActive ? activeClass : ""}`.trim();

  return (
    <Link to={path} {...props} className={combinedClass}>
      {children}
    </Link>
  );
}

export default CustomLink;
