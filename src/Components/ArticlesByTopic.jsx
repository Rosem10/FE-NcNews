import React from "react";
import ArticlesList from "./ArticlesList";

function ArticlesByTopic(props) {
  return (
    <div>
      <h2>{`Here's all our articles on ${props.topic}`}</h2>
      <ArticlesList topic={props.topic} />
    </div>
  );
}

export default ArticlesByTopic;
