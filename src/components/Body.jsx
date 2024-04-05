import Features from "./Features";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

function Body() {
  return (
    <div className="bg-blue-950 flex flex-col">
      <main className="flex p-6" role="main">
        <Features />
        <HeroSection />
      </main>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Body;
