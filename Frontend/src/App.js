import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AuthBox from "./Components/AuthBox/AuthContainer";


import DonorDashboard from "./Components/DonorDashboard";
import ReceiverDashboard from "./Components/ReceiverDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Home id="home" />
              <About id="about" />
              <Testimonial id="testimonials" />
              <Contact id="contact" />
              <Footer />
              </>
            }
          />
          <Route path="/DonorDashboard" element={<DonorDashboard />} />
          <Route path="/ReceiverDashboard" element={<ReceiverDashboard />} />
          <Route path="/authbox" element={<AuthBox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
