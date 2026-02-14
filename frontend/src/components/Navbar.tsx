import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Amenities", href: "#amenities" },
    { name: "Updates", href: "#updates" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-2xl font-bold tracking-tighter ${
            isScrolled ? "text-brand-dark" : "text-white"
          }`}
        >
          MEGAPLEX <span className="text-brand-accent">PRIME</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wide hover:text-brand-accent transition-colors ${
                isScrolled ? "text-brand-primary" : "text-white/90"
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="flex items-center gap-2 bg-brand-accent hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full transition shadow-lg hover:shadow-emerald-500/20">
            <Phone size={16} />
            <span className="font-semibold">+91 99999 00000</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-brand-accent"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu
              size={28}
              className={isScrolled ? "text-brand-dark" : "text-white"}
            />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-brand-dark hover:text-brand-accent"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
