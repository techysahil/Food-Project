import React from "react";
import AboutBackgroundImage from "../Assets/akshaya-patra-opens-a-new-kitchen-at-jodhpur.webp";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <section id={"about"}>
    <div className="about-section-container">
      <div className="about-background-image-container">
        
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Turning surplus into smiles!
        </h1>
        <p className="primary-text">
        Transforming abundance into comfort, we believe everyone deserves the joy of a fulfilled night's sleep.
        </p>
        <p className="primary-text">
          We bridge the gap between excess and need, ensuring everyone gets an equal share.
        </p>
        <div className="about-buttons-container">
        <a
              href="https://afood.org/the-power-of-giving-why-gifting-food-to-those-in-need-is-more-than-just-charity/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              Learn More
            </a>
            <a
              href="https://youtu.be/TVP3j7_W7og?si=D7F9M8SNyqfikNOV"
              target="_blank"
              rel="noopener noreferrer"
              className="watch-video-button"
            >
              <BsFillPlayCircleFill /> Watch Video
            </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;