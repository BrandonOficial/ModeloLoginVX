import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// Componente para proteger rotas
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token'); // Verifica se o token está armazenado
  return token ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route
          path="/"
          element={
            localStorage.getItem('token') ? <Navigate to="/dashboard" /> : <Login />
          }
        />
        {/* Rota protegida para o Dashboard */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      </Routes>
    </Router>
  );
};

export default App;
