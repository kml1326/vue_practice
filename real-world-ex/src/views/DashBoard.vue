<template>
  <div>
    <header class="header">
      <h1>conduit</h1>
      <p>A place to share your knowledge.</p>
    </header>
    <body class="container feed">
      <div class="article-feed">
        <div v-if="tagFeed">
          <h1>TAG FEED</h1>
          <ArticleCard v-for="(article, i) in tagFeed" :key="i" :article="article" />
        </div>
        global feed
        <ArticleCard v-for="(article, i) in globalFeed" :key="i" :article="article" />
      </div>
      <div class="tag-feed">
        <PopularTags />
      </div>
    </body>
  </div>
</template>

<script>
import ArticleService from '../services/ArticleService.js';
import UserService from '../services/UserService.js';
import ArticleCard from '../components/ArticleCard';
import PopularTags from '../components/PopularTags.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['globalFeed', 'tagFeed', 'user'])
  },
  components: {
    ArticleCard,
    PopularTags
  },
  created() {
    ArticleService.getArticles()
    .then(res => {
      this.$store.commit("GLOBAL_FEED", res.data.articles);
    })
    .catch(err => console.log('Error' +  err));
  }
   
}
</script>

