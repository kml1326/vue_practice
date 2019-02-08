import axios from "axios";

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
    return apiClient.get("/articles");
  },
  getPopularTags() {
    return apiClient.get("/tags");
  },
  setUser(user) {
    const userData = JSON.stringify(user);
    return apiClient.post("/users", userData);
  },
  getUser(user) {
    const userData = JSON.stringify(user);
    return apiClient.post("/users/login", userData);
  },
  getArticleDetails(slug) {
    return apiClient.get(`/articles/${slug}`);
  },
  getUserArticles(username) {
    return apiClient.get(`/articles/?author=${username}`);
  },
  getComments(slug) {
    return apiClient.get(`/articles/${slug}/comments`);
  }
};
