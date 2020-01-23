import React from "react";
import Welcome from "./Welcome";

function ErrorPage({ err, user }) {
  if (err) {
    const { status } = err.response;
    const { msg } = err.response.data;

    return (
      <div>
        <Welcome user={user} />
        <p id="error">
          {" "}
          Oops! {status}: {msg}!
        </p>
      </div>
    );
  }

  return (
    <div className="errorPage">
      <Welcome user={user} />
      <p id="error">Oops! 404: Page not found!</p>
    </div>
  );
}

export default ErrorPage;
