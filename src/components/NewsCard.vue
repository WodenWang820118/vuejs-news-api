<template>
  <div class="card mt-3 mx-1" style="width: 18rem">
    <img :src="newsPiece.urlToImage" alt="image link lost">
    <h5><a :href="newsPiece.url" target="_blank">{{ newsPiece.title }}</a></h5>
    <!-- <p>{{ newsPiece.description }}</p>
    <p>{{ newsPiece.url }}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    newsPiece: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  transition: 0.3s;
}
a:hover {
  color: brown;
}
</style>