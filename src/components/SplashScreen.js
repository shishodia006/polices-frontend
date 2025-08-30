import React, { useEffect, useRef, useState } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const splashSeen = sessionStorage.getItem("splashSeen");
    if (splashSeen) {
      // pehle se dekhi hui tab me skip karo
      if (onFinish) onFinish();
    }
  }, [onFinish]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3;

      videoRef.current.onended = () => {
        document.body.style.backgroundColor = "#fff";
        sessionStorage.setItem("splashSeen", "true");
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 500); // thoda delay for smooth transition
      };
    }
  }, [onFinish]);

  return (
    <div className="splash-wrapper">
      {/* Placeholder / loader */}
      {!videoLoaded && (
        <img
          src="/images/video-placeholder.jpg"
          alt="Loading..."
          className="video-placeholder"
        />
      )}

      <video
        ref={videoRef}
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto" // preload auto for smoother playback
        className="video-element"
        onCanPlay={() => setVideoLoaded(true)}
      />
    </div>
  );
}
