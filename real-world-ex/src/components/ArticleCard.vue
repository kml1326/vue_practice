<template>
  <div class="article-card">
    <p>{{article.author.username}}</p>
    <span>{{article.createdAt}}</span>
    <p>{{article.title}}</p>
    <p>{{article.description}}</p>
    <div>
      <p>Read more...</p>
      <p>
        <span v-for="tag in article.tagList">{{tag}}</span>
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
