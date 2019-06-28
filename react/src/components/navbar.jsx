import React, { Component } from "react";

const NavBar = props => {
  let { totalCounters } = props;
  console.log("navbar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="bagde badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {

//   }
// }

export default NavBar;
