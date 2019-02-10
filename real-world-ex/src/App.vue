<template>
  <div id="app">
    <div id="nav" class="container">
      <a href="/" class="logo">conduit</a>
      <IsSignin v-if="$store.state.user" />
      <IsSignout v-else />
    </div>
    <router-view/>
  </div>
</template>

<script>
import "./assets/style.css";
import UserService from "./services/UserService.js";
import IsSignin from './components/navBar/IsSignin';
import IsSignout from './components/navBar/IsSignout';

export default {
  components: {
    IsSignin,
    IsSignout
  },
  created() {
    UserService.current().then(res => {
      if(parseInt(res.status) === 200 ) {
        console.log('in created')
        this.$store.commit("LOGIN", res.data.user);
      } else console.log('error')
      
    });
  }
};
</script>

