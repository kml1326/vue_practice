<template>
  <div class="tag-container">
    <p>Popular Tags</p>
    <span v-for="(tag, i) in tags" :key="i" class="tag">{{tag}}</span>
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
    created() {
      ArticleService.getPopularTags()
      .then(res => {
        this.tags = res.data.tags
      })
      .catch(err => console.log('Error' + err))
    }
  }
</script>
