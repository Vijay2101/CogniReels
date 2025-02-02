import "./Video/Video.css";
import { HeartIcon, ShareIcon,MessageCircleMore } from "lucide-react"; // Importing icons from Lucid

const HomeTimeline = () => {
    const reels = [
      {
        id: 1,
        username: "john_doe",
        avatar: "https://i.pravatar.cc/40?img=1",
        videoThumbnail: "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?rs=1&pid=ImgDetMain", 
        caption: "Enjoying the sunset 🌅 #nature",
        likes: 120,
      },
      {
        id: 2,
        username: "jane_smith",
        avatar: "https://i.pravatar.cc/40?img=2",
        videoThumbnail: "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?rs=1&pid=ImgDetMain", 
        caption: "New dance trend! 💃🔥 #dancechallenge",
        likes: 240,
      },
      {
        id: 3,
        username: "john_doe",
        avatar: "https://i.pravatar.cc/40?img=1",
        videoThumbnail: "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?rs=1&pid=ImgDetMain", 
        caption: "Enjoying the sunset 🌅 #nature",
        likes: 120,
      },
      {
        id: 4,
        username: "jane_smith",
        avatar: "https://i.pravatar.cc/40?img=2",
        videoThumbnail: "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?rs=1&pid=ImgDetMain", 
        caption: "New dance trend! 💃🔥 #dancechallenge",
        likes: 240,
      },
    ];
  
    return (
        <div > {/* Ensures same width as video-container */}
          <h1 className="text-xl font-semibold text-gray-800 mb-4 text-center">Home</h1>
      
          <div className="space-y-8">
            {reels.map((reel) => (
              <div key={reel.id} className="bg-neutral-900 border border-neutral-800 shadow-md p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <img src={reel.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                  <span className="font-semibold text-white">@{reel.username}</span>
                </div>
                <img
                  src={reel.videoThumbnail}
                  alt="Reel thumbnail"
                  className="w-full object-cover rounded-lg"
                />
                <p className=" flex text-white mt-2">{reel.caption}</p>
                {/* <span className="text-white text-sm mt-1">{reel.likes} likes</span> */}
                <div className="flex space-x-3">
                    <button>
                        <HeartIcon className="w-5 h-5" />
                        <span>{reel.likes}</span>
                    </button>
                    <button>
                        <MessageCircleMore className="w-5 h-5" />
                        <span>{10}</span>
                    </button>
                    <button>
                        <ShareIcon className="w-5 h-5" />
                        <span>{17}</span>
                    </button>
                </div>
          
              </div>
            ))}
          </div>
        </div>
      );
      
  };
  
  export default HomeTimeline;
  