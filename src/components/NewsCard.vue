<template>
  <div class="news-card">
    <h1>{{ newsPiece.title }}</h1>
    <p>{{ newsPiece.description }}</p>
    <p>{{ newsPiece.url }}</p>
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

</style>