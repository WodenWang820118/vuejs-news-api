<template>
<div>
  <br/>
  <div class="input-group">
    <input @keypress="fetchNews" v-model="topic" type="search" class="form-control rounded" aria-label="Search"
      aria-describedby="search-addon" />
    <button @click="fetchNews" type="button" class="btn btn-outline-primary">search</button>
  </div>
<div class="container justify-content-center">
  <div class="row">
    <div class="col-lg-3"></div> <!-- for laying language-options and filter-options centered -->
    <div class="language-options col-lg-3 col-6 d-flex justify-content-center"> 
      <div v-for="option in languageOptions" :key="option.id" class="language-options">
        <input type="radio" v-model="language" name="language" :value="option.value">
        <label style="margin-right:3px;"> {{ option.language }} </label>
      </div>
    </div>
  <div class="filter-options col-lg-3 col-6 d-flex justify-content-center">
    排序：
    <select v-model="sortBySelected">
        <option v-for="option in sortedBy" :key="option.id" :value="option.value">
          {{ option.sortBy }}
        </option>
      </select>
  </div>
  <div class="col-lg-3"></div>
  </div>
</div>
  <NewsDetails :newsCollection="newsCollection" /> 
</div>
<!-- <div class="no-news" v-show="newsCollection.length == 0"> 抱歉，沒有找到新聞 </div> -->
<div class="no-news" v-show="newsCollection.length==0"> 抱歉，沒有找到新聞 </div>
</template>

<script>
// import news from '@/data/news.js'
import axios from "axios"
import NewsDetails from '@/components/NewsDetails'
import languageOptions from '@/data/languageOptions.js'
import sortBySelected from '@/data/sortedBy.js'
export default {
  name: 'home',
  components: {
    NewsDetails
  },
  data() {
    return {
      topic: '台灣 熱門新聞',
      language:'',
      sortBySelected:'relevency',
      languageOptions: languageOptions.options,
      sortedBy: sortBySelected.options,
      noNews: false,
      newsCollection: []
    }
  },
  methods: {
    async fetchNews() {
      try {
        const url = `https://newsapi.org/v2/everything?sortBy=${this.sortBySelected}&q=${this.topic}&language=${this.language}&apiKey=${process.env.VUE_APP_TAIWAN_NEWS_API_KEY}`
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
      // console.log(this.newsCollection)
    }
  },
    mounted() {
    this.fetchNews();
  // },
  // updated() {
  //   this.noNewsExist();
  // }
  }
}
</script>

<style scoped>
.input-group {
  padding: 1% 30%;
}
h6 {
  vertical-align: middle;
}

.no-news {
  text-align: center;
  font-size: 2rem;
  padding: 0 2%;
}
@media screen and (max-width:600px) {
  .input-group {
    padding: 1% 10%;
  }

}
h1 {
  text-align: center;
}
.col {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>