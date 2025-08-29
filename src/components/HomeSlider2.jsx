import React from "react";
import frameimg1 from "../assets/images/frame-1.png";
import frameimg2 from "../assets/images/Frame-2.png";
import frameimg3 from "../assets/images/frame-3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // ek card ek bar
    slidesToScroll: 1,
    autoplay: true, // auto scroll
    autoplaySpeed: 3000, // 3 sec me change hoga
    arrows: false,
  };

  const cards = [
    {
      img: frameimg1,
      title: "Are you a Political Leader?",
      subtitle: "working to create lasting change",
      text: "We help you transform ideas into action -through research, policy inputs, strategic communication, and constituency impact.",
      label: "Political Leader",
    },
    {
      img: frameimg2,
      title: "Are you a Young Changemaker?",
      subtitle: "passionate about public policy & politics",
      text: "We open doors for you to learn, lead, and make a difference—through mentorship, policy research, hands-on workshops, internships, and field exposure.",
      label: "Young Changemaker",
    },
    {
      img: frameimg3,
      title: "Are you a Organisation?",
      subtitle: "working to drive policy change or raise awareness on social issues",
      text: "We help you engage with policymakers, shape public discourse, and advance legislative reforms that matter",
      label: "Organisation",
    },
  ];

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div className="container" key={index} style={{ position: "relative", height: "400px",  }}>
          <div
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "20px",
              color: "#fff",
            }}
          >
            <h2 style={{ fontFamily: "serif", fontSize: "24px" }}>{card.title}</h2>
            <h6 style={{ fontSize: "16px", margin: "6px 0" }}>{card.subtitle}</h6>
            <p style={{ fontSize: "14px", lineHeight: "1.4" }}>{card.text}</p>
            <span
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                fontSize: "14px",
                fontWeight: "bold",
                background: "rgba(0,0,0,0.5)",
                padding: "4px 8px",
                borderRadius: "6px",
              }}
            >
              {card.label}
            </span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HomeSlider;
