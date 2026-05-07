import React from "react";
import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#f8f9fc] pt-16 lg:pt-24 pb-10 border-top border-[1px] border-gray-300 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          {/* Top Footer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-30">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >

              {/* Logo */}
              <h1 className="text-4xl md:text-5xl font-light text-slate-900">
                Clinic
              </h1>

              {/* Text */}
              <p className="text-gray-500 text-1xl leading-8 mt-8 max-w-2xl">
                Crafting exceptional digital experiences through
                thoughtful design and innovative solutions that
                elevate your brand presence.
              </p>

              {/* Contact */}
              <div className="mt-10 md:mt-14 space-y-6">

                <div className="flex items-start gap-4 text-gray-600 text-base md:text-lg">

                  <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" />

                  <span>
                    123 Creative Boulevard, Design District, NY 10012
                  </span>

                </div>

                <div className="flex items-center gap-4 text-gray-600 text-base">

                  <FaPhoneAlt className="text-blue-600 shrink-0" />

                  +1 (555) 987-6543

                </div>

                <div className="flex items-center gap-4 text-gray-600 text-base">

                  <FaEnvelope className="text-blue-600 shrink-0" />

                  hello@designstudio.com

                </div>

              </div>

            </motion.div>

            {/* Right Links */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-2"
            >

              {/* Column 1 */}
              <div>

                <h3 className="text-xl md:text-1xl font-medium text-slate-900 mb-6">
                  Studio
                </h3>

                <ul className="space-y-4 text-gray-500 text-base text-1xl">

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Our Story
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Design Process
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Portfolio
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Case Studies
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Awards
                  </li>

                </ul>

              </div>

              {/* Column 2 */}
              <div>

                <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-6">
                  Services
                </h3>

                <ul className="space-y-4 text-gray-500 text-base text-1xl">

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Brand Identity
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Web Design
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Mobile Apps
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Digital Strategy
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Consultation
                  </li>

                </ul>

              </div>

              {/* Column 3 */}
              <div>

                <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-6">
                  Resources
                </h3>

                <ul className="space-y-4 text-gray-500 text-base text-1xl">

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Design Blog
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Style Guide
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Free Assets
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Tutorials
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Inspiration
                  </li>

                </ul>

              </div>

              {/* Column 4 */}
              <div>

                <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-6">
                  Connect
                </h3>

                <ul className="space-y-4 text-gray-500 text-base text-1xl">

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Start Project
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Schedule Call
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Join Newsletter
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Follow Updates
                  </li>

                  <li className="hover:text-blue-600 cursor-pointer transition">
                    Partnership
                  </li>

                </ul>

              </div>

            </motion.div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 mt-16 lg:mt-24 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Left */}
            <p className="text-gray-400 text-sm md:text-base text-center lg:text-left">

              © <span className="text-slate-900 font-medium">Clinic.</span>
              {" "}All rights reserved.

            </p>

            {/* Center */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-gray-400 text-sm md:text-base">

              <p className="hover:text-blue-600 cursor-pointer transition">
                Privacy Policy
              </p>

              <p className="hover:text-blue-600 cursor-pointer transition">
                Terms of Service
              </p>

              <p className="hover:text-blue-600 cursor-pointer transition">
                Cookie Policy
              </p>

            </div>

            {/* Right */}
            <p className="text-gray-400 text-sm md:text-base text-center lg:text-right">

              Designed by
              {" "}
              <span className="text-blue-600 cursor-pointer">
                TailwindcssMade
              </span>

            </p>

          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;