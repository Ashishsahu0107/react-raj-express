import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaLocationDot,
  FaEnvelope,
  FaHeadphones,
} from "react-icons/fa6";

const ContactSection = () => {
  return (
    <>
      <section className="bg-[#f8f9fc] py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-slate-900"
          >
            Contact
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-1xl leading-9 mt-8"
          >
            Odio et unde deleniti. Deserunt numquam exercitationem.
            Officiis quo odio sint voluptas consequatur ut a odio voluptatem.
            Sit dolorum debitis veritatis natus dolores. Quasi ratione sint.
            Sit quaerat ipsum dolorem.
          </motion.p>

        </div>

      </section>
      <section className="max-w-7xl mx-auto px-6 flex items-center h-10" >
        <div className="flex items-center gap-3 text-sm w-[100%]">

          <Link to="/" className="text-blue-600 cursor-pointer">
            Home
          </Link>

          <span>/</span>

          <span className="text-slate-900">
            Contact
          </span>

        </div>
      </section>
      <section className="bg-[#f8f9fc] py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb */}


          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-12"
            >

              {/* Address */}
              <div className="flex gap-6">

                <div className="w-13 h-13 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl shrink-0">

                  <FaLocationDot />

                </div>

                <div>

                  <h3 className="text-2xl font-medium text-slate-900">
                    Our Address
                  </h3>

                  <p className="text-gray-500 text-1xl mt-3 leading-8">
                    1842 Maple Avenue, Portland, Oregon 97204
                  </p>

                </div>

              </div>

              {/* Email */}
              <div className="flex gap-6">

                <div className="w-13 h-13 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl shrink-0">

                  <FaEnvelope />

                </div>

                <div>

                  <h3 className="text-2xl font-medium text-slate-900">
                    Email Address
                  </h3>

                  <p className="text-gray-500 text-lxl mt-3">
                    info@example.com
                  </p>

                  <p className="text-gray-500 text-1xl mt-2">
                    contact@example.com
                  </p>

                </div>

              </div>

              {/* Hours */}
              <div className="flex gap-6">

                <div className="w-13 h-13 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl shrink-0">

                  <FaHeadphones />

                </div>

                <div>

                  <h3 className="text-2xl font-medium text-slate-900">
                    Hours of Operation
                  </h3>

                  <p className="text-gray-500 text-1xl mt-3">
                    Sunday-Fri: 9 AM - 6 PM
                  </p>

                  <p className="text-gray-500 text-1xl mt-2">
                    Saturday: 9 AM - 4 PM
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100"
            >

              <h2 className="text-3xl font-semibold text-slate-900">
                Send us a Message
              </h2>

              <p className="text-gray-500 text-1xl leading-8 mt-5">
                Have questions or want to learn more? Reach out to us
                and our team will get back to you shortly.
              </p>

              {/* Form */}
              <form className="mt-10 space-y-5">

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-blue-600 text-lg"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-blue-600 text-lg"
                  />

                </div>

                {/* Subject */}
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-blue-600 text-lg"
                />

                {/* Message */}
                <textarea
                  rows="4 "
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-blue-600 text-lg resize-none"
                ></textarea>

                {/* Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-5 rounded-xl text-lg font-semibold">

                  Send Message

                </button>

              </form>

            </motion.div>

          </div>

        </div>

      </section>
      <section className="bg-[#f8f9fc] pb-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className=""
        >

          {/* Google Map */}
          <div className="overflow-hidden rounded-xl shadow-md">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=New+York&output=embed"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-0"
            ></iframe>

          </div>

        </motion.div>

      </section>
    </>
  );
};

export default ContactSection;