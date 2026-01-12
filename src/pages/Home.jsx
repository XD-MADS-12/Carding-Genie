// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Shield, MessageSquare, Globe, Lock, Mail, Smartphone, CreditCard } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Your wish is my command</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Carding Genie</h2>
              <p className="text-lg mb-6">Carding Genie is a software designed to make carding automated through Artificial Intelligence.</p>
              <Link
                to="/download"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Download size={20} className="mr-2" />
                Download
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-black p-6 rounded-lg">
                <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl font-bold">CG</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Carding-Genie</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Functions Section */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Functions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">CC Manager</h3>
              <p className="text-gray-600 dark:text-gray-300">CC manager with balance verification bypass</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <MessageSquare size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">SMS/PHONE SPOOFING</h3>
              <p className="text-gray-600 dark:text-gray-300">SMS Bypass on OTP, Track & Check</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">SECURE LOCATION</h3>
              <p className="text-gray-600 dark:text-gray-300">VPN SOCKS & RDP connection</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Lock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">VERIFICATION BYPASS</h3>
              <p className="text-gray-600 dark:text-gray-300">Verification bypass supports Google, PayPal, Coinbase, Discord, Venmo, and more</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Integrated Mailbox</h3>
              <p className="text-gray-600 dark:text-gray-300">Integrated mailbox to register accounts with emails, configurations to activate Track & Trace</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <CreditCard size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Over 1200 Automated Carding Methods</h3>
              <p className="text-gray-600 dark:text-gray-300">Available in the following countries: United Kingdom, Germany, France, Italy, Spain, Canada, Australia & many more</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">WISHING FOR AN EARLY PAYOUT?</h2>
            <p className="text-xl mb-8">Unlock your potential with Carding Genie</p>
            <Link
              to="/plans"
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Choose Your Plan →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xl font-bold">CG</span>
                </div>
                <span className="text-xl font-bold">Carding automated</span>
              </div>
              <p className="text-gray-400">
                Carding Genie is a software designed to make carding automated through Artificial Intelligence, created by Carders for Carders.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/how-to-use" className="text-gray-400 hover:text-white">How To Use</Link></li>
                <li><Link to="/plans" className="text-gray-400 hover:text-white">Plans</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <p className="text-gray-400">Email: genie-support@proton.me</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">© 2026 Carding Genie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
