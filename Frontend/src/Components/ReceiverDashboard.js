import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
 

function Receiver() {
  const [donations, setDonations] = useState([
    {
      donorName: "John Doe",
      description: "Freshly cooked meals for 10 people.",
      contact: "123-456-7890",
      quantity: "10 meals",
      location: "Downtown, City A",
    },
    {
      donorName: "Jane Smith",
      description: "Canned food and dry goods.",
      contact: "987-654-3210",
      quantity: "20 items",
      location: "Uptown, City B",
    },
    {
      donorName: "Food Bank",
      description: "Bread and pastries.",
      contact: "555-555-5555",
      quantity: "50 items",
      location: "Central Market, City C",
    },
    {
      donorName: "John Doe",
      description: "Freshly cooked meals for 10 people.",
      contact: "123-456-7890",
      quantity: "10 meals",
      location: "Downtown, City A",
    },
    {
      donorName: "Jane Smith",
      description: "Canned food and dry goods.",
      contact: "987-654-3210",
      quantity: "20 items",
      location: "Uptown, City B",
    },
    {
      donorName: "Food Bank",
      description: "Bread and pastries.",
      contact: "555-555-5555",
      quantity: "50 items",
      location: "Central Market, City C",
    },
  ]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:8085/api/v1/foodItem/getFood")
      .then((response) => response.json())
      .then((data) => {
        setDonations(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching donations:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="receivers-container">
        <h1>Available Donations</h1>
        <div className="donations-list">
          {donations.map((donation, index) => (
            <div key={index} className="donation-card">
              <h2>{donation.donorName}</h2>
              <p>{donation.description}</p>
              <p>Contact: {donation.contact}</p>
              <p>Quantity: {donation.quantity}</p>
              <p>Location: {donation.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Receiver;
