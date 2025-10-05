import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold text-violet-400 mb-4">Nexus Events</h4>
            <p className="text-sm text-gray-400">
              Your digital partner for campus event management.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="text-gray-400 hover:text-violet-400 transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('events');
                  }}
                  className="text-gray-400 hover:text-violet-400 transition-colors cursor-pointer"
                >
                  Browse Events
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('register-form');
                  }}
                  className="text-gray-400 hover:text-violet-400 transition-colors cursor-pointer"
                >
                  Submit Event
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@nexus.edu
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                123 University Drive
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/NexusEventsUniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-violet-400 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/Nexus_Events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-violet-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/NexusEvents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-violet-400 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 Nexus Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
