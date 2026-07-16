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
    if (!shouldShow || !videoRef.current) return;

    const finish = (markSeen) => {
      document.body.style.backgroundColor = "#fff";
      if (markSeen) sessionStorage.setItem("splashSeen", "true");
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 500);
    };

    videoRef.current.playbackRate = 3;
    videoRef.current.onended = () => finish(true);
    // ✅ Agar video load na ho paaye (403/network/etc), splash skip karke
    // seedha homepage dikhao — white screen na aaye
    videoRef.current.onerror = () => finish(false);

    // ✅ Safety net: video stuck reh jaaye (na ended, na error) to bhi
    // homepage aa jaye
    const fallbackTimer = setTimeout(() => finish(false), 6000);

    return () => clearTimeout(fallbackTimer);
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
