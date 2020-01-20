import React from "react";
import { Link } from "@reach/router";
import Nav from "./Nav";

function Header(props) {
  const { user } = props;
  return (
    <header className="header">
      <div className="navBar">
        <div className="welcome">
          <h2>
            {`Welcome,`} <div id="username">{`${user}!`}</div>
          </h2>
        </div>
        <Nav className="nav" />
      </div>
      <div className="title">
        <Link to="/" id="link">
          NC NEWS
        </Link>
       

      </div>
    </header>
  );
}

export default Header;
