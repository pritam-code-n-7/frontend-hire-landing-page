import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";

function Body() {
  return (
    <div className="w-screen bg-blue-950 h-screen">
      <Header />
      <div className="flex p-4">
        <Features />
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}

export default Body;
