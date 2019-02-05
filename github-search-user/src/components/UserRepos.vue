<template>
  <div class="user-repos-detais">
    <div class="repo-list-container">
      <ul v-if="repoList">
        <li v-for="repo in repoList" :key="repo.id" v-on:click="handleClick(repo.name)" class="repo">{{repo.name}}</li>
      </ul>
    </div>
    <RepoCommits :commits="commits" />
  </div>
</template>

<script>
import GithubServices from '../services/GithubServices.js';
import RepoCommits from '../components/RepoCommits';

export default {
  components: {
    RepoCommits
  },
  data() {
    return {
      commits: null
    }
  },
  props: {
    repoList: null,
    username: ''
  },
  methods: {
    handleClick(repoName, e) {
      const { username } = this.$props;
      GithubServices.getCommits(username, repoName)
      .then(res => {
        this.commits = res.data;
      });
    }
  }
};
</script>
