import { Link } from "react-router";
import { FaRedRiver } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-blue-950 mt-24 py-8 text-white">
      <div className="footer_info max-w-[80%] mx-auto">
        <div className="border-b border-white border-opacity-30 py-8 flex flex-col sm:flex-row justify-between items-start gap-8">
          <div>
            <Link to={"/"}>
              <div className="flex gap-2 items-center text-white">
                <FaRedRiver className="text-3xl" />
                <p className="font-bold text-xl space-x-2 capitalize">
                  FullKit
                </p>
              </div>
            </Link>
          </div>
          <div className="contact_details flex gap-4 text-2xl cursor-pointer">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
        <div className="copyright_information py-2 capitalize">
          <p>{`copyright ${year}`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
