import React from "react";
import "./app.css";

export default function App() {
  return (
    <div className="container">
      <div className="login-box">
        <h1 className="title">Login</h1>
        <form>
          <input
            type="email"
            placeholder="Digite seu email"
            className="input"
            required
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="input"
            required
          />
          <button type="submit" className="button">
            Entrar
          </button>
        </form>
        <p className="footer">
          Não tem uma conta? <a href="#register">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}

