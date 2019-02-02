<template>
  <div>
    <header class="header">
      <h1>conduit</h1>
      <p>A place to share your knowledge.</p>
    </header>
    <body class="container feed">
      <div class="article-feed">
        <ArticleCard v-for="article in articles" :article="article" />
      </div>
      <div class="tag-feed">
        <PopularTags />
      </div>
    </body>
  </div>
</template>

<script>
import ArticleService from '../services/ArticleService.js';
import ArticleCard from '../components/ArticleCard';
import PopularTags from '../components/PopularTags.vue';

export default {
  components: {
    ArticleCard,
    PopularTags
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    ArticleService.getArticles()
    .then(res => {
      this.articles = res.data.articles
    })
    .catch(err => console.log('Error' +  err))
  }
}
</script>

