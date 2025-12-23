import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter both email and password");
    } else {
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          setMessage(data.message);
          console.log("Server response:", data);

          if (data.success) {
            // Example: Redirect to home page
            window.location.href = "/";
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          setMessage("Something went wrong. Try again!");
        });
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        {message && <p className="msg">{message}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        <p className="signup-link">
          Back to Home <a href="/">🏠</a>
        </p>
      </form>
    </div>
  );
}

export default Login;