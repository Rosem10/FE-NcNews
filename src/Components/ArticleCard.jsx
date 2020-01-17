import React from "react";
import { Link } from "@reach/router";

function ArticleCard(props) {
  const { article } = props;

  return (
    <div id="card">
      <Link to={`/articles/${article.article_id}`}>
        <h2>Title: {article.title}</h2>
      </Link>
      <Link to={`/authors/${article.author}`}>
        <h3>Author: {article.author}</h3>
      </Link>
      <h3>Topic: {article.topic}</h3>
      <h4>Created: {article.created_at}</h4>
<h3>Votes: {article.votes}</h3>
    </div>
  );
}

export default ArticleCard;