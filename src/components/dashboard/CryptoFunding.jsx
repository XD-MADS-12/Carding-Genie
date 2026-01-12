// src/components/dashboard/CryptoFunding.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, DollarSign, Smartphone, CreditCard, Shield, Globe, Zap, Coins, Users, Lock } from 'lucide-react';
import supabase from '../../services/supabaseClient';

const CryptoFunding = () => {
  const [cryptoOptions, setCryptoOptions] = useState([
    { name: 'Bitcoin', symbol: 'BTC', icon: <Bitcoin size={24} />, color: 'bg-orange-500' },
    { name: 'Ethereum', symbol: 'ETH', icon: <CreditCard size={24} />, color: 'bg-blue-500' },
    { name: 'Dash', symbol: 'DASH', icon: <DollarSign size={24} />, color: 'bg-cyan-500' },
    { name: 'Dogecoin', symbol: 'DOGE', icon: <Globe size={24} />, color: 'bg-yellow-500' },
    { name: 'Litecoin', symbol: 'LTC', icon: <Zap size={24} />, color: 'bg-gray-500' },
    { name: 'Monero', symbol: 'XMR', icon: <Shield size={24} />, color: 'bg-purple-500' },
    { name: 'Solana', symbol: 'SOL', icon: <Smartphone size={24} />, color: 'bg-green-500' },
    { name: 'USDT', symbol: 'USDT', icon: <DollarSign size={24} />, color: 'bg-blue-600' },
    { name: 'Cardano', symbol: 'ADA', icon: <Coins size={24} />, color: 'bg-indigo-500' },
    { name: 'Zcash', symbol: 'ZEC', icon: <Lock size={24} />, color: 'bg-teal-500' },
  ]);
  
  const [depositAddresses, setDepositAddresses] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDepositAddresses();
  }, []);

  const fetchDepositAddresses = async () => {
    try {
      const addressesResponse = await supabase
        .from('deposit_addresses')
        .select('*')
        .eq('is_active', true);

      if (addressesResponse.error) {
        throw addressesResponse.error;
      }

      // Create a map of currency codes to addresses
      const addressesMap = {};
      addressesResponse.data.forEach(item => {
        addressesMap[item.currency_code.toUpperCase()] = item.address;
      });
      
      setDepositAddresses(addressesMap);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching deposit addresses:', err);
    } finally {
      setLoading(false);
    }
  };

  // Default deposit information
  const minimumDeposit = 260;
  const tumblerFee = 5;

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">Error loading deposit information: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Choose the cryptocurrency you want to top up your account balance with:</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {cryptoOptions.map((crypto) => (
          <Link
            key={crypto.name}
            to={`/add-funds/${crypto.symbol.toLowerCase()}`}
            className={`flex flex-col items-center justify-center p-4 rounded-lg ${crypto.color} text-white hover:opacity-90 transition-opacity`}
          >
            {crypto.icon}
            <span className="mt-2 text-sm font-medium">{crypto.name}</span>
            <span className="text-xs">{crypto.symbol}</span>
          </Link>
        ))}
      </div>

      {/* Deposit Information */}
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Deposit Information</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Minimum Deposit:</span>
            <span className="font-semibold text-gray-800 dark:text-white">${minimumDeposit}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Tumbler Fee:</span>
            <span className="font-semibold text-gray-800 dark:text-white">${tumblerFee}</span>
          </div>
          
          <div className="pt-2 border-t border-gray-300 dark:border-gray-600">
            <span className="block text-gray-600 dark:text-gray-300 mb-2">Deposit Addresses:</span>
            <div className="space-y-2">
              {Object.entries(depositAddresses).map(([currency, address]) => (
                <div key={currency} className="flex justify-between items-start">
                  <span className="text-gray-600 dark:text-gray-300 font-medium w-16">{currency}:</span>
                  <code className="flex-1 ml-2 text-sm font-mono text-purple-600 dark:text-purple-400 break-all bg-white dark:bg-gray-800 p-1 rounded">
                    {address}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoFunding;
