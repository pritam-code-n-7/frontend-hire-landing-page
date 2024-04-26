import Features from "./Features";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "/src/chatbot/config.js";
import MessageParser from "/src/chatbot/MessageParser";
import ActionProvider from "/src/chatbot/ActionProvide";

function Body() {
  return (
    <div className="bg-blue-950 flex flex-col">
      <main className="flex p-10" role="main">
        <div className="flex flex-col gap-2">
          <Features />
          <div className="min-w-40 min-h-40"> {/* Adjust width and height as needed */}
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>

        <HeroSection />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Body;
