
import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    organization: "",
    role: "",
    password: "",     
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8085/api/v1/customer/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert("Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" name="customerName" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="text" name="organization" placeholder="Organization" onChange={handleChange} required />
      <select name="role" onChange={handleChange} required>
        <option value="">Select Role</option>
        <option value="Donor">Donor</option>
        <option value="Receiver">Receiver</option>
      </select>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required /> 
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
