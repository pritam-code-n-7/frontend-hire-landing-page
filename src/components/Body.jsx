import Features from "./Features";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

function Body() {
  return (
    <div className=" bg-blue-950 h-screen w-screen flex flex-col">
      <main className=" flex p-4" role="main">
        <Features className="flex-1" />
        <HeroSection className="flex-1" />
      </main>
      <Footer />
    </div>
  );
}

export default Body;
