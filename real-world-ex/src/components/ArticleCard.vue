<template>
  <div class="article-card">
    <div class="article-meta">
      <router-link :to="{ name: 'profile', params: {username: article.author.username} }">
        <img :src="article.author.image" />
      </router-link>
      <div class="info">
        <router-link :to="{ name: 'profile', params: {username: article.author.username} }" class="author">{{article.author.username}}</router-link>
        <span class="date">{{getDate(article.createdAt)}}</span>
      </div>
      <button class="btn right btn-sm btn-outline-primary">
        <i class="fas fa-heart"></i>
        <span class="counter">{{article.favoritesCount}}</span>
      </button>
    </div>
    <router-link :to="{ name: 'article-details', params: {slug: article.slug} }" class="preview-link">
      <h1 class="title">{{article.title}}</h1>
      <p class="desc">{{article.description}}</p>
      <span>Read more...</span>
      <div class="tag-list-container">
        <ul class="tag-list">
          <li v-for="(tag, i) in article.tagList"  :key="i" class="tag"> {{tag}} </li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
import getDate from '../services/GetDate.js';

  export default {
    methods: {
      getDate: (str) => getDate(str)
    },
    props: {
      article: Object
    }
  }
</script>
