import React, { Component } from "react";
import { getSingleArticle } from "./Api";

export default class SingleArticle extends Component {
  state = {
    article: {}
  };
  componentDidMount() {
    const { articleId } = this.props;
    getSingleArticle(articleId).then(res =>
      this.setState({ article: res.data.article })
    );
  }

  render() {
    const { article } = this.state;
    return (
      <div id="singleArticleBox">
        <p id="topic">{article.topic}</p>
        <p id="title">{article.title}</p>
        <p id = "author">{article.author}</p>
        <p id="body">{article.body}</p>
      </div>
    );
  }
}
