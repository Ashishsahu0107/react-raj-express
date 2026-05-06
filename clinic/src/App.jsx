import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

import HeroSection from "./components/ui/HeroSection";
import AboutSection from "./components/ui/AboutSection";
import DepartmentSection from "./components/ui/DepartmentSection";
import SpecialistSection from "./components/ui/SpecialistSection";
import FeaturedServices from "./components/ui/FeaturedServices";
import FindDoctor from "./components/ui/FindDoctor";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DepartmentSection />
      <SpecialistSection />
      <FeaturedServices />
      <FindDoctor />
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

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;