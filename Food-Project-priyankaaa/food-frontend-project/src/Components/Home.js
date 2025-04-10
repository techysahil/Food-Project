import React, { useState } from "react";
import BannerImage from "../Assets/home-banner-img.jpg";
import Navbar from "./Navbar";
import AuthContainer from "./AuthBox/AuthContainer"; 
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="home-container">
      {/* Navbar with Login trigger */}
      <Navbar onLoginClick={() => setShowAuth(true)} />

      <div className="home-banner-container">
        <div className="home-bannerImage-container"></div>

        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Donate Now! <FiArrowRight />{" "}
          </button>
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

      {/* Show Auth modal if true */}
      {showAuth && <AuthContainer onClose={() => setShowAuth(false)} />}
    </div>
  );
};

export default Home;
