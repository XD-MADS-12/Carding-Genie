// src/pages/Balance.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import { Plus, ArrowLeft, Bitcoin, Ethereum, DollarSign, RefreshCw } from 'lucide-react';

function Balance() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cryptoOptions, setCryptoOptions] = useState([
    { name: 'Bitcoin', symbol: 'BTC', address: 'bc1q...xyz', fee: 0.0001 },
    { name: 'Ethereum', symbol: 'ETH', address: '0x3462FF0B6DA8283d1370a448A7A35b08478c8e7B', fee: 0.001 },
    { name: 'Cardano', symbol: 'ADA', address: 'addr1...def', fee: 0.1 },
    { name: 'Dash', symbol: 'DASH', address: 'Xr...ghi', fee: 0.01 },
    { name: 'Dogecoin', symbol: 'DOGE', address: 'D...jkl', fee: 0.1 },
    { name: 'Litecoin', symbol: 'LTC', address: 'L...mno', fee: 0.001 },
    { name: 'Monero', symbol: 'XMR', address: '4...pqr', fee: 0.01 },
    { name: 'Solana', symbol: 'SOL', address: 'So...stu', fee: 0.0001 },
    { name: 'USDT', symbol: 'USDT', address: '0x3462FF0B6DA8283d1370a448A7A35b08478c8e7B', fee: 0.001 },
    { name: 'Zcash', symbol: 'ZEC', address: 't1...yz', fee: 0.001 },
  ]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      // Check Supabase for authenticated user
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user from Supabase:', error);
        navigate('/login');
        return;
      } else {
        setUser(user);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          navigate('/login');
          return;
        }
      }
      
      // Fetch user balance from database
      if (user) {
        const { data, error } = await supabase
          .from('user_balances')
          .select('balance')
          .eq('user_id', user.id)
          .single();
        
        if (error) {
          console.error('Error fetching balance:', error);
        } else {
          setBalance(data?.balance || 0);
        }
      }
      
      setLoading(false);
    };

    fetchUser();
  }, [navigate, user]);

  const handleAddFunds = (crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleWithdraw = () => {
    alert('Withdrawal functionality coming soon!');
  };

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
        <div className="flex items-center mb-6">
          <Link to="/dashboard" className="mr-4 text-indigo-600 hover:text-indigo-800">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold">Balance</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Balance: ${balance.toFixed(2)} USD</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => handleAddFunds()}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Add Funds
              </button>
              <button 
                onClick={handleWithdraw}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Withdraw
              </button>
            </div>
          </div>
          
          {balance < 20 && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
              <p>Not enough funds! You need $265.00 more to purchase the selected bundles.</p>
            </div>
          )}
        </div>

        {/* Add Funds Modal */}
        {selectedCrypto && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">ADD FUNDS TO BALANCE: {selectedCrypto.name}</h2>
                <button 
                  onClick={() => setSelectedCrypto(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="mb-4">
                <p className="text-sm mb-2">Minimum transfer amount is $265.00</p>
                <p className="text-sm mb-4">Transaction Fee is {selectedCrypto.fee} {selectedCrypto.symbol}</p>
                
                <div className="flex justify-center mb-4">
                  <img 
                    src={`./QR+CODE/QR+CODE.jpg+${selectedCrypto.symbol}`} 
                    alt="QR Code" 
                    className="rounded"
                  />
                </div>
                
                <p className="text-sm mb-2">Send {selectedCrypto.symbol} to this address:</p>
                <div className="bg-gray-100 p-2 rounded mb-4">
                  <code className="text-xs">{selectedCrypto.address}</code>
                </div>
                
                <p className="text-xs text-gray-500 mb-4">
                  Your address is valid until: {new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString()}<br/>
                  After your transfer has received 1 confirmation, you will receive your funds.
                </p>
                
                <button 
                  onClick={() => setSelectedCrypto(null)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  I Paid
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Crypto Options */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {cryptoOptions.map((crypto) => (
            <button
              key={crypto.name}
              onClick={() => handleAddFunds(crypto)}
              className="bg-indigo-100 hover:bg-indigo-200 p-4 rounded-lg text-center"
            >
              <div className="text-xl font-bold mb-1">{crypto.symbol}</div>
              <div className="text-sm">{crypto.name}</div>
            </button>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          <div className="text-gray-500 text-center py-8">
            No recent transactions found.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance;
