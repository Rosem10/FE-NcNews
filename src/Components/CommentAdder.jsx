import React, { Component } from "react";
import * as api from "./Api";

class CommentAdder extends Component {
  state = {
    valid: false,
    input: "",
    user: this.props.user
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };
  handleClick = () => {
    this.setState({ input: "" });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { user, input } = this.state;
    const { articleId } = this.props;

    const requestItem = { username: user, body: input };
  
    api.postComment(articleId, requestItem).then((res)=> this.props.submitComment(res.data.comment))
  };
  render() {
    return (
      <form
        className="commentForm"
        value={this.state.input}
        onSubmit={this.handleSubmit}
      >
        <p>Add Comment: </p>
        <h2>{`Posting as ${this.props.user} `} </h2>
        <input
          required
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <button id="postCommentButton" type="submit">
          Post
        </button>
      </form>
    );
  }
}

export default CommentAdder;
