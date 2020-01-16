import React, { Component } from "react";
import { getTopics } from "./Api";
import Loading from "./Loading"
import {Link} from "@reach/router"

export default class Nav extends Component {
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
      <div className="nav">
        <h2>Jump to:</h2>
        <ul id = "topics" color="goldenrod">
          {topics.map(topic => (
           <li key={topic.slug} color="goldenrod"><Link to={`/topics/${topic.slug}`}>{topic.slug}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}
