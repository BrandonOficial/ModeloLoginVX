import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/dashboard', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
          setMessage(data.message);
        } else {
          setMessage(data.message || 'Erro ao acessar o Dashboard.');
        }
      } catch (error) {
        setMessage('Erro ao se conectar ao servidor.');
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token caso ainda seja necessário em outras partes do app
    navigate('/'); // Redireciona para a página inicial
  };

  if (loading) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento
  }

  return (
    <div className="dashboard-container">
      <h1>Bem-vindo ao Dashboard!</h1>
      <button className="logout-button" onClick={handleLogout}>Sair</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Dashboard;
