import React from 'react';
import { Home, CreditCard } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage, setIsMenuOpen, isMenuOpen }) => {
  const navItems = [
    { name: 'HOME', path: 'home' },
    { name: 'HOW TO USE', path: 'how-to-use' },
    { name: 'REGISTER', path: 'register' },
    { name: 'LOGIN', path: 'login' },
    { name: 'CONTACT', path: 'contact' }
  ];

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold">Carding automated</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => setCurrentPage(item.path)}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentPage === item.path 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-800 text-gray-300'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 p-4">
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => {
                setCurrentPage(item.path);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-md mb-2 transition-colors ${
                currentPage === item.path 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-800 text-gray-300'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
