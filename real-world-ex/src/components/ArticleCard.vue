<template>
  <div class="article-card">
    <p class="author-name">{{article.author.username}}</p>
    <span class="created-at">{{article.createdAt}}</span>
    <p class="title">{{article.title}}</p>
    <p class="desc">{{article.description}}</p>
    <div>
      <p>Read more...</p>
      <p>
        <span v-for="(tag, i) in article.tagList" :key="i">{{tag}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      article: Object
    }
  }
</script>
