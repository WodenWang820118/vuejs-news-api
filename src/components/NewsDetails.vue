<template>
  <div class="container">
    <div class="row justify-content-center" data-masonry='{"percentPosition": true }'>
      <!-- TODO: the responsiveness is not quite good -->
      <div class="col-lg-3 col-md-4 col-sm-col" v-for="(newsPiece, index) in newsCollection" :key="index">
        <div class="card shadow-sm mt-3 mx-1">
        <img :src="newsPiece.urlToImage" alt="image link lost">
        <h5><a :href="newsPiece.url" target="_blank">{{ newsPiece.title }}</a></h5>
        <div class="card-footer">
          {{ newsPiece.publishedAt.replace('T',' ').replace('Z','') }}
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Masonry from "masonry-layout"
  export default {
    name: 'NewsDetails',
    props: {
      newsCollection: {
        type: Array,
        required: true
      }
    },
    mounted() {
      var row = document.querySelector("[data-masonry]");
      new Masonry(row, {
        // options
        percentPosition: true,
    });
    }
  }
</script>

<style scoped>
.card {
  width: 13rem; 
  border-radius:10px;
}
h5 {
  font-size: 1rem;
}
.card-footer {
  font-size: 1rem;
}

@media screen and (max-width:600px) {
  .card {
    width: 20rem;
    border-radius:10px;
  }
  h5 {
    font-size: 1.2rem;
  }
}
img {
  margin-top: 5px;
  margin-bottom: 3px;
  border-radius: 10px;
}

img:hover {
  opacity: 50%;
}

a {
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: brown;
}

.card-footer {
  border: none;
  background: #fff;
  text-align: center;
}
</style>