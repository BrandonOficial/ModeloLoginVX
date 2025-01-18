import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Você saiu do sistema!');
    navigate('/'); // Redireciona para a página de login
  };

  return (
    <div className="dashboard-container">
      <h1>Bem-vindo ao Dashboard!</h1>
      <p>Você está autenticado e pode acessar suas informações.</p>
      <button className="logout-button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default Dashboard;
