// src/pages/OurWork.jsx

import React from 'react';
import KeyVerticals from '../components/KeyVerticals';
import ResearchPolicy from '../components/ResearchPolicy';
import ProgramsPolicyAdvocacy from '../components/ProgramsPolicyAdvocacy';
import StrategyCommunications from '../components/StrategyCommunications';
import workimg from '../assets/images/work.png';
import { Container, Row, Col } from "react-bootstrap";
import footerlogo from "../assets/images/footer-logo.png";
const OurWork = () => {
  return (
    <>
    <div className="container">
      <h2 className='text-center pt-4 mb-0 text-italic  head_main'>Our Work</h2>
      <p className='text-center'>How We Create Change: The PFI Approach</p>
      {/* <img src={workimg} alt="our-work" className="img-fluid  w-100 h-100 object-fit-cover" /> */}

    </div>
        <div className="container py-md-0 py-0">
          <KeyVerticals />
          <ResearchPolicy />
           <ProgramsPolicyAdvocacy />
             <StrategyCommunications />

             
        </div>
     <footer className="bg-light mt-md-0 mt-5 pt-4 border-top">
      <Container>
        <Row className=" text-center text-md-start justify-content-between  px-md-5">
          {/* Logo & Description */}
          <Col xs={12} md={4} className="d-flex flex-column align-items-center align-items-md-start">
            <img
              src={footerlogo}
              className="img-fluid mb-3 w-25"
              alt="footer logo"
            />
            <p className="text-muted mb-0">
              Working at the Confluence of <br />
              Policy and Politics.
            </p>
          </Col>

          {/* Contact Us */}
          <Col xs={12} md={8} className="d-flex flex-column align-items-center align-items-md-end my-auto">
            <h6 className="fw-bold">Contact Us</h6>
            <a
              href="mailto:info@politicsforimpact.com"
              className="text-decoration-none d-block mb-2"
              style={{ color: "#171717" }}
            >
              info@politicsforimpact.com
            </a>

            {/* Social Icons */}
            <div className="social-icons d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              {/* Instagram */}
              <a href="https://www.instagram.com/politicsforimpact/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                {/* Instagram SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M12.7827 7.948C11.4762 7.948 10.2233 8.46698 9.29947 9.39078C8.37567 10.3146 7.85669 11.5675 7.85669 12.874C7.85669 14.1804 8.37567 15.4334 9.29947 16.3572C10.2233 17.281 11.4762 17.7999 12.7827 17.7999C14.0891 17.7999 15.342 17.281 16.2658 16.3572C17.1896 15.4334 17.7086 14.1804 17.7086 12.874C17.7086 11.5675 17.1896 10.3146 16.2658 9.39078C15.342 8.46698 14.0891 7.948 12.7827 7.948ZM12.7827 16.0731C11.9339 16.0731 11.1199 15.7359 10.5198 15.1358C9.91964 14.5356 9.58248 13.7216 9.58248 12.8729C9.58248 12.0242 9.91964 11.2102 10.5198 10.61C11.1199 10.0099 11.9339 9.67273 12.7827 9.67273C13.6314 9.67273 14.4454 10.0099 15.0455 10.61C15.6457 11.2102 15.9828 12.0242 15.9828 12.8729C15.9828 13.7216 15.6457 14.5356 15.0455 15.1358C14.4454 15.7359 13.6314 16.0731 12.7827 16.0731Z" fill="#171717" />
                  <path d="M17.9033 8.91545C18.5375 8.91545 19.0517 8.40129 19.0517 7.76705C19.0517 7.13281 18.5375 6.61865 17.9033 6.61865C17.269 6.61865 16.7549 7.13281 16.7549 7.76705C16.7549 8.40129 17.269 8.91545 17.9033 8.91545Z" fill="#171717" />
                  <path d="M21.8765 6.59839C21.6298 5.96153 21.253 5.38318 20.77 4.90035C20.287 4.41753 19.7085 4.04088 19.0715 3.79451C18.3262 3.51471 17.5387 3.36342 16.7428 3.34708C15.7169 3.30233 15.3919 3.28955 12.7905 3.28955C10.189 3.28955 9.85555 3.28955 8.83819 3.34708C8.04282 3.36258 7.25595 3.51391 6.51156 3.79451C5.87444 4.04059 5.2958 4.41714 4.81275 4.9C4.32971 5.38286 3.95294 5.96136 3.70661 6.59839C3.42676 7.34369 3.27582 8.13119 3.26025 8.92715C3.21444 9.95197 3.20059 10.2769 3.20059 12.8794C3.20059 15.4809 3.20059 15.8122 3.26025 16.8317C3.27623 17.6286 3.42644 18.4148 3.70661 19.1615C3.95363 19.7983 4.33077 20.3766 4.81393 20.8594C5.29709 21.3422 5.87564 21.7189 6.51263 21.9654C7.25561 22.2565 8.0428 22.4186 8.84032 22.4448C9.86621 22.4895 10.1911 22.5034 12.7926 22.5034C15.3941 22.5034 15.7275 22.5034 16.7449 22.4448C17.5408 22.4286 18.3282 22.2777 19.0736 21.9984C19.7104 21.7515 20.2888 21.3745 20.7717 20.8916C21.2547 20.4086 21.6316 19.8303 21.8786 19.1935C22.1588 18.4478 22.309 17.6616 22.325 16.8647C22.3708 15.8399 22.3846 15.515 22.3846 12.9125C22.3846 10.3099 22.3846 9.97967 22.325 8.96017C22.3126 8.15296 22.1608 7.35395 21.8765 6.59839ZM20.5789 16.7529C20.572 17.3668 20.46 17.975 20.2476 18.5511C20.0876 18.9654 19.8427 19.3416 19.5286 19.6555C19.2145 19.9694 18.8382 20.2141 18.4238 20.3738C17.8541 20.5853 17.2524 20.6973 16.6447 20.7052C15.6327 20.752 15.3472 20.7638 12.7521 20.7638C10.1549 20.7638 9.88964 20.7638 8.85843 20.7052C8.25113 20.6977 7.64965 20.5856 7.08043 20.3738C6.66463 20.2151 6.28678 19.9708 5.97133 19.6569C5.65588 19.3429 5.40986 18.9662 5.24917 18.5511C5.03978 17.9812 4.92778 17.3802 4.91786 16.7731C4.87206 15.7611 4.8614 15.4756 4.8614 12.8805C4.8614 10.2843 4.8614 10.0191 4.91786 8.9868C4.92475 8.37321 5.03681 7.76534 5.24917 7.18963C5.57409 6.34911 6.23991 5.68755 7.08043 5.36583C7.64994 5.15505 8.25123 5.043 8.85843 5.03452C9.87153 4.98871 10.156 4.97593 12.7521 4.97593C15.3483 4.97593 15.6146 4.97593 16.6447 5.03452C17.2524 5.04183 17.8542 5.15391 18.4238 5.36583C18.8381 5.52592 19.2144 5.77086 19.5285 6.08494C19.8426 6.39903 20.0875 6.77531 20.2476 7.18963C20.457 7.75952 20.569 8.36057 20.5789 8.96763C20.6247 9.98073 20.6364 10.2652 20.6364 12.8613C20.6364 15.4564 20.6364 15.7355 20.5906 16.7539H20.5789V16.7529Z" fill="#171717" />
                </svg>
              </a>
              {/* LinkedIn */}
               <a href="https://in.linkedin.com/company/politicsforimpact" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {/* LinkedIn SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.656 9.64384H14.6125V11.6147C15.1825 10.4812 16.6441 9.46274 18.8396 9.46274C23.0487 9.46274 24.0479 11.7191 24.0479 15.8588V23.5258H19.7867V16.8016C19.7867 14.4441 19.2168 13.1146 17.7658 13.1146C15.7535 13.1146 14.9172 14.5474 14.9172 16.8006V23.5258H10.656V9.64384ZM3.34905 23.3447H7.61027V9.46274H3.34905V23.3447ZM8.22069 4.93626C8.22084 5.29343 8.15001 5.64706 8.0123 5.97662C7.87459 6.30617 7.67275 6.60507 7.41851 6.85594C6.90333 7.36795 6.20599 7.65454 5.47966 7.65278C4.7546 7.6523 4.05887 7.36643 3.54293 6.857C3.28961 6.60528 3.08846 6.30605 2.95099 5.97645C2.81352 5.64686 2.74244 5.29337 2.74182 4.93626C2.74182 4.21504 3.02945 3.52473 3.544 3.01551C4.05948 2.5054 4.7555 2.21941 5.48072 2.21973C6.20726 2.21973 6.90397 2.50629 7.41851 3.01551C7.93199 3.52473 8.22069 4.21504 8.22069 4.93626Z" fill="#171717" />
                </svg>
              </a>
            </div>
          </Col>

      
        </Row>
      </Container>

      {/* Footer Bottom */}
      <div
        className="text-center py-4 mt-4"
        style={{
          backgroundColor: "#F2F2F2",
          color: "#171717",
          fontFamily: "Roboto, sans-serif",
          fontSize: "14.9px",
          fontWeight: 400,
          lineHeight: "25.56px",
        }}
      >
        © 2025 Politics for Impact. All rights reserved.
      </div>
            </footer>
    </>
  );
};

export default OurWork;
