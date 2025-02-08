import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMobileNavLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm transition ease-in-out duration-500">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 transition ease-in-out duration-500">
        <div className="flex items-center justify-between h-16 transition ease-in-out duration-500">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent transition ease-in-out duration-500">
            Nenavath Suresh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 transition ease-in-out duration-500">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300 ease-in-out scale-up-on-hover"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 transition ease-in-out duration-500">
              <a href="https://github.com/sureshnenavath" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 scale-up-on-hover transition ease-in-out duration-500">
                <Github className="w-5 h-5 animate-pulse" />
              </a>
              <a href="https://www.linkedin.com/in/nenavath-suresh/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 scale-up-on-hover transition ease-in-out duration-500">
                <Linkedin className="w-5 h-5 animate-pulse" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden transition ease-in-out duration-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden transition ease-in-out duration-500">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 transition ease-in-out duration-500">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition ease-in-out duration-300"
                  onClick={handleMobileNavLinkClick}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2 transition ease-in-out duration-500">
                <a href="https://github.com/sureshnenavath" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 transition ease-in-out duration-500">
                  <Github className="w-5 h-5 animate-pulse" />
                </a>
                <a href="https://www.linkedin.com/in/nenavath-suresh/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 transition ease-in-out duration-500">
                  <Linkedin className="w-5 h-5 animate-pulse" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
