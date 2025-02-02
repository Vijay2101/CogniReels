import React from 'react'
import HomeTimeline from "../components/HomeTimeline";
import BottomNav from "../components/BottomNav"; 
// import Video from "../components/Video/Video";
// import HeroSection from "../components/HeroSection"; 


const data = [
    {
      channel: "aaa",
      song: "song-1",
      url: "/videos/vid1.mp4",
      likes: "32",
      comment: "2",
      shares: "23",
    },
    {
      channel: "bbb",
      song: "song-2",
      url: "/videos/vid2.mp4",
      likes: "3",
      comment: "22",
      shares: "23",
    },
    {
      channel: "ccc",
      song: "song-3",
      url: "",
      likes: "89",
      comment: "23",
      shares: "29",
    },
    {
        channel: "ccc",
        song: "song-3",
        url: "/videos/model.mp4",
        likes: "89",
        comment: "23",
        shares: "29",
      },
      {
        channel: "ccc",
        song: "song-3",
        url: "/videos/test1.mp4",
        likes: "89",
        comment: "23",
        shares: "29",
      },
  ];
const TimeLinePage = () => {
  return (
    <>  
      <div className="main-container"> {/* Ensure max-width is same as video container */}
        <div className="video-container mb-2 mt-2  ">
          
          <HomeTimeline />
        </div>
        <div className="bottom-menu ">
        <BottomNav />
        </div>
        
      </div>
    </>
  )
}

export default TimeLinePage
