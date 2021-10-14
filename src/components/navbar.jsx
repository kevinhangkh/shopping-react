import React, { Component } from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontWeight: "600" }}>
            Shopping cart
          </a>
          <span className="badge bg-secondary m-2" style={{ fontSize: "14px" }}>
            {this.props.totalCount}
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
