import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <Link to="/">TOurs</Link>
      <Link to="/tourspage">TourPage</Link>
      <br />
      <Link to="/"></Link>
    </div>
  );
};
