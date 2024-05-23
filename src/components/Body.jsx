import Features from "./Features";
import HeroSection from "./HeroSection";
import { TbMessageChatbot } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();
  const handleIconClick = () => {
    // Route to '/chatbot' when the icon is clicked
    navigate("/chatbot");
  };

  return (
    <main className="flex p-10" role="main">
      <div className="flex flex-col gap-2 ">
        <Features />
        <div>
          <button
            className="mt-12 md:mt-24 lg:mt-48 flex"
            onClick={handleIconClick}
          >
            <TbMessageChatbot size={50} color="cyan" />
          </button>
        </div>
      </div>
      {/* Hide HeroSection in mobile view */}
      <div className="hidden md:flex">
        <HeroSection />
      </div>
    </main>
  );
}

export default Body;
