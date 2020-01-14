import React, { Component } from "react";
import * as api from "./Api";
import Axios from "axios";
import Loading from "./Loading";
import CommentCard from "./CommentCard";

class CommentFetcher extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    const { articleId } = this.props;
    api
      .getArticleComments(articleId)
      .then(res =>
        this.setState({ comments: res.data.comments, isLoading: false })
      );
  }

  render() {
    if (this.state.isLoading === true) {
      return <Loading />;
    }

    return (
      <ul>
        {this.state.comments.map(comment => (
          <li key={comment.comment_id}>
            <CommentCard comment={comment} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentFetcher;
