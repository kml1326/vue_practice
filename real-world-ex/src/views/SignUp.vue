<template>
  <div class="center sign-up-container">
    <p class="sub-header">Sign Up</p>
    <router-link :to="{ name: 'sign-in' }" class="link-opt">Have an account?</router-link>
    <form>
      <input type="text" placeholder="Username" name="username" ref="username" class="input" />
      <input type="email" placeholder="Email" name="email" ref="email" class="input" />
      <input type="password" placeholder="password" name="password" ref="password" class="input" />
      <input type="button" value="Sign up" v-on:click="handleSubmit" class="btn sign-btn right" />
    </form>
  </div>
</template>

<script>
import ArticleService from '../services/ArticleService.js';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    handleSubmit: function() {
      const { username, email, password } = this.$refs;
      ArticleService.setUser({ user: {
        username: username.value,
        email: email.value,
        password: password.value
      }})
      .then(res => {
        console.log(res.data)
      }).catch(err => console.log('Error' + err))
    }
  }
}
</script>

