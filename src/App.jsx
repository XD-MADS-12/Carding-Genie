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
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path="/auth" 
          element={!session ? <AuthPage /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/auth/callback" 
          element={<AuthCallback />} 
        />
        <Route 
          path="/*" 
          element={session ? <HomePage session={session} /> : <Navigate to="/auth" replace />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
