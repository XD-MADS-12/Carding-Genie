// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';
import { Menu, X, User, Moon, Sun } from 'lucide-react';

function Header({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      console.log('Logged out successfully');
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className={`bg-white shadow-md ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Carding automated</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-indigo-600">HOME</Link>
              <Link to="/how-to-use" className="hover:text-indigo-600">HOW TO USE</Link>
              <Link to="/register" className="hover:text-indigo-600">REGISTER</Link>
              {user ? (
                <Link to="/dashboard" className="hover:text-indigo-600">DASHBOARD</Link>
              ) : (
                <Link to="/login" className="hover:text-indigo-600">LOGIN</Link>
              )}
              <Link to="/contact" className="hover:text-indigo-600">CONTACT</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>HOME</Link>
              <Link to="/how-to-use" className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>HOW TO USE</Link>
              <Link to="/register" className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>REGISTER</Link>
              {user ? (
                <Link to="/dashboard" className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>DASHBOARD</Link>
              ) : (
                <Link to="/login" className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>LOGIN</Link>
              )}
              <Link to="/contact" className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
              
              {user && (
                <button 
                  onClick={handleLogout}
                  className="text-left hover:text-indigo-600"
                >
                  LOGOUT
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
