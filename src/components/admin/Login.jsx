import React, { useState } from "react";
import "./Admin.css";
import { NavLink, useNavigate } from "react-router";
import { useMenuStore } from "../../data/store";

function Login() {
  const [userInput, setUserInput] = useState({ userName: "", password: "" });
  const [errorMessages, setErrorMessages] = useState("");
  const { switchIsLoggedIn } = useMenuStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userInput.userName === "admin" && userInput.password === "password") {
      navigate("/admin");
      switchIsLoggedIn();
    } else {
      setErrorMessages("Felaktiga inloggningsuppgifter, försök igen.");
    }
  };

  return (
    <main className="login-page">
      <h1>Logga in som administratör</h1>

      <div>
        <img src="https://img.icons8.com/?size=100&id=ywULFSPkh4kI&format=png&color=000000" alt="" />
        <input
          type="text"
          placeholder="Användarnman"
          onChange={(e) => setUserInput((prev) => ({ ...prev, userName: e.target.value }))}
        />
      </div>
      <div>
        <img src="https://img.icons8.com/?size=100&id=2862&format=png&color=000000" alt="" />
        <input
          type="password"
          placeholder="Lösenord"
          onChange={(e) => setUserInput((prev) => ({ ...prev, password: e.target.value }))}
        />
      </div>

      <p>{errorMessages}</p>

      <button onClick={handleLogin}>Logga in</button>
    </main>
  );
}

export default Login;
