<!-- component inside the Home.vue -->
<template>
  <!-- using Bootstrap 5 as well to deal with responsive layout -->
  <div class="container">
    <div class="row justify-content-center" data-masonry='{"percentPosition": true }'> <!-- Bootstrap 5 cards with masonry layout, also see createMasonry method to instantiate the masonry instance -->
      <div class="col-lg-3 col-md-4 col-sm-col" v-for="(newsPiece, index) in newsCollection" :key="index"> <!-- using the newCollection props passed from Home.vue, see props in script below -->
        <!--
          card using Bootstrap 5
          @binding {urlToImage} image of array item
          @binding {url} outer url link opened on a new tab
          @binding {title} title of array item
          @binding {publishAt} timestamp of news published
          -->
        <div class="grid-item card shadow-sm mt-3 mx-1">
          <img :src="newsPiece.urlToImage" alt="image link lost">
          <h5><a :href="newsPiece.url" target="_blank">{{ newsPiece.title }}</a></h5>
          <div class="card-footer" style="font-family: 'Roboto', sans-serif"> <!-- use google fonts, injected from index-html -->
            {{ newsPiece.publishedAt.replace('T',' ').replace('Z','') }} <!-- time format with T and Z character, could format with other libraries, here I just make it disappear -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Masonry from "masonry-layout" // in order to use masonry-layout
import imagesLoaded from 'imagesloaded'
  export default {
    name: 'NewsDetails',
    // props here to receive the props passed from parent component or view
    props: {
      /**
       * The array passed from Home.vue
       */
      newsCollection: {
        type: Array,
        required: true
      }
    },
    methods: {
      /**
       * to instantiate the masonry-layout layout
       * also see bootstrap 5 docs: https://getbootstrap.com/docs/5.0/examples/masonry/
       * however, using CDN won't work since vue dynamically render the instance
       */
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
    // The updated hook runs after data changes on your component and the DOM re-renders;  otherwise, component could be overlapped
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