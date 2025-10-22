import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/blog", label: "BLOG" },
    { to: "/images", label: "IMAGES" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background border-b-2 border-foreground z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center h-16 space-x-8 md:space-x-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-bold tracking-wider transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-grey-400 hover:text-foreground"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
