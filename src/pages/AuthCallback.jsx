// src/pages/AuthCallback.jsx
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

function AuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleAuthCallback = async () => {
      // Get the error parameter if present
      const error = searchParams.get('error');
      
      if (error) {
        console.error('Auth error:', error);
        navigate('/login', { state: { error: 'Authentication failed' } });
        return;
      }

      // Get the access token from URL hash if present
      const fragment = window.location.hash.substring(1);
      const params = new URLSearchParams(fragment);
      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');

      if (accessToken && refreshToken) {
        // Set the session manually since Supabase handles redirects
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken
        });

        if (error) {
          console.error('Error setting session:', error);
          navigate('/login', { state: { error: 'Failed to set session' } });
        } else {
          console.log('Session set successfully, navigating to dashboard');
          navigate('/dashboard');
        }
      } else {
        // If no tokens in URL, check if user is already authenticated
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
          console.error('Error getting user:', error);
          navigate('/login');
        } else if (user) {
          console.log('User authenticated via callback, navigating to dashboard');
          navigate('/dashboard');
        } else {
          console.log('No user found, redirecting to login');
          navigate('/login');
        }
      }
    };

    handleAuthCallback();
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Processing authentication...</p>
      </div>
    </div>
  );
}

export default AuthCallback;
