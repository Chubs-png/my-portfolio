import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'portfolio' },
  ];

  return (
    <nav className={`fixed inset-x-0 top-6 z-50 flex justify-center transition-all duration-500`}>
      <div className={`flex items-center justify-between px-2 py-2 rounded-full transition-all duration-500 border relative ${scrolled || isOpen ? 'glass-pill bg-black/60 shadow-lg w-[90%] max-w-2xl' : 'border-transparent bg-transparent w-[90%] max-w-2xl'}`}>
        
        {/* Logo/Name */}
        <div className="px-4 font-bold text-sm text-foreground">
          J. Osorio
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-medium px-4 py-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-white/10 transition-all duration-300"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden px-4 text-foreground/70 hover:text-foreground"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#0f0f11]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden md:hidden animate-fade-in p-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left text-sm font-medium px-4 py-3 rounded-xl text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
