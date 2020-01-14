import React from "react";
import { Link } from "@reach/router";

function ArticleCard(props) {
  const { article } = props;

  return (
    <div id="card">
      <Link to={`/articles/${article.article_id}`}>
        <h2>Title: {article.title}</h2>
      </Link>
      <h3>Author: {article.author}</h3>
      <h3>Topic: {article.topic}</h3>
    </div>
  );
}

export default ArticleCard;
