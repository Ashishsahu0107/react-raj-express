import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo1 from '../assets/images/alitalialogo.png'
import logo2 from '../assets/images/hsbc.png'
import logo3 from '../assets/images/walmarklogo.png'
import logo4 from '../assets/images/signifylogo.png'
import logo5 from '../assets/images/lexmarklogo.png'


import {
  FaHeartbeat,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  const brands = [
    {
      logo: logo1,
    },

    {
      logo: logo2,
    },

    {
      logo: logo3,
    },

    {
      logo: logo4,
    },

    {
      logo: logo5,
    },
  ];

  return (
    <>
      <section className="bg-[#f8f9fc] py-20">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 text-center"
        >

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-light text-slate-900">
            About
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg md:text-xl leading-9 mt-8">
            Odio et unde deleniti. Deserunt numquam exercitationem.
            Officiis quo odio sint voluptas consequatur ut a odio
            voluptatem. Sit dolorum debitis veritatis natus dolores.
            Quasi ratione sint. Sit quaerat ipsum dolorem.
          </p>

        </motion.div>

      </section>
      <section className="bg-[#f1f3f5] py-5 border-b border-gray-200">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-6 flex items-center gap-3 text-lg"
        >

          {/* Home */}
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 transition"
          >
            Home
          </Link>

          {/* Slash */}
          <span className="text-gray-400">/</span>

          {/* Current Page */}
          <span className="text-slate-800 font-medium">
            About
          </span>

        </motion.div>

      </section>
      <section className="bg-[#f8f9fc] py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Heading */}
            <h1 className="text-[40px] leading-[50px] font-light text-[#0b2341]">

              Compassionate Care for
              <br />
              Every Family

            </h1>

            {/* Paragraph */}
            <p className="text-[16px] leading-[40px] text-gray-500 mt-10 max-w-4xl">

              For over two decades, we have been dedicated to
              providing exceptional healthcare services to our
              community. Our commitment goes beyond medical
              treatment—we believe in building lasting relationships
              with our patients and their families.

            </p>

            {/* Second Paragraph */}
            <p className="text-[18px] leading-[36px] text-gray-500 mt-10 max-w-2xl">

              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.

            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 max-w-3xl">

              {/* Box 1 */}
              <div className="bg-[#eef2ff] rounded-xl py-8 text-center">

                <h2 className="text-[48px] font-light text-blue-600">
                  15000
                </h2>

                <p className="text-gray-500 text-sm mt-3">
                  Patients Treated
                </p>

              </div>

              {/* Box 2 */}
              <div className="bg-[#eef2ff] rounded-xl py-8 text-center">

                <h2 className="text-[48px] font-light text-blue-600">
                  25
                </h2>

                <p className="text-gray-500 text-sm mt-3">
                  Years Experience
                </p>

              </div>

              {/* Box 3 */}
              <div className="bg-[#eef2ff] rounded-xl py-8 text-center">

                <h2 className="text-[48px] font-light text-blue-600">
                  50
                </h2>

                <p className="text-gray-500 text-sm mt-3">
                  Medical Specialists
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop"
              alt="hospital"
              className="w-full max-w-[650px] h-[470px] object-cover rounded-2xl"
            />

            {/* Small Doctor Image */}
            <div className="absolute bottom-[-30px] right-[-10px]">

              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
                alt="doctor"
                className="w-40 h-40 rounded-full object-cover border-[8px] border-white shadow-2xl"
              />

            </div>

          </motion.div>

        </div>

      </section>
      <section className="bg-[#f8f9fc] py-28">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h2 className="text-5xl font-light text-slate-900">
              Our Core Values
            </h2>

            <p className="text-gray-500 text-xl leading-9 mt-6 max-w-3xl mx-auto">
              These principles guide everything we do in our commitment
              to exceptional healthcare
            </p>

          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >

              <div className="w-20 h-20 rounded-full bg-[#eef2ff] flex items-center justify-center mx-auto">

                <FaHeartbeat className="text-blue-600 text-4xl" />

              </div>

              <h3 className="text-2xl font-light text-slate-900 mt-8">
                Compassion
              </h3>

              <p className="text-gray-500 text-1xl leading-6 mt-6">
                Providing care with empathy and understanding for every
                patient's unique needs and circumstances.
              </p>

            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >

              <div className="w-20 h-20 rounded-full bg-[#eef2ff] flex items-center justify-center mx-auto">

                <FaShieldAlt className="text-blue-600 text-4xl" />

              </div>

              <h3 className="text-2xl font-light text-slate-900 mt-8">
                Excellence
              </h3>

              <p className="text-gray-500 text-1xl leading-6 mt-6">
                Maintaining the highest standards of medical care through
                continuous learning and innovation.
              </p>

            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-center"
            >

              <div className="w-20 h-20 rounded-full bg-[#eef2ff] flex items-center justify-center mx-auto">

                <FaUsers className="text-blue-600 text-4xl" />

              </div>

              <h3 className="text-2xl font-light text-slate-900 mt-8">
                Integrity
              </h3>

              <p className="text-gray-500 text-1xl leading-6 mt-6">
                Building trust through honest communication and ethical
                practices in all our interactions.
              </p>

            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className="text-center"
            >

              <div className="w-20 h-20 rounded-full bg-[#eef2ff] flex items-center justify-center mx-auto">

                <FaLightbulb className="text-blue-600 text-4xl" />

              </div>

              <h3 className="text-2xl font-light text-slate-900 mt-8">
                Innovation
              </h3>

              <p className="text-gray-500 text-1xl leading-6 mt-6">
                Embracing cutting-edge technology and treatments to
                improve patient outcomes.
              </p>

            </motion.div>

          </div>

        </div>

      </section>
      <section className="bg-[#f8f9fc] py-24">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-[#f5f7fb] rounded-[35px] px-10 py-20"
        >

          {/* Heading */}
          <div className="text-center">

            <h2 className="text-5xl font-light text-slate-900">
              Accreditations & Certifications
            </h2>

            <p className="text-gray-500 text-xl leading-9 mt-6 max-w-3xl mx-auto">
              Recognized by leading healthcare organizations for our
              commitment to quality care
            </p>

          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20">

            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl h-32 flex items-center justify-center hover:shadow-md hover:shadow-lg transition-all duration-300 p-6 hover:scale-110"
              >

                <img
                  src={brand.logo}
                  alt="brand-logo"
                  className="w-full h-14 object-contain grayscale opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
                />

              </motion.div>
            ))}

          </div>

        </motion.div>

      </section>
    </>
  );
};

export default About;