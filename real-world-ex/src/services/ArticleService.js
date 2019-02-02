import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getArticles() {
    return apiClient.get('/articles')
  },
  getPopularTags() {
    return apiClient.get('/tags')
  }
};
