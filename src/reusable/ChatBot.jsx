import config from "../chatbot/config.jsx";
import MessageParser from "../chatbot/MessageParser.jsx";
import ActionProvider from "../chatbot/ActionProvide.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./Bot.css";

export const ChatBot = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 py-6">
      <div className="max-w-screen-sm mx-auto ml-6">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};
