import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/main/NavBar";
import Home from "./components/main/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
