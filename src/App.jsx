// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { supabase } from './utils/supabaseClient';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Balance from './pages/Balance';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import AuthCallback from './pages/AuthCallback';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        // First check localStorage for user data
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          setUser(userData);
          setLoading(false);
          return;
        }
        
        // Then check Supabase
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
          console.error('Error fetching user from Supabase:', error);
          setUser(null);
        } else {
          setUser(user);
          if (user) {
            // Store user in localStorage for persistence
            localStorage.setItem('user', JSON.stringify(user));
          }
        }
      } catch (error) {
        console.error('Error checking user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session);
        if (session) {
          setUser(session.user);
          localStorage.setItem('user', JSON.stringify(session.user));
          if (event === 'SIGNED_IN') {
            navigate('/dashboard');
          }
        } else {
          setUser(null);
          localStorage.removeItem('user');
          if (event === 'SIGNED_OUT') {
            navigate('/');
          }
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

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
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route 
            path="/balance" 
            element={user ? <Balance /> : <Navigate to="/login" />}
          />
          <Route 
            path="/plans" 
            element={user ? <Plans /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
