import { Link } from "react-router";
import { FaRedRiver } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

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
            <p>Your road to safe driving starts here.</p>
          </div>
          <div className="contact_details flex gap-4 text-2xl cursor-pointer">
            <Link
              to={
                "https://www.instagram.com/fullkit_drivingschool?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
            >
              <FaInstagram />
            </Link>
            <Link to={"https://www.facebook.com/search/top/?q=fullkit"}>
              <FaFacebook />
            </Link>
            {/* <FaXTwitter /> */}
            <Link
              to={
                "https://wa.me/2348021056648?text=Welcome%20to%20Fullkit%20Driving%20School!%20%F0%9F%9A%97%20%20Thank%20you%20for%20choosing%20Fullkit%20Driving%20School%E2%80%94where%20safety,%20confidence,%20and%20skill%20meet%20the%20road!%20We're%20excited%20to%20be%20part%20of%20your%20journey%20toward%20becoming%20a%20responsible%20and%20capable%20driver.%20Our%20team%20of%20certified%20instructors%20is%20dedicated%20to%20providing%20you%20with%20top-notch%20training,%20personalized%20support,%20and%20a%20learning%20experience%20that%E2%80%99s%20both%20enjoyable%20and%20effective.%20%20Let%E2%80%99s%20gear%20up%20and%20drive%20toward%20success%E2%80%94together!%20%20Welcome%20aboard,%20and%20let%20the%20journey%20begin!"
              }
            >
              <FaWhatsapp />
            </Link>
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
