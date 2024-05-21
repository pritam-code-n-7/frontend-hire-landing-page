import Features from "./Features";
import HeroSection from "./HeroSection";
import { TbMessageChatbot } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();

  // Function to handle the click event on the icon
  const handleIconClick = () => {
    // Route to '/chatbot' when the icon is clicked
    navigate("/chatbot");
  };

  return (
    <div className="flex flex-col">
      <main className="flex p-10" role="main">
        <div className="flex flex-col gap-2 justify-items-center">
          <Features />
          <button className="mt-12 md:mt-24 lg:mt-48" onClick={handleIconClick}>
            <TbMessageChatbot size={50} color="cyan" />
          </button>
        </div>
        {/* Hide HeroSection in mobile view */}
        <div className="hidden md:flex">
          <HeroSection />
        </div>
      </main>
    </div>
  );
}

export default Body;
