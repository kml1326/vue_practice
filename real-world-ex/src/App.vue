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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.center {
  text-align: center;
}
.container {
  width: 80%;
  margin: 0 auto;
}
#nav {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-link {
  color: rgb(168, 165, 165);
  font-size: 14px;
}
.nav-sign-in {
  margin: 0 20px;
}
#nav a {
  text-decoration: none;
}
.logo {
  color: #5cb85c;
  font-size: 24px;
  font-weight: bold;
}
.header {
  background: #5cb85c;
  padding: 2rem 0;
  text-align: center;
  color: white;
}
.header h1 {
  font-size: 3.5rem;
  font-weight: bold;
  text-shadow: 0 1px 3px rgba(0,0,0,.3);
  margin: 0 .5rem 0 0;
}
.header p {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 300;
}
.feed {
  display: flex;
}
.article-feed {
  width: 75%;
}
.tag-feed {
  float: right;
  width: 25%;
}
.article-card {
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;
}
.tag-container {
  display: inline-block;
  padding: 10px;
  background: gray;
}
.tag {
  display: inline-block;
  padding: 5px;
  background: #2c3e50;
  color: white;
  margin: 2px;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
