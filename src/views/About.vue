<template>
<div class="container">
  <div class="row justify-content-center row-cols-1">
    <div class="col-lg-3"></div>
    <figure class="selfie col-lg-3 col d-flex justify-content-center">
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