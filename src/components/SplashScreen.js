import React, { useEffect, useRef, useState } from "react";

import introVideo from "../assets/videos/intro.mp4";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }) {
  const videoRef = useRef(null);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check sessionStorage (not localStorage)
    const splashSeen = sessionStorage.getItem("splashSeen");

    if (splashSeen) {
      // agar pehle hi current tab me dekh liya hai -> skip karo
      if (onFinish) onFinish();
    } else {
      // agar first time current tab me aaye hain -> splash show karo
      setShouldShow(true);
    }
  }, [onFinish]);

  useEffect(() => {
    if (shouldShow && videoRef.current) {
      videoRef.current.playbackRate = 3; // video speed 3x

      videoRef.current.onended = () => {
        document.body.style.backgroundColor = "#fff";

        // mark splash as seen for current tab only
        sessionStorage.setItem("splashSeen", "true");

        setTimeout(() => {
          if (onFinish) onFinish();
        }, 500);
      };
    }
  }, [shouldShow, onFinish]);

  if (!shouldShow) return null; // agar splash nahi dikhana hai

  return (
    <div className="splash-wrapper">
      <video
        ref={videoRef}
        src={introVideo}
        autoPlay
        muted
        playsInline
        className="video-element"
      />
    </div>
  );
}
