import { lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BlackButton from "../reusable/BlackButton";
import YellowButton from "../reusable/YellowButton";
import WhiteButton from "../reusable/WhiteButton";
import { FaReact } from "react-icons/fa";
const LazyImage = lazy(() => import("../reusable/Image"));

function Header() {
  const location = useLocation();
  const route = useNavigate();
  function handleBack() {
    route("/");
  }
  return (
    <div className="flex flex-col sm:flex-row p-2 sm:p-4 bg-white justify-between rounded">
      <div className="flex items-center mb-2 sm:mb-0">
        <div>
          <Suspense
            fallback={
              <div>
                <FaReact size={"5px"} />
              </div>
            }
          >
            <LazyImage /> {/* Lazy-loaded Image component */}
          </Suspense>
        </div>
        <p className="font-semibold text-sm sm:text-base">Strong Minded</p>
      </div>

      <div className="flex sm:flex-row sm:gap-6">
        <div className="hidden sm:flex flex-col sm:flex-row gap-4 items-center mb-2 sm:mb-0">
          <a
            href="#a"
            className="text-black hover:text-gray-500 text-xs sm:text-sm"
          >
            HOW IT WORKS
          </a>
          <Link to="/about">ABOUT US</Link>
          <a
            href="#c"
            className="text-black hover:text-gray-500 text-xs sm:text-sm"
          >
            PRICING
          </a>
        </div>
        <div className="flex gap-2">
          <WhiteButton name="ENROLL NOW" type="button" />
          <YellowButton name="VIEW COURSE PACKAGE" type="button" />
        </div>
        <div className="flex ml-28 pl-5 ">
          {location.pathname !== "/" && (
            <BlackButton name="back" onClick={handleBack} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
