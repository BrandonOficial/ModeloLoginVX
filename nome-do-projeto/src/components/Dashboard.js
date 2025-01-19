import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica de logout (se necessário)
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Bem-vindo ao Dashboard!</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <main className="dashboard-content">
        <p>Aqui estão suas informações ou funcionalidades disponíveis.</p>
      </main>
    </div>
  );
};

export default Dashboard;
