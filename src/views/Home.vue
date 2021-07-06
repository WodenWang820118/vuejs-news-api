<template>
  <div class="search">
    <input
      type="text"
      v-model="topic">
    <button
      type="button"
      class="btn btn-secondary"
      @click="fetchNews">Get News
    </button>
  </div>
  
  <div class="container-fluid">
    <div class="row justify-content-center">
        <router-link
          v-for="newsPiece in newsCollection" :key="newsPiece.id"
          :to="{ name:'NewsDetails', params:{ id: newsPiece.id }}"
          class="card mt-3 mx-1" style="text-decoration: none; width: 18rem">
          <img :src="newsPiece.urlToImage" alt="image link lost">
          <h5 class="card-text">{{ newsPiece.title }}</h5>
        </router-link>
      </div>
  </div>
</template>

<script>
// import news from '@/data/news.js'
import axios from "axios"
export default {
  data() {
    return {
      topic: 'Tesla',
      // newsCollection: news["articles"]
      newsCollection: []
    }
  },
  methods: {
    async fetchNews() {
      try {
        const url = `https://newsapi.org/v2/everything?q=${this.topic}&apiKey=${process.env.VUE_APP_TAIWAN_NEWS_API_KEY}`
        const response = await axios.get(url)
        const results = response.data.articles
        this.newsCollection = results.map((news, index) => ({
          id: index.toString(),
          title: news.title,
          description: news.description,
          url: news.url,
          urlToImage: news.urlToImage,
          publishedAt: news.publishedAt,
          content: news.content
        }))
      } catch (err) {
        if (err.response) {
          console.log("Server error: ", err)
        } else if (err.request) {
          console.log("Network error: ", err)
        } else {
          console.log("Client error ", err)
        }
      }
      console.log(this.newsCollection)
    }
  },
  mounted() {
    this.fetchNews()
  }
}
</script>

<style scoped>
.container-fluid {
  justify-content: center;
}
h1 {
  text-align: center;
}
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
}
.btn {
  margin-left: 5px;
}
</style>