// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Carding automated</h3>
            <p className="mb-4">
              Carding Genie is a software designed to make carding automated through Artificial Intelligence, created by coders for coders.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
              <li><Link to="/how-to-use" className="hover:text-indigo-400">How To Use</Link></li>
              <li><Link to="/plans" className="hover:text-indigo-400">Bundles</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <p className="mb-2">Email: support@photon.me</p>
            <p>Response within 6 business hours</p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; 2026 Carding Genie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
