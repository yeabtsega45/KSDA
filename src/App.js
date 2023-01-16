import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Events from "./Pages/Events";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Events />} />
        {/* <Route path="/videos" element={<About />} />
        <Route path="/members" element={<Topics />} />
        <Route path="/about" element={<Recipes />} />
        <Route path="/contact" element={<Questions />} /> */}
      </Routes>
    </>
  );
}

export default App;
