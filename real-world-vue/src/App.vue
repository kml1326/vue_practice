<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  components: {
    NavBar
  }
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

nav {
  display: inline-block;
}

.logo {
  color: #42b983;
  text-decoration: none;
  font-size: 30px;
  margin-right: 200px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  color: green;
}

.event-card {
  margin: 0 auto 24px auto;
  width: 35%;
  padding: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
  text-align: left;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.2);
}

.title{
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
}

</style>
