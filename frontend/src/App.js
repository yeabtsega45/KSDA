import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Events from "./Pages/Events";
import Videos from "./Pages/Videos";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Registeration from "./Pages/Registeration";
import Members from "./Pages/Members";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Events />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Registeration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
