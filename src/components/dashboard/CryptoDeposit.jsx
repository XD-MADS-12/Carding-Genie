// src/components/dashboard/CryptoDeposit.jsx
import React, { useState } from 'react';
import { ArrowLeft, Bitcoin, Ethereum, DollarSign, RefreshCw } from 'lucide-react';

function CryptoDeposit({ crypto, onClose }) {
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState(1); // 1: Enter amount, 2: Confirm, 3: Success

  const handleDeposit = () => {
    if (step === 1 && amount) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <button 
              onClick={onClose}
              className="mr-4 text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-2xl font-bold">Add Funds: {crypto.name}</h2>
          </div>
        </div>
        
        {step === 1 && (
          <div>
            <div className="mb-4">
              <p className="text-sm mb-2">Minimum transfer amount is $20.00</p>
              <p className="text-sm mb-4">Transaction Fee is {crypto.fee} {crypto.symbol}</p>
              
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                Amount in USD
              </label>
              <div className="relative">
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter amount"
                  min="20"
                />
                <DollarSign className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            
            <button 
              onClick={handleDeposit}
              disabled={!amount || parseFloat(amount) < 20}
              className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${(!amount || parseFloat(amount) < 20) ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Continue
            </button>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <div className="flex justify-center mb-4">
              <img 
                src={`https://placehold.co/200x200/000/FFF?text=QR+${crypto.symbol}`} 
                alt="QR Code" 
                className="rounded"
              />
            </div>
            
            <p className="text-sm mb-2">Send {crypto.symbol} to this address:</p>
            <div className="bg-gray-100 p-2 rounded mb-4">
              <code className="text-xs">{crypto.address}</code>
            </div>
            
            <p className="text-xs text-gray-500 mb-4">
              Your address is valid until: {new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString()}<br/>
              After your transfer has received 1 confirmation, you will receive your funds.
            </p>
            
            <button 
              onClick={handleDeposit}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              I Paid
            </button>
          </div>
        )}
        
        {step === 3 && (
          <div className="text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2">Payment Confirmed!</h3>
            <p className="mb-4">Your funds will be added to your balance shortly.</p>
            <button 
              onClick={onClose}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CryptoDeposit;
