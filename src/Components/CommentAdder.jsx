import React, { Component } from "react";
import * as api from "../Api";

class CommentAdder extends Component {
  state = {
    input: ""
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };
  handleClick = () => {
    this.setState({ input: "" });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;
    const { articleId, user } = this.props;

  

    const requestItem = { username: user, body: input };

    api
      .postComment(articleId, requestItem)
      .then(res => this.props.submitComment(res.data.comment));
  };
  render() {
    const { input } = this.state;
    const { user } = this.props;
    return (
      <form className = "commentPoster" value={input} onSubmit={this.handleSubmit}>
        <p>Add Comment: </p>
        <h2>{`Posting as ${user} `} </h2>
        <input
          required
          type="text"
          value={input}
          onChange={this.handleChange}
          onClick={this.handleClick}
        className = "commentAdder"
        />
        <button id="postCommentButton" type="submit">
          Post
        </button>
      </form>
    );
  }
}

export default CommentAdder;
