import React, {  } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialImg from "../assets/images/fatima.png"; // aap image path change karo

const testimonials = [
    {
        name: "Fatma",
        role: "Parliament in Action 2.0 Participant",
        text: `As a political science student, I thought I already knew about Zero Hour and Question Hour. But this workshop showed me what textbooks never could—the real meaning behind those procedures and the effort it takes to implement them. Understanding how Parliament functions behind the scenes was eye-opening. We often learn what happens in Parliament, but rarely how it actually works. This experience changed that for me.`,
        img: testimonialImg,
    },
    {
        name: "Fatma",
        role: "Parliament in Action 2.0 Participant",
        text: `As a political science student, I thought I already knew about Zero Hour and Question Hour. But this workshop showed me what textbooks never could—the real meaning behind those procedures and the effort it takes to implement them. Understanding how Parliament functions behind the scenes was eye-opening. We often learn what happens in Parliament, but rarely how it actually works. This experience changed that for me.`,
        img: testimonialImg,
    },

    // aur testimonials add kar sakte ho
];

const TestimonialSlider = () => {
   const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: "10%", // desktop ke liye
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1024, // tablet
      settings: {
        centerPadding: "5%", // thoda kam padding
      },
    },
    {
      breakpoint: 768, // mobile
      settings: {
        centerMode: false, // mobile me centerMode off
        centerPadding: "0px",
        arrows: false, // mobile pe arrows hata do (optional)
      },
    },
  ],
};


    return (
        <section className="my-box py-5 my-5">
            <div className="container testimonial-slider">
                <div className=" mb-4">
                    <h2 className="test_head mb-0">Testimonials</h2>
                    <p className="testimonial_subtext text-black text-center">In Their Words: The PFI Experience</p>
                </div>

                <Slider {...settings}>
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="px-3">

                            <div
                                className="card_testi mx-md-5 border-0 position-relative d-flex align-items-center"
                                style={{
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                    padding: "30px 20px"
                                }}
                            >
                                <div className="me-4 flex-shrink-0">

                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className="rounded-circle border border-white shadow"
                                        style={{ width: "120px", height: "120px", objectFit: "cover", marginLeft: "-65px" }}
                                    />
                                </div>

                                {/* Text */}
                                <div className="card-body text-start">
                                    <h5 className="fw-bold mb-1">{testimonial.name}</h5>
                                    <p className="text-muted mb-3">{testimonial.role}</p>
                                    <p className="mb-0">{testimonial.text}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialSlider;
