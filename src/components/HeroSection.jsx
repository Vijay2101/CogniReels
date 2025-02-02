import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Step into a new world of imagination 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          with ChatPersona.AI
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Empower your creativity and bring your chatbot characters to life with our interactive platform. Get started today and turn your imagination into engaging conversations!
      </p>
      <div className="flex justify-center my-10">
        <Link
          to="/signin"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </Link>
        <Link to="https://github.com/Vijay2101/ChatPersona.AI" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </Link>
      </div>
      
    </div>
  );
};

export default HeroSection;