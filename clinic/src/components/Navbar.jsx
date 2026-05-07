// src/components/Navbar.jsx

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  IoChevronDownOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";

const TOPBAR_HEIGHT = 48;

const morePages = [
  {
    label: "Department Details",
    path: "/department-details",
  },
  {
    label: "Service Details",
    path: "/service-details",
  },
  {
    label: "Appointment",
    path: "/appointment",
  },
  {
    label: "Testimonials",
    path: "/testimonials",
  },
  {
    label: "Frequently Asked Questions",
    path: "/frequentlyAskedQuestions",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Terms",
    path: "/terms",
  },
  {
    label: "Privacy",
    path: "/privacy",
  },
  {
    label: "404",
    path: "/error",
  },
];

const dropdownItems = [
  {
    label: "Item 1",
    path: "/item1",
  },
  {
    label: "Item 2",
    path: "/item2",
  },
  {
    label: "Item 3",
    subItems: [
      {
        label: "Sub Item 1",
        path: "/subitem1",
      },
      {
        label: "Sub Item 2",
        path: "/subitem2",
      },
      {
        label: "Sub Item 3",
        path: "/subitem3",
      },
      {
        label: "Sub Item 4",
        path: "/subitem4",
      },
    ],
  },
  {
    label: "Item 4",
    path: "/item4",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [morePagesOpen, setMorePagesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const morePagesRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOPBAR_HEIGHT) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        morePagesRef.current &&
        !morePagesRef.current.contains(event.target)
      ) {
        setMorePagesOpen(false);
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 w-full z-50 bg-gray-100 shadow-sm transition-all duration-300
      ${isScrolled ? "top-0" : "top-10"}`}
    >
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
            <Link to="/" className="text-blue-600">
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

          {/* More Pages */}
          <li
            ref={morePagesRef}
            className="relative"
            onMouseEnter={() => setMorePagesOpen(true)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition duration-300">
              <span>More Pages</span>

              <IoChevronDownOutline
                className={`transition duration-300 ${
                  morePagesOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown */}
            {morePagesOpen && (
              <div className="absolute top-12 left-0 w-64 bg-white rounded-2xl shadow-2xl py-4 z-50">
                <ul className="flex flex-col text-gray-700">
                  {morePages.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        onClick={() => setMorePagesOpen(false)}
                        className="block px-6 py-3 hover:bg-gray-100 transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Dropdown */}
          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition duration-300">
              <span>Dropdown</span>

              <IoChevronDownOutline
                className={`transition duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Main Dropdown */}
            {dropdownOpen && (
              <div className="absolute top-12 left-0 w-60 bg-white rounded-2xl shadow-2xl py-4 z-50">
                <ul className="flex flex-col text-gray-700">
                  {dropdownItems.map((item, index) => (
                    <li
                      key={index}
                      className={`relative ${
                        item.subItems ? "group" : ""
                      }`}
                    >
                      {item.subItems ? (
                        <>
                          <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-100 cursor-pointer">
                            <span>{item.label}</span>

                            <IoChevronDownOutline className="-rotate-90" />
                          </div>

                          {/* Sub Dropdown */}
                          <div className="absolute top-0 left-full w-56 bg-white rounded-2xl shadow-2xl py-3 hidden group-hover:block">
                            <ul className="flex flex-col text-gray-700">
                              {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    to={subItem.path}
                                    onClick={() =>
                                      setDropdownOpen(false)
                                    }
                                    className="block px-6 py-3 hover:bg-gray-100 transition"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-6 py-3 hover:bg-gray-100 transition"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
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
  );
};

export default Navbar;