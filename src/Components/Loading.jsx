import React from "react";
import Welcome from "./Welcome";

function Loading(props) {
  const { user } = props;

  return (
    <div>
      <Welcome user={user} />
      <h2 className="loading">{"Loading..."}</h2>
    </div>
  );
}

export default Loading;
