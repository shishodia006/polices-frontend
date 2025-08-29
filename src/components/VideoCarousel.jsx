import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import thumb1 from "../assets/images/thumb.png";
import thumb2 from "../assets/images/thumb2.png";
import thumb3 from "../assets/images/thumb-3.png";
import thumb4 from "../assets/images/thumb-4.png";
import thumbicon from "../assets/images/thumb-icon.png";

import thumbVideo1 from "../assets/videos/c2958.mp4";
import thumbVideo2 from "../assets/videos/c2961.mp4";
import thumbVideo3 from "../assets/videos/c2963.mp4";
import thumbVideo4 from "../assets/videos/c2966.mp4";






const videos = [
  { id: 1, thumbnail: thumb1, src: thumbVideo1 },
  { id: 2, thumbnail: thumb2, src: thumbVideo2 },
  { id: 3, thumbnail: thumb3, src: thumbVideo3 },
  { id: 4, thumbnail: thumb4, src: thumbVideo4 },
];

export default function VideoCarousel() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div
        id="videoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {videos.concat(videos).map((video, idx) => {   // repeat videos
            if (idx % 3 === 0) {
              return (
                <div
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  key={idx}
                >
                  <div className="d-flex gap-0 justify-content-between">
                    {videos.concat(videos).slice(idx, idx + 3).map((v) => (
                      <div key={v.id} className="video-card">
                        <div className="position-relative">
                          {/* Thumbnail */}
                          <img
                            src={v.thumbnail}
                            className="rounded"
                            alt={`Video ${v.id}`}
                            style={{
                              width: "372px",
                              height: "238px",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedVideo(v.src)}
                          />

                          {/* Play Button Overlay */}
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedVideo(v.src)}
                          >
                            <img
                              src={thumbicon}
                              alt="Play"
                              style={{
                                width: "54px",
                                height: "54px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="prev"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
            <g filter="url(#filter0_d_1130_339)">
              <path d="M2 23C2 13.6112 9.61116 6 19 6C28.3888 6 36 13.6112 36 23C36 32.3888 28.3888 40 19 40C9.61116 40 2 32.3888 2 23Z" fill="#F4F4F4" />
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4771 21.8891L21.5856 14.0705C22.2051 13.4731 23.1864 13.4731 23.806 14.0705C24.4583 14.6995 24.4583 15.7442 23.806 16.3732L17.68 22.2801C17.2722 22.6734 17.2722 23.3266 17.68 23.7199L23.806 29.6268C24.4583 30.2558 24.4583 31.3005 23.806 31.9295C23.1864 32.5269 22.2051 32.5269 21.5856 31.9295L13.4771 24.1109C13.1716 23.8163 13 23.4167 13 23C13 22.5833 13.1716 22.1837 13.4771 21.8891Z" fill="#2A2A2A" />
            <defs>
              <filter id="filter0_d_1130_339" x="0.6" y="0.6" width="52.8" height="52.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="8" dy="4" />
                <feGaussianBlur stdDeviation="4.7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1130_339" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1130_339" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <g filter="url(#filter0_d_166_395)">
              <path d="M39 23C39 32.3888 31.3888 40 22 40C12.6112 40 5 32.3888 5 23C5 13.6112 12.6112 6 22 6C31.3888 6 39 13.6112 39 23Z" fill="#F4F4F4" />
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5229 24.1109L19.4145 31.9295C18.7949 32.5269 17.8136 32.5269 17.194 31.9295C16.5417 31.3005 16.5417 30.2558 17.194 29.6268L23.32 23.7199C23.7278 23.3266 23.7278 22.6734 23.32 22.2801L17.194 16.3732C16.5417 15.7442 16.5417 14.6995 17.194 14.0705C17.8136 13.4731 18.7949 13.4731 19.4144 14.0705L27.5229 21.8891C27.8284 22.1837 28 22.5833 28 23C28 23.4167 27.8284 23.8163 27.5229 24.1109Z" fill="#2A2A2A" />
            <defs>
              <filter id="filter0_d_166_395" x="0.0999999" y="0.0999999" width="49.8" height="49.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="3" dy="2" />
                <feGaussianBlur stdDeviation="3.95" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_166_395" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_166_395" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
      </div>

      {/* Modal */}
      {/* ✅ Custom Modal */}
      {selectedVideo && (
        <div
          className="custom-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
            padding: "20px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "700px",
              background: "#FFF",
              borderRadius: "20px",
              boxShadow:
                "-2px -2px 8.4px 0 rgba(28, 76, 135, 0.12), 6px 6px 13.1px 0 rgba(28, 76, 135, 0.12)",
              overflow: "hidden",
            }}
          >
            {/* 🔹 Top Border Strip */}
            <div
              style={{
                height: "8px",
                background: "#FF611F",
                borderRadius: "15px 14px 0 0",
                opacity: 0.91,
              }}
            ></div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: "absolute",
                top: "5px",
                right: "0px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                color: "#333",
                cursor: "pointer",
                zIndex: 110000,
              }}
            >
              ✕
            </button>

            {/* Video Section */}
            <div style={{ padding: "25px 25px 10px 25px" }}>
              <video
                src={selectedVideo}
                controls
                autoPlay
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "17px",
                  background: "#D9D9D9",
                }}
              />
            </div>

            {/* Thumbnail Section */}
            {/* Thumbnail Section */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                padding: "0px 12px 20px 12px",
              }}
            >
              {videos
                .filter((v) => v.src !== selectedVideo) // jo video play ho rahi hai usko hatao
                .slice(0, 3) // sirf 3 thumbnails lo
                .map((v) => (
                  <div
                    key={v.id}
                    style={{
                      position: "relative",
                      width: "30%",
                      height: "80px",
                      borderRadius: "17px",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedVideo(v.src)} // click par main video change
                  >
                    {/* Thumbnail Image */}
                    <img
                      src={v.thumbnail}
                      alt={`Video ${v.id}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "17px",
                      }}
                    />

                    {/* Play Button Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <img
                        src={thumbicon}
                        alt="Play"
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
