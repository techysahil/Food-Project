import React from "react";
import ProfilePic from "../Assets/OIP (1).jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <section id={"testimonials"}>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Our platform has transformed the way we connect donors and receivers,
        making a real impact on reducing food waste and feeding those in need.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "As an NGO dedicated to fighting hunger, we have found this platform to be invaluable.
        We are proud to be part of this initiative that not only reduces food waste but also fosters 
        a spirit of generosity and support."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>NGO</h2>
      </div>
    </div>
    </section>
  );
};

export default Testimonial;
