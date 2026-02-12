import { useState } from "react";

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/writing", label: "WRITING" },
    { href: "/photos", label: "PHOTOS" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center h-14 gap-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] transition-opacity ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-grey-400 hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile nav header */}
        <div className="flex md:hidden items-center justify-between h-14">
          <span className="text-xs tracking-[0.15em] text-foreground">MENU</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {/* Hamburger / Close icon */}
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-px w-full bg-foreground transition-all duration-200 ${
                  isOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block h-px w-full bg-foreground transition-all duration-200 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px w-full bg-foreground transition-all duration-200 ${
                  isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden border-t border-foreground/10 bg-background/95 backdrop-blur-sm overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm tracking-[0.1em] transition-opacity ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-grey-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
