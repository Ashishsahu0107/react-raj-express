import React from "react";


import {
  FaShieldAlt,
  FaClock,
  FaStar,
  FaPhoneAlt,
  FaPlayCircle,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <section className="bg-[#f5f7fc] min-h-screen flex items-center ">

        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>

            {/* Tags */}
            <div className="flex gap-4 mb-8">

              <div className="flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-medium">
                <FaShieldAlt />
                Accredited
              </div>

              <div className="flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-medium">
                <FaClock />
                24/7 Emergency
              </div>

              <div className="flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-medium">
                <FaStar />
                4.9/5 Rating
              </div>

            </div>

            {/* Heading */}
            <h1 className="text-6xl font-bold leading-tight text-slate-900">

              Excellence in <br />

              <span className="text-blue-600 border-b-4 border-blue-600">
                Healthcare
              </span>

              {" "}With <br />
              Compassionate Care

            </h1>

            {/* Text */}
            <p className="text-gray-600 text-xl leading-10 mt-5 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Stats */}
            <div className="flex gap-16 mt-10">

              <div>
                <h2 className="text-4xl font-bold text-blue-600">15+</h2>
                <p className="text-gray-500 mt-2">Years Experience</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-600">5000+</h2>
                <p className="text-gray-500 mt-2">Patients Treated</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-600">50+</h2>
                <p className="text-gray-500 mt-2">Medical Experts</p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-5 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full text-xl font-semibold transition">
                Book Appointment
              </button>

              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-4 rounded-full text-xl font-semibold flex items-center gap-3 transition">

                <FaPlayCircle />

                Watch Our Story

              </button>

            </div>

            {/* Hotline */}
            <div className="mt-5 border border-blue-200 rounded-2xl p-4 flex items-center gap-6 bg-white max-w-3xl">

              <div className="bg-blue-600 text-white p-5 rounded-full text-2xl">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Emergency Hotline
                </p>

                <h3 className="text-2xl font-bold text-slate-900">
                  +1 (555) 911-2468
                </h3>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt="doctor"
              className="rounded-[40px] w-full h-[600px] object-cover"
            />

            <div className="absolute top-5 right-5 bg-white p-5 flex gap-8 rounded-2xl">
              <div className="flex items-center justify-center text-4xl text-[#175CDD] ">
                <FaClock />
              </div>
              <div className="grid gap-3">
                <h1 className="font-bold leading-6">
                  Next Available  <br /> Today 2:30 PM</h1>
                <span className="opacity-50">Dr. Sarah Johnson</span>
              </div>
            </div>



            <div className="absolute left-5 bottom-5 bg-white p-5 flex flex-col items-center justify-center gap-2 rounded-2xl">
              <div className="flex gap-1 items-center justify-center text-1xl text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h1 className="font-bold leading-6"> 4.9/5</h1>
              <span className="opacity-50">1,234 Reviews</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;