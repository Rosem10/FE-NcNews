import * as api from "../Api";
import React from "react";

function handleClick(props) {
  const { commentId, removeComment } = props;
  removeComment(commentId);
  api.removeComment(commentId).catch(err => {
    return <h3>Unable to remove this comment!</h3>;
  });
}

function DeleteComment(props) {
  return (
    <button onClick={() => handleClick(props)}>Delete your comment?</button>
  );
}

export default DeleteComment;
