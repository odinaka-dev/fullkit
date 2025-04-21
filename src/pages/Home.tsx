import { useEffect } from "react";
// react libraries
import AOS from "aos";
import "aos/dist/aos.css";

// react-icons
import { BiCar, BiPhone } from "react-icons/bi";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowRightLong,
  FaRedRiver,
} from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { PiCertificateFill, PiRoadHorizonFill } from "react-icons/pi";
import { MdDriveEta, MdOutlineSafetyCheck } from "react-icons/md";

// image imports
import Image from "../assets/Img/experience.avif";
import Image2 from "../assets/Img/exp.avif";
import Icon from "../assets/Icons/drive.avif";
import { IoCheckmarkSharp } from "react-icons/io5";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="">
      <HomeBanner />
      <SubBanner />
      <Experience />
      <Services />
      <SubFooter />
      <div className="bg-zinc-100 py-16 mb-8">
        <OurProcess />
      </div>
      <Booking />
    </section>
  );
};

// Home Banner section
const HomeBanner = () => {
  return (
    <section className="homebanner py-52 px-[350px] text-white flex justify-center  items-center">
      <div data-aos="fade-up">
        <div className="text-center">
          <h1 className="capitalize font-bold text-5xl leading-[50px]">
            Helping you to make yourself an expert driver
          </h1>
          <p className="py-4 text-balance">
            Here at Fullkit we help you be the best at driving. We are all about
            providing the very best knowledge when it comes to driving and it's
            rudiments. sign up today and get more information. we are ready and
            available.
          </p>
          <div className="">
            <button className="bg-blue-900 py-4 px-8 rounded-md hover:bg-blue-700 duration-300">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// first section
const SubBanner = () => {
  return (
    <section className="max-w-[1200px] mx-auto mb-8 bg-white p-4 rounded-lg relative top-[-50px]">
      {/* <h1></h1> */}
      <div className="sub_grid grid grid-cols-4 items-center">
        <div
          className="grid_one p-4 flex justify-center text-center hover:bg-blue-900 hover:text-white cursor-pointer"
          data-aos="fade-up"
        >
          <div className="group">
            <div className="icons bg-blue-100 p-4 text-blue-950 rounded-full inline-block text-4xl my-8">
              <BiCar />
            </div>

            <div className="contents text-center group-hover:text-white">
              <h1 className="capitalize transition-colors font-medium duration-200">
                Learn the basics of driving safely
              </h1>
              <p className="transition-colors duration-200 text-[14px] my-2 leading-7 text-balance">
                Here at Fullkit our training starts from the ground knowledge to
                the top. It doesn't matter if you are new to driving or if you
                have no experience.
              </p>
              <div className="btn my-8">
                <button>
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid_one p-4 flex justify-center text-center hover:bg-blue-900 hover:text-white border-x border-gray-200 cursor-pointer"
          data-aos="fade-up"
        >
          <div className="group">
            <div className="icons bg-blue-100 p-4 text-blue-950 rounded-full inline-block text-4xl my-8">
              <HiMiniWrenchScrewdriver />
            </div>

            <div className="contents text-center group-hover:text-white">
              <h1 className="capitalize transition-colors font-medium duration-200">
                Learn the basics of driving safely
              </h1>
              <p className="transition-colors duration-200 text-[14px] my-2 leading-6 text-balance">
                Here at Fullkit our training starts from the ground knowledge to
                the top. It doesn't matter if you are new to driving or if you
                have no experience.
              </p>
              <div className="btn my-8">
                <button>
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          className="grid_one p-4 flex justify-center text-center hover:bg-blue-900 hover:text-white border-r border-gray-200 cursor-pointer"
          data-aos="fade-up"
        >
          <div className="group">
            <div className="icons bg-blue-100 p-4 text-blue-950 rounded-full inline-block text-4xl my-8">
              <BiCar />
            </div>

            <div className="contents text-center group-hover:text-white">
              <h1 className="capitalize transition-colors font-medium duration-200">
                Learn the basics of driving safely
              </h1>
              <p className="transition-colors duration-200 text-[14px] my-2 leading-7 text-balance">
                Here at Fullkit our training starts from the ground knowledge to
                the top. It doesn't matter if you are new to driving or if you
                have no experience.
              </p>
              <div className="btn my-8">
                <button>
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          className="grid_one p-4 flex justify-center text-center hover:bg-blue-900 hover:text-white cursor-pointer"
          data-aos="fade-up"
        >
          <div className="group">
            <div className="icons bg-blue-100 p-4 text-blue-950 rounded-full inline-block text-4xl my-8">
              <PiRoadHorizonFill />
            </div>

            <div className="contents text-center group-hover:text-white">
              <h1 className="capitalize transition-colors font-medium duration-200">
                Learn the basics of driving safely
              </h1>
              <p className="transition-colors duration-200 text-[14px] my-2 leading-7 text-balance">
                Here at Fullkit our training starts from the ground knowledge to
                the top. It doesn't matter if you are new to driving or if you
                have no experience.
              </p>
              <div className="btn my-8">
                <button>
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="flex  justify-center my-8">
        <button className="bg-blue-900 py-4 px-8 rounded-md hover:bg-blue-700 duration-300 text-white">
          Learn More
        </button>
      </div>
    </section>
  );
};

// second section
const Experience = () => {
  return (
    <section className="max-w-[1200px] mx-auto my-8">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="experience_img relative" data-aos="fade-right">
          <img src={Image2} alt="" className="" />
          <div className="w-96 absolute top-[60%] left-[-40px] border-8 border-white">
            <img src={Image} alt="" className="rounded-md" />
          </div>
        </div>
        <div className="experience_text" data-aos="fade-left">
          <div className="subheader">
            <h1 className="text-lg font-medium text-gray-400 my-4">About Us</h1>
          </div>
          <div className="mainheader">
            <h1 className="font-semibold text-3xl leading-10 capitalize text-blue-950">
              We're an experienced, trustworthy, reliable & friendly driving
              school.
            </h1>
          </div>
          <div className="contents">
            <p className="text-balance text-[16px] text-gray-600 py-4 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              debitis cum accusantium quibusdam atque tenetur, dolorum voluptate
              corporis consequatur animi veritatis velit, aspernatur quos vel
              quaerat ipsa neque alias! Quisquam?
            </p>
          </div>
          <div className="text-blue-950 border border-blue-950 p-[3px] rounded-full inline-block pr-8 mt-8">
            <div className="button_contents flex gap-2 items-center">
              <p className="text-white bg-blue-950 p-4 rounded-full">
                <BiPhone />
              </p>
              <p>(+234)-9087665467</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// third section
const Services = () => {
  // services contents
  const ServicesInfo = [
    {
      id: 1,
      image: Image,
      title: "Fullkit lessons for Teenagers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi debitis cum accusantium quibusdam atque tenetur, dolorum voluptate corporis consequatur animi veritatis?",
    },
    {
      id: 2,
      image: Image,
      title: "Fullkit lessons for Adults",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi debitis cum accusantium quibusdam atque tenetur, dolorum voluptate corporis consequatur animi veritatis?",
    },
    {
      id: 3,
      image: Image,
      title: "Fullkit lessons for Seniors",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi debitis cum accusantium quibusdam atque tenetur, dolorum voluptate corporis consequatur animi veritatis?",
    },
  ];

  return (
    <section className="sub_contents py-2 my-24 text-white">
      <div className="max-w-[1200px] mx-auto my-24">
        <h1 className="flex items-center justify-center text-2xl font-medium tracking-widest">
          Our Services
        </h1>
        <div className="services">
          <div className="services_header">
            <div className="services_title grid grid-cols-2 items-center gap-84 mt-12">
              <h1 className="text-3xl font-semibold tracking-wider capitalize text-balance text-center border-t-4 border-white py-6">
                <p className="flex justify-center">
                  <FaRedRiver />
                </p>
                FullKit Educational Driving Course and Services
              </h1>
              <p className="font-normal leading-7 text-balance text-center">
                Our driving course helps our clients of all ages to acquire
                licensed the experience required to be pro at driving and
                navigating through. Below are vaious services that we offer at
                fullkit driving school, check them out:
              </p>
            </div>
            <div className="services_contents my-4 flex items-center justify-between">
              <div className="service_contents flex  gap-8 items-center text-white">
                <p className="">Fullkit Lessons for teenagers</p>
                <p className="border-x border-white border-opacity-25 px-6">
                  Fullkit Lessons for Adults
                </p>
                <p className="">Fullkit Lessons for Senniors</p>
              </div>
              <div className="pagination_button flex gap-4 items-center">
                <button className="text-white p-4 border border-white border-opacity-25 cursor-pointer hover:text-blue-950 hover:bg-white duration-300">
                  <FaArrowLeft />
                </button>
                <button className="text-white p-4 border border-white border-opacity-25 cursor-pointer hover:text-blue-950 hover:bg-white duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="services_grid grid grid-cols-3 gap-8 items-center">
            {ServicesInfo.map((items) => (
              <div className="bg-white py-8 px-2" key={items.id}>
                <div>
                  <img src={items.image} alt="" />
                </div>
                <div className="text-blue-950">
                  <h1 className="my-4 mb-2 font-bold capitalize text-center">
                    {items.title}
                  </h1>
                  <p className="text-gray-500 text-[14px] text-balance text-center ">
                    {items.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
// fourth section
const SubFooter = () => {
  return (
    <section className="max-w-[1200px] mx-auto my-16">
      <div className="sub_content2 py-24 px-36 rounded-xl text-white text-center">
        <h1 className="font-bold text-[39px] capitalize leading-[50px] text-balance">
          Fullkit helps our clients and students to pass the test, earn a
          license on the first try.
        </h1>
        <p className="capitalize text-[18px] py-2">
          Get your <span className="text-blue-500">lesson</span> before a road
          test!
        </p>
      </div>
    </section>
  );
};

const OurProcess = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-2 gap-24 items-center my-8">
        <div className="imgg">
          <img src={Icon} alt="" />
        </div>
        <div className="img_content flex flex-col justify-center items-center">
          <h1 className="text-gray-700 capitalize font-semibold text-xl pb-2">
            Our Process
          </h1>
          <p className="border-b-[3px] border-b-blue-950 w-[20%]"></p>
          <div className="process_contents">
            <h1 className="capitalize text-4xl font-bold text-blue-950 text-center leading-[50px] my-4">
              Modern technologies for much easier driving.
            </h1>
            <p className="text-gray-500 leading-7 text-center">
              Modern technologies have significantly transformed the way we
              drive, making the experience smoother, safer, and more convenient.
              From advanced driver-assistance systems like adaptive cruis7
              control and lane-keeping assist to smart GPS navigation and
              voice-controlled infotainment, today’s vehicles are designed to
              reduce stress on the road
            </p>
          </div>
        </div>
      </div>
      <div className="grid_process grid grid-cols-3 items-center gap-12 mt-16">
        <div className="contents-1 text-left bg-white border-t-4 border-blue-950 p-4">
          <div className="text-5xl text-blue-950">
            <MdOutlineSafetyCheck />
          </div>
          <h1 className="capitalize text-blue-950 text-xl font-bold my-4">
            Learn from experienced teachers
          </h1>
          <p className="text-gray-600">
            Learn from experienced teachers and driving mentors. Meet the team
            and experience the very best learning experience.
          </p>
        </div>
        <div className="contents-1 text-left bg-white border-t-4 border-blue-950 p-4">
          <div className="text-5xl text-blue-950">
            <MdDriveEta />
          </div>
          <h1 className="capitalize text-blue-950 text-xl font-bold my-4">
            Take Driving lessons on a scheduled basis.
          </h1>
          <p className="text-gray-600">
            Learn from experienced teachers and driving mentors. Meet the team
            and experience the very best learning experience.
          </p>
        </div>
        <div className="contents-1 text-left bg-white border-t-4 border-blue-950 p-4">
          <div className="text-5xl text-blue-950">
            <PiCertificateFill />
          </div>
          <h1 className="capitalize text-blue-950 text-xl font-bold my-4">
            Get certified and ready to take on the road.
          </h1>
          <p className="text-gray-600">
            Learn from experienced teachers and driving mentors. Meet the team
            and experience the very best learning experience.
          </p>
        </div>
      </div>
    </section>
  );
};
// fifth section
const Booking = () => {
  // bookings instructions
  const Appointments = [
    { id: 1, appoints: "Driving school approved online booking" },
    { id: 2, appoints: "Lessons & courses during the week" },
    {
      id: 3,
      appoints: "Driving Lessons are also available during the weekends",
    },
    {
      id: 4,
      appoints: "Flexibility, Readability and patience in all our service",
    },
    {
      id: 5,
      appoints: "Road Test, Preparations and 190% success ready to drive.",
    },
  ];

  return (
    <section className="sub_contents text-white">
      <div className="max-w-[1200px] mx-auto py-24">
        <div className="bookings grid grid-cols-2 items-center gap-12">
          <div className="bookings_text">
            <h1 className="text-3xl font-semibold capitalize mb-2">
              Get appointment with our qualified driving instructors
            </h1>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              distinctio corporis magnam ullam! Nulla, a praesentium sapiente
              mollitia, animi facilis vero quaerat veniam labore sed repellat
              repellendus exercitationem doloribus debitis tempora fugit odio
              earum nobis beatae!
            </p>
            <div className="sub_texts">
              {Appointments.map((items) => (
                <div key={items.id} className="flex gap-2 items-center">
                  <p className="text-green-400 font-bold text-xl my-4">
                    <IoCheckmarkSharp />
                  </p>
                  <p>{items.appoints}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="bookings_form bg-white p-6 py-8 pt-12"
            data-aos="slide-up"
          >
            <div className="text-center">
              <h1 className="text-2xl text-blue-950 font-bold capitalize">
                Get enrolled Today, just fill-in the form
              </h1>
              <p className="text-zinc-500">
                Fill in your details and we respond before the end of
                <span className="pl-2 font-bold text-blue-950 capitalize text-sm text-balance">
                  24 Hours
                </span>
              </p>
            </div>
            <form action="" className="my-8">
              <div className="details grid grid-cols-2 items-center gap-4 text-blue-950">
                <div className="">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="placeholder:text-blue-950 placeholder:font-semibold border border-zinc-300 py-4 px-2 rounded-md cursor-pointer w-full"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="placeholder:text-blue-950 placeholder:font-semibold border border-zinc-300 py-4 px-2 rounded-md cursor-pointer w-full"
                  />
                </div>
              </div>
              <div className="details grid grid-cols-2 items-center gap-4 text-blue-950 mt-6">
                <div className="">
                  <input
                    type="email"
                    placeholder="Email"
                    className="placeholder:text-blue-950 placeholder:font-semibold border border-zinc-300 py-4 px-2 rounded-md cursor-pointer w-full"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="PhoneNumber"
                    className="placeholder:text-blue-950 placeholder:font-semibold border border-zinc-300 py-4 px-2 rounded-md cursor-pointer w-full"
                  />
                </div>
              </div>
              <div className="select_course">
                <select
                  name=""
                  id=""
                  className="w-full border border-zinc-300 mt-6 p-4 rounded-md text-blue-950 font-bold"
                >
                  <option value="">Choose Course</option>
                  <option value="">Basic Course</option>
                  <option value="">Medium Course</option>
                  <option value="">Premium Course</option>
                </select>
              </div>
              <div className="">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={5}
                  placeholder="message"
                  className="border border-zinc-300 w-full mt-6 p-4 rounded-md text-blue-950"
                ></textarea>
              </div>
              <div className="btn_form">
                <button className="bg-blue-950 p-4 w-full my-2 rounded-md">
                  Get Enrolled
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
