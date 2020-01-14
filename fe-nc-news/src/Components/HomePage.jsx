import React, { Component } from "react";
import ArticleAdder from "./ArticleAdder";
import ArticlesList from "./ArticlesList";
import SortArticles from "./SortArticles";
import ErrorPage from "./ErrorPage"

export default class HomePage extends Component {
  state = {
    orderBy: ""
  };

  OrderArticles = orderBy => {
    this.setState({ orderBy });
  };

  render() {
    return (
      <div>
        <ArticleAdder />
        <SortArticles OrderArticles={this.OrderArticles} />
        <ArticlesList orderBy={this.state.orderBy} />
      </div>
    );
  }
}
