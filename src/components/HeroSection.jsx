import React from "react";
import "./HeroSection.css";
import HomeSlider from "./HomeSlider";
import HomeSlider2 from "./HomeSlider2";

const HeroSection = () => {
  return (
    <>
      <p
        className="highlight-text"
        style={{
          textAlign: "center",
          background: "#DAEAFF",
          padding: "0.7rem",
          fontWeight: "bold",
        }}
      >
        Applications for Parliament in Action 5.0 are live!{" "} &nbsp;&nbsp;
        <a
          href="https://forms.gle/Wk2Ts64RVe1r5M1DA"
          className="get-started-btn px-3 py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      </p>
      <div className="container pb-5 px-0">
       <div className="row align-items-center">
          {/* Left content */}
          <div className="hero col-lg-5  text-center text-lg-start my-auto">
            <h1>
              We don’t just support impact, we <em>strategically</em> drive it
            </h1>
            <p className="text-subhero mt-3 mb-5">
              Working at the confluence of policy & politics.
            </p>
            <a href="/our-work" className=" get-started-btn">
              Explore how we catalyse change &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 9 18" fill="none">
                <path
                  d="M1.5 3.91943L2.39235 3L7.25277 8.01089C7.33112 8.09118 7.3933 8.18666 7.43573 8.29183C7.47816 8.397 7.5 8.50979 7.5 8.6237C7.5 8.73761 7.47816 8.85039 7.43573 8.95557C7.3933 9.06074 7.33112 9.15621 7.25277 9.23651L2.39235 14.25L1.50084 13.3306L6.06269 8.625L1.5 3.91943Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.6"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="col-lg-7 mt-md-0 mt-5">
            <div className="d-none d-md-block">
              <HomeSlider />
              {/* Desktop/Tablet only component */}
            </div>
            <div className="d-block d-md-none">
              <HomeSlider2 />
              {/* Mobile only component */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
