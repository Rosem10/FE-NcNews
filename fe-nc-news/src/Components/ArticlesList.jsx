import React from "react";
import ArticleCard from "./ArticleCard";

function ArticlesList(props) {
  const { articles } = props;
  return (
    <ul>
      Our latest articles...
      {articles.map(article => (
        <li key={article.article_id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}

export default ArticlesList;
