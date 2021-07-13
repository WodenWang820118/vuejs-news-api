<template>
  <div>
    <TheNavigation />
    <!-- <router-view /> -->
    <router-view v-slot="{ Component }">
      <!-- use the CDN animate.css/3.7.2 see index.html to find more dependencies-->
      <!-- other libraries: https://learnvue.co/2020/01/9-vue-input-libraries-to-power-up-your-forms/ -->
      <transition
      enter-active-class="animated fadeIn zoomIn" 
      leave-active-class="animated fadeOut zoomOut"
        >
        <component :is="Component" />
      </transition>
      <Footer />
      <!-- router-view to render different views under SPA (single page application) -->
    </router-view>
  </div>
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
