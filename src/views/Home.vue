<!-- This is the main page (view) on the website, with search bar and search button -->
<template>
<div>
  <br/>
  <div class="input-group">
    <!-- two behaviours would trigger the fetchNews() function, which are keypress,and click the search button -->
    <input @keypress="fetchNews" v-model="topic" type="search" class="form-control rounded" aria-label="Search"
      aria-describedby="search-addon" />
    <button @click="fetchNews" type="button" class="btn btn-outline-primary">search</button>
  </div>
  <!-- Using bootstrap 5, could make the website responsive when screen size squeezes to tab, or smartphone -->
  <!-- total available columns are twelve, here use col-lg-3 for for 4 columns; col-6 for 2 columns, vice versa -->
  <div class="container justify-content-center">
    <!-- the wrapper row could make the elements in a row -->
    <div class="row">
      <div class="col-lg-3"></div> <!-- for laying language-options and filter-options centered when in large screen like laptop. Disables when screen size become md and sm -->
      <div class="language-options col-lg-3 col-6 d-flex justify-content-center"> <!-- screen large: with other columns; otherwise, half of the screen as a column -->
        <div v-for="option in languageOptions" :key="option.id" class="language-options"> <!-- loop through the options in the data/languageOptions.js -->
          <input type="radio" v-model="language" name="language" :value="option.value">
          <label style="margin-right:3px;"> {{ option.language }} </label> <!-- display the language options on the screen as the radio button -->
        </div>
      </div>
      <div class="filter-options col-lg-3 col-6 d-flex justify-content-center"> <!-- another columns with select block, data/sortedBy.js -->
        排序：<!-- mandarin here to explain the select options -->
        <select v-model="sortBySelected">
          <option v-for="option in sortedBy" :key="option.id" :value="option.value">
            {{ option.sortBy }}
          </option>
        </select>
      </div>
    <div class="col-lg-3"></div> <!-- supporting column for centering the filter-options -->
    </div>
</div>
  <NewsDetails :newsCollection="newsCollection" /> <!-- component NewsDetails, passing the the props call newsCollection, which uses the newsCollection below -->
</div>
<div class="no-news" v-show="newsCollection.length==0"> 抱歉，沒有找到新聞 </div> <!-- when there is no found news, showing the message -->
</template>

<script>
import axios from "axios" // for fectching the news data
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
      topic: '台灣 熱門新聞', // default search keywords, change if you like
      language:'', // default language setting, empty for retrieving all language results from newsapi.org
      sortBySelected:'relevency', // default sorting by relevency
      languageOptions: languageOptions.options,
      sortedBy: sortBySelected.options,
      newsCollection: []
    }
  },
  methods: {
    async fetchNews() {
      try {
        // using GET to get the JSON format data from newsapi.org, need to await for data
        const url = `https://newsapi.org/v2/everything?sortBy=${this.sortBySelected}&q=${this.topic}&language=${this.language}&apiKey=${process.env.VUE_APP_TAIWAN_NEWS_API_KEY}`
        const response = await axios.get(url)
        const results = response.data.articles
        // since news has null id, using index to make the unique id field
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
      // print the data on the console to check whether the data retrieved
      // console.log(this.newsCollection)
    }
  },
  // use the fetchNews method when get into the website
  mounted() {
  this.fetchNews();
  }
}
</script>

<!-- style here, scoped make sure the CSS only modifies the elements in this file -->
<!-- change if you like-->
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
/* media applies when screen size is smaller than 600px */
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