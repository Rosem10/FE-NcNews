import React, { Component } from "react";
import * as api from "./Api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

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

  submitComment = comment => {
    this.setState(currentState => {
      const comments = [comment, ...currentState.comments];
      return (currentState.comments = comments);
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
    if (this.state.isLoading === true) {
      return <Loading />;
    }
    const { articleId } = this.props;
  
    return (
      <ul>
        <h2>Comments: </h2>
        <CommentAdder
          user={this.props.user}
          submitComment={this.submitComment}
          articleId={articleId}
        />
        {this.state.comments.map(comment => (
          <li key={comment.comment_id}>
            <CommentCard
              articleId={articleId}
              comment={comment}
              user={this.props.user}
              removeComment={this.removeComment}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentFetcher;
