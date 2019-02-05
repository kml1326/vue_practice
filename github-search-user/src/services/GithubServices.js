import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.github.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getRepos(username) {
    return apiClient.get(`/users/${username}/repos`);
  },
  getCommits(username, repoName) {
    return apiClient.get(`/repos/${username}/${repoName}/commits`);
  }
};
