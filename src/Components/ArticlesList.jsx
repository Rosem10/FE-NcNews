import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../Api";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: "",
    hasError: false
  };

  fetchArticles(topic, orderBy, author) {
    api
      .getArticles(topic, orderBy, author)
      .then(res => {
        this.setState({ articles: res.data.articles, isLoading: false });
      })
      .catch(err => this.setState({ hasError: true, isLoading: false, err }));
  }

  componentDidMount() {
    const { topic, orderBy, author } = this.props;
    this.fetchArticles(topic, orderBy, author);
  }

  componentDidUpdate(prevProps) {
    const { topic, orderBy, author } = this.props;
    if (topic !== prevProps.topic) {
      this.fetchArticles(topic);
    }
    if (orderBy !== prevProps.orderBy) {
      this.fetchArticles(topic, orderBy);
    }
    if (author !== prevProps.author) {
      this.fetchArticles(null, null, author);
    }
  }

  render() {
    const { user } = this.props;
    const { isLoading, hasError, err } = this.state;

    if (isLoading) {
      return <Loading user={user} />;
    }
    if (hasError) {
      return <ErrorPage err={err} user={user} />;
    }

    const { articles } = this.state;
    return (
      <ul className="articlesList">
        {articles.map(article => (
          <li className="articleCard" key={article.article_id}>
            <ArticleCard article={article} user={user} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ArticlesList;
