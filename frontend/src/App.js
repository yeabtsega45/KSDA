import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Events from "./Pages/Events";
import Videos from "./Pages/Videos";
import BottomBar from "./Components/BottomBar";
import AboutUs from "./Pages/AboutUs";
import ContactChurch from "./Pages/ContactChurch";
import Register from "./Pages/Register";
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
        <Route path="/contact" element={<ContactChurch />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <BottomBar />
    </>
  );
}

export default App;
