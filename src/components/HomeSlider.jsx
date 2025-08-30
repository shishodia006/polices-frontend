import React from "react";

import frameimg1 from "../assets/images/slide-2.png";
import frameimg2 from "../assets/images/slide-1.png";
import frameimg3 from "../assets/images/slide-3.png";
import "./HomeSlider.css";
const HomeSlider = () => {
  return (
    <div className="image-section-container">
      {/* First Card */}
      <div className="image-card" style={{ backgroundImage: `url(${frameimg1})` }}>
        <div className="card-content hidden-content">
          <h2 className="heading-serif">Are you a Political Leader?
          </h2>
          <h6 className="slide_heading">working to create lasting change
          </h6>
          <p className="slide_subheading">We help you transform ideas into action -through research, policy inputs, strategic communication, and constituency impact.
          </p>
        </div>
        <span className="vertical-text heading-serif">Political Leader</span>
      </div>

      {/* Second Card */}
      <div className="image-card" style={{ backgroundImage: `url(${frameimg2})` }}>
        <div className="card-content hidden-content">
          <h2 className="heading-serif">Are you a Young Changemaker?
          </h2>
          <h6 className="slide_heading">passionate about public policy & politics</h6>
          <p className="slide_subheading">We open doors for you to learn, lead, and make a difference—through mentorship, policy research, hands-on workshops, internships, and field exposure.
          </p>
        </div>
        <span className="vertical-text heading-serif">Young Changemaker</span>
      </div>

      {/* Third Card */}
      <div className="image-card" style={{ backgroundImage: `url(${frameimg3})` }}>
        <div className="card-content hidden-content">
          <h2 className="heading-serif">Are you a Organisation?
          </h2><h6 className="slide_heading">working to drive policy change or raise awareness on social issues</h6>
          <p className="slide_subheading">We help you engage with policymakers, shape public discourse, and advance legislative reforms that matter</p>
        </div>
        <span className="vertical-text heading-serif">Organisation</span>
      </div>
    </div>
  );
};

export default HomeSlider;
