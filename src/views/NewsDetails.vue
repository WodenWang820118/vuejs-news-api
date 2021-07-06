<template>
  <div v-if="newsPiece">
    <div class="news-card">
      <h1>{{ newsPiece.title }}</h1>
      <p>{{ newsPiece.description }}</p>
      <p>{{ newsPiece.url }}</p>
    </div>
    <router-view />
  </div>
</template>

<script>
// import news from '@/data/news.js'
export default {
  name: 'NewsDetails',
  props: {
    id: {
      type: String,
      required: true
    },
    newsCollection: {
      type: Array,
      required: true
    }
  },
  computed: {
    newsPiece() {
      // const articles = news["articles"]
      console.log(this.newsCollection)
      console.log(this.id)
      return this.newsCollection
      // return articles.filter(newsPiece => newsPiece.id == this.id)[0]
    }
  }
}
</script>

<style scoped>

</style>