import React from "react";

function ErrorPage(props) {
  const {status, msg} = props
  return <p>
      {status}: {msg}
  </p>;
}

export default ErrorPage;
