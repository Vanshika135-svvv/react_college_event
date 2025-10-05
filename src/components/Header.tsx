import { CalendarCheck } from "lucide-react";

interface HeaderProps {
  isAuthenticated: boolean;
  currentUserId: string | null;
  onAuthClick: () => void;
  onNavigate: (section: string) => void;
}

const Header = ({ isAuthenticated, currentUserId, onAuthClick, onNavigate }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="text-2xl font-extrabold text-violet-700 tracking-tight flex items-center"
        >
          <CalendarCheck className="w-6 h-6 mr-2" />
          Nexus Events
        </a>

        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="nav-link text-gray-600"
          >
            Home
          </a>
          <a
            href="#events"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('events');
            }}
            className="nav-link text-gray-600"
          >
            Upcoming Events
          </a>
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('register-form');
            }}
            className="nav-link text-gray-600"
          >
            Register
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
            className="nav-link text-gray-600"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={onAuthClick}
            className={`font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 active:scale-[0.98] ${
              isAuthenticated
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-violet-700 hover:bg-violet-800 text-white'
            }`}
          >
            {isAuthenticated ? `Welcome, ${currentUserId}!` : 'Sign In'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
