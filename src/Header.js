import React from "react";

class Header extends React.Component {
 
  render() {
    return (
      <>
        <header>
          <h1>Hornedbeasts 301 {this.props.beast}</h1>
        </header>
      </>
    );
  }
}

export default Header;
