import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-purple-400">
          CapFolio
        </Link>

        {/* LINKS */}
        <div className="flex gap-6 text-sm font-medium">
          {[
            ["About", "/about"],
            ["Forms", "/forms"],
            ["Contact", "/contact"],
            ["Ask AI", "/chat"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
