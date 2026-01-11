// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Carding automated</h3>
            <p className="text-sm text-gray-400">
              Carding Genie is a software designed to make carding automated through Artificial Intelligence, created by caders for caders.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/how-to-use" className="text-gray-400 hover:text-white">How to Use</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-white">Plans</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-sm text-gray-400">Email: genie-support@proton.me</p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Carding Genie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
