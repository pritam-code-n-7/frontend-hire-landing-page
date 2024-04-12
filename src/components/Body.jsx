import Features from "./Features";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

function Body() {
  return (
    <div className="bg-blue-950 flex flex-col ">
      <main className="flex p-10" role="main">
        <Features />
        <HeroSection />
      </main>
      <div >
        <Footer />
      </div>
    </div>
  );
}

export default Body;
