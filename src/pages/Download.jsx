// src/pages/Download.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Download = () => {
  const navigate = useNavigate();

  // This is a placeholder - in a real application, this would be replaced with actual download logic
  const handleDownload = () => {
    // In a real application, this would trigger a file download
    alert("Please Purchase a Bundle to get download option .");
    // For now, redirect to home page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Download Carding Genie</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for choosing Carding Genie! To download our software, please follow these steps:
          </p>
          
          <ol className="list-decimal list-inside space-y-4 mb-6">
            <li>Click the button below to start the download process.</li>
            <li>Save the file to your computer.</li>
            <li>Run the installer and follow the on-screen instructions.</li>
            <li>Log in with your credentials to start using Carding Genie.</li>
          </ol>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              Download Now
            </button>
            <button
              onClick={() => window.location.href = '/login'}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Already have an account? Log in
            </button>
          </div>
        </div>
        
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">System Requirements</h2>
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
              <span className="text-gray-700 dark:text-gray-300">Windows 10 or later, macOS 10.15 or later, or Linux</span>
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
              <span className="text-gray-700 dark:text-gray-300">4GB RAM minimum (8GB recommended)</span>
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
              <span className="text-gray-700 dark:text-gray-300">500MB of free disk space</span>
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
              <span className="text-gray-700 dark:text-gray-300">Internet connection required</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Download;
