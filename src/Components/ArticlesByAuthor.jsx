import React from "react";
import ArticlesList from "./ArticlesList";
import Welcome from "./Welcome";
import SortArticles from "./SortArticles";

function ArticlesByAuthor(props) {
  const { author, user } = props;

  return (
    <div>
      <Welcome className="welcome" user={user} />
      <div className="articlesSorter">
        <div className="topicTitle">
          <h2>{`Here are all our articles by:`}</h2>

          <div className="topicName">{`${author}`}</div>
        </div>
      <SortArticles author={author} />
      </div>
      <ArticlesList author={author} />
    </div>
  );
}

export default ArticlesByAuthor;
