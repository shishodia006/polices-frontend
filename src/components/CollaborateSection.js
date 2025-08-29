import React from "react";
import "./CollaborateSection.css";
import leftimg from "../assets/images/left.png";
import rightimg from "../assets/images/right.png";

const CollaborateSection = () => {
  return (
    <section className="text-center justify-content-center align-items-center rounded-4 px-md-0 px-3">
      <div className="container collab_section px-md-0 px-3">
        <div className="row align-items-center p-0">
          {/* Left Image */}
          <div className="col-md-3 d-none d-md-block">
            <img src={leftimg} alt="Left Illustration" className="img-fluid" />
          </div>

          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-2">
              Let’s Turn Ideas Into Impact <br />
              If our work speaks to you - let’s talk.
            </h2>
            <p className="mb-4" style={{
              color: "#000",
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "28.496px", /* 178.102% */
              letterSpacing: "0.32px"
            }}>
              Whether you want to collaborate, join us, or explore how we can work together,
              we’re always open to new energy, insights, and partnerships.
            </p>
 <a
  href="#collaborate"
  className="collab_btn text-white text-decoration-none 
             d-inline-block text-center px-3 py-2 mx-auto">
  Discover how you can collaborate
</a>



          </div>

          {/* Right Image */}
          <div className="col-md-3 d-none d-md-block">
            <img src={rightimg} alt="Right Illustration" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
