<template>
  <div class="center">
    <p>Sing In</p>
    <router-link :to="{ name: 'sign-up' }" class="nav-link">Need an account?</router-link>
    <form>
      <input type="email" name="email" ref="email" placeholder="Email"/>
      <input type="password" name="password" ref="password" placeholder="Password" />
      <input type="button" value="Sign in" v-on:click="handleClick"/>
    </form>
  </div>
</template>

<script>
import ArticleService from '../services/ArticleService.js';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleClick() {
      const { email, password } = this.$refs;
      ArticleService.getUser({ user: { email: email.value, password: password.value }})
    .then(res => {
      console.log(res.data)
    }).catch(err => console.log('Error ' + err));
    }
  }
}
</script>

