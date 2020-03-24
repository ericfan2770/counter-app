import React, { Component } from 'react';

// Stateless Functional Component (shortcut: sfc)
const NavBar = (props) => {
  return (<nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Navbar{" "}
      <span className="badge bade-pill badge-secondary">
        {props.totalCounters}</span>
    </a>
  </nav>);
};

export default NavBar;