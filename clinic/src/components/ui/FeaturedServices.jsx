import React from "react";
import { motion } from "framer-motion";

import {
  FaCapsules,
  FaHeartbeat,
  FaArrowRight,
  FaWaveSquare,
} from "react-icons/fa";

const FeaturedServices = () => {
  return (
    <>
      <section className="bg-[#f8f9fc] py-16">

        {/* Main Section */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-8"
          >

            {/* Image */}
            <div className="relative overflow-hidden rounded-[25px] group">

              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop"
                alt="healthcare"
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay Badge */}
              <div className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg">

                <FaHeartbeat />

                Emergency Care

              </div>

            </div>

            {/* Content */}
            <div className="mt-8">

              <h2 className="text-4xl font-light text-slate-900 leading-tight">
                Comprehensive Healthcare Excellence
              </h2>

              <p className="text-gray-500 text-lg leading-8 mt-5 max-w-4xl">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae donec velit neque.
              </p>

              {/* Button */}
              <button className="mt-6 text-blue-600 text-lg font-medium flex items-center gap-3 hover:gap-5 transition-all">

                Explore Our Services

                <FaArrowRight />

              </button>

            </div>

          </motion.div>

          {/* Right Services */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-4 flex flex-col gap-6"
          >

            {/* Service 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="border-b border-gray-200 pb-6 flex gap-4"
            >

              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0">

                <FaCapsules />

              </div>

              <div>

                <h3 className="text-2xl font-light text-slate-900">
                  Dermatology Clinic
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  Pellentesque habitant morbi tristique senectus et netus.
                </p>

                <button className="text-blue-600 text-sm font-medium mt-3 hover:tracking-wide transition-all">
                  Learn More
                </button>

              </div>

            </motion.div>

            {/* Service 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="border-b border-gray-200 pb-6 flex gap-4"
            >

              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0">

                <FaHeartbeat />

              </div>

              <div>

                <h3 className="text-2xl font-light text-slate-900">
                  Surgery Center
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  Donec rutrum congue leo eget malesuada curabitur arcu erat.
                </p>

                <button className="text-blue-600 text-sm font-medium mt-3 hover:tracking-wide transition-all">
                  Learn More
                </button>

              </div>

            </motion.div>

            {/* Service 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="flex gap-4"
            >

              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0">

                <FaWaveSquare />

              </div>

              <div>

                <h3 className="text-2xl font-light text-slate-900">
                  Diagnostics Lab
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  Vestibulum ac diam sit amet quam vehicula elementum.
                </p>

                <button className="text-blue-600 text-sm font-medium mt-3 hover:tracking-wide transition-all">
                  Learn More
                </button>

              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* Specialties Grid */}
        <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-4 gap-8">

          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <img
              src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop"
              alt="Maternal Care"
              className="w-28 h-28 object-cover rounded-full mx-auto"
            />

            <h3 className="text-2xl font-light text-slate-900 mt-5">
              Maternal Care
            </h3>

            <p className="text-gray-500 text-sm mt-3">
              Expert pregnancy & delivery support
            </p>

          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
              alt="Vaccination"
              className="w-28 h-28 object-cover rounded-full mx-auto"
            />

            <h3 className="text-2xl font-light text-slate-900 mt-5">
              Vaccination
            </h3>

            <p className="text-gray-500 text-sm mt-3">
              Complete immunization programs
            </p>

          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
              alt="Emergency Care"
              className="w-28 h-28 object-cover rounded-full mx-auto"
            />

            <h3 className="text-2xl font-light text-slate-900 mt-5">
              Emergency Care
            </h3>

            <p className="text-gray-500 text-sm mt-3">
              24/7 critical care services
            </p>

          </motion.div>

          {/* Item 4 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <img
              src="https://images.unsplash.com/photo-1580281657527-47d8f7b0f3d5?q=80&w=1200&auto=format&fit=crop"
              alt="Advanced Technology"
              className="w-28 h-28 object-cover rounded-full mx-auto"
            />

            <h3 className="text-2xl font-light text-slate-900 mt-5">
              Advanced Technology
            </h3>

            <p className="text-gray-500 text-sm mt-3">
              State-of-the-art medical equipment
            </p>

          </motion.div>

        </div>

      </section>
    </>
  );
};

export default FeaturedServices;