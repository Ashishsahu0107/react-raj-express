import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



import {
  FaArrowRight,
  FaShieldAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";

const MedicalCTA = () => {
  return (
    <>
      <section className="bg-[#F4F8FF] py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          {/* Top CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <h1 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight max-w-xl">
                Excellence in Medical Care, Every Day
              </h1>

              <p className="text-gray-500 text-base md:text-xl leading-9 mt-8 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>

              {/* Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-5">

                <button className="text-blue-600 font-medium text-lg flex items-center gap-3 hover:gap-5 transition-all">

                  Schedule Consultation

                  <FaArrowRight />

                </button>

                <button className="text-gray-500 hover:text-blue-600 font-medium text-lg flex items-center gap-3 hover:gap-5 transition-all">

                  Explore Services

                  <FaArrowRight />

                </button>

              </div>

            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1400&auto=format&fit=crop"
                alt="Medical Care"
                className="w-full h-[300px] md:h-[420px] object-cover"
              />

            </motion.div>

          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-28">

            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <div className="text-blue-600 text-4xl">
                <FaShieldAlt />
              </div>

              <h2 className="text-3xl font-light text-slate-900 mt-8">
                Advanced Technology
              </h2>

              <p className="text-gray-500 text-lg leading-8 mt-6">
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim
                id est laborum.
              </p>

            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <div className="text-blue-600 text-4xl">
                <FaClock />
              </div>

              <h2 className="text-3xl font-light text-slate-900 mt-8">
                24/7 Availability
              </h2>

              <p className="text-gray-500 text-lg leading-8 mt-6">
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur
                excepteur.
              </p>

            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <div className="text-blue-600 text-4xl">
                <FaUsers />
              </div>

              <h2 className="text-3xl font-light text-slate-900 mt-8">
                Expert Team
              </h2>

              <p className="text-gray-500 text-lg leading-8 mt-6">
                Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium
                totam rem.
              </p>

            </motion.div>

          </div>

          {/* Bottom Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-[#edf3ff] mt-24 rounded-sm px-10 md:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-10"
          >

            {/* Left */}
            <div>

              <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight">
                Need Immediate Medical Assistance?
              </h2>

              <p className="text-gray-500 text-lg leading-8 mt-6 max-w-3xl">
                Our emergency response team is available around the clock
                to provide immediate medical support when you need it most.
              </p>

            </div>

            {/* Right */}
            <div className="flex flex-col items-center gap-5">

              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-5 rounded-md flex items-center gap-4 text-lg font-semibold whitespace-nowrap">

                <FaPhoneAlt />

                (555) 123-4567

              </button>

              <Link to="/about" className="text-gray-500 hover:text-blue-600 transition text-lg">
                Find Location
              </Link>

            </div>

          </motion.div>

        </div>

      </section>
    </>
  );
};

export default MedicalCTA;