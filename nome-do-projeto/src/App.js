import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import './app.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função simulada para autenticar o usuário
  const handleLogin = (email, password) => {
    // Simulação: substitua por uma chamada à API
    if (email === "admin@example.com" && password === "password123") {
      setIsAuthenticated(true);
      return true; // Login bem-sucedido
    } else {
      alert("Credenciais inválidas!");
      return false; // Falha no login
    }
  };

  return (
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />

        {/* Rota Protegida */}
        <Route
          path="/nome-do-projeto/src/components/Dashboard.js"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
