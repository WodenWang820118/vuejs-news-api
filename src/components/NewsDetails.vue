<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="card h-100 shadow-sm mt-3 mx-1" v-for="(newsPiece, index) in newsCollection" :key="index">
        <!-- image can toggle description -->
        <img :src="newsPiece.urlToImage" alt="image link lost" data-bs-toggle="collapse"
          :data-bs-target="'#collapseImage'+index">
        <!-- title -->
        <h5><a :href="newsPiece.url" target="_blank">{{ newsPiece.title }}</a></h5>
        <!-- toggle content from image -->
        <div class="collapse" :id="'collapseImage'+index">
          <div class="card-body-noborder">
            <!-- {{ newsPiece.description }} -->
            <span v-html="newsPiece.description"></span>
          </div>
        </div>
        <div class="card-footer">
          {{ newsPiece.publishedAt.replace('T',' ').replace('Z','') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsDetails',
    props: {
      newsCollection: {
        type: Array,
        required: true
      }
    },
  }
</script>

<style scoped>

.card {
  width: 13rem; 
  border-radius:10px;
}
.row {
  padding: 0 15%;
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