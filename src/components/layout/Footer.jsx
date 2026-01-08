import React from 'react';
import { CreditCard } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-black/80 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold">Carding automated</h3>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Carding Genie is a software designed to make carding automated through Artificial Intelligence, created by coders for coders.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li><button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white">Home</button></li>
                <li><button onClick={() => setCurrentPage('how-to-use')} className="text-gray-400 hover:text-white">How to Use</button></li>
                <li><button onClick={() => setCurrentPage('register')} className="text-gray-400 hover:text-white">Register</button></li>
                <li><button onClick={() => setCurrentPage('login')} className="text-gray-400 hover:text-white">Login</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Get In Touch</h4>
              <p className="text-sm text-gray-400">Email: support@photon.me</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
