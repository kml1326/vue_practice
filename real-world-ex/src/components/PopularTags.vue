<template>
  <div class="tag-container">
    <p>Popular Tags</p>
    <div class="tag-list">
      <span v-for="(tag, i) in tags" v-on:click="() => handleTag(tag)" :key="i" class="tag tag-pill">{{tag}}</span>
    </div>
  </div>
</template>

<script>
import ArticleService from '../services/ArticleService.js';

  export default {
    data() {
      return {
        tags: []
      }
    },
    methods: {
      handleTag(tag) {
        console.log(tag, "clicked tag");
        ArticleService.articleByTag(tag)
        .then(res => {
          console.log(res.data.articles, "by tag");
          this.$store.commit("TAG_FEED", res.data.articles);
        })
      }
    },
    created() {
      ArticleService.getPopularTags()
      .then(res => {
        this.tags = res.data.tags
      })
      .catch(err => console.log('Error' + err))
    }
  }
</script>
