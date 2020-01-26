import React, { Component } from "react";
import * as api from "../Api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import ErrorPage from "./ErrorPage";

class CommentFetcher extends Component {
  state = {
    comments: [],
    isLoading: true,
    hasError: false,
    err: null
  };

  componentDidMount() {
    const { articleId } = this.props;
    api
      .getArticleComments(articleId)
      .then(res =>
        this.setState({ comments: res.data.comments, isLoading: false })
      )
      .catch(err => this.setState({ hasError: true, isLoading: false, err }));
  }

  submitComment = comment => {
    const created = new Date();
    comment.created_at = created.toGMTString();

    this.setState(currentState => {
      const comments = [comment, ...currentState.comments];
      return { comments };
    });
  };

  removeComment = id => {
    this.setState(currentState => {
      const filtered = currentState.comments.filter(comment => {
        return comment.comment_id !== id;
      });
      return { comments: filtered, isLoading: false };
    });
  };

  render() {
    const { isLoading, err } = this.state;
    const { articleId, user } = this.props;
    if (isLoading) {
      return <Loading user={user} />;
    }
    if (err) {
      return <ErrorPage err={err} user={user}/>;
    }


    return (
      <div>
        <ul className = "comments">
          <h2 className="comments">Comments: </h2>
          <CommentAdder
            user={user}
            submitComment={this.submitComment}
            articleId={articleId}
          />
          {this.state.comments.map(comment => (
            <li className="commentCard" key={comment.comment_id}>
              <CommentCard
                articleId={articleId}
                comment={comment}
                user={user}
                removeComment={this.removeComment}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentFetcher;
