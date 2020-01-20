import React, { Component } from "react";
import * as api from "./Api";

class Voter extends Component {
  state = {
    voted: false,
    increment: 0
  };
  handleClick = increment => {
    const { id, criteria } = this.props;
    this.setState({ voted: true, increment: increment });
    api.changeVotesById(id, increment, criteria);
  };

  render() {
    let { votes } = this.props;
    let { voted } = this.state;
    if (this.state.voted === true) {
      votes += this.state.increment;
    }

    return (
      <form>
        <button
          className="button"
          onClick={() => this.handleClick(1)}
          disabled={voted}
        >
          <span>△</span>
        </button>
        <h2 className="vn">{votes}</h2>
        <button
          className="button"
          onClick={() => this.handleClick(-1)}
          disabled={voted}
        >
          <span> ▽</span>
        </button>
      </form>
    );
  }
}

export default Voter;
