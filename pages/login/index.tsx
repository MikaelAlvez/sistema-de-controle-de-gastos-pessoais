import React, { useState } from "react";
import logo from "../Images/logo.png";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-5/12 p-30 bg-gray-600 border rounded-3xl shadow-lg flex flex-col">
        <div className="w-full flex flex-col items-center">
          <img src={logo.src} alt="Logo" className="w-60 h-50" />
          <h1 className="text-3xl text-center text-white font-semibold">
            Gerenciamento de gastos
            <br />
            pessoais
          </h1>
        </div>
        <div className="w-full p-8">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              className="w-8/12 mx-auto p-4 mb-8 text-black border rounded bg-slate-200 border-gray-300"
              type="text"
              placeholder="Login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-8/12 mx-auto p-4 mb-8 text-black border rounded bg-slate-200 border-gray-300"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-3/12 mx-auto bg-blue-500 text-white text-3xl p-3 rounded-2xl hover:bg-blue-600"
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
