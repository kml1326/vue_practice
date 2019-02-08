<template>
  <div v-if="article">
    <div class="header article-header">
      <div class="article-container">
        <h2>{{article.title}}</h2>
        <div class="article-meta">
          <router-link to="">
            <img :src="article.author.image" alt="">
          </router-link>
          <div class="info">
            <router-link to="" class="author-name">{{article.author.username}}</router-link>
            <span class="date">{{getDate(article.createdAt)}}</span>
          </div>
          <span>
            <button class="btn btn-outline-secondary btn-sm">
              <i class="fas fa-plus"></i>
              <span>&nbsp;</span>
              <span>Follow {{article.author.username}}</span>
            </button>
            <span>&nbsp;&nbsp;</span>
            <button class="btn btn-outline-primary btn-sm">
              <i class="fas fa-heart"></i>
              <span>&nbsp;</span>
              <span>Favorite Article</span>
              <span class="counter">({{article.favoritesCount}})</span>
            </button>
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="article-container">
        <div class="article-body">{{article.body}}</div>
        <div class="article-action center">
          <div class="article-meta">
            <router-link to="/">
              <img :src="article.author.image" alt="">
            </router-link>
            <div class="info txt-left">
              <router-link to="" class="author">{{article.author.username}}</router-link>
              <span class="date">{{getDate(article.createdAt)}}</span>
            </div>
            <span>
              <button class="btn btn-outline-secondary btn-sm">
                <i></i>
                <span>&nbsp;</span>
                <span>Follow {{article.author.username}}</span>
              </button>
              <span>&nbsp;&nbsp;</span>
              <button class="btn btn-outline-primary btn-sm">
                <i class="fas fa-heart"></i>
                <span>&nbsp;</span>
                <span>Favorite Article</span>
                <span class="counter">({{article.favoritesCount}})</span>
              </button>
            </span>
          </div>
          <div class="comment-container">
            <div class="comment-card">
              <form>
                <div class="comment-body">
                  <textarea placeholder="Write a comment..."></textarea>
                </div>
                <div class="comment-footer txt-right">
                  <button class="btn btn-sm btn-primary">Post Comment</button>
                </div>
              </form>
            </div>
          <div v-if="comments">
            <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment" />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleService from '../services/ArticleService.js';
import getDate from '../services/GetDate.js';
import CommentCard from '../components/CommentCard';

  export default {
    components: {
      CommentCard
    },
    data() {
      return {
        article: null,
        comments: null
      }
    },
    methods: {
      getDate: (str) => getDate(str)
    },
   created() {
    ArticleService.getArticleDetails(this.$route.params.slug)
     .then(res => {
       this.article = res.data.article;
    })
    .catch(err => console.log(err))

    ArticleService.getComments(this.$route.params.slug)
    .then(res => {
      this.comments = res.data.comments
    })
    .catch(err => console.log(err))

   }
  }
</script>
