import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Body from "./components/Body";
import About from "./pages/About";
import { ChatBot } from "./reusable/ChatBot";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
