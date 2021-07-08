<template>
  <TheNavigation />
  <div class="content-container">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
    TheNavigation,
    Footer
  }
}
</script>

<style>

</style>
