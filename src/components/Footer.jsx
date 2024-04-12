import Categories from "./Categories";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const currentDate = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-200  py-4 px-2 sm:px-4">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="font-serif font-bold text-lg sm:text-xl mb-2">
            Strong Minded
          </h1>
          <p className="mb-4">This is for strong-minded people.</p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start">
          <Categories />
          <Categories />
          <Categories />
          <Categories />

        </div>
        <div className="flex flex-col items-center sm:items-start">
          <p className="mb-2 font-semibold">Follow us</p>
          <div className="flex items-center gap-2">
          <CiLinkedin />
          <FaSquareXTwitter />
          <FaFacebook />
          <FaWhatsapp />
          <FaInstagram />
          </div>
          
        </div>
      </div>
     
      <div className="mt-4 text-center sm:text-left justify-center">
      <hr className="border-t border-slate-400 w-full mb-4" /> {/* Divider */}
        <div className="flex flex-col items-center sm:items-start mb-2">
          <div className="flex items-center sm:justify-start">
            <img
              src="/images/copyright.png"
              alt="Copyright"
              loading="lazy"
              
              className="w-6 h-6 mr-1 filter invert  "
            />
            <p>{currentDate} Pritam Nandy. All rights reserved.</p>
          </div>
          <p>Developed by Pritam Nandy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
