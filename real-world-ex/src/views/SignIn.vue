<template>
  <div>
    <div v-if="$store.state.user"> {{this.$router.push('/')}} </div>
    <div v-else class="center sign-up-container">
      <p class="sub-header">Sing In</p>
      <router-link :to="{ name: 'sign-up' }" class="link-opt">Need an account?</router-link>
      <form>
        <input type="email" name="email" ref="email" placeholder="Email" class="input">
        <input type="password" name="password" ref="password" placeholder="Password" class="input">
        <input type="button" value="Sign in" v-on:click="handleClick" class="btn sign-btn right">
      </form>
    </div>
  </div>
</template>

<script>
import ArticleService from "../services/ArticleService.js";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleClick() {
      const { email, password } = this.$refs;
      ArticleService.getUser({
        user: { email: email.value, password: password.value }
      })
        .then(res => {
          console.log(res.data);
          if(res.data.user) {
            this.$store.commit("LOGIN", res.data.user);
            localStorage.setItem('token', res.data.user.token)
          }

        })
        .catch(err => console.log("Error " + err));
    }
  }
};
</script>

