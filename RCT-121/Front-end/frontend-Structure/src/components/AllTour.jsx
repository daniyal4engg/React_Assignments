import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Tours } from "./tours";
import { Navbar } from "./Navbar";
import { TourPage } from "./tourPage";
export const AllTour = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Tours />}></Route>
       
      </Routes>
    </BrowserRouter>
  );
};
