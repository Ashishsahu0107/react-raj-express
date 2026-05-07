import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/ContactSection";
import Departments from './components/MedicalTabs'
import Services from './components/Services'
import Doctors from "./components/Doctors";

import HeroSection from "./components/ui/HeroSection";
import AboutSection from "./components/ui/AboutSection";
import DepartmentSection from "./components/ui/DepartmentSection";
import SpecialistSection from "./components/ui/SpecialistSection";
import FeaturedServices from "./components/ui/FeaturedServices";
import FindDoctor from "./components/ui/FindDoctor";
import MedicalCTA from "./components/ui/MedicalCTA";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DepartmentSection />
      <SpecialistSection />
      <FeaturedServices />
      <FindDoctor />
      <MedicalCTA />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>

      <Topbar />
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/departments"
          element={<Departments />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/doctors"
          element={<Doctors />}
        />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;