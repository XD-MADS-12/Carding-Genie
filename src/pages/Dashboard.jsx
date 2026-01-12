// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BalanceSection from '../components/dashboard/BalanceSection';
import DashboardCards from '../components/dashboard/DashboardCards';
import CryptoFunding from '../components/dashboard/CryptoFunding';
import supabase from '../services/supabaseClient';

const Dashboard = () => {
  const [userBalance, setUserBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserBalance();
  }, []);

  const fetchUserBalance = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated');
      }
      
      // Fetch the actual balance from the profiles table in Supabase
      const { data, error } = await supabase
        .from('profiles')
        .select('balance')
        .eq('id', user.id)
        .single();

      if (error) {
        throw error;
      }
      
      setUserBalance(data.balance || 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{error}</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
          
          <BalanceSection />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-white mb-4">Functions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => navigate('/cc-manager')}
                  className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 100 4h12a2 2 0 100-4H7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">CC Manager</h3>
                    <p className="text-gray-400 text-sm">Manage your credit cards</p>
                  </div>
                </button>
                
                <button
                  onClick={() => navigate('/verify')}
                  className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 100 4h12a2 2 0 100-4H7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Verify</h3>
                    <p className="text-gray-400 text-sm">Verify your identity</p>
                  </div>
                </button>
                
                <button
                  onClick={() => navigate('/sms-phone')}
                  className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.858-.189m-.02-10.005c0-.77.15-1.51.44-2.19" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">SMS Phone</h3>
                    <p className="text-gray-400 text-sm">Send SMS messages</p>
                  </div>
                </button>
                
                <button
                  onClick={() => navigate('/start-carding')}
                  className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 100 4h12a2 2 0 100-4H7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Start Carding</h3>
                    <p className="text-gray-400 text-sm">Start carding process</p>
                  </div>
                </button>
                
                <button
                  onClick={() => navigate('/orders')}
                  className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 100 4h12a2 2 0 100-4H7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Orders</h3>
                    <p className="text-gray-400 text-sm">View your orders</p>
                  </div>
                </button>
                
                <button
                  onClick={() => navigate('/mail')}
                  className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 100 4h12a2 2 0 100-4H7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Mail</h3>
                    <p className="text-gray-400 text-sm">Check your mail</p>
                  </div>
                </button>
                
                <button
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 100 4h12a2 2 0 100-4H7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Dashboard</h3>
                    <p className="text-gray-400 text-sm">Return to dashboard</p>
                  </div>
                </button>
                
                <button
                  onClick={() => navigate('/genie')}
                  className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 100 4h12a2 2 0 100-4H7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Genie</h3>
                    <p className="text-gray-400 text-sm">Genie features</p>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-white mb-4">Add Funds</h2>
              <CryptoFunding />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
