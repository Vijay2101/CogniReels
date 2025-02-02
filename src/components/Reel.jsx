import React, { useRef, useEffect } from "react";

const Reel = ({ videoUrl, title, description, isActive }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {/* Video Player */}
      <video
        ref={videoRef}
        autoPlay={isActive}
        loop
        muted
        controls
        className="w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    
    </div>
  );
};

export default Reel;