import React, { Component } from "react";
import { getArticles } from "./Api";
import ArticleCard from "./ArticleCard"

export default class ArticlesByTopic extends Component {
  state = {
    articles: [],
    isLoading: true

  };
  componentDidMount() {
    const { topic } = this.props;
    getArticles(topic).then((res)=> this.setState({articles: res.data.articles, isLoading: false}))
  }

  render() {
      const {articles} = this.state
    return <div>
  <ul>{articles.map((article) => <li key = {article.article_id}><ArticleCard article={article}/></li>)}</ul>
    </div>;
  }
}
