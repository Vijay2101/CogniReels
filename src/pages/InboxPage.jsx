import React from 'react'
import BottomNav from "../components/BottomNav"; 

const InboxPage = () => {
  return (
    <>  
      <div className="main-container"> {/* Ensure max-width is same as video container */}
        <div className="video-container mb-2 mt-2 w-full max-w-xl">
          
          <div className="flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    No Chats Available .......

                    
                </h1>
               
                
                
              </div>
        </div>
        <div className="bottom-menu ">
        <BottomNav />
        </div>
        
      </div>
    </>
  )
}

export default InboxPage
