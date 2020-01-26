import React from "react";
import { Link } from "@reach/router";

function Home() {
  return (
    <Link to="/" className="home">
      <div className="home">
        <i className="fas fa-home"></i>
      </div>
    </Link>
  );
}

export default Home;
