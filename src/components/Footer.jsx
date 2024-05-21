import Categories from "./Categories";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Data from "../data/Data.json";

const currentDate = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-200 py-4 px-2 sm:px-4">
      <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="font-serif font-bold text-lg sm:text-xl mb-2">
            Strong Minded
          </h1>
          <p>This is for strong-minded people.</p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start mb-4 sm:mb-0">
          {Data.map((items, index) => (
            <Categories {...items} key={index} />
          ))}
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          <p className="font-semibold mr-2">Follow us:</p>
          <div className="flex items-center gap-2">
            <CiLinkedin />
            <FaSquareXTwitter />
            <FaFacebook />
            <FaWhatsapp />
            <FaInstagram />
          </div>
        </div>
      </div>
      <hr className="border-t border-slate-400 w-full my-4" /> {/* Divider */}
      <div className="container mx-auto  text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start justify-center mb-2 text-center sm:text-left gap-2 ">
          <p>© {currentDate} All rights reserved</p>

          <p>Developed by Pritam Nandy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
