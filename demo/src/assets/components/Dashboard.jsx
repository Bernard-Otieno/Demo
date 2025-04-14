import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import './Dashboard.css';



function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAndOrders = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        navigate('/');
        return;
      }

      setUser(user);

      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching orders:', error);
      } else {
        setOrders(data);
      }

      setLoading(false);
    };

    fetchUserAndOrders();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Order Dashboard</h2>
  
      {loading ? (
        <p className="loading-text">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="no-orders">No orders found.</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product_name}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
  
      <button onClick={handleLogout} className="logout-button">
        Log Out
      </button>
  
      <Link to="/products" className="nav-button">
        Go to Products
      </Link>
    </div>
  );
  
}

export default Dashboard;
