import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

const Navbar = ({ isDark, toggleDark }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? isDark 
            ? 'bg-[rgb(33,33,36)]/95 backdrop-blur-sm shadow-lg py-4' 
            : 'bg-white/95 backdrop-blur-sm shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className={`text-2xl font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : (isScrolled ? 'text-gray-900' : 'text-white')
            }`}
          >
            HR
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? isDark ? 'text-cyan-400' : (isScrolled ? 'text-blue-600' : 'text-white')
                    : isDark 
                    ? 'text-gray-300 hover:text-cyan-400' 
                    : (isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100')
                }`}
                style={!isDark && !isScrolled ? { textShadow: '0 2px 6px rgba(0,0,0,0.6)' } : undefined}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleDark}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-[rgb(55,55,58)] text-yellow-400 hover:bg-[rgb(65,65,68)]' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDark}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-[rgb(55,55,58)] text-yellow-400' 
                  : 'bg-gray-100 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isDark ? 'text-white' : 'text-gray-900'}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 py-4 rounded-lg shadow-lg ${
            isDark ? 'bg-[rgb(45,45,48)]' : 'bg-white'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? isDark 
                      ? 'text-cyan-400 bg-[rgb(55,55,58)]' 
                      : 'text-blue-600 bg-blue-50'
                    : isDark
                    ? 'text-gray-300 hover:bg-[rgb(55,55,58)]'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
