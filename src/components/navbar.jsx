import React, { Component } from "react";

//Stateless Functional Component
const NavBar = ({ totalCount }) => {
  //We pass props as an argument to the function
  //We could have passed props, but we used object destructuring here to simplify the code
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="javascript:void(0)"
          style={{ fontWeight: "600" }}
        >
          Shopping cart
        </a>
        <span className="badge bg-secondary m-2" style={{ fontSize: "14px" }}>
          {totalCount}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;

//No need for a class here because it's a stateless functional component
// class NavBar extends React.Component {
//   render() {

//   }
// }

// export default NavBar;
