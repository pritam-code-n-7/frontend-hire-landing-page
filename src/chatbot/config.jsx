import { createChatBotMessage } from "react-chatbot-kit";
import StartBtn from "./StartBtn";

const config = {
  initialMessages: [createChatBotMessage(`Welcome to Strong Minded`),{
    widget:"startBtn"
  }],
  botName: "Discount Explorar",
  Widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <StartBtn {...props} />,
    },
  ],
};

export default config;
