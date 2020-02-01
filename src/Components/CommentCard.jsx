import React from "react";
import DeleteComment from "./DeleteComment";
import Voter from "./Voter";

function CommentCard(props) {
  const { comment, user, removeComment, articleId } = props;
  const commentDate = new Date(comment.created_at);
  const formattedDate = commentDate.toGMTString();
  let author = comment.author
  if(comment.author === user){
    author = "you"
  }
  

  return (
    <div>
      <header className="commentHeader">
        <h3 className="headerInfo">By: {author}</h3>
        <h3 className="headerInfo">{formattedDate}</h3>
      </header>
      <main className="commentBody">{comment.body} </main>
      <div className="commentFooter">
        {" "}
        <div className="DeleteButton">
          {user === comment.author && (
            <DeleteComment
              articleId={articleId}
              commentId={comment.comment_id}
              removeComment={removeComment}
            />
          )}
        </div>
        <div id="commentVoter">
          <Voter
            criteria={"comments"}
            votes={comment.votes}
            id={comment.comment_id}
          />
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
