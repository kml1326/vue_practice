<template>
  <div class="center">
    <p>Sing In</p>
    <router-link :to="{ name: 'sign-up' }" class="nav-link">Need an account?</router-link>
    <form>
      <input type="text" />
      <input type="text" />
      <input type="button" value="Sign in" />
    </form>
  </div>
</template>
