import React, { useEffect, useRef, useState } from "react";
import "./SplashScreen.css";
import { INTRO } from "../utils/constants"; // ✅ import the intro video

export default function SplashScreen({ onFinish }) {
  const videoRef = useRef(null);
  const [shouldShow, setShouldShow] = useState(false);

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
      <video
        ref={videoRef}
        src={INTRO}       // ✅ Use the CDN video here
        autoPlay
        muted
        playsInline
        className="video-element"
      />
    </div>
  );
}
