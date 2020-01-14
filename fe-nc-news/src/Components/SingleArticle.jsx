import React, { Component } from "react";
import { getSingleArticle } from "./Api";
import CommentFetcher from "./CommentFetcher"
import Loading from "./Loading"
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
    if(this.state.isLoading === true){
      return <Loading/>
    }
   
    const { article } = this.state;
     
    return (
      <div id="singleArticleBox">
        <p id="topic">{article.topic}</p>
        <p id="title">{article.title}</p>
        <p id="author">{article.author}</p>
        <p id="body">{article.body}</p>
       <CommentFetcher articleId = {article.article_id}/>
      </div>
    );
  }
}
