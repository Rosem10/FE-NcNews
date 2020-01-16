import React, { Component } from "react";
import * as api from "./Api";

class DeleteComment extends Component {
  handleClick = event => {
    const {commentId } = this.props;
    this.props.removeComment(commentId);
    api.removeComment(commentId)
  };

  render() {
    console.log(this.props)
    return (
      <button id={this.props.id} onClick={this.handleClick}>
        Delete your comment?
      </button>
    );
  }
}
export default DeleteComment;
