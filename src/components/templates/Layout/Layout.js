import React, { Component } from "react";
import NavLinks from "./../../molecules/NavLinks";

class Layout extends Component {
  render() {
    return (
      <div>
        <NavLinks />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
