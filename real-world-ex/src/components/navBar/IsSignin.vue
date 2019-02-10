<template>
  <div class="nav-bar">
    <router-link :to="{ name: 'dashboard' }" class="nav-link">Home</router-link>
    <router-link :to="{ name: 'new-article' }" class="nav-link"><i class="far fa-edit"></i>New Article</router-link>
    <router-link :to="{ name: 'setting' }" class="nav-link"><i class="fas fa-cog"></i>Setting</router-link>
    <router-link :to="{ name: 'profile', params: {username: $store.state.user.username} }" class="nav-link">{{$store.state.user.username}}</router-link>
  </div>
</template>
