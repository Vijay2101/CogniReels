import React from 'react'

import BottomNav from "../components/BottomNav"; 
import Profile from "../components/Profile"; 


const ProfilePage = () => {
  return (
    <>  
      <div className="main-container"> {/* Ensure max-width is same as video container */}
        <div className="video-container mb-2 mt-2  ">
          
          <Profile />
        </div>
        <div className="bottom-menu">
        <BottomNav />
        </div>
        
      </div>
    </>
  )
}

export default ProfilePage
