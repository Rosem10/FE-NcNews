import React from "react";
import ArticlesList from "./ArticlesList";

function ArticlesByAuthor(props) {
  const { author } = props;

  return (
    <div>
      <h2>{`Here's all our articles by ${author}`}</h2>
      <ArticlesList author={author} />
    </div>
  );
}

export default ArticlesByAuthor;
