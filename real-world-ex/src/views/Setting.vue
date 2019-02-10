<template>
  <div class="center sign-up-container">
     <h1 class="sub-header">Your Setting</h1>
    <form class="setting-form">
      <input type="text" value="" class="input" placeholder="URL of profile picture"/>
      <input type="text" value="" class="input" placeholder="Username"/>
      <textarea class="input text-area" placeholder="Short bio about you"></textarea>
      <input type="text" value="" class="input" placeholder="Gmail"/>
      <input type="text" value="" class="input" placeholder="Password"/>
      <input type="button" value="Update Setting" v-on:click="" class="btn sign-btn right">
    </form>
    <hr>
    <div class="left">
      <input type="button" value="Or click here to logout." v-on:click="handleLogout" class="btn sign-btn logout-btn">
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleLogout() {
        localStorage.removeItem('token');
      }
    }
  }
</script>
