import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

function ArticleCard(props) {
  const { article } = props;
  const capsArticle = article.topic.toUpperCase();
  let { user } = props;

  let author = article.author
  if (user === article.author) {
    author = "you";
  }
  const created = new Date(article.created_at);


  return (
    <div className = "articleCardMain">
    <div className="cardContent">
        <h3 className="headTopic">{capsArticle}</h3>

      <div className="cardBody">
        <Link to={`/articles/${article.article_id}`}>
          <h2 className="cardLink">{article.title}</h2>
        </Link>
      </div>
  
      <div id="articleDetails">
    
        Posted by:{" "}
        <Link className="headLink" to={`/authors/${article.author}`}>
          {author}
        </Link>
        <br/>
        {created.toGMTString()}
      </div>
      <p className="articleComments">Comments: {article.comment_count}</p>
      </div>
        <div className="voter">
          <Voter
            votes={article.votes}
            id={article.article_id}
            criteria={"articles"}
          />
      </div>
</div>
  );
}

export default ArticleCard;
