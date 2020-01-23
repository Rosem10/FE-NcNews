import ArticlesList from "./ArticlesList";
import Welcome from "./Welcome";
import SortArticles from "./SortArticles";
import React, { Component } from "react";

export default class ArticlesByAuthor extends Component {
  state = {
    orderBy: null
  };

  orderArticles = orderBy => {
    this.setState({ orderBy });
  };

  render() {
    const { orderBy } = this.state;
    let { author, user } = this.props;

    let writer = author;

    if (user === author) {
      writer = "You";
    }
    return (
      <div>
        <Welcome className="welcome" user={user} />

        <div className="articlesSorter">
          <div className="topicTitle">
            <h2>{`Here are all our articles by:`}</h2>
            <div className="topicName">{`${writer}`}</div>
            <SortArticles
              author={author}
              user={user}
              orderArticles={this.orderArticles}
            />
          </div>
        </div>

        <ArticlesList author={author} user={user} orderBy={orderBy} />
      </div>
    );
  }
}
