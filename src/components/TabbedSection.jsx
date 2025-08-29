import { useState } from "react";
import "./TabbedSection.css";

// Import images from assets
import parliamentImg from "../assets/images/tab-1.png";
import mpReportImg from "../assets/images/tab-2.png";
import dishaImg from "../assets/images/tab-3.png";
import budgetImg from "../assets/images/tab-4.png";
import annualReportImg from "../assets/images/tab-5.png";
import coumaImg1 from "../assets/images/left-couma.png";
import coumaImg2 from "../assets/images/right-couma.png";

// All tab data
const tabData = [
  {
    label: (
      <>
        Parliament <br /> in Action
      </>
    ),
    heading: "Parliament in Action",
    description: (
      <>
        Our <strong>flagship youth leadership program</strong> designed to
        demystify Parliament and policy for young changemakers. Participants
        engage in <strong>parliamentary procedure workshops</strong>, mock
        parliaments, <strong>direct MP interactions</strong>, and{" "}
        <strong>career mentoring</strong> with policy professionals.
      </>
    ),
    points: [
      { text: <><strong>4 editions</strong> completed</>, iconColor: "#2F872D" },
      { text: <><strong>60+ youth</strong> trained</>, iconColor: "#2F872D" },
    ],
    image: parliamentImg,
    cta: {
      text: "Train 1000+ informed, action-driven citizens across India",
      bgColor: "#E1EAFF",
      textColor: "#12305E"
    },
    bgStyle: {
      borderRadius: "13px",
      background: "#F4F6FB",
      boxShadow: "6px 4px 30.3px 0 rgba(31, 40, 89, 0.13)"
    }
  },
  {

    label: (
      <>
        End of Session MP <br /> Performance Reports
      </>
    ),
    heading: "End of Session MP Performance Reports",
    description: "We create data-backed session-end report cards for Members of Parliament, analysing questions asked, debates participated in, and attendance—making Parliament more transparent and MPs more accountable to citizens.",
    points: [
      { text: <><strong>3 reports</strong> published: Monsoon, Winter, Budget <br /> Sessions (2024–25)</>, iconColor: "#2F872D" },

    ],
    image: mpReportImg,
    cta: {
      text: "Because more informed citizens create better policymakers.",
      bgColor: "#F9DCC0",
      textColor: "#BE582D"
    },
    bgStyle: {
      borderRadius: "13px",
      background: "#F8EBDF",
      boxShadow: "6px 4px 30.3px 0 rgba(31, 40, 89, 0.13)"
    }
  },
  {
    label: (
      <>
        DISHA Meeting <br /> Facilitation
      </>
    ),
    heading: "DISHA Meeting Facilitation",
    description: "We help MPs drive district-level development by equipping them with evidence-based analysis on the implementation of central schemes. Our work strengthens the DISHA Meeting platform by ensuring decisions are backed by data and aligned with local needs. ",
    points: [{ text: <><strong>10+ DISHA meetings  </strong> facilitated (July 2024–July 2025)</>, iconColor: "#2F872D" },],
    image: dishaImg,
    cta: {
      text: "Helping MPs bridge the gap between policy and delivery",
      bgColor: "#E1EAFF",
      textColor: "#12305E"
    },
    bgStyle: {
      borderRadius: "13px",
      background: "#F4F6FB",
      boxShadow: "6px 4px 30.3px 0 rgba(31, 40, 89, 0.13)"
    }
  },
  {
    label: (
      <>
        Decoding Budget & <br /> Impact AP
      </>
    ),
    heading: "Decoding Budget & Impact AP",
    description: "We developed Decoding Budget: AP Edition, breaking down budget allocations, scheme performance, and impact gaps specific to the state — making policymaking more accessible and actionable.\nIn parallel, through our initiative Impact AP, we facilitated high-level conversations between Parliament and the executive — identifying bottlenecks and bridging implementation gaps.",
    points: [
      { text: <> 80+ consultations with Joint Secretaries</>, iconColor: "#2F872D" },
      { text: <> 25+ central ministries engaged</>, iconColor: "#2F872D" },

    ],
    image: budgetImg,
    cta: {
      text: "Turning budgets and policies into real outcomes—one state at a time.",
      bgColor: "#F9DCC0",
      textColor: "#BE582D"
    },
    bgStyle: {
      borderRadius: "13px",
      background: "#F8EBDF",
      boxShadow: "6px 4px 30.3px 0 rgba(31, 40, 89, 0.13)"
    }
  },
  {
    label: (
      <>
        Annual MP Performance <br /> Analysis Report
      </>
    ),
    heading: "Annual MP Performance Analysis Report",
    description: "We published a first-of-its-kind performance report evaluating Lok Sabha MPs—assessing their work in Parliament through questions, debates, and attendance, while also analysing trends across education, age, gender, and experience.",
    points: [{
      text: <>3 core performance parameters tracked
      </>, iconColor: "#2F872D"
    },
    { text: <> 4 demographic variables studied</>, iconColor: "#2F872D" },],
    image: annualReportImg,
    // ...existing fields...
    cta: {
      text: (
        <>  <>
          <span
            className="heading-serif"
            style={{
              fontSize: "17px",
              lineHeight: "1.4",   // gap
              display: "inline-block"
            }}
          >
            A data-driven effort to make political accountability measurable and accessible <br />
            because who represents us, and how they perform, truly matters.
          </span>
        </>
        </>
      ),
      bgColor: "#E1EAFF",
      textColor: "#12305E"
    },
    bgStyle: {
      borderRadius: "13px",
      background: "#F4F6FB",
      boxShadow: "6px 4px 30.3px 0 rgba(31, 40, 89, 0.13)"
    }
  },
];

