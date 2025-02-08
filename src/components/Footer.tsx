import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer({className}: {className?: string}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 text-gray-300 ${className}`}>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Nenavath Suresh</h3>
            <p className="text-sm">
              AI & Machine Learning Engineer passionate about building intelligent solutions
              and creating innovative technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sureshnenavath"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300 ease-in-out"
              >
                <Github className="w-5 h-5 animate-pulse" />
              </a>
              <a
                href="https://www.linkedin.com/in/nenavath-suresh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300 ease-in-out"
              >
                <Linkedin className="w-5 h-5 animate-pulse" />
              </a>
              <a
                href="mailto:sureshnenavath09@gmail.com"
                className="hover:text-white transition-colors duration-300 ease-in-out"
              >
                <Mail className="w-5 h-5 animate-pulse" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Skills', path: '/skills' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block hover:text-white transition-colors duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 animate-pulse" />
                Hyderabad, India
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 animate-pulse" />
                +91 91773 46580
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 animate-pulse" />
                sureshnenavath09@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {currentYear} Nenavath Suresh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
