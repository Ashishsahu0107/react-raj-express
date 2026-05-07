import { motion } from 'framer-motion'
import React from 'react'
import { Link } from "react-router-dom";

import {
  Home, Search, Info,
  Phone,
  LayoutGrid,
  Newspaper,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

const Error = () => {
  return (
    <div>

      <section className=" py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-slate-900"
          >
            404
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-1xl leading-9 mt-8"
          >
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
          </motion.p>

        </div>

      </section>
      <section className="bg-[#f8f9fc]  px-6 flex items-center h-10" >
        <div className="flex items-center max-w-7xl mx-auto gap-3 text-sm w-[100%]">

          <Link to="/" className="text-blue-600 cursor-pointer">
            Home
          </Link>

          <span>/</span>

          <span className="text-slate-900">
            Contact
          </span>

        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center px-4">

        <div className="max-w-3xl mx-auto text-center">

          {/* 404 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 90,
            }}
            className="text-[140px] md:text-[240px] font-light leading-none text-[#33476b]"
          >
            404
          </motion.h1>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="text-4xl md:text-5xl font-light text-[#1e355d] mb-8"
          >
            Page Not Found
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="text-gray-500 leading-9 text-lg max-w-2xl mx-auto mb-12"
          >
            The page you are looking for might have been removed,
            had its name changed, or is temporarily unavailable.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >

            {/* Home Button */}
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>

            {/* Search Button */}
            <button className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 text-slate-700 px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300">
              <Search className="w-5 h-5" />
              Search Site
            </button>
          </motion.div>
        </div>
      </section>
      {/* ================= QUICK LINKS ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="my-24"
      >

        {/* Title */}
        <h3 className="text-3xl font-light text-center text-[#1e355d] mb-14">
          You might be looking for:
        </h3>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">

          {/* Card */}
          <Link
            to="/about"
            className="group bg-white border border-gray-200 rounded-2xl py-4 px-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">

              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all duration-300">

                <Info className="w-7 h-7 text-blue-600 group-hover:text-white transition-all duration-300" />
              </div>

              <h4 className="text-xl font-medium text-slate-800">
                About Us
              </h4>
            </div>
          </Link>

          {/* Card */}
          <Link
            to="/contact"
            className="group bg-white border border-gray-200 rounded-2xl py-4 px-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">

              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all duration-300">

                <Phone className="w-7 h-7 text-blue-600 group-hover:text-white transition-all duration-300" />
              </div>

              <h4 className="text-xl font-medium text-slate-800">
                Contact
              </h4>
            </div>
          </Link>

          {/* Card */}
          <Link
            to="/services"
            className="group bg-white border border-gray-200 rounded-2xl py-4 px-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">

              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all duration-300">

                <LayoutGrid className="w-7 h-7 text-blue-600 group-hover:text-white transition-all duration-300" />
              </div>

              <h4 className="text-xl font-medium text-slate-800">
                Services
              </h4>
            </div>
          </Link>

          {/* Card */}
          <Link
            to="/blog"
            className="group bg-white border border-gray-200 rounded-2xl py-4 px-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">

              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all duration-300">

                <Newspaper className="w-7 h-7 text-blue-600 group-hover:text-white transition-all duration-300" />
              </div>

              <h4 className="text-xl font-medium text-slate-800">
                Blog
              </h4>
            </div>
          </Link>

          {/* Card */}
          <Link
            to="/support"
            className="group bg-white border border-gray-200 rounded-2xl py-4 px-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">

              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all duration-300">

                <HelpCircle className="w-7 h-7 text-blue-600 group-hover:text-white transition-all duration-300" />
              </div>

              <h4 className="text-xl font-medium text-slate-800">
                Support
              </h4>
            </div>
          </Link>

          {/* Card */}
          <Link
            to="/privacy-policy"
            className="group bg-white border border-gray-200 rounded-2xl py-4 px-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">

              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all duration-300">

                <ShieldCheck className="w-7 h-7 text-blue-600 group-hover:text-white transition-all duration-300" />
              </div>

              <h4 className="text-xl font-medium text-slate-800">
                Privacy Policy
              </h4>
            </div>
          </Link>

        </div>
      </motion.div>
    </div>
  )
}

export default Error