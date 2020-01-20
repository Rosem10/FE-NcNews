import React from "react";

function ErrorPage({ err }) {
  if (err) {
    const { status } = err.response;
    const { msg } = err.response.data;

    return (
      <div>
        Oops! {status}: {msg}!
      </div>
    );
  }

  return <p>Oops! 404: Page not found!</p>;
}

export default ErrorPage;
