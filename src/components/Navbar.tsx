import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/blog", label: "BLOG" },
    { to: "/images", label: "IMAGES" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center h-14 gap-12 md:gap-16">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-xs tracking-[0.15em] transition-opacity ${
                  isActive
                    ? "text-foreground"
                    : "text-grey-400 hover:text-foreground"
                }`
              }
            >
              <span className="font-mono text-[10px] text-grey-300 mr-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
