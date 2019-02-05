<template>
  <div class="center">
    <p>Sign Up</p>
    <router-link :to="{ name: 'sign-in' }" class="nav-link">Have an account?</router-link>
    <form>
      <input type="text" placeholder="Username" name="username" ref="username" />
      <input type="email" placeholder="Email" name="email" ref="email" />
      <input type="password" placeholder="password" name="password" ref="password" />
      <input type="button" value="Sign up" v-on:click="handleSubmit">
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

