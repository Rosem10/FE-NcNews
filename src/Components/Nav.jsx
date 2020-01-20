import React, { Component } from "react";
import * as api from "../Api";
import Loading from "./Loading";
import TopicCard from "./TopicCard";

export default class Nav extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
   api.getTopics().then(res =>
      this.setState({ topics: res.data.topics, isLoading: false })
    );
  }

  render() {
    const { topics } = this.state;

    if (this.state.isLoading === true) {
      return <Loading />;
    }
    return (
      <ul className="nav">
        {topics.map(topic => (
          <TopicCard topic={topic} key={topic.slug} />
        ))}
      </ul>
    );
  }
}
