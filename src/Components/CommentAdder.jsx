import React, { Component } from "react";
import * as api from "../Api";
import ErrorPage from "./ErrorPage";

class CommentAdder extends Component {
  state = {
    input: ""
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };
  handleClick = () => {
    this.setState({ input: "", err: null });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;
    const { articleId, user, submitComment } = this.props;
    const requestItem = { username: user, body: input };
    this.setState({input: ""})

    api
      .postComment(articleId, requestItem)
      .then(res => submitComment(res.data.comment))
      .catch(err => this.setState({ err }));
  };

  render() {
    const { err, input } = this.state;
    const { user } = this.props;

    if (err) {
      return <ErrorPage err={err} user={user} />;
    }

    return (
      <form
        className="commentPoster"
        value={input}
        onSubmit={this.handleSubmit}
      >
        <p>Add Comment: </p>
        <h2>{`Posting as ${user} `} </h2>
        <input
          required
          type="text"
          value={input}
          onChange={this.handleChange}
          onClick={this.handleClick}
          className="commentAdder"
        />
        <button id="postCommentButton" type="submit">
          Post
        </button>
      </form>
    );
  }
}

export default CommentAdder;
