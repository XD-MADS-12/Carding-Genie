// src/pages/Dashboard.jsx
import React from 'react';
import BalanceSection from '../components/dashboard/BalanceSection';
import DashboardCards from '../components/dashboard/DashboardCards';
import CryptoFunding from '../components/dashboard/CryptoFunding';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Dashboard</h1>
        
        <BalanceSection />
        
        <DashboardCards />
        
        <CryptoFunding />
      </div>
    </div>
  );
};

export default Dashboard;
