import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Event">Events</Link>
          </li>
          <li>
            <Link to="/Goals">Goals</Link>
          </li>
          <li>
            <Link to="/Settings">Settings</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;