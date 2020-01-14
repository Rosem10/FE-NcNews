import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "./Api";
import Loading from "./Loading";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    api
      .getArticles()
      .then(res =>
        this.setState({ articles: res.data.articles, isLoading: false })
      );
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const sort_by = this.props.orderBy;
      api.getArticles(null, sort_by).then((res) => {this.setState({articles: res.data.articles})})
    }
  }

  render() {
    if (this.state.isLoading === true) {
      return <Loading />;
    }
    const { articles } = this.state;

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
}

export default ArticlesList;
