import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const LazyImage = lazy(() => import("./Image"));

function Header() {
  return (
    <div className="flex flex-col sm:flex-row p-4 bg-white justify-between items-center rounded-md">
      <div className="flex items-center mb-4 sm:mb-0">
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage /> {/* Lazy-loaded Image component */}
          </Suspense>
        </div>
        <p className="font-semibold text-sm sm:text-base">Frontend Hire</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-4 sm:mb-0">
          <a
            href="#a"
            className="text-black hover:text-gray-500 text-xs sm:text-sm"
          >
            HOW IT WORKS
          </a>
          <Link to="/about">TESTIMONIALS</Link>
          <a
            href="#c"
            className="text-black hover:text-gray-500 text-xs sm:text-sm"
          >
            PRICING
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <button className="py-1 px-2 rounded-full border border-black text-xs sm:text-sm hover:bg-black hover:text-white transition-colors duration-300 font-semibold">
            ENROLL NOW
          </button>
          <button className="py-2 px-4 rounded-full bg-yellow-400 text-white text-xs sm:text-sm hover:bg-yellow-500 transition-colors duration-300 font-semibold">
            VIEW COURSE PACKAGE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
