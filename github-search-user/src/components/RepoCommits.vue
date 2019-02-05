<template>
  <div v-if="commits">
    <p v-for="commit in commits" :key="commit.sha" > {{commit.commit.message}} </p>
  </div>
</template>

<script>
  export default {
    props: {
      commits: null
    }
  }
</script>
