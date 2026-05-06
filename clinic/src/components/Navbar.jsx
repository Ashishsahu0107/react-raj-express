import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  IoChevronDownOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="bg-gray-100 shadow-sm relative z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl lg:text-4xl font-bold text-slate-900"
          >
            Clinic
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-4xl text-slate-900"
          >

            {mobileMenu ? <IoClose /> : <IoMenu />}

          </button>

          {/* Menu */}
          <ul
            className={`lg:flex lg:items-center lg:gap-6 text-xl font-medium text-gray-700
            ${
              mobileMenu
                ? "absolute top-full left-0 w-full bg-white flex flex-col p-6 gap-4 shadow-xl"
                : "hidden"
            }`}
          >

            {/* Home */}
            <li className="relative group">

              <Link
                to="/"
                className="text-blue-600"
              >
                Home
              </Link>

              <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-blue-600"></span>

            </li>

            {/* About */}
            <li className="relative group">

              <Link
                to="/about"
                className="hover:text-blue-600 transition duration-300"
              >
                About
              </Link>

              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

            </li>

            {/* Departments */}
            <li className="relative group">

              <Link
                to="/departments"
                className="group-hover:text-blue-600 transition duration-300"
              >
                Departments
              </Link>

              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

            </li>

            {/* Services */}
            <li className="relative group">

              <Link
                to="/services"
                className="group-hover:text-blue-600 transition duration-300"
              >
                Services
              </Link>

              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

            </li>

            {/* Doctors */}
            <li className="relative group">

              <Link
                to="/doctors"
                className="group-hover:text-blue-600 transition duration-300"
              >
                Doctors
              </Link>

              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

            </li>

            {/* More Pages Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >

              {/* Button */}
              <div
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-1 cursor-pointer hover:text-blue-600 group-hover:text-blue-600 transition duration-300"
              >

                <span className="group-hover:text-blue-600 transition duration-300">
                  More Pages
                </span>

                <IoChevronDownOutline />

              </div>

              {/* Dropdown */}
              {dropdown && (
                <div className="lg:absolute lg:top-12 lg:left-0 lg:w-64 bg-white rounded-xl shadow-xl py-4 z-50 mt-3 lg:mt-0">

                  <ul className="flex flex-col text-gray-700">

                    <li>
                      <Link
                        to="/department-details"
                        onClick={() => setDropdown(false)}
                        className="block px-6 py-3 hover:bg-gray-100"
                      >
                        Department Details
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/service-details"
                        onClick={() => setDropdown(false)}
                        className="block px-6 py-3 hover:bg-gray-100"
                      >
                        Service Details
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/appointment"
                        onClick={() => setDropdown(false)}
                        className="block px-6 py-3 hover:bg-gray-100"
                      >
                        Appointment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/gallery"
                        onClick={() => setDropdown(false)}
                        className="block px-6 py-3 hover:bg-gray-100"
                      >
                        Gallery
                      </Link>
                    </li>

                  </ul>

                </div>
              )}

            </li>

            {/* Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setDropdown1(true)}
              onMouseLeave={() => setDropdown1(false)}
            >

              {/* Button */}
              <div
                onClick={() => setDropdown1(!dropdown1)}
                className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
              >

                <span>
                  Dropdown
                </span>

                <IoChevronDownOutline />

              </div>

              {/* Main Dropdown */}
              {dropdown1 && (
                <div className="lg:absolute lg:top-12 lg:left-0 lg:w-60 bg-white rounded-xl shadow-xl py-4 z-50 mt-3 lg:mt-0">

                  <ul className="flex flex-col text-gray-700">

                    <li>
                      <Link
                        to="/item1"
                        onClick={() => setDropdown1(false)}
                        className="block px-6 py-3 hover:bg-gray-100"
                      >
                        Item 1
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/item2"
                        onClick={() => setDropdown1(false)}
                        className="block px-6 py-3 hover:bg-gray-100"
                      >
                        Item 2
                      </Link>
                    </li>

                    {/* Item 3 */}
                    <li className="relative group">

                      <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-100 cursor-pointer">

                        <span>Item 3</span>

                        <IoChevronDownOutline className="-rotate-90" />

                      </div>

                      {/* Sub Dropdown */}
                      <div className="lg:absolute lg:top-0 lg:left-full lg:w-56 bg-white rounded-xl shadow-xl py-3 hidden group-hover:block">

                        <ul className="flex flex-col text-gray-700">

                          <li>
                            <Link
                              to="/subitem1"
                              onClick={() => setDropdown1(false)}
                              className="block px-6 py-3 hover:bg-gray-100"
                            >
                              Sub Item 1
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/subitem2"
                              onClick={() => setDropdown1(false)}
                              className="block px-6 py-3 hover:bg-gray-100"
                            >
                              Sub Item 2
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/subitem3"
                              onClick={() => setDropdown1(false)}
                              className="block px-6 py-3 hover:bg-gray-100"
                            >
                              Sub Item 3
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/subitem4"
                              onClick={() => setDropdown1(false)}
                              className="block px-6 py-3 hover:bg-gray-100"
                            >
                              Sub Item 4
                            </Link>
                          </li>

                        </ul>

                      </div>

                    </li>

                    <li>
                      <Link
                        to="/item4"
                        onClick={() => setDropdown1(false)}
                        className="block px-6 py-3 hover:bg-gray-100"
                      >
                        Item 4
                      </Link>
                    </li>

                  </ul>

                </div>
              )}

            </li>

            {/* Contact */}
            <li className="relative group">

              <Link
                to="/contact"
                className="group-hover:text-blue-600 transition duration-300"
              >
                Contact
              </Link>

              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

            </li>

          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;