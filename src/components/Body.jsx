import { Link } from "react-router-dom";
import Features from "./Features";
import HeroSection from "./HeroSection";
import { TbMessageChatbot } from "react-icons/tb";

function Body() {
  return (
    <div className="flex flex-col">
      <main className="flex p-10" role="main">
        <div className="flex flex-col gap-2 justify-items-center">
          <Features />
          <Link to="/chatbot">
            <div className="mt-12 md:mt-24 lg:mt-48">
              <TbMessageChatbot size={50} color="cyan" />
            </div>
          </Link>
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
