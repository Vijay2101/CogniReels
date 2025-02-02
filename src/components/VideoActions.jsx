import React from "react";
import { HeartIcon, ShareIcon,MessageCircleMore } from "lucide-react"; // Importing icons from Lucid

const VideoActions = ({ likes, comments, shares }) => {
  return (
    <div className="video-actions">
      {/* Like Button */}
      <div className="action-item">
        <HeartIcon size={30} className="icon" />
        <span>{likes}</span>
      </div>

      {/* Comment Button */}
      <div className="action-item">
        <MessageCircleMore size={30} className="icon" />
        <span>{comments}</span>
      </div>

      {/* Share Button */}
      <div className="action-item">
        <ShareIcon size={30} className="icon" />
        <span>{shares}</span>
      </div>
    </div>
  );
};


export default VideoActions;
