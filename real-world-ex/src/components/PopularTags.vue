<template>
  <div class="tag-container">
    <p>Popular Tags</p>
    <div class="tag-list">
      <a v-for="(tag, i) in tags" :key="i" href="" class="tag tag-pill">{{tag}}</a>
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
    created() {
      ArticleService.getPopularTags()
      .then(res => {
        this.tags = res.data.tags
      })
      .catch(err => console.log('Error' + err))
    }
  }
</script>
