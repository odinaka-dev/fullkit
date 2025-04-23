import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

// react icons
import { FaRedRiver } from "react-icons/fa";
import { BiPhone, BiWorld, BiMenuAltRight, BiX } from "react-icons/bi";
import { BsClock, BsMailbox } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center cursor-pointer">
        <div className="hidden md:flex items-center gap-12 font-light">
          <div className="flex items-center gap-2">
            <BiPhone />
            <p>(+234)-90-788-0987</p>
          </div>
          <div className="flex items-center gap-2 border-x border-x-white border-opacity-30 px-8">
            <BsMailbox />
            <p>fullkit@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <BiWorld />
            <p>www.fullkit.com.ng</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm md:text-[16px]">
          <div className="flex items-center gap-2 border-r border-r-white pr-4 border-opacity-30">
            <BsClock />
            <p>Mon-Sat</p>
          </div>
          <div className="flex items-center gap-2">
            <BiWorld />
            <p>www.fullkit.com.ng</p>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex justify-between items-center py-8 px-8 border-b shadow-md">
        <Link to={"/"}>
          <div className="flex gap-2 items-center">
            <FaRedRiver className="text-3xl text-blue-900" />
            <p className="font-bold text-xl space-x-2 capitalize">FullKit</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-12">
          <Link to="/" className="hover:text-blue-900 duration-300">
            <li>Home</li>
          </Link>
          <Link to="/about" className="hover:text-blue-900 duration-300">
            <li>About</li>
          </Link>
          <Link to="/services" className="hover:text-blue-900 duration-300">
            <li>Services</li>
          </Link>
          <Link to="/contact" className="hover:text-blue-900 duration-300">
            <li>Contact Us</li>
          </Link>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <BiX className="text-3xl text-blue-900 cursor-pointer" />
          ) : (
            <BiMenuAltRight className="text-3xl text-blue-900 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-[100%] left-0 w-full bg-white shadow-lg px-8 py-4 space-y-4 z-10 leading-10"
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            <li className="hover:text-blue-900 duration-300">Home</li>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <li className="hover:text-blue-900 duration-300">About</li>
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            <li className="hover:text-blue-900 duration-300">Services</li>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <li className="hover:text-blue-900 duration-300">Contact Us</li>
          </Link>
        </motion.ul>
      )}
    </nav>
  );
};

export default Header;
