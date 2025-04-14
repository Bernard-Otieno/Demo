import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './assets/components/login'; // Update path 
import Dashboard from './assets/components/Dashboard'; // dashboard component
import AuthGuard from './assets/components/AuthGuard'; // Import AuthGuard
import ProductPage from './assets/components/ProductPage';
import CartPage from './assets/components/CartPage';



function App() {
  return (
    // Wrap your routes inside BrowserRouter (or Router)
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AuthGuard element={<Dashboard />} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductPage />} /> 
      </Routes>
    </Router>
  );
}
export default App;
