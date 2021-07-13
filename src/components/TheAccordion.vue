<!-- Using bootstrap 5, accordion is easy to create -->
<!-- see details: https://getbootstrap.com/docs/5.0/components/accordion/ -->
<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accoridon-item" v-for="(accordion,index) in accordionCollection" :key="index">
      <!-- the id here needs to bind the index to toggle single accordion -->
      <h2 class="accordion-header" :id="'flush-heading'+index">
        <button
          class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapse'+index"
            aria-expanded="false"
            :aria-controls="'flush-collapse-'+index">
          {{ accordion.title }}
        </button>
      </h2>
      <div
        :id="'flush-collapse'+index"
        class="accordion-collapse collapse"
        :aria-labelledby="'flush-heading'+index"
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">{{ accordion.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * the accordionCollection is passed from Footer.vue
     */
    accordionCollection: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.accordion {
  padding-top: 2%;
  width: 50%;
  margin-bottom: 20px;
}
/* response setting */
@media screen and (max-width: 600px) {
  .accordion {
    width: 440px;
  }
}
</style>