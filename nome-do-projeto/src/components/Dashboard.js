import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:5000/dashboard', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token
    navigate('/'); // Redireciona para a página de login
  };

  return (
    <div className="dashboard-container">
      <h1>Login feito com Sucesso!</h1>
      <button className="logout-button" onClick={handleLogout}>Sair</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Dashboard;
