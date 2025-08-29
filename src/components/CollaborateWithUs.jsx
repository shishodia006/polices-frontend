import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import illustrateimg from '../assets/images/illustration.png';
import { BiFontSize } from 'react-icons/bi';
const CollaborateWithUs = () => {
const [open, setOpen] = useState(false);

  return (
    <section className="container my-5">

      {/* Header Section */}
     <div
  className="p-2 d-flex px-md-5 px-4 justify-content-between align-items-center mb-3"
  style={{
    borderTop: '6px solid #f97316',
    cursor: 'pointer',
    borderRadius: '20px',
    background: '#FFF',
    boxShadow:
      '-2px -2px 8.4px 0 rgba(28, 76, 135, 0.12), 6px 6px 13.1px 0 rgba(28, 76, 135, 0.12)',
  }}
  onClick={() => setOpen(!open)}
>
  <h3
    className="mb-0 heading-serif text-orange-600 fs-3"
    style={{ color: '#f97316' }}
  >
  Collaborate With Us
  </h3>

  <div
    className={`fs-3 text-orange-500 ${open ? 'rotate-180' : ''}`}
    style={{ transition: 'transform 0.3s' }}
  >
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
      >
        <g clipPath="url(#clip0_434_320)">
          {/* Default Down Arrow ↓ */}
          <path
            d="M8.71017 3.33333L6.66699 5.31633L17.8023 16.1173C17.9807 16.2914 18.1929 16.4296 18.4266 16.5238C18.6603 16.6181 18.911 16.6667 19.1641 16.6667C19.4172 16.6667 19.6679 16.6181 19.9016 16.5238C20.1353 16.4296 20.3475 16.2914 20.5259 16.1173L31.667 5.31633L29.6238 3.3352L19.167 13.4726L8.71017 3.33333Z"
            fill="#FF611F"
            stroke="#FF611F"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_434_320">
            <rect
              width="20"
              height="40"
              fill="white"
              transform="translate(0 20) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
  </div>
</div>


      {/* Collapsible Content */}
      <Collapse in={open}>
       <div>
  <div
    className="accordion-body px-4  pb-0 text-center position-relative"
    style={{
      borderRadius: "20px",
      background: "#FFF",
      boxShadow:
        "-2px -1px 13.2px 0 rgba(14, 38, 75, 0.16), 4px 4px 4px 0 rgba(18, 48, 94, 0.10)"
    }}
  >
    <p className="fs-5 pt-4">
      We partner with <strong><em>nonprofits</em></strong>,{" "}
      <strong><em>civil society organisations</em></strong>,
      <strong><em>academic institutions</em></strong>, and{" "}
      <strong><em>corporate teams</em></strong> to design <br /> impactful,
      non-partisan engagement with{" "}
      <strong><em>Members of Parliament</em></strong>.
    </p>

    <p className="text-muted fs-6">
      Whether you're looking to translate field insights into policy, raise
      awareness on key issues, or design long-term advocacy strategies
    </p>

    <h5 className="fw-bold mt-3 mb-2">
      We help shape meaningful legislative conversations.
    </h5>

    <p className="fw-semibold mb-2">To explore a collaboration, write to us at</p>

 <a
  href="mailto:partnerships@politicsforimpact"
  className="text-decoration-none text-orange"
  style={{ fontSize: "calc(1.175rem + .3vw)" }}
>
 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 35 36"
        fill="none"
      >
        <path
          d="M31.9454 9.16436C31.9454 7.5671 30.6385 6.26025 29.0413 6.26025H5.80841C4.21115 6.26025 2.9043 7.5671 2.9043 9.16436V26.589C2.9043 28.1863 4.21115 29.4931 5.80841 29.4931H29.0413C30.6385 29.4931 31.9454 28.1863 31.9454 26.589V9.16436ZM29.0413 9.16436L17.4248 16.4246L5.80841 9.16436H29.0413ZM29.0413 26.589H5.80841V12.0685L17.4248 19.3287L29.0413 12.0685V26.589Z"
          fill="#FF611F"
        />
      </svg>
      &nbsp;partnerships@politicsforimpact
    </a>

    {/* Niche wali image ko padding se alag karne ke liye */}
    <div className="text-center mt-3">
      <img
        src={illustrateimg}
        alt="decorative"
        className="img-fluid"
        style={{ marginBottom: "0rem" }} // 👈 bottom chipki rahe
      />
    </div>
  </div>
</div>

      </Collapse>

      {/* Custom CSS */}
      <style>
        {`
          .text-orange {
            color: #f7631b;
          }
          .rotate-180 {
            transform: rotate(180deg);
          }
        `}
      </style>
    </section>
  );
};

export default CollaborateWithUs;
