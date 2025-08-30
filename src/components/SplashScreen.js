import React, { useEffect, useRef, useState } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }) {
  const videoRef = useRef(null);
  const [shouldShow, setShouldShow] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const splashSeen = sessionStorage.getItem("splashSeen");
    if (splashSeen) {
      if (onFinish) onFinish();
    } else {
      setShouldShow(true);
    }
  }, [onFinish]);

  useEffect(() => {
    if (shouldShow && videoRef.current) {
      videoRef.current.playbackRate = 3;

      videoRef.current.onended = () => {
        document.body.style.backgroundColor = "#fff";
        sessionStorage.setItem("splashSeen", "true");
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 500);
      };
    }
  }, [shouldShow, onFinish]);

  if (!shouldShow) return null;

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
        preload="none"         // ✅ preload none for faster homepage render
        className="video-element"
        onCanPlay={() => setVideoLoaded(true)} // ✅ video ready, hide placeholder
      />
    </div>
  );
}
