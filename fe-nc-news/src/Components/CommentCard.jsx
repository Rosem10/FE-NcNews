import React from "react";

function CommentCard(props) {
  const { comment } = props;
  return (
    <p className="commentCard">
      <h2>
        {comment.author}
        {comment.created_at}
      </h2>
      <h2>{comment.body}</h2>
    </p>
  );
}

export default CommentCard;
