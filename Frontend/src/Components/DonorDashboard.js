import React, { useState } from "react";
import Navbar from "./Navbar";

function Donor() {
  const [formData, setFormData] = useState({
    name: "",
    foodName: "",
    foodType: "Veg",
    foodQuantity: "",
    pickupLocation: "",
    contactNumber: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        expiryDate: new Date(formData.expiryDate).toISOString().split("T")[0],
      };
  
      const response = await fetch("http://localhost:8085/api/v1/foodItem/donateFood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Food donation submitted successfully!");
        console.log("Response:", result);
      } else {
        alert("Failed to submit the donation. Please try again.");
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the donation.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="donor-form-container">
        <h1>Donation Application</h1>
        <form onSubmit={handleSubmit} className="donor-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="foodName">Food Name:</label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="foodType">Food Type:</label>
            <select
              id="foodType"
              name="foodType"
              value={formData.foodType}
              onChange={handleChange}
              required
            >
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="foodQuantity">Food Quantity:</label>
            <input
              type="text"
              id="foodQuantity"
              name="foodQuantity"
              value={formData.foodQuantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pickupLocation">Pick Up Location:</label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="primary-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Donor;

