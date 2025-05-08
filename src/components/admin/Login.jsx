import React from "react";
import "./Admin.css";
import { NavLink } from "react-router";

function Login() {
  return (
    <main className="login-page">
      <h1>Logga in som administratör</h1>

      <div>
        <img src="https://img.icons8.com/?size=100&id=ywULFSPkh4kI&format=png&color=000000" alt="" />
        <input type="text" placeholder="Användarnman" name="" id="" />
      </div>
      <div>
        <img src="https://img.icons8.com/?size=100&id=2862&format=png&color=000000" alt="" />
        <input type="text" placeholder="Lösenord" name="" id="" />
      </div>

      <NavLink to="/admin">Logga in</NavLink>
    </main>
  );
}

export default Login;
