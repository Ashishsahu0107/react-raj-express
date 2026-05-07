import React from "react";

import {
  FaMagnifyingGlass,
  FaStar,
} from "react-icons/fa6";

import {
  FaUserMd,
  FaAward,
} from "react-icons/fa";

const FindDoctor = () => {

  const doctors = [
    {
      name: "Dr. Amanda Foster",
      role: "Cardiology Specialist",
      experience: "14 years experience",
      rating: "4.9",
      reviews: "127 reviews",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
      status: "bg-green-500",
      button: "Book Now",
    },

    {
      name: "Dr. Marcus Johnson",
      role: "Neurology Expert",
      experience: "16 years experience",
      rating: "4.8",
      reviews: "89 reviews",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
      status: "bg-yellow-500",
      button: "Schedule",
    },

    {
      name: "Dr. Rachel Williams",
      role: "Pediatrics Care",
      experience: "11 years experience",
      rating: "5.0",
      reviews: "203 reviews",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
      status: "bg-green-500",
      button: "Book Now",
    },

    {
      name: "Dr. David Chen",
      role: "Orthopedic Surgery",
      experience: "22 years experience",
      rating: "4.7",
      reviews: "156 reviews",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",
      status: "bg-gray-500",
      button: "Schedule",
    },

    {
      name: "Dr. Victoria Torres",
      role: "Dermatology Care",
      experience: "9 years experience",
      rating: "4.5",
      reviews: "74 reviews",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",
      status: "bg-green-500",
      button: "Book Now",
    },

    {
      name: "Dr. Benjamin Lee",
      role: "Oncology Treatment",
      experience: "19 years experience",
      rating: "4.9",
      reviews: "194 reviews",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
      status: "bg-green-500",
      button: "Schedule",
    },
  ];

  return (
    <>
      <section className="bg-[#f8f9fc] py-20">

        {/* Heading */}
        <div className="text-center px-6">

          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            Find A Doctor
          </h2>

          <div className="w-28 h-[2px] bg-gray-300 mx-auto mt-4 relative">

            <span className="absolute left-1/2 -translate-x-1/2 -top-[1px] w-14 h-[3px] bg-blue-600 rounded-full"></span>

          </div>

          <p className="text-gray-600 text-sm md:text-lg mt-6">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>

        </div>

        {/* Search Section */}
        <div className="max-w-5xl mx-auto mt-20 px-6 text-center">

          <h1 className="text-2xl md:text-5xl font-light text-slate-900 leading-tight">
            Find Your Perfect Healthcare Provider
          </h1>

          <p className="text-gray-500 text-base md:text-1xl mt-6">
            Search through our comprehensive directory of experienced medical professionals
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-[30px] shadow-sm mt-10 p-2 flex flex-col lg:flex-row items-center gap-4 border border-gray-100">

            {/* Input */}
            <div className="flex items-center gap-3 w-full px-3">

              <FaUserMd className="text-gray-400 text-lg" />

              <input
                type="text"
                placeholder="Enter doctor name"
                className="w-full outline-none text-base text-gray-700"
              />

            </div>

            {/* Select */}
            <div className="flex items-center gap-3 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-gray-200 px-4 pt-4 lg:pt-0">

              <FaAward className="text-gray-400 text-lg" />

              <select className="outline-none text-base text-slate-800 bg-transparent">

                <option>All Specialties</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedic</option>
                <option>Pediatrics</option>

              </select>

            </div>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full flex items-center gap-3 text-base font-medium whitespace-nowrap w-full lg:w-auto justify-center">

              <FaMagnifyingGlass />

              Find Doctors

            </button>

          </div>

        </div>

        {/* Doctors Grid */}
        <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {doctors.map((doctor, index) => (
            <div
              key={index}
              className={`bg-white rounded-[30px] p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                index === 4
                  ? "border-blue-200"
                  : "border-gray-100"
              }`}
            >

              {/* Top */}
              <div className="flex items-start gap-5">

                {/* Image */}
                <div className="relative shrink-0">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-[20px] object-cover"
                  />

                  <span
                    className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white ${doctor.status}`}
                  ></span>

                </div>

                {/* Info */}
                <div>

                  <h3 className="text-2xl font-medium text-slate-900">
                    {doctor.name}
                  </h3>

                  <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mt-3">
                    {doctor.role}
                  </span>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-4">

                    <FaAward className="text-blue-500" />

                    {doctor.experience}

                  </div>

                </div>

              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-8 flex-wrap">

                <div className="flex items-center gap-1 text-yellow-400 text-lg">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                <h4 className="text-2xl font-bold text-slate-900">
                  {doctor.rating}
                </h4>

                <p className="text-gray-400 text-sm">
                  ({doctor.reviews})
                </p>

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">

                <button className="w-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition py-4 rounded-2xl text-base font-medium text-gray-700">

                  View Details

                </button>

                <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl text-base font-medium">

                  {doctor.button}

                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="text-center mt-20">

          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 px-10 py-4 rounded-full text-lg font-medium flex items-center gap-4 mx-auto">

            View All Doctors

            <span className="text-2xl">→</span>

          </button>

        </div>

      </section>
    </>
  );
};

export default FindDoctor;