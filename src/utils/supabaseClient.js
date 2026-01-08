// src/utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with error handling
let supabase;

try {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase environment variables are not set. Using mock data for development.');
    // Create a mock client for development
    supabase = {
      auth: {
        getUser: async () => ({ data: { user: null } }),
        onAuthStateChange: (callback) => ({
          data: { subscription: { unsubscribe: () => {} } }
        }),
        signInWithPassword: async () => ({ error: null }),
        signUp: async () => ({ error: null }),
        signOut: async () => {},
        setSession: async () => ({ error: null })
      },
      from: (table) => ({
        select: () => ({ data: [], error: null }),
        eq: () => ({ single: () => ({ data: null, error: null }) })
      })
    };
  } else {
    supabase = createClient(supabaseUrl, supabaseKey);
  }
} catch (error) {
  console.error('Error initializing Supabase client:', error);
  // Create a mock client if there's an error
  supabase = {
    auth: {
      getUser: async () => ({ data: { user: null } }),
      onAuthStateChange: (callback) => ({
        data: { subscription: { unsubscribe: () => {} } }
      }),
      signInWithPassword: async () => ({ error: null }),
      signUp: async () => ({ error: null }),
      signOut: async () => {},
      setSession: async () => ({ error: null })
    },
    from: (table) => ({
      select: () => ({ data: [], error: null }),
      eq: () => ({ single: () => ({ data: null, error: null }) })
    })
  };
}

export { supabase };
