import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import { ChatBot } from "../reusable/ChatBot";
import About from "../pages/About";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <NotFound />,
      },
      {
        path: "chatbot",
        element: <ChatBot />,
        errorElement: <NotFound />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

export default routes;
