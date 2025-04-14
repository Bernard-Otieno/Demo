import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';  // Make sure supabaseClient is correctly set up
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  // Initialize useNavigate for redirecting
      const navigate = useNavigate();

  // Handle user signup
  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Sign up successful!');
    }
  };

  // Handle user login
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Login successful!');
      // Redirect to dashboard on successful login
      navigate('/dashboard');  // Redirect to dashboard route
    }
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleSignUp}>Sign Up</button>

      <p>{message}</p>
    </div>
  );
}

export default Login;
