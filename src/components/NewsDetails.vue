<template>
  <div>
    <div class="row justify-content-center">
      <NewsCard v-for="(newsPiece, index) in newsCollection" :key="index" :newsPiece="newsPiece" />
    </div> 
  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard'
export default {
  name: 'NewsDetails',
  props: {
    newsCollection: {
      type: Array,
      required: true
    }
  },
  components: {
    NewsCard
  }
}
</script>

<style scoped>

</style>