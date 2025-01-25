import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

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
        {/* Rota do Dashboard sem proteção */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
