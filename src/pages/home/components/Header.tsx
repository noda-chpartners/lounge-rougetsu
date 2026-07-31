import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "CONCEPT", href: "#concept" },
    { label: "MENU", href: "#menu" },
    { label: "ACCESS", href: "#access" },
    { label: "RECRUIT", href: "#recruit" },
    { label: "CONTACT", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-rougetu-dark/95 backdrop-blur-md border-b border-rougetu-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-lp flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => scrollTo("#top")}
          className="flex items-center gap-2 group"
        >
          <span className="text-lg md:text-xl font-serif font-medium tracking-widest text-white group-hover:text-rougetu-gold transition-colors">
            狼月
          </span>
          <span className="hidden sm:inline text-xs font-display tracking-[0.3em] text-rougetu-gray uppercase">
            ROUGETSU
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-xs tracking-[0.2em] text-rougetu-lightgray hover:text-rougetu-gold transition-colors duration-300 whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-14 h-14 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-rougetu-dark/98 backdrop-blur-md border-t border-rougetu-border">
          <div className="container-lp py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm tracking-[0.2em] text-rougetu-lightgray hover:text-rougetu-gold transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}