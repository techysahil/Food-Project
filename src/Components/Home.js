import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../Assets/taro-pumps-food-security-2.jpg";
import Navbar from "./Navbar";
import AuthContainer from "./AuthBox/AuthContainer"; 
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();

  const handleDonateClick = () => {
    // navigate("/authbox");
    setShowAuth(true);
  };
  return (
    <section id={"home"}>
    <div className="home-container">
      <Navbar onLoginClick={() => setShowAuth(true)} />

      <div className="home-banner-container">
        <div className="home-bannerImage-container"></div>

        <div className="home-text-section">
        <h1 className="primary-heading">
          Waste Less, Feed More
          </h1>
          <p className="primary-text">
          Let's all contribute to a world where everyone has access to nutritious food by wasting less and feeding more
        </p>
        <p className="primary-text">
        Be the reason someone sleeps with a smiling face tonight.
        </p>
        <button className="secondary-button" onClick={handleDonateClick}>
              Donate Now! <FiArrowRight />
            </button>
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      {showAuth && <AuthContainer onClose={() => setShowAuth(false)} />}
    </div>
    </section>
  );
};

export default Home;
