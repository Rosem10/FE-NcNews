import React from "react";
import {Link} from "@reach/router"

function Nav() {
  return (
    <p className="navbar">
      <label>Go to ... </label>
     <Link to ="/topics"> <label>Topics</label></Link>

    </p>
  );
}

export default Nav;
