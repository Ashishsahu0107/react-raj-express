import React from "react";

import {
  FaHeartbeat,
  FaCheckCircle,
  FaArrowRight,
  FaMicrochip,
} from "react-icons/fa";

const DepartmentSection = () => {
  return (
    <section className="bg-[#f7f8fc] py-24">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-5xl font-light text-slate-900">
          Featured Departments
        </h2>

        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-500 text-lg mt-6">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 gap-10 px-6">

        {/* Card 1 */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">

          <div className="p-10">

            <span className="bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full font-medium">
              SPECIALIZED CARE
            </span>

            <h3 className="text-4xl font-light text-slate-900 mt-8">
              Cardiovascular Medicine
            </h3>

            <p className="text-gray-500 text-lg leading-9 mt-6">
              Advanced diagnostic imaging and interventional procedures.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-600">
                <FaCheckCircle className="text-blue-600" />
                Emergency Cardiac Care
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <FaCheckCircle className="text-blue-600" />
                Minimally Invasive Procedures
              </div>

            </div>

            <button className="flex items-center gap-3 text-blue-600 font-medium mt-10 hover:gap-5 transition-all">

              Explore Cardiology

              <FaArrowRight />

            </button>

          </div>

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
              alt="cardiology"
              className="w-full h-[320px] object-cover"
            />

            <div className="absolute top-6 right-6 bg-white text-blue-600 p-5 rounded-full shadow-lg text-2xl">
              <FaHeartbeat />
            </div>

          </div>

        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">

          <div className="p-10">

            <span className="bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full font-medium">
              Expert Care
            </span>

            <h3 className="text-4xl font-light text-slate-900 mt-8">
              Neurological Sciences
            </h3>

            <p className="text-gray-500 text-1xl leading-9 mt-6">
             Cutting-edge neuroimaging and neurosurgical expertise for complex brain and spinal cord conditions with.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-600">
                <FaCheckCircle className="text-blue-600" />
                Emergency Cardiac Care
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <FaCheckCircle className="text-blue-600" />
                Minimally Invasive Procedures
              </div>

            </div>

            <button className="flex items-center gap-3 text-blue-600 font-medium mt-10 hover:gap-5 transition-all">

              Explore Cardiology

              <FaArrowRight />

            </button>

          </div>

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
              alt="cardiology"
              className="w-full h-[320px] object-cover"
            />

            <div className="absolute top-6 right-6 bg-white text-blue-600 p-5 rounded-full shadow-lg text-2xl">
              <FaHeartbeat />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DepartmentSection;