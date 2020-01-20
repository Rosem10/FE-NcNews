import React from "react";
import {Link} from "@reach/router"
import Welcome from "./Welcome";

function Header(props) {
  const { user } = props;

  return (
    <header className="header">
      <Welcome user={user}/>
      <div className="title">
        <Link to="/" id="link">
          NC NEWS
        </Link>
      </div>
    </header>
  );
}

export default Header;
