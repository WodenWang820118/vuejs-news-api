<!-- Using Bootstrap 5, the developer's information could be responsive -->
<template>
<div class="container">
  <!-- news feature in Bootstrap 5, column would change to another row if column more than 1 (accommodate 1 column in a row) -->
  <!-- here I use 4 col-lg-3 with larger screen; other situations, 2 col -->
  <div class="row justify-content-center row-cols-1">
    <div class="col-lg-3"></div>
    <figure class="selfie col-lg-3 col d-flex justify-content-center">
      <!-- the selfie here is fixed size, otherwise get oval in smaller screens -->
      <img
        class="img-thumbnail"
        style="height:200px; width:200px;overflow:hidden;"
        :src="picture"
        :alt="`${firstName} ${lastName}`"
        @click="getUser">
    </figure>
    <div class="col-lg-3 col description">
      <h1>{{firstName}} {{lastName}}</h1>
      <!-- <h3>Email: {{email}}</h3> -->
      <!-- descriptions below, change if you like -->
      <p>這是一個簡易的新聞搜尋網站。透過關鍵字、語言、排列選項，可以篩選出最符合條件的二十則新聞。
        有趣的是，點選上方的圖片，開發者的大頭照與名字都會更換。網站是響應式的，可在平板及手機上操作。
      </p>
    </div>
    <div class="col-lg-3"></div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      firstName : 'John',
      lastName : 'Doe',
      email : 'john@email',
      gender : 'male',
      picture : ''
    }
  },
  methods: {
    /**
     * fectching the random-generated developer information
     */
    async getUser() {
    const res = await fetch('https://randomuser.me/api')
    const { results } = await res.json()
    console.log(results)

    this.firstName = results[0].name.first
    this.lastName = results[0].name.last
    this.email = results[0].email
    this.gender = results[0].gender
    this.picture = results[0].picture.large
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  align-self: center;
}
@media screen and (max-width:600px) {
  .description {
    padding-top: 5%;
  }
  .selfie {
    padding-top: 15%;
  }
}
h1,h3 {
  margin-bottom: 1rem;
  font-weight: normal;
}
</style>