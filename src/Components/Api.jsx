import axios from "axios";

export const getArticles = (topic, sort_by, author) => {
  return axios.get("https://rose-nc-news-app.herokuapp.com/api/articles", {
    params: { topic: topic, sort_by: sort_by, author: author }
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

export const postComment = (articleId, comment) => {
  return axios.post(
    `https://rose-nc-news-app.herokuapp.com/api/articles/${articleId}/comments`,
    comment
  );
};

export const removeComment = commentId => {
  return axios.delete(
    `https://rose-nc-news-app.herokuapp.com/api/comments/${commentId}`
  );
};

export const changeVotesById = (id, increment, criteria) => {
  return axios.patch(
    `https://rose-nc-news-app.herokuapp.com/api/${criteria}/${id}`,
    { inc_votes: increment }
  );
};
export const changeCommentVotesById = (id, increment) => {
  return axios.patch(
    `https://rose-nc-news-app.herokuapp.com/api/comments/${id}`,
    {
      inc_votes: increment
    }
  );
};
