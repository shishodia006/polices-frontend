import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FounderSection.css";
import founderimg from '../assets/images/founder.png';

import MapWithMarkers from "./MapWithMarkers";

export default function FounderSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="container mb-5 founder-section">
      <div className="row align-items-center">
        {/* Left Side - Founder Image */}
        <div className=" col-lg-6 col-md-6 col-sm-12">

        
      <h2 className="our-team-title">Our Team</h2>
      <p className="our-team-text mb-md-5 ">
        <strong>Policy is the blueprint.</strong><br />
        <strong>Politics is the terrain.</strong><br />
        We navigate both —<br />
        to turn intent into impact
      </p>
  
          <div
            className="founder-image-wrapper pt-md-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={founderimg}
              alt="Founder"
              className="img-fluid rounded"
            />

            {/* Small Card (default) or Large Card (hover) */}
            <div className={`overlay-card ${hovered ? "large" : "small"}`}>
              {!hovered ? (
                <div>
                  <h5 className="mb-0 heading">Kilaru Naga Sravan</h5>
                  <small className="text-muted">Founder</small>
                </div>
              ) : (
                <div>
                  <h4>Kilaru Naga Sravan</h4>
                  <h6 className="text-muted mb-3">Founder</h6>
                  <p>
                    An engineer by education and a politician by conviction,
                    Sravan is the visionary founder of Politics for Impact.
                    He spearheaded the YuvaGalam movement, covering over 3,000 km
                    and engaging 1,00,000+ youth to co-create India's first Youth Manifesto.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - India Map */}
        <div className="col-lg-6 col-md-6 col-sm-12 pt-5">
            <MapWithMarkers />
        </div>
      </div>
    </div>
  );
}
