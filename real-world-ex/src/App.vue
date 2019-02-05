<template>
  <div id="app">
    <div id="nav" class="container">
      <router-link to="/" class="logo">conduit</router-link>
      <div class="nav-bar">
        <router-link :to="{ name: 'dashboard' }" class="nav-link">Home</router-link> 
        <router-link :to="{ name: 'sign-in' }" class="nav-sign-in nav-link">Sign in</router-link> 
        <router-link :to="{ name: 'sign-up' }" class="nav-link">Sign up</router-link> 
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import './assets/style.css';
export default {
  
}
</script>

