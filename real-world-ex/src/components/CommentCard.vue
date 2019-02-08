<template>
  <div class="comment-card">
    <div class="comment-body">
      <p class="txt-left">{{comment.body}}</p>
    </div>
    <div class="comment-footer txt-left">
      <img :src="comment.author.image" class="comment-author-img">
      <span>&nbsp;</span>
      <router-link :to="{ name: 'profile', params: {username: comment.author.username} }" class="author">{{comment.author.username}}</router-link>
      <span>&nbsp;</span>
      <span class="date">{{getDate(comment.createdAt)}}</span>
    </div>
  </div>
</template>

<script>
import getDate from '../services/GetDate.js';

  export default {
    methods: {
      getDate: (str) => getDate(str)
    },
    props: {
      comment: Object
    }
  }
</script>
