import React from "react";
import Video from "../components/Video/Video";

// Static data for demonstration
const userProfile = {
  userId: "@john_doe",
  profileImage: "https://preview.redd.it/zfohxnf8t3pa1.jpg?width=1024&format=pjpg&auto=webp&v=enabled&s=0f660e0a56476991ee3b97f2885d8c010fec5b97", // Replace with user's image URL
  description: "Hello, I'm John Doe. Avid traveler and content creator!",
  followersCount: 300,
  followingCount: 180,
  uploads: 
  [
    { type: "image", src: "https://th.bing.com/th/id/R.515c0e619801f365f116d339da0f6e48?rik=aMUnhaiwfs8O4g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-2JaZ8aA8PRA%2fUbariv2XfQI%2fAAAAAAAAAxU%2fbFI9i33ENDQ%2fs1600%2fFree-Bird-mobile-hd-wallpaper.jpg&ehk=WoSRa%2fLb7524C3Rzxr%2bQSqbNXN3dEQ2D5lnzJk9dG7Y%3d&risl=&pid=ImgRaw&r=0" },
    { type: "video", src: "/videos/test1.mp4" },
    { type: "image", src: "https://th.bing.com/th/id/R.515c0e619801f365f116d339da0f6e48?rik=aMUnhaiwfs8O4g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-2JaZ8aA8PRA%2fUbariv2XfQI%2fAAAAAAAAAxU%2fbFI9i33ENDQ%2fs1600%2fFree-Bird-mobile-hd-wallpaper.jpg&ehk=WoSRa%2fLb7524C3Rzxr%2bQSqbNXN3dEQ2D5lnzJk9dG7Y%3d&risl=&pid=ImgRaw&r=0" },
    { type: "video", src: "/videos/test1.mp4" },
  ],
};



const Profile = () => {
  return (
    <div className="flex flex-col items-center px-4 py-6">
      {/* Upper Section */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-4 mb-6">
      <div className="flex items-start">
        {/* Profile Image */}
        <img
          src={userProfile.profileImage}
          alt="User Profile"
          className="w-20 h-20 rounded-full object-cover mr-4"
        />
        <div className="flex flex-col w-full">
          {/* User Name */}
          <span className="text-xl font-semibold text-gray-900">
            {userProfile.userId}
          </span>
          {/* Follower/Following Count below Name */}
          <div className="text-sm text-gray-600 mt-1">
            <span>{userProfile.followers} Followers</span>
            <span className="mx-1">&bull;</span>
            <span>{userProfile.following} Following</span>
          </div>
          {/* Description below Follower Count */}
          
        </div>
      </div>
      <p className="text-gray-600 items-center mt-2">About</p>
      <p className="text-gray-600 mt-2">{userProfile.description}</p>

    </div>
  
      {/* Lower Section */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Uploads</h2>
        {/* Grid for 2x2 Layout */}
        <div className="grid grid-cols-2 gap-4">
          {userProfile.uploads.map((upload, index) => (
            <div key={index} className="relative">
              {/* Display image or video based on type */}
              {upload.type === "image" ? (
                <img
                  src={upload.src}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              ) : (
                <video
                  controls
                  className="w-full h-full object-cover rounded-lg shadow-md"
                >
                  <source src={upload.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Profile;
