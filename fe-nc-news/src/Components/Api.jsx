import axios from "axios";

export const getArticles = (topic, sort_by) => {
  return axios.get("https://rose-nc-news-app.herokuapp.com/api/articles", {
    params: { topic: topic, sort_by: sort_by }
  });
};

export const getTopics = () => {
  return axios.get("https://rose-nc-news-app.herokuapp.com/api/topics/");
};

export const getSingleArticle = articleId => {
  return axios.get(
    `https://rose-nc-news-app.herokuapp.com/api/articles/${articleId}`
  );
};

export const getArticleComments = article_id => {
  return axios.get(
    `https://rose-nc-news-app.herokuapp.com/api/articles/${article_id}/comments`
  );
};


