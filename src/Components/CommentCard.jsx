import React from "react";
import DeleteComment from "./DeleteComment";
import Voter from "./Voter";

function CommentCard(props) {
  const { comment, user, removeComment } = props;

  return (
    <div className="commentCard">
      <header id="commentHeader">
        <h3 id="commenth3">By: {comment.author}</h3>
        <h3 id="commenth3">At: {comment.created_at}</h3>
      </header>
      <main id="commentBody">
        {comment.body}{" "}
        <Voter
          criteria={"comments"}
          votes={comment.votes}
          id={comment.comment_id}
        />
        {user === comment.author && (
          <DeleteComment
            articleId={props.articleId}
            commentId={comment.comment_id}
            removeComment={removeComment}
          />
        )}
      </main>
    </div>
  );
}

export default CommentCard;
