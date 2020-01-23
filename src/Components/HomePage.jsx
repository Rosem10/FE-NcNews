import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import SortArticles from "./SortArticles";
import Header from "./Header";

export default class HomePage extends Component {
  state = {
    orderBy: null
  };

  orderArticles = orderBy => {
    this.setState({ orderBy });
  };

  render() {
    const { user } = this.props;
    return (
      <div className="articlesPage">
        <Header user={user} />
        <div className="homeArticlesSorter">
          <SortArticles orderArticles={this.orderArticles} />
        </div>
        <ArticlesList orderBy={this.state.orderBy} user={user} />
      </div>
    );
  }
}
