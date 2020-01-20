import React from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import SingleArticle from "./Components/SingleArticle";
import ArticlesByAuthor from "./Components/ArticlesByAuthor";
import { Router } from "@reach/router";
import "./App.css";
import ArticlesByTopic from "./Components/ArticlesByTopic";
import ErrorPage from "./Components/ErrorPage";
const loggedInUser = "weegembump";

function App() {

  return (
    <div  className = "app">
      <Header user={loggedInUser} />
      <Router primary={false}>
        <HomePage path="/" user={loggedInUser} />
        <SingleArticle path="articles/:articleId" user={loggedInUser} />
        <ArticlesByTopic path="topics/:topic"  user = {loggedInUser}/>
        <ArticlesByAuthor path="authors/:author" user ={loggedInUser} />
        <ErrorPage default status={404} msg={"That page doesn't exist!"} />
      </Router>
    </div>
  );
}

export default App;
