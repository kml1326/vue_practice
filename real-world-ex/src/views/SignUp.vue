<template>
  <div class="center">
    <p>Sign Up</p>
    <router-link :to="{ name: 'sign-in' }" class="nav-link">Have an account?</router-link>
    <form>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="button" value="Sign up">
    </form>
  </div>
</template>
