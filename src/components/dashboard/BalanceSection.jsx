// src/components/dashboard/BalanceSection.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../services/supabaseClient';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';

const BalanceSection = () => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  // Minimum deposit amount
  const MINIMUM_DEPOSIT = 260;

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    setLoading(true);
    try {
      const {  { user } } = await supabase.auth.getUser();
      
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
      
      setBalance(data.balance || 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFunds = () => {
    navigate('/add-funds');
  };

  const handleWithdraw = () => {
    navigate('/withdraw');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
          Balance: ${balance.toFixed(2)} USD
        </h2>
        <div className="flex space-x-2">
          <Button onClick={handleAddFunds}>Add Funds</Button>
          <Button variant="secondary" onClick={handleWithdraw}>Withdraw</Button>
        </div>
      </div>
      
      {(balance < MINIMUM_DEPOSIT) && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
          <p>Not enough funds, you need ${(MINIMUM_DEPOSIT - balance).toFixed(2)} more to purchase the selected bundle.</p>
        </div>
      )}
    </div>
  );
};

export default BalanceSection;
