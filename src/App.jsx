// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import supabase from './services/supabaseClient';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Navigation from './components/layout/Navigation';

// Create browser history instance
const history = createBrowserHistory();

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = await supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      }
    };

    getUser();

    const { data: { subscription } } = await supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <>
                    <Navigation user={user} />
                    <Dashboard />
                  </>
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <>
                    <Navigation user={user} />
                    <Account />
                  </>
                </ProtectedRoute>
              }
            />
            
            <Route path="/plans" element={<Plans />} />
            
            {/* Catch-all route for protected pages */}
            <Route path="/cc-manager" element={
              <ProtectedRoute>
                <>
                  <Navigation user={user} />
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">CC Manager</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">This is the CC Manager section. Here you can manage your credit cards.</p>
                  </div>
                </>
              </ProtectedRoute>
            } />
            
            <Route path="/verify" element={
              <ProtectedRoute>
                <>
                  <Navigation user={user} />
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Verify</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">This is the verification section. Verify your identity here.</p>
                  </div>
                </>
              </ProtectedRoute>
            } />
            
            <Route path="/sms-phone" element={
              <ProtectedRoute>
                <>
                  <Navigation user={user} />
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">SMS Phone</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">This is the SMS Phone section. Send and receive SMS messages.</p>
                  </div>
                </>
              </ProtectedRoute>
            } />
            
            <Route path="/start-carding" element={
              <ProtectedRoute>
                <>
                  <Navigation user={user} />
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Start Carding</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">This is the Start Carding section. Begin the carding process here.</p>
                  </div>
                </>
              </ProtectedRoute>
            } />
            
            <Route path="/orders" element={
              <ProtectedRoute>
                <>
                  <Navigation user={user} />
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Orders</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">This is the Orders section. View your order history.</p>
                  </div>
                </>
              </ProtectedRoute>
            } />
            
            <Route path="/mail" element={
              <ProtectedRoute>
                <>
                  <Navigation user={user} />
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Mail</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">This is the Mail section. Check your messages.</p>
                  </div>
                </>
              </ProtectedRoute>
            } />
            
            <Route path="/genie" element={
              <ProtectedRoute>
                <>
                  <Navigation user={user} />
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Genie</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">This is the Genie section. Access special genie features.</p>
                  </div>
                </>
              </ProtectedRoute>
            } />
            
            <Route path="/add-funds/:crypto" element={
              <ProtectedRoute>
                <>
                  <Navigation user={user} />
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Add Funds</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Add funds using cryptocurrency.</p>
                  </div>
                </>
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