export default function TabbedSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeData = tabData[activeTab];

  return (
    <section className="container py-5 tabed-section">
      <h2 className="text-center head_main mb-2">Our Unique Initiatives</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs  border-bottom mb-3 d-flex justify-content-between flex-nowrap overflow-auto">
        {tabData.map((tab, index) => (
          <li className="nav-item" key={index}>
            <button
              className={`nav-link ${activeTab === index
                ? "active text-danger border-danger border-bottom border-2"
                : ""
                }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="bg-tab p-4" style={activeData.bgStyle}>
        <div className="row align-items-center">
          {/* Left: Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className=" text-start mb-2 heading-serif">{activeData.heading}</h2>
            <p>{activeData.description}</p>

            {activeData.points.length > 0 && (
              <ul className="list-unstyled mt-4">
                {activeData.points.map((point, idx) => (
                  <li className="d-flex align-items-start mb-2" key={idx}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <path
                        d="M13.1768 24.2591C7.11186 24.2591 2.19529 19.3425 2.19529 13.2776C2.19529 7.21271 7.11186 2.29614 13.1768 2.29614C19.2416 2.29614 24.1582 7.21271 24.1582 13.2776C24.1582 19.3425 19.2416 24.2591 13.1768 24.2591ZM12.0815 17.6702L19.8466 9.90512L18.2936 8.35211L12.0815 14.5642L8.97548 11.4581L7.42246 13.0112L12.0815 17.6702Z"
                        fill={point.iconColor}
                      />
                    </svg>
                    <span className="ms-2">{point.text}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}

          </div>

          {/* Right: Image */}
          <div className="col-lg-6 text-center">
            <img
              src={activeData.image}
              alt={activeData.heading}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="d-flex align-items-center gap-2">

            {/* Left decoration */}
            <img
              src={coumaImg1}
              alt="left"
              className="img-fluid"
              style={{ marginTop: "32px" }}
            />

            <div
              className="px-4 py-1 rounded text-center"
              style={{
                background: activeData.cta.bgColor,
                color: "#12305E",
                fontFamily: '"DM Serif Display"',
                fontSize: "30px",
                fontWeight: 500,
              }}
            >
              {activeData.cta.text}
            </div>

            {/* Right decoration */}
            <img
              src={coumaImg2}
              alt="right"
              className="img-fluid"
              style={{ marginTop: "-32px" }}
            />

          </div>
        </div>

      </div>
    </section>
  );
}