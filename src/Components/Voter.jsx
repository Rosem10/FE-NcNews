import React, { Component } from "react";
import * as api from "./Api";

class Voter extends Component {
  state = {
    voted: false,
    increment: 0
  };
  handleClick = increment => {
    const { id, criteria} = this.props;
    this.setState({ voted: true, increment: increment });
    api.changeVotesById(id, increment, criteria).then((res) => {console.log(res.data)});
  };
  
  render() {
    let { votes } = this.props;
    if (this.state.voted === true) {
      votes += this.state.increment;
    }

    return (
      <form>
        <h2>Current Votes:{votes}</h2>
        <button
          onClick={() => this.handleClick(1)}
          value="upvote"
          disabled={this.state.voted}
        >
          <span>Upvote △</span>
        </button>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={this.state.voted}
        >
          <span>Downvote ▽</span>
        </button>
      </form>
    );
  }
}

export default Voter;
