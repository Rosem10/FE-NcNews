import React, { Component } from "react";
import axios from "axios";
import { getTopics } from "./Api";
import Loading from "./Loading"
import {Link} from "@reach/router"

export default class TopicsPage extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    getTopics().then(res => this.setState({ topics: res.data.topics, isLoading: false }));
  }

  render() {
    const { topics } = this.state;

    if(this.state.isLoading === true){
        return (<Loading />)
    }
    return (
      <div>
        <ul id = "topics">
          {topics.map(topic => (
            <li key={topic.slug}><Link to={`/topics/${topic.slug}`}>{topic.slug}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}
