import React from "react";
import Video from "../components/Video/Video";

import BottomNav from "../components/BottomNav"; 

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
    url: "/videos/vid3.mp4",
    likes: "89",
    comment: "23",
    shares: "29",
  },
  {
    channel: "ccc",
    song: "song-3",
    url: "/videos/reel1.mp4",
    likes: "89",
    comment: "23",
    shares: "29",
  },
  {
    channel: "ccc",
    song: "song-3",
    url: "/videos/reel1.mp4",
    likes: "89",
    comment: "23",
    shares: "29",
  },
  {
    channel: "ccc",
    song: "song-3",
    url: "/videos/reel2.mp4",
    likes: "89",
    comment: "23",
    shares: "29",
  },
];

const ReelsPage = () => {
  return (
    <>  
      <div className="main-container  "> {/* Ensure max-width is same as video container */}
        <div className="video-container ">
          {data.map((list, i) => (
            <Video
              key={i}
              channel={list.channel}
              song={list.song}
              url={list.url}
              likes={list.likes}
              comment={list.comment}
              shares={list.shares}
            />
          ))}
        </div>
        <div className="bottom-menu">
        <BottomNav />
        </div>
        
      </div>
    </>
  );
};


export default ReelsPage;
