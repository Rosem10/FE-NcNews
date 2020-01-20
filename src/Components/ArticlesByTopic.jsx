import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import SortArticles from "./SortArticles";

export default class ArticlesByTopic extends Component {
  state = {
    orderBy: null,
  };
  
  OrderArticles = orderBy => {
    this.setState({ orderBy });
  };

  render() {
    let { topic, user } = this.props;
    const topicName = topic.toUpperCase();
    const { orderBy } = this.state;
    console.log(topic, orderBy)
    return (
      <div>
        <div className="articlesSorter">
          <div className="topicTitle">
            <h2>{`Here are all our articles on:`}</h2>{" "}
            <div className="topicName">{`${topicName}`}</div>
          </div>
          <SortArticles topic={topic} OrderArticles={this.OrderArticles} />
        </div>
        <ArticlesList topic={topic} orderBy={orderBy} user={user} />
      </div>
    );
  }
}
