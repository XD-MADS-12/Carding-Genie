// src/components/layout/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Wallet, Settings, LogOut } from 'lucide-react';
import supabase from '../../services/supabaseClient';

const Navigation = ({ user }) => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              <User size={20} className="mr-2" />
              Account
            </Link>
            
            <Link to="/balance" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              <Wallet size={20} className="mr-2" />
              Balance
            </Link>
            
            <Link to="/settings" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              <Settings size={20} className="mr-2" />
              Settings
            </Link>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center text-red-600 hover:text-red-700"
          >
            <LogOut size={20} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
