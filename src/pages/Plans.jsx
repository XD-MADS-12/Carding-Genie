// src/pages/Plans.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import { Check, Star, Crown } from 'lucide-react';

function Plans() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    {
      name: 'STANDARD',
      price: 260,
      features: [
        'SMS/PHONE# OTP BOT ALL COUNTRIES',
        'CC MANAGER/BALANCE CHECKER AND INTEGRATED MAILBOX',
        'SMS/PHONE SPOOFING',
        'LOCATION SPOOFING+SECURITY: VPN/RDP/SOCKs5 PROXY',
        'AVS/API/VELOCITY CHECK BYPASS',
        'HUMAN BEHAVIOR (CAPTCHA SOLVER AND 2FA PREVENTION INCLUDED)',
        'PC & IOS/ANDROID SETUP FILE',
        'ALL METHODS UNLOCKED',
        '7GOLD NON VBV FULLZ CARD',
        '6MONTHS LICENSE (METHODS/SOFTWARE UPDATES AND 24/7 TECH SUPPORT)',
        '23K Genie Points'
      ],
      recommended: false
    },
    {
      name: 'PRO',
      price: 560,
      features: [
        'SMS/PHONE# OTP BOT ALL COUNTRIES'
        'CC MANAGER/BALANCE CHECKER AND INTEGRATED MAILBOX'
        'LOCATION SPOOFING+SECURITY: VPN/RDP/SOCKs5 PROXY'
        'AVS/API/VELOCITY CHECK BYPASS'
        'HUMAN BEHAVIOR (CAPTCHA SOLVER AND 2FA PREVENTION INCLUDED)'
        'PC & IOS/ANDROID SETUP FILE'
        'ALL METHODS UNLOCKED'
        '7 PLATINUM NON VBV FULLZ CARDS'
        '12 MONTHS LICENSE (METHODS/SOFTWARE UPDATES AND 24/7 TECH SUPPORT)'
        '60K Genie Points'
      ],
      recommended: true
    },
    {
      name: 'MASTER',
      price: 650,
      features: [
        'SMS/PHONE# OTP BOT ALL COUNTRIES'
        'CC MANAGER/BALANCE CHECKER AND INTEGRATED MAILBOX'
        'LOCATION SPOOFING+SECURITY:'
        'VPN/RDP/SOCKs5 PROXYAVS/API/VELOCITY CHECK BYPASS'
        'HUMAN BEHAVIOR (CAPTCHA SOLVER AND 2FA PREVENTION INCLUDED)'
        'PC & IOS/ANDROID SETUP FILE'
        '1 on 1 Teamviewer/Anydesk Support'
        'ALL METHODS UNLOCKED'
        '17 BUSINESS NON VBV FULLZ CARDS'
        'LIFETIME LICENSE'
        '(METHODS/SOFTWARE UPDATES AND 24/7 TOP PRIORITY SUPPORT) 180K Genie Points'
        
      ],
      recommended: false
    }
  ];

  const handlePurchase = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 ${plan.recommended ? 'border-2 border-indigo-600' : ''}`}
            >
              {plan.recommended && (
                <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  RECOMMENDED
                </div>
              )}
              
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="text-4xl font-bold mb-4">${plan.price}</div>
              
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handlePurchase(plan)}
                className={`w-full ${plan.recommended ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-600 hover:bg-gray-700'} text-white font-bold py-2 px-4 rounded`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* Purchase Modal */}
        {selectedPlan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Purchase {selectedPlan.name} Plan</h2>
                <button 
                  onClick={() => setSelectedPlan(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="mb-4">
                <p className="text-xl font-bold mb-2">${selectedPlan.price} USD</p>
                <p className="text-gray-600 mb-4">You will get access to all features in the {selectedPlan.name} plan.</p>
                
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
                  <p>Minimum balance required: $265.00</p>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => navigate('/balance')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add Funds
                  </button>
                  <button 
                    onClick={() => setSelectedPlan(null)}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Let The Numbers Speak</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">11+</div>
              <div className="text-gray-600">Active developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">29+</div>
              <div className="text-gray-600">Months of beta testing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">1983+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">130,000+</div>
              <div className="text-gray-600">Contest Orders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
