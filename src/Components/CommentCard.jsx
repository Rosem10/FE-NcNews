import React from "react";
import DeleteComment from "./DeleteComment";
import Voter from "./Voter";

function CommentCard(props) {
  const { comment, user, removeComment, articleId } = props;

  return (
    <div >
      <header className = "commentHeader">
        <h3>By: {comment.author}</h3>
        <h3>{comment.created_at}</h3>
      </header>
      <main className = "commentBody">
        {comment.body}{" "}
        <div className = "commentVoter"> <Voter
          
          criteria={"comments"}
          votes={comment.votes}
          id={comment.comment_id}
        /></div>
        {user === comment.author && (
          <DeleteComment
            articleId={articleId}
            commentId={comment.comment_id}
            removeComment={removeComment}
          />
        )}
      </main>
    </div>
  );
}

export default CommentCard;
