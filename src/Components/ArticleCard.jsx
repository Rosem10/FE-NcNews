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

  return (
    <div>
      <div>
        <div className="cardHead">
          <h3 className="headTopic">{capsArticle}</h3>
          <div className="articleDetails">
            {" "}
            <Link className="headLink" to={`/authors/${article.author}`}>
              <h3>
                Posted by {article.author} at {article.created_at}
              </h3>
            </Link>
          </div>
        </div>

        <div className="cardBody">
          {" "}
          <Link to={`/articles/${article.article_id}`}>
            <h2 className="cardLink">{article.title}</h2>
          </Link>
          <div className="voter">
            {" "}
            <Voter
              votes={article.votes}
              id={article.article_id}
              criteria={"articles"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
