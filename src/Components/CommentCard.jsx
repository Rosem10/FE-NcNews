import React from "react";
import DeleteComment from "./DeleteComment";
import Voter from "./Voter";

function CommentCard(props) {
  const { comment, user, removeComment, articleId } = props;
  const commentDate = new Date(comment.created_at);
  const formattedDate = commentDate.toGMTString();

  return (
    <div>
      <header className="commentHeader">
        <h3 className="headerInfo">By: {comment.author}</h3>
        <h3 className="headerInfo">{formattedDate}</h3>
      </header>
      <main className="commentBody">{comment.body} </main>
      <div className="commentFooter">
        {user === comment.author && (
          <DeleteComment
            articleId={articleId}
            commentId={comment.comment_id}
            removeComment={removeComment}
          />
        )}
        <Voter
          criteria={"comments"}
          votes={comment.votes}
          id={comment.comment_id}
        />
      </div>
    </div>
  );
}

export default CommentCard;
