// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import { Home, Mail, Users, BarChart3, ShoppingBag, MagicWand, Shield, MessageSquare, Globe } from 'lucide-react';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* CC Manager */}
          <Link to="/cc-manager" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Shield size={32} className="text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">CC Manager</h2>
            </div>
            <p className="text-gray-600">Manage credit cards with balance verification bypass</p>
          </Link>

          {/* Mailbox */}
          <Link to="/mailbox" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Mail size={32} className="text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Mailbox</h2>
            </div>
            <p className="text-gray-600">Integrated mailbox for account registration</p>
          </Link>

          {/* SMS/Phone Spoofing */}
          <Link to="/sms-spoofing" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <MessageSquare size={32} className="text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">SMS/Phone Spoofing</h2>
            </div>
            <p className="text-gray-600">Bypass SMS verification for OTPs</p>
          </Link>

          {/* Secure Location */}
          <Link to="/secure-location" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Globe size={32} className="text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Secure Location</h2>
            </div>
            <p className="text-gray-600">VPN, SOCKS & RDP connections</p>
          </Link>

          {/* Analytics */}
          <Link to="/analytics" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <BarChart3 size={32} className="text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Analytics</h2>
            </div>
            <p className="text-gray-600">Track your performance and statistics</p>
          </Link>

          {/* Magic Genie */}
          <Link to="/magic-genie" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <MagicWand size={32} className="text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Magic Genie</h2>
            </div>
            <p className="text-gray-600">Automated carding methods</p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome, {user?.user_metadata?.username || user?.email}</h2>
          <p className="text-gray-600 mb-6">
            You have access to all features of Carding Genie. Start using our tools to automate your carding processes.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/balance" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              View Balance
            </Link>
            <Link to="/plans" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Upgrade Plan
            </Link>
            <Link to="/settings" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Account Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
