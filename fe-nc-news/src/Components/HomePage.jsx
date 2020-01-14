import React, { Component } from "react";
import { getArticles } from "./Api";
import Loading from "./Loading";
import ArticleAdder from "./ArticleAdder";
import ArticlesList from "./ArticlesList";
import SortArticles from "./SortArticles";

export default class HomePage extends Component {
  state = {
    articles: [],
    isLoading: true,
    orderBy: ""
  };

  componentDidMount() {
    getArticles().then(res =>
      this.setState({ articles: res.data.articles, isLoading: false })
    );
  }

  // componentDidUpdate(prevState, currentState){
  //   if(prevState.orderBt)}

  

  OrderArticles(orderBy) {
    console.log(orderBy)
  }

  render() {
 
    if (this.state.isLoading === true) {
      return <Loading />;
    }
    const { articles } = this.state;

    return (
      <div>
        <ArticleAdder />
        <SortArticles OrderArticles={this.OrderArticles} />
        <ArticlesList articles={articles} />
      </div>
    );
  }
}
