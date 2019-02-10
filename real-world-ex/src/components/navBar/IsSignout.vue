<template>
  <div class="nav-bar">
    <router-link :to="{ name: 'dashboard' }" class="nav-link">Home</router-link> 
    <router-link :to="{ name: 'sign-in' }" class="nav-link"><i class="far fa-edit"></i>Sign in</router-link> 
    <router-link :to="{ name: 'sign-up' }" class="nav-link"><i class="far fa-edit"></i>Sign up</router-link> 
  </div>
</template>
