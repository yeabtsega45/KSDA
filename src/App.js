import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Events from "./Pages/Events";
import Videos from "./Pages/Videos";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Events />} />
        <Route path="/videos" element={<Videos />} />
        {/* <Route path="/members" element={<Topics />} />
        <Route path="/about" element={<Recipes />} />
        <Route path="/contact" element={<Questions />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
