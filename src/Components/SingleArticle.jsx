import React, { Component } from "react";
import { Link } from "@reach/router";
import { getSingleArticle } from "./Api";
import CommentFetcher from "./CommentFetcher";
import Loading from "./Loading";
import Voter from "./Voter";
export default class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };
  componentDidMount() {
    const { articleId } = this.props;
    getSingleArticle(articleId).then(res =>
      this.setState({ article: res.data.article, isLoading: false })
    );
  }

  render() {
    console.log(this.state.article)
    if (this.state.isLoading === true) {
      return <Loading />;
    }

    const { article } = this.state;

    return (
      <div id="singleArticleBox">
        <Link to={`/topics/${article.topic}`}>
          {" "}
          <p id="topic">{article.topic}</p>
        </Link>
        <p id="title">{article.title}</p>
        <Link to={`/authors/${article.author}`}>
          <p id="author">{article.author}</p>
        </Link>
        <p id="body">{article.body}</p>
        <Voter votes={article.votes} id={article.article_id} criteria={"articles"}/>
        <CommentFetcher articleId={article.article_id} user={this.props.user} />
      </div>
    );
  }
}
