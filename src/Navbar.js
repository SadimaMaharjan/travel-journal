import React from "react";
import icon from "../public/images/globe-icon.png";

export default function Navbar() {
  return (
    <div className="header">
      <img src={icon} className="top-logo" />
      <h5 className="top-heading">my travel journal</h5>
    </div>
  );
}
