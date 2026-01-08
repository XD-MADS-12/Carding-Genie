// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Create a simple fallback in case of errors
const renderApp = () => {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Root element not found. Creating one...');
      const newRoot = document.createElement('div');
      newRoot.id = 'root';
      document.body.appendChild(newRoot);
      ReactDOM.createRoot(newRoot).render(<App />);
    } else {
      ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      );
    }
  } catch (error) {
    console.error('Error rendering app:', error);
    // Fallback: display a simple message
    document.body.innerHTML = `
      <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center;">
        <h1>Carding Genie</h1>
        <p>Application is loading...</p>
        <div style="margin-top: 20px;">
          <div style="width: 50px; height: 50px; border: 5px solid #3498db; border-radius: 50%; border-top: 5px solid transparent; animation: spin 1s linear infinite; margin: 0 auto;"></div>
        </div>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
  }
};

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
