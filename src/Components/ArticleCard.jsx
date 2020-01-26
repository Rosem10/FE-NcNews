import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

function ArticleCard(props) {
  const { article } = props;
  const capsArticle = article.topic.toUpperCase();
  let { user } = props;

  if (user === article.author) {
    article.author = "you";
  }
  const created = new Date(article.created_at);


  return (
    <div className="cardContent">
      <div className="cardHead">
        <h3 className="headTopic">{capsArticle}</h3>
        <div className="voter">
          <Voter
            votes={article.votes}
            id={article.article_id}
            criteria={"articles"}
          />
        </div>
      </div>

      <div className="cardBody">
        <Link to={`/articles/${article.article_id}`}>
          <h2 className="cardLink">{article.title}</h2>
        </Link>
      </div>

      <div id="articleDetails">
    
        Posted by:
        <Link className="headLink" to={`/authors/${article.author}`}>
          {article.author}
        </Link>
        at {created.toGMTString()}
      </div>
      <p className="articleComments">Comments: {article.comment_count}</p>
    </div>
  );
}

export default ArticleCard;
