// src/components/dashboard/DashboardCards.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, UserCheck, MessageSquare, BarChart, ShoppingCart, Home, Lamp } from 'lucide-react';

const DashboardCards = () => {
  const cards = [
    {
      title: 'CC Manager',
      icon: <Mail size={32} />,
      description: 'Manage your credit cards',
      link: '/cc-manager'
    },
    {
      title: 'Verify',
      icon: <UserCheck size={32} />,
      description: 'Verify your identity',
      link: '/verify'
    },
    {
      title: 'SMS Phone',
      icon: <MessageSquare size={32} />,
      description: 'Send SMS messages',
      link: '/sms-phone'
    },
    {
      title: 'Start Carding',
      icon: <BarChart size={32} />,
      description: 'Start carding process',
      link: '/start-carding'
    },
    {
      title: 'Orders',
      icon: <ShoppingCart size={32} />,
      description: 'View your orders',
      link: '/orders'
    },
    {
      title: 'Mail',
      icon: <Mail size={32} />,
      description: 'Check your mail',
      link: '/mail'
    },
    {
      title: 'Dashboard',
      icon: <Home size={32} />,
      description: 'Return to dashboard',
      link: '/dashboard'
    },
    {
      title: 'Genie',
      icon: <Lamp size={32} />,
      description: 'Genie features',
      link: '/genie'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {cards.map((card, index) => (
        <Link
          key={index}
          to={card.link}
          className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
        >
          <div className="mb-4 text-purple-600 dark:text-purple-400">
            {card.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{card.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{card.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default DashboardCards;
