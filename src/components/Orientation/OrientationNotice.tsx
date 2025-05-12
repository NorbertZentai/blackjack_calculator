import React, { useEffect, useState } from "react";
import "./OrientationNotice.scss";

const OrientationNotice: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isPortrait) return null;

  return (
    <div className="orientation-overlay">
      <div className="orientation-text">
        📲 Kérlek fordítsd el a készüléket fekvő (landscape) módba a játékhoz!
      </div>
    </div>
  );
};

export default OrientationNotice;