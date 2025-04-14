import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // to redirect

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8085/api/v1/customer/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // assuming backend returns something like { role: "Donor" }
        if (data.role === "Donor") {
          navigate("/donor-dashboard");
        } else if (data.role === "Receiver") {
          navigate("/receiver-dashboard");
        }
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
