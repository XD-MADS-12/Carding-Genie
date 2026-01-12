// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import supabase from '../../services/supabaseClient';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Check if user is authenticated
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'How To Use', path: '/how-to-use' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://placehold.co/40x40/6B46C1/FFFFFF?text=CG" 
                alt="Carding Genie Logo" 
                className="h-10 w-10 rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-purple-600 dark:text-purple-400">Carding automated</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Show Login/Register only if not logged in */}
            {!user && (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium"
                >
                  Register
                </Link>
              </>
            )}
            
            {/* Show Logout if logged in */}
            {user && (
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 px-3 py-2 text-sm font-medium"
              >
                Logout
              </button>
            )}
            
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Show Login/Register only if not logged in */}
            {!user && (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
            
            {/* Show Logout if logged in */}
            {user && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-red-600 hover:text-red-700"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
