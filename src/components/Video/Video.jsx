import React, { useRef, useState, useEffect } from "react";
import "./Video.css";
import VideoActions from "../VideoActions";

export default function Video({ channel, song, url, likes, comment, shares }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);  // State to control mute/unmute
  const vidRef = useRef(null);

  // Play/Pause video on click
  const onVideoClick = () => {
    if (vidRef.current) {
      if (isVideoPlaying) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  

  useEffect(() => {

    const playVideo = () => {
        if (vidRef.current) {
          vidRef.current.muted = false; // Force mute (browsers block autoplay with audio)
          vidRef.current.play().catch((error) => {
            console.log("Autoplay prevented:", error);
          });
        }
      };
    // Intersection Observer for autoplay on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play the video when it enters the view
            if (vidRef.current) {
              vidRef.current.play();
              setIsVideoPlaying(true);
              // Unmute when video is in view
            //   setIsMuted(false);
            }
          } else {
            // Pause the video when it leaves the view
            if (vidRef.current) {
              vidRef.current.pause();
              setIsVideoPlaying(false);
              // Mute when video is out of view
            //   setIsMuted(true);
            }
          }
        });
      },
      { threshold: 0.8 } // Trigger when 80% of video is in view
    );

    if (vidRef.current) {
      observer.observe(vidRef.current);
    }

    return () => {
      if (vidRef.current) {
        observer.unobserve(vidRef.current);
      }
    };
  }, []);

  return (
    <div className="video-card relative">
      <video
        onClick={onVideoClick}
        className=""
        ref={vidRef}
        src={url}
        loop
        playsInline
        muted={false}  // Control muting
      />
      {/* Position VideoActions on top of the video */}
      <VideoActions 
        likes={10} 
        comments={5} 
        shares={9} 
      />
    </div>
  );
}
