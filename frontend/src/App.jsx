import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/main/NavBar";
import Home from "./components/main/Home";
import Prices from "./components/main/Prices";
import Footer from "./components/main/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
