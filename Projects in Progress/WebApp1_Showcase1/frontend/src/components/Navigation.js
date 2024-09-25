import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
        {/* Links to Pages */}
        <Link to="/">Home</Link>
        {/* <Link to="./Gallery">Gallery</Link>
        <Link to="./Contact">Contact</Link>
        <Link to="./Order">Order</Link>
        <Link to="./Staff">Staff</Link> */}
        <Link to="./Topics">Topics</Link>
        <Link to="./Roles">Roles</Link>
    </nav>
  );
}

export default Navigation;
