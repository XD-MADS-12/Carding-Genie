// src/utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with error handling
try {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase environment variables are not set. Using mock data for development.');
    // Create a mock client for development
    const mockSupabase = {
      auth: {
        getUser: async () => ({ data: { user: null } }),
        onAuthStateChange: (callback) => ({
          data: { subscription: { unsubscribe: () => {} } }
        }),
        signInWithPassword: async () => ({ error: null }),
        signUp: async () => ({ error: null }),
        signOut: async () => {}
      },
      from: (table) => ({
        select: () => ({ data: [], error: null }),
        eq: () => ({ single: () => ({ data: null, error: null }) })
      })
    };
    export { mockSupabase as supabase };
  } else {
    const supabase = createClient(supabaseUrl, supabaseKey);
    export { supabase };
  }
} catch (error) {
  console.error('Error initializing Supabase client:', error);
  // Export a mock client if there's an error
  const mockSupabase = {
    auth: {
      getUser: async () => ({ data: { user: null } }),
      onAuthStateChange: (callback) => ({
        data: { subscription: { unsubscribe: () => {} } }
      }),
      signInWithPassword: async () => ({ error: null }),
      signUp: async () => ({ error: null }),
      signOut: async () => {}
    },
    from: (table) => ({
      select: () => ({ data: [], error: null }),
      eq: () => ({ single: () => ({ data: null, error: null }) })
    })
  };
  export { mockSupabase as supabase };
}
