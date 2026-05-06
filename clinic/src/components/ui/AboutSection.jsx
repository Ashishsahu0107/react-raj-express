import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>

          <h1 className="text-4xl font-light leading-tight text-slate-900">
            Compassionate Care, Advanced Medicine
          </h1>

          <p className="text-gray-600 text-xl leading-7 mt-5">
            For over two decades, we've been dedicated to providing
            exceptional healthcare.
          </p>

          <p className="text-gray-600 text-xl leading-7 mt-5">
            Our multidisciplinary team of specialists works collaboratively
            to ensure every patient receives comprehensive care.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-10 mt-14">

            <div>
              <h2 className="text-5xl font-light text-blue-600">
                15000+
              </h2>

              <p className="text-gray-600 text-xl mt-3">
                Patients Served
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-light text-blue-600">
                25+
              </h2>

              <p className="text-gray-600 text-xl mt-3">
                Years of Excellence
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-light text-blue-600">
                50+
              </h2>

              <p className="text-gray-600 text-xl mt-3">
                Specialists
              </p>
            </div>

          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-xl px-10 py-2 rounded-xl transition">
            Learn More About Us
          </button>

        </div>

        {/* Right */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop"
            alt="hospital"
            className="rounded-3xl w-full h-[550px] object-cover"
          />

          {/* Bottom Card */}
          <div className="absolute bottom-[-20px] left-[-30px] bg-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-6">

            <div className="bg-blue-100 text-blue-600 p-2 rounded-full text-2xl">
              <FaHeartbeat />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                24/7 Emergency Care
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Always here when you need us most
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;