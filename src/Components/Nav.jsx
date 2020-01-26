import React, { Component } from "react";
import * as api from "../Api";
import TopicCard from "./TopicCard";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

export default class Nav extends Component {
  state = {
    topics: [],
    isLoading: true,
    hasError: false,
    err: null
  };

  componentDidMount() {
    api
      .getTopics()
      .then(res => this.setState({ topics: res.data.topics, isLoading: false }))
      .catch(err => this.setState({ hasError: true, isLoading: false, err }));
  }

  render() {
    const { topics, err, isLoading } = this.state;
    const { user } = this.props;

    if (isLoading) {
      return <p className="topicLoading">Loading</p>;
    }
    if (err) {
      return <ErrorPage err={err} user={user} />;
    }
    return (
      <ul className="nav">
        <Home />
        <div className = "topics">
        {topics.map(topic => (
          <TopicCard topic={topic} key={topic.slug} />
        ))}
        </div>
      </ul>
    );
  }
}
