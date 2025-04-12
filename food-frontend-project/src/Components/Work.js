import React from "react";
import PickMeals from "../Assets/1.png";
import ChooseMeals from "../Assets/2.png";
import DeliveryMeals from "../Assets/3.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Sign Up",
      text: "Register as a donor or receiver on our website. It's quick and easy!",
    },
    {
      image: ChooseMeals,
      title: "Share Food Details",
      text: "Donors fill in information about the available food, including type, quantity, and location.",
    },
    {
      image: DeliveryMeals,
      title: "Receive and Enjoy",
      text: " Receivers browse the listings and go to the specified address to collect and enjoy the meal.",
    },
  ];
  return (
    <section id={"work"}>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Our platform enables donors to share surplus food with those in need, fostering a community of generosity and sustainability.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Work;