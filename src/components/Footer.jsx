
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Youtube, Linkedin, Mail} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground dark:bg-gray-950 text-background dark:text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">CodeGRow</span>
            </Link>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Μαθαίνω προγραμματισμό στα ελληνικά. Απλά και κατανοητά.
            </p>
            <br />
            <a href="mailto:codegrow00@gmail.com" target='_blank' className="text-sm text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors">
              codegrow00@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Γρήγοροι Σύνδεσμοι</h3>
            <ul className="space-y-2">
              <li><Link to="/playlists" className="hover:text-primary transition-colors">Playlists</Link></li>
              <li><Link to="/book" className="hover:text-primary transition-colors">Το Βιβλίο μου</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Σχετικά με Εμένα</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Ακολούθησέ με</h3>
            <div className="flex space-x-4 items-center">
              <a 
                href="https://www.youtube.com/@CodeGRrow" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="CodeGRow στο YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/panagiotis-leontis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Panagiotis Leontis στο LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://https://www.tiktok.com/@codegrow0"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="CodeGRow Tiktok"
              >
                <i className="fa-brands fa-tiktok fa-lg text-white-500"></i>
              </a>
              <a 
                href="https://www.instagram.com/_codegrow_/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="CodeGRow Instagram"
              >
                <i className="fa-brands fa-instagram fa-lg text-white-500"></i>
              </a>
              <a 
                href="https://discord.gg/SGqKSxCTUD"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="CodeGRow Discord Server"
              >
                <i className="fa-brands fa-discord w-5 text-black-500"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-600">
            &copy; {currentYear} CodeGRow. Με επιφύλαξη παντός δικαιώματος
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-700 mt-1">
            Κατασκευάστηκε με αγάπη στον προγραμματισμό
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
