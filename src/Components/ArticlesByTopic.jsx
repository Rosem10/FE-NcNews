import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import SortArticles from "./SortArticles";
import ErrorPage from "./ErrorPage";
import Welcome from "./Welcome";

export default class ArticlesByTopic extends Component {
  state = {
    orderBy: null
  };

  orderArticles = orderBy => {
    this.setState({ orderBy });
  };

  render() {
    let { topic, user } = this.props;
    const topicName = topic.toUpperCase();
    const { orderBy } = this.state;

    if (topic !== "cooking" && topic !== "coding" && topic !== "football") {
      return <ErrorPage user={user} />;
    }

    return (
      <div>
        <Welcome className="welcome" user={user} />
        <div className="articlesSorter">
          <div className="topicTitle">
            <h2>{`Here are all our articles on:`}</h2>
            <div className="topicName">{`${topicName}`}</div>
            <SortArticles topic={topic} orderArticles={this.orderArticles} />
          </div>
        </div>
        <ArticlesList topic={topic} orderBy={orderBy} user={user} />
      </div>
    );
  }
}
