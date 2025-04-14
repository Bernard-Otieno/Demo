// src/assets/components/AuthGuard.jsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

function AuthGuard({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Can be replaced with a spinner later
  }

  if (!session) {
    return <Navigate to="/" />;
  }

  return children;
}

export default AuthGuard;
