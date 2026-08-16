import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const isMainPage = location.pathname === '/';

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  /* ================================
     HANDLE SCROLL
  ================================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isMainPage) return;

      const scrollPosition = window.scrollY + 150;

      for (const item of navItems) {
        const element = document.getElementById(item.id);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMainPage]);

  /* ================================
     NAVIGATION CLICK
  ================================= */
  const handleNavClick = (id: string) => {
    setIsOpen(false);

    if (!isMainPage) {
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  /* ================================
     LOGO CLICK
  ================================= */
  const handleLogoClick = () => {
    setIsOpen(false);

    if (isMainPage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* =================================
              LOGO
          ================================== */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-2 text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            <div className="p-2 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-lg">
              <Cpu className="w-5 h-5 text-white" />
            </div>

            <span>
              Yosef Agimasie
              <span className="text-gradient font-extrabold">
                .
              </span>
            </span>
          </Link>

          {/* =================================
              DESKTOP NAVIGATION
          ================================== */}
          <div className="hidden lg:flex items-center space-x-1">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all hover:text-white ${
                  activeSection === item.id
                    ? 'text-brand-blue font-semibold'
                    : 'text-gray-300'
                }`}
              >
                {item.label}

                {/* Active indicator */}
                {activeSection === item.id && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded" />
                )}
              </button>
            ))}

          </div>

          {/* =================================
              MOBILE MENU BUTTON
          ================================== */}
          <div className="lg:hidden flex items-center">

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
              aria-label={
                isOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>

        </div>
      </div>

      {/* =================================
          MOBILE MENU
      ================================== */}
      {isOpen && (
        <div className="lg:hidden glass-nav absolute top-16 left-0 right-0 border-b border-gray-800 shadow-2xl animate-fade-in">

          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 text-brand-blue border-l-4 border-brand-blue'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;