<template>
  <div id="app">
    <router-view />
    <form v-on:submit="handleSubmit">
      <input type="text" name="username"  placeholder="Enter User name" ref="username" />
    </form>
    <div class="">
      <UserRepos :repoList="repoList" :username="username" />
    </div>
  </div>
</template>

<script>
import  './assets/style.css';
import GithubServices from './services/GithubServices.js';
import UserRepos from './components/UserRepos';

export default {
  components: {
    UserRepos
  },
  data() {
    return {
      username: null,
      repoList: null
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.username = this.$refs.username.value
      GithubServices.getRepos(this.username)
      .then(res => {
        this.repoList = res.data
      })
      .catch(error => console.log(`Error in fetching repos data ${error}`) )
    }
  }

}
</script>

