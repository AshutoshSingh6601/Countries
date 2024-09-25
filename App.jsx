import React, { useState } from "react";

import "./assets/Main.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import ShimmerForCardDetail from "./components/ShimmerForCardDetail";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:countryDetail" element={<CountryDetails />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
