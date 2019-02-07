<template>
  <div class="article-card">
    <div class="article-meta">
      <a href="">
        <img :src="article.author.image" />
      </a>
      <div class="info">
        <a href="" class="author">{{article.author.username}}</a>
        <span class="date">{{getDate(article.createdAt)}}</span>
      </div>
      <button class="btn right btn-sm btn-outline-primary">
        <i class="fas fa-heart"></i>
        <span class="counter">{{article.favoritesCount}}</span>
      </button>
    </div>
    <a href="" class="preview-link">
      <h1 class="title">{{article.title}}</h1>
      <p class="desc">{{article.description}}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li v-for="(tag, i) in article.tagList"  :key="i" class="tag"> {{tag}} </li>
      </ul>
    </a>
  </div>
</template>

<script>
  export default {
    methods: {
      getDate(date) {
        const newDate = new Date(date);
        let month;
        switch(newDate.getMonth()) {
          case 0:
            month = 'January';
            break;
          case 1:
            month = 'February';
            break;
          case 2:
            month = 'March';
            break;
          case 3:
            month = 'April';
            break;
          case 4:
            month = 'May';
            break;
          case 5:
            month = 'June';
            break;
          case 6:
            month = 'July';
            break;
          case 7:
            month = 'August';
            break;
          case 8:
            month = 'September';
            break;
          case 9:
            month = 'October';
            break;
          case 10:
            month = 'November';
            break;
          case 11:
            month = 'December';
            break;
          default:
            month = '';
            break;
        }
        return `${month} ${newDate.getDate()}, ${newDate.getFullYear()}`;
      }
    },
    props: {
      article: Object
    }
  }
</script>
