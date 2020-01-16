import React from "react";
import { Link } from "@reach/router";
import Nav from "./Nav";

function Header(props) {

  return (
    <header>
      <Link to="/">
        <header>Nc News</header>
      </Link>
        <h2>{`Welcome, ${props.user}!`}</h2>
      <Nav />
    </header>
  );
}

export default Header;
