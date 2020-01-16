import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import SortArticles from "./SortArticles";

export default class HomePage extends Component {
  state = {
    orderBy: null
  };

  OrderArticles = orderBy => {
    this.setState({ orderBy });
  };

  render() {
    return (
      <div>
        <SortArticles OrderArticles={this.OrderArticles} />
        <h2>Here are all our articles...</h2>
        <ArticlesList orderBy = {this.state.orderBy} />
      </div>
    );
  }
}
