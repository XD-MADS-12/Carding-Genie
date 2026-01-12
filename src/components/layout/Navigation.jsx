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
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/account" className="flex items-center text-gray-300 hover:text-white">
              <User size={20} className="mr-2" />
              Account
            </Link>
            
            <Link to="/balance" className="flex items-center text-gray-300 hover:text-white">
              <Wallet size={20} className="mr-2" />
              Balance
            </Link>
            
            <Link to="/settings" className="flex items-center text-gray-300 hover:text-white">
              <Settings size={20} className="mr-2" />
              Settings
            </Link>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center text-red-400 hover:text-red-300"
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
