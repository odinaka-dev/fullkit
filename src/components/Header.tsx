import { Link } from "react-router";

// react icons
import { FaRedRiver } from "react-icons/fa";
import { BiPhone, BiWorld } from "react-icons/bi";
import { BsClock, BsMailbox } from "react-icons/bs";

const Header = () => {
  return (
    <nav>
      <div className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-12 font-light">
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
        <div className="flex items-center gap-4">
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
      <div className="flex justify-between items-center py-8 px-8 border-b shadow-md">
        <Link to={"/"}>
          <div className="flex gap-2 items-center">
            <FaRedRiver className="text-3xl text-blue-900" />
            <p className="font-bold text-xl space-x-2 capitalize">FullKit</p>
          </div>
        </Link>
        <div className="">
          <ul className="flex items-center gap-12">
            <Link
              to={"/"}
              className="cursor-pointer hover:text-blue-900 duration-300"
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/"}
              className="cursor-pointer hover:text-blue-900 duration-300"
            >
              <li>About</li>
            </Link>
            <Link
              to={"/"}
              className="cursor-pointer hover:text-blue-900 duration-300"
            >
              <li>Services</li>
            </Link>
            <Link
              to={"/"}
              className="cursor-pointer hover:text-blue-900 duration-300"
            >
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
