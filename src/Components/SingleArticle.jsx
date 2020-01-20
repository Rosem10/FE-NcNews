import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Api";
import CommentFetcher from "./CommentFetcher";
import Loading from "./Loading";
import Voter from "./Voter";

import ErrorPage from "./ErrorPage";
export default class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    const { articleId } = this.props;
    api
      .getSingleArticle(articleId)
      .then(res =>
        this.setState({ article: res.data.article, isLoading: false })
      )
      .catch(err => this.setState({ hasError: true, isLoading: false, err }));
  }

  render() {
    if (this.state.isLoading === true) {
      return <Loading />;
    }

    const { article } = this.state;

    if (this.state.isLoading === true) {
      return <Loading />;
    }
    if (this.state.hasError === true) {
      const { err } = this.state;
      return <ErrorPage err={err} />;
    }
    const capsTopic = article.topic.toUpperCase();
    return (
      <div className="singleArticle">
        <div className="singleArticleHead">
          {capsTopic}: {article.title}
          <div className="subtitle">
            <Link to={`/authors/${article.author}`}>
              <p className="authorLink">{article.author}</p>
            </Link>

            <div id="singleVoter">
              <Voter
                votes={article.votes}
                id={article.article_id}
                criteria={"articles"}
              />
            </div>
          </div>
        </div>

        <div className="articleBody">{article.body}</div>
        <div className="commentsList">
          <CommentFetcher
            articleId={article.article_id}
            user={this.props.user}
          />
        </div>
      </div>
    );
  }
}
