<template>
  <div class="container">
    <div class="row justify-content-center" data-masonry='{"percentPosition": true }'>
      <div class="col-lg-3 col-md-4 col-sm-col" v-for="(newsPiece, index) in newsCollection" :key="index">
        <div class="grid-item card shadow-sm mt-3 mx-1">
        <img :src="newsPiece.urlToImage" alt="image link lost">
        <h5><a :href="newsPiece.url" target="_blank">{{ newsPiece.title }}</a></h5>
        <div class="card-footer" style="font-family: 'Roboto', sans-serif">
          {{ newsPiece.publishedAt.replace('T',' ').replace('Z','') }}
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Masonry from "masonry-layout"
import imagesLoaded from 'imagesloaded'
  export default {
    name: 'NewsDetails',
    props: {
      newsCollection: {
        type: Array,
        required: true
      }
    },
    methods: {
      createMasonry() {
        // reference: imagesLoaded: https://github.com/desandro/imagesloaded
        // reference: possible item elements overlap: https://masonry.desandro.com/layout.html#imagesloaded
        var row = document.querySelector("[data-masonry]");
        new imagesLoaded(row,()=> {
          new Masonry(row, {
            percentPosition: true
          })
        })
      }
    },
    // The updated hook runs after data changes on your component and the DOM re-renders.
    // Use updated if you need to access the DOM after a property change:
    // https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle
    updated() {
      this.createMasonry();
    },
  }
</script>

<style scoped>
.container {
  padding: 0 10%;
}
h5 {
  font-size: 1.1rem;
}
.card {
  padding: 1%;
}
.card-footer {
  font-size: 1.1rem;
}
.grid-item {
  place-self: center;
  border-radius:10px;
}
img {
  margin: 5px 5px;
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