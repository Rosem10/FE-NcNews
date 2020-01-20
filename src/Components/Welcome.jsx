import React from "react";
import Nav from "./Nav";

function Welcome(props) {
  const { user } = props;
  return (
    <div className="navBar">
      <div className="welcome">
        <h2>
          {`Welcome,`} <div id="username">{`${user}!`}</div>
        </h2>
      </div>
      <Nav className="nav" />
    </div>
  );
}

export default Welcome;
