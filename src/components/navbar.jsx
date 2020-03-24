import React, { Component } from 'react';

// Stateless Functional Component (shortcut: sfc)
// cannot use lifecycle hooks in sfcs
const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Rendered')

  return (<nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Navbar{" "}
      <span className="badge bade-pill badge-secondary">
        {totalCounters}</span>
    </a>
  </nav>);
};

export default NavBar;