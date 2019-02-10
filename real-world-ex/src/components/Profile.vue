<template>
  <div>
    <div v-if="articlesCount">
      <div class="header user-info">
        <div class="profile-container">
          <img :src="articles[0].author.image" class="user-img">
          <p>{{articles[0].author.username}}</p>
          <button class="btn right action-btn">
            <i class="fas fa-plus"></i>
            <span>&nbsp;</span>
            <span>Follow</span>
            <span>&nbsp;</span>
            <span>{{articles[0].author.username }}</span>
          </button>
        </div>
      </div>
      <div class="body">
        <div class="profile-container">
          <ArticleCard v-for="(article, i) in articles" :key="i" :article="article"/>
        </div>
      </div>
    </div>
    <div v-else class="header user-info">
      <div class="profile-container">
        <img :src="$store.state.user.image" class="user-img">
        <p>{{$store.state.user.username}}</p>
        <router-link :to="{name: 'setting'}" class="btn right action-btn">
          <i class="fas fa-cog"></i>
          <span>&nbsp;</span>
          <span>Edit</span>
          <span>&nbsp;</span>
          <span>profile</span>
          <span>&nbsp;</span>
          <span>Setting</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleService from "../services/ArticleService.js";
import ArticleCard from "../components/ArticleCard";

export default {
  components: {
    ArticleCard
  },
  data() {
    return {
      articles: null,
      articlesCount: null
    };
  },
  created() {
    ArticleService.getUserArticles(this.$route.params.username)
      .then(res => {
        this.articles = res.data.articles;
        this.articlesCount = res.data.articlesCount;
      })
      .catch(err => console.log(err));
  }
};
</script>
