import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Phone, Globe, Shield, Mail, ShoppingBag, Users, Clock, Star, ShoppingBag as BagIcon } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const functions = [
    {
      id: 'cc-manager',
      title: 'CC Manager',
      description: 'CC manager with balance and verification bypass',
      icon: <CreditCard className="w-12 h-12 text-blue-500" />,
      features: ['CC Manager', 'Balance', 'Verification Bypass']
    },
    {
      id: 'smsphone-spoofing',
      title: 'SMS/PHONE SPOOFING',
      description: 'SMS SPOOFER (97% Track & Trace)',
      icon: <Phone className="w-12 h-12 text-blue-500" />,
      features: ['SMS Spoofing', 'Track & Trace', 'High Success Rate']
    },
    {
      id: 'secure-location',
      title: 'SECURE LOCATION SPOOFING',
      description: 'VPN SOCKS & RDP connection',
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      features: ['VPN', 'SOCKS', 'RDP Connection']
    },
    {
      id: 'verification-bypass',
      title: 'VERIFICATION BYPASS',
      description: 'Bypass SMS/Email verification for accounts',
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      features: ['SMS Verification', 'Email Verification', 'Document Uploads']
    },
    {
      id: 'integrated-mailbox',
      title: 'Integrated Mailbox',
      description: 'Integrated mailbox to register multiple accounts',
      icon: <Mail className="w-12 h-12 text-blue-500" />,
      features: ['Multiple Accounts', 'Auto Configuration', 'Track & Trace']
    },
    {
      id: 'automated-carding',
      title: 'Over 1200 Automated Carding Methods',
      description: 'Auto carding methods for various platforms',
      icon: <ShoppingBag className="w-12 h-12 text-blue-500" />,
      features: ['1200+ Methods', 'Platform Support', 'Automated Process']
    }
  ];

  const plans = [
    {
      id: 'standard',
      name: 'STANDARD',
      price: 260,
      features: [
        'SMASH/PROXY VIP BOT',
        'ALL COUNTRIES',
        'CC MANAGER/BALANCE',
        'INTEGRATED MAILBOX',
        'LOCATION SPOOFING',
        'ASIAN SECUITY',
        'VERIFICATION BYPASS',
        'SMS/PHONE SPOOFING',
        'PC & MAC/ANDROID SETUP FILE',
        'FULLY AUTOMATED',
        'ENCRYPTED/CLEAN',
        'UPDATE/SETUP GUIDE',
        '24/7 LIVE CHAT SUPPORT'
      ],
      included: true,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'pro',
      name: 'PRO',
      price: 560,
      features: [
        'SMASH/PROXY VIP BOT',
        'ALL COUNTRIES',
        'CC MANAGER/BALANCE',
        'INTEGRATED MAILBOX',
        'LOCATION SPOOFING',
        'ASIAN SECUITY',
        'VERIFICATION BYPASS',
        'SMS/PHONE SPOOFING',
        'PC & MAC/ANDROID SETUP FILE',
        'FULLY AUTOMATED',
        'ENCRYPTED/CLEAN',
        'UPDATE/SETUP GUIDE',
        '24/7 LIVE CHAT SUPPORT',
        'FALLBACK CARDS',
        'INSTALLED SOFTWARE',
        'LIFETIME UPDATES AND 24/7 TECH SUPPORT'
      ],
      included: true,
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'master',
      name: 'MASTER',
      price: 650,
      features: [
        'SMASH/PROXY VIP BOT',
        'ALL COUNTRIES',
        'CC MANAGER/BALANCE',
        'INTEGRATED MAILBOX',
        'LOCATION SPOOFING',
        'ASIAN SECUITY',
        'VERIFICATION BYPASS',
        'SMS/PHONE SPOOFING',
        'PC & MAC/ANDROID SETUP FILE',
        'FULLY AUTOMATED',
        'ENCRYPTED/CLEAN',
        'UPDATE/SETUP GUIDE',
        '24/7 LIVE CHAT SUPPORT',
        'FALLBACK CARDS',
        'INSTALLED SOFTWARE',
        'LIFETIME UPDATES AND 24/7 TECH SUPPORT',
        'SETTING SCREEN',
        'FULLY WORKING',
        '83% Success Ratio',
        '83% Success Ratio'
      ],
      included: true,
      color: 'bg-blue-100 text-blue-800'
    }
  ];

  const stats = [
    { label: 'Active Developers', value: '12+', icon: <Users className="w-6 h-6" /> },
    { label: 'Months of Beta Testing', value: '20+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Satisfied Clients', value: '923+', icon: <Star className="w-6 h-6" /> },
    { label: 'Created Orders', value: '150000+', icon: <BagIcon className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-purple-900 to-blue-900"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your wish is my command
            </h1>
            <h2 className="text-5xl md:text-7xl font-extrabold text-blue-400 mb-6">
              Carding Genie
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Carding Genie is a software designed to make carding automated through Artificial Intelligence.
            </p>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Download
          </motion.button>
        </div>
      </section>

      {/* Functions Section */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Functions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {functions.map((func, index) => (
              <motion.div
                key={func.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
              >
                <div className="mb-4 flex justify-center">
                  {func.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{func.title}</h3>
                <p className="text-gray-300 mb-4">{func.description}</p>
                <div className="space-y-2">
                  {func.features.map((feature, i) => (
                    <div key={i} className="text-sm text-gray-400 flex items-center justify-center">
                      <span className="w-4 h-4 mr-2 inline-block bg-green-400 rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="aspect-video relative bg-gradient-to-r from-purple-900 to-blue-900 flex items-center justify-center">
                <button className="bg-red-600 hover:bg-red-700 rounded-full p-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-lg p-6 ${plan.color} border-2 border-opacity-50 ${
                  plan.id === 'standard' ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-extrabold mb-4">${plan.price}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-5 h-5 mr-2 inline-block bg-green-400 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => alert('Plan purchase functionality would go here')}
                  className={`w-full py-3 rounded-lg font-bold transition-colors ${
                    plan.id === 'standard'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Buy This Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Let The Numbers Speak</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/50 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300 flex items-center justify-center">
                  {stat.icon}
                  <span className="ml-2">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
