import React from "react";

function ErrorPage(props) {
  console.log(props);
  const {status, msg} = props

return <p>Oops!  {status}: {msg}</p>;
}

export default ErrorPage;
