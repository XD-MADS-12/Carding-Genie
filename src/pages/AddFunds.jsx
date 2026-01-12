// src/pages/AddFunds.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import supabase from '../services/supabaseClient';
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const AddFunds = () => {
  const navigate = useNavigate();
  const { crypto } = useParams();
  const [userBalance, setUserBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [depositAddress, setDepositAddress] = useState('');
  const [tumblerFee, setTumblerFee] = useState(5);
  const [minimumDeposit, setMinimumDeposit] = useState(260);
  const [selectedCrypto, setSelectedCrypto] = useState('');

  useEffect(() => {
    fetchUserBalance();
    if (crypto) {
      fetchDepositAddress(crypto.toUpperCase());
    }
  }, [crypto]);

  const fetchUserBalance = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
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
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDepositAddress = async (currencyCode) => {
    try {
      const { data, error } = await supabase
        .from('deposit_addresses')
        .select('address')
        .eq('currency_code', currencyCode)
        .eq('is_active', true)
        .single();

      if (error) {
        throw error;
      }
      
      setDepositAddress(data.address || '');
      setSelectedCrypto(currencyCode);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <LoadingSpinner />
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
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Add Funds</h1>
          <p className="mt-2 text-gray-400">Add funds using cryptocurrency.</p>
          
          {selectedCrypto && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-2">Deposit Information</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Minimum Deposit:</span>
                  <span className="font-semibold text-white">${minimumDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Tumbler Fee:</span>
                  <span className="font-semibold text-white">${tumblerFee}</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <span className="block text-gray-300 mb-2">Your Address:</span>
                  <code className="block text-sm font-mono text-purple-400 break-all bg-gray-700 p-2 rounded">
                    {depositAddress}
                  </code>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Display available cryptocurrencies */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {['BTC', 'ETH', 'DASH', 'DOGE', 'LTC', 'XMR', 'SOL', 'USDT', 'ADA', 'ZEC'].map((symbol) => (
            <button
              key={symbol}
              onClick={() => navigate(`/add-funds/${symbol.toLowerCase()}`)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                selectedCrypto === symbol ? 'bg-purple-900' : 'bg-gray-800'
              } text-white hover:bg-gray-700 transition-colors`}
            >
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-2">
                <span className="text-sm font-medium text-white">{symbol}</span>
              </div>
              <span className="mt-2 text-sm font-medium text-white">{symbol}</span>
            </button>
          ))}
        </div>

        {/* Additional information */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-white mb-4">Important Information</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Make sure to send the exact amount.</span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Transactions may take up to 10 minutes to process</span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Your balance will be updated automatically once the transaction is confirmed</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-center">
          <Button onClick={() => navigate('/dashboard')}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddFunds;
