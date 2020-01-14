import React from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Nav from "./Components/Nav";
import TopicsPage from "./Components/TopicsPage";
import SingleArticle from "./Components/SingleArticle";
import { Router } from "@reach/router";
import "./App.css";
import ArticlesByTopic from "./Components/ArticlesByTopic";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <HomePage path="/" />
        <TopicsPage path="/topics" />
        <SingleArticle path="articles/:articleId" />
        <ArticlesByTopic path="topics/:topic" />
        {/* <AddArticlePage path="/add" /> */}
      </Router>
    </div>
  );
}

export default App;
