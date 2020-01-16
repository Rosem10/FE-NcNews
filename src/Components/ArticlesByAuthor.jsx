import React from "react";
import ArticlesList from "./ArticlesList";

function ArticlesByAuthor(props) {
  return (
    <div>
      <h2>{`Here's all our articles by ${props.author}`}</h2>
      <ArticlesList author={props.author} />
    </div>
  );
}

export default ArticlesByAuthor;
