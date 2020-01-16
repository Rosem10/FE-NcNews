import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "./Api";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  fetchArticles(topic, orderBy, author) {
    api
      .getArticles(topic, orderBy, author)
      .then(res => {
        this.setState({ articles: res.data.articles, isLoading: false });
      })
      .catch(err => this.setState({ err: err, isLoading: false }));
  }

  componentDidMount() {
    const { topic, orderBy, author } = this.props;
    this.fetchArticles(topic, orderBy, author);
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.fetchArticles(this.props.topic);
    }
    if (this.props.orderBy !== prevProps.orderBy) {
      this.fetchArticles(null, this.props.orderBy);
    }
    if (this.props.author !== prevProps.author) {
      this.fetchArticles(null, null, this.props.author);
    }
  }

  render() {
    if (this.state.isLoading === true) {
      return <Loading />;
    }
    if(this.state.err){
      return (
        <ErrorPage err={this.state.err}/>
      )
    }
    const { articles } = this.state;

    return (
      <ul>
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
