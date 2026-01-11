// src/pages/Plans.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseClient';

const Plans = () => {
  const navigate = useNavigate();
  const [userBalance, setUserBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserBalance();
  }, []);

  const fetchUserBalance = async () => {
    try {
      const {  { user } } = await supabase.auth.getUser();
      if (user) {
        // Fetch the actual balance from the profiles table in Supabase
        const { data, error } = await supabase
          .from('profiles')
          .select('balance')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching user balance:', error);
          setUserBalance(0);
        } else {
          setUserBalance(data.balance || 0);
        }
      }
    } catch (error) {
      console.error('Error getting user:', error);
      setUserBalance(0);
    } finally {
      setLoading(false);
    }
  };

  const plans = [
    {
      name: 'STANDARD BUNDLE',
      price: 260,
      points: '23K Genie Points',
      duration: '6 Months License',
      cards: '7 Gold Non VBV Fullz Cards',
      features: [
        'SMS/PHONE# OTP Bot All Countries',
        'CC Manager/Balance Checker And Integrated Mailbox',
        'Location Spoofing+Security: VPN/RDP/SOCKs5 Proxy',
        'AVS/API/Velocity Check Bypass',
        'Human Behavior (Captcha Solver And 2FA Prevention Included)',
        'PC & IOS/Android Setup File',
        'All Methods Unlocked',
        'Methods/Software Updates And 24/7 Tech Support'
      ],
      popular: false
    },
    {
      name: 'PRO BUNDLE',
      price: 560,
      points: '60K Genie Points',
      duration: '12 Months License',
      cards: '7 Platinum Non VBV Fullz Cards',
      features: [
        'SMS/PHONE# OTP Bot All Countries',
        'CC Manager/Balance Checker And Integrated Mailbox',
        'Location Spoofing+Security: VPN/RDP/SOCKs5 Proxy',
        'AVS/API/Velocity Check Bypass',
        'Human Behavior (Captcha Solver And 2FA Prevention Included)',
        'PC & IOS/Android Setup File',
        'All Methods Unlocked',
        'Methods/Software Updates And 24/7 Tech Support'
      ],
      popular: true
    },
    {
      name: 'MASTER BUNDLE',
      price: 650,
      points: '180K Genie Points',
      duration: 'Lifetime License',
      cards: '17 Business Non VBV Fullz Cards',
      features: [
        'SMS/PHONE# OTP Bot All Countries',
        'CC Manager/Balance Checker And Integrated Mailbox',
        'Location Spoofing+Security: VPN/RDP/SOCKs5 Proxy',
        'AVS/API/Velocity Check Bypass',
        'Human Behavior (Captcha Solver And 2FA Prevention Included)',
        'PC & IOS/Android Setup File',
        'All Methods Unlocked',
        'Methods/Software Updates And 24/7 Top Priority Support'
      ],
      popular: false
    }
  ];

  const handlePlanSelect = async (selectedPlan) => {
    if (userBalance >= selectedPlan.price) {
      // If user has sufficient balance, proceed with purchase
      // First, deduct the amount from the user's balance
      try {
        const {  { user } } = await supabase.auth.getUser();
        if (user) {
          const { error } = await supabase
            .from('profiles')
            .update({ balance: userBalance - selectedPlan.price })
            .eq('id', user.id);

          if (error) {
            console.error('Error updating balance:', error);
            alert('Error processing your purchase. Please try again.');
            return;
          }

          // Navigate to checkout with the plan details
          navigate('/checkout', { state: { plan: selectedPlan } });
        }
      } catch (error) {
        console.error('Error during purchase:', error);
        alert('Error processing your purchase. Please try again.');
      }
    } else {
      // If user doesn't have sufficient balance, redirect to deposit page
      navigate('/add-funds', { state: { requiredAmount: selectedPlan.price - userBalance } });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your needs
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Current Balance: ${userBalance.toFixed(2)}
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg sm:px-10 sm:py-12 ${
                plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 py-1.5 px-4 bg-purple-600 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Most popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">${plan.price}</span>
                </div>
                <p className="mt-2 text-lg font-semibold text-purple-600 dark:text-purple-400">{plan.points}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{plan.duration}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{plan.cards}</p>
                
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10">
                  <button
                    onClick={() => handlePlanSelect(plan)}
                    className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                      plan.popular
                        ? 'bg-purple-600 text-white shadow-sm hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                    }`}
                  >
                    Buy This Plan
                  </button>
                  
                  {userBalance < plan.price && (
                    <p className="mt-3 text-sm text-red-600 dark:text-red-400">
                      Need ${plan.price - userBalance} more to purchase this plan
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
