import React from "react";
import "./CardSlider.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cardimg1 from "../assets/images/hover-1.png";
import cardimg2 from "../assets/images/hover-2.png";
import cardimg3 from "../assets/images/hover-3.png";
import cardimg4 from "../assets/images/hover-4.png";
import cardimg5 from "../assets/images/hover-5.png";
import cardimg6 from "../assets/images/hover-6.png";
// 👇 Annual Report ke liye PDF import
import annualReportPDF from "../assets/AnnualReport2024-25.pdf";

const hoverCards = [
  {
    id: 1,
    img: cardimg6,
    title: "End of Session Report – Monsoon Session 2024",
    desc: "Comprehensive analysis of TDP MPs’ parliamentary performance during the Monsoon Session 2024, covering attendance, speeches, bill discussions, and questions raised.",
  },
  {
    id: 2,
    img: cardimg1,
    title: "End of Session Report – Winter Session 2024",
    desc: "Detailed review of TDP MPs’ participation in the Winter Session 2024, highlighting attendance, speeches made, bills discussed, and key parliamentary questions.",
  },
  {
    id: 3,
    img: cardimg3,
    title: "End of Session Report – Budget Session 2025",
    desc: "In-depth account of TDP MPs’ participation in the Budget Session 2025, capturing attendance, speeches, interventions in bill debates, and questions posed in Parliament.",
  },
  {
    id: 4,
    img: cardimg5,
    title: "Decoding Budget",
    desc: "Scheme-wise breakdown of central government budget allocations for Andhra Pradesh, paired with an assessment of their on-ground performance—providing a data-driven foundation for targeted policy action.",
  },
  {
    id: 5,
    img: cardimg4,
    title: "IMPACT AP",
    desc: "Built on the insights from Decoding Budget, this report distills outcomes from meetings between TDP MPs and Joint Secretaries overseeing scheme implementation—offering concrete, scheme-specific actionables to improve delivery in Andhra Pradesh.",
  },
  {
    id: 6,
    img: cardimg2,
    title: "Annual Report 2024–25",
    desc: "A comprehensive analysis of all Lok Sabha MPs’ performance in the first year of 18th Lok Sabha, tracking patterns across gender, age, education, and experience to highlight emerging trends.",
    pdf: annualReportPDF, // 👈 PDF link yaha add kiya
  },
];

export default function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // desktop par 3
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // tablet par 2
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // mobile par ek hi card
          centerMode: false,
          arrows: false, // mobile me arrows off rakhenge
          dots: true, // sirf dots dikhayenge
        },
      },
    ],
  };

  return (
    <div className="card-slider-container" style={{ width: "95%", margin: "auto" }}>
      <Slider {...settings}>
        {hoverCards.map((card) => (
          <div key={card.id} className="hover-card">
            <div className="hover-card-inner">
              <img src={card.img} alt={card.title} />
              <div className="hover-overlay">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                {card.pdf && (
                  <a
                    href={card.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="see-more-btn"
                  >
                    See More
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
