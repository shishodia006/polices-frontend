import React from 'react';

import HeroSection from '../components/HeroSection';
import About from '../components/About';
import "./Style.css";
import TabbedSection from '../components/TabbedSection';
import CollaborateSection from "../components/CollaborateSection";
import TestimonialSlider from "../components/TestimonialSlider";
import  founderImg from "../assets/images/founder-.png";
function Home() {
  return (
    <div>       
       <HeroSection />
      <About />
    <div className="container mt-5 pt-4">
    <div className="founder-message-section">
      <div className="founder-box container">
        <div className="founder-content pe-md-5">
          <div className="founder-heading">Founder’s Message</div>
         <blockquote>
  <strong
    style={{
      color: "#19213D",
      fontFamily: "DM Serif Display",
      fontSize: "30px",
      fontStyle: "italic",
      fontWeight: 400,
      lineHeight: "normal"
    }}
  >
    “Politics is not just about power—it’s about purpose.”
  </strong>
</blockquote>

          <p className="mb-0">
            PFI was born from the simple yet urgent need to bridge the gap between people, policy, and Parliament.
            We envision a democracy where every citizen is empowered  to engage, every policymaker is equipped to act, and every transformative idea is turned into tangible change.
          <br />   Our work is about turning intent into action—because change doesn’t happen on its own. It needs to be made.
          </p>
          <p className="founder-name text-end">~ Kilaru Naga Sravan</p>
        </div>
       <div className="founder-image" style={{ position: "relative" }}>
        <img
          src={founderImg}
          className="img-fluid"
          alt="Founder"
        />
      </div>
      </div>
    </div>
    </div>

 <TabbedSection />
 <TestimonialSlider/>
  <CollaborateSection />
  
      </div>
  );
}

export default Home;
