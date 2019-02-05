<template>
  <div class="center">
    <p>Sign Up</p>
    <router-link :to="{ name: 'sign-in' }" class="nav-link">Have an account?</router-link>
    <form>
      <input type="text" placeholder="Username" name="username" v-model="message" value="{message}" v-on:change="handleChange($event)" />
      <p>{{message}}</p>
      <input type="text" placeholder="Name" v-model="name" value="name" />
      <input type="email" placeholder="Email" name="email" v-on:change="handleChange" />
      <input type="password" placeholder="password" name="password" v-on:change="handleChange" />
      <input type="button" value="Sign up">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      name: '',
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    handleChange: function(e) {
      console.log(e, e.target.name, e.target.value)
      
    }
  }
}
</script>

