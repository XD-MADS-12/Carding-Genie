// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from './utils/supabaseClient';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Balance from './pages/Balance';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session);
        setUser(session?.user ?? null);
        if (event === 'SIGNED_IN') {
          console.log('Navigating to dashboard after login');
          navigate('/dashboard');
        } else if (event === 'SIGNED_OUT') {
          console.log('Navigating to home after logout');
          navigate('/');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Effect to handle manual navigation after login
  useEffect(() => {
    const handleManualRedirect = async () => {
      if (location.pathname === '/login' || location.pathname === '/signup') {
        // Check if user is already logged in and redirect if needed
        const { data: { user } } = await supabase.auth.getUser();
        if (user && (location.pathname === '/login' || location.pathname === '/signup')) {
          console.log('User already logged in, redirecting to dashboard');
          navigate('/dashboard');
        }
      }
    };

    handleManualRedirect();
  }, [location, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header user={user} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard /> : <Navigate to="/login" replace />}
          />
          <Route 
            path="/balance" 
            element={user ? <Balance /> : <Navigate to="/login" replace />}
          />
          <Route 
            path="/plans" 
            element={user ? <Plans /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
