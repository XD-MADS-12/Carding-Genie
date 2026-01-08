// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Shield, MessageSquare, Globe } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your wish is my command</h1>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Carding Genie</h2>
            <p className="text-lg mb-8">
              Carding Genie is a software designed to make carding automated through Artificial Intelligence.
            </p>
            <Link 
              to="/login" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center"
            >
              Download
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://placehold.co/400x300/333/FFF?text=Magic+Lamp" 
              alt="Carding Genie" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Functions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CC Manager */}
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">CC Manager</h3>
              <p className="text-sm">CC manager with balance verification bypass</p>
            </div>

            {/* SMS/Phone Spoofing */}
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">SMS/PHONE SPOOFING</h3>
              <p className="text-sm">SMS Bypass on OTP, Track & Check</p>
            </div>

            {/* Secure Location */}
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">SECURE LOCATION</h3>
              <p className="text-sm">VPN SOCKS & RDP connection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Functions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Verification Bypass */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">VERIFICATION BYPASS</h3>
              <p className="text-sm">Verification bypass supports Google, PayPal, Coinbase, Discord, Venmo, and more</p>
            </div>

            {/* Integrated Mailbox */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrated Mailbox</h3>
              <p className="text-sm">Integrated mailbox to register accounts with fake emails, configurations to activate Track & Trace</p>
            </div>

            {/* Over 1200 Automated Methods */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Over 1200 Automated Carding Methods</h3>
              <p className="text-sm">Available in the following countries: United Kingdom, Germany, France, Italy, Spain, Canada, Australia & many more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">WISHING FOR AN EARLY PAYOUT?</h2>
          <p className="text-xl mb-8">Unlock your potential with Carding Genie</p>
          <Link 
            to="/plans" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg inline-flex items-center"
          >
            Choose Your Plan
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
