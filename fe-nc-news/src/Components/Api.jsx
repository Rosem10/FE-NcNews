import React from "react";
import axios from "axios";

export const getArticles = topic => {
  return axios
    .get("https://rose-nc-news-app.herokuapp.com/api/articles", {
      params: { topic: topic }})
}

export const getTopics = () => {
  return axios.get("https://rose-nc-news-app.herokuapp.com/api/topics/");
};

export const getSingleArticle = articleId => {
  return axios.get(
    `https://rose-nc-news-app.herokuapp.com/api/articles/${articleId}`
  );
};
