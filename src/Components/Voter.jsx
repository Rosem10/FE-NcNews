import React, { Component } from "react";
import * as api from "../Api";

class Voter extends Component {
  state = {
    voted: false,
    increment: 0,
    hasError: false,
    err: null
  };

  handleClick = increment => {
    const { id, criteria } = this.props;
    this.setState({ voted: true, increment: increment });
    api
      .changeVotesById(id, increment, criteria)
      .catch(err => this.setState({ hasError: true, isLoading: false, err }));
  };

  render() {
    let { votes } = this.props;
    let { voted, increment } = this.state;
    if (voted === true) {
      votes += increment;
    }

    return (
      <div className = "voteSetup">
         <form className = "form">
           <div id className="form">
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
            </div>
          </form>
          <div className = "thanksParent">
        </div>
          {this.state.voted ? <h3 className = "thanks">Thanks for voting!</h3> : null}
        </div>
      
    );
  }
}

export default Voter;
