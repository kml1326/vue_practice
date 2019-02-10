import axios from "axios";
const jwtToken = this.$store.state.jwtToken;

const apiClient = new axios.create({
  baseURL: "https://conduit.productionready.io/api",
  withCredentials: true,
  headers: {
    Authorization: `Token ${jwtToken}`,
    "Content-Type": "application/json"
  }
});

export default {
  current() {
    return apiClient.get("/user");
  },
  setComment(slug, comment) {
    return apiClient.post(`/articles/${slug}/comments`, {
      comment: { body: comment }
    });
  }
};
