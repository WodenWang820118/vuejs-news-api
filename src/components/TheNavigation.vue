<!-- Using bootstrap 5, it's easy to create a responsive navigation bar -->
<!-- See bootstrap 5 navbar for customized details: https://getbootstrap.com/docs/5.0/components/navbar/ -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- the router-link would let the vue-router change view when clicked; here to="/" would routes to homepage -->
      <!-- remember to put router-view inside App.vue to support changing views -->
      <router-link to="/" class="brand active" aria-current="page" style="text-decoration: none; color: inherit;">熱門20新聞</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">首頁</router-link>
          </li>          
            <li class="nav-item nav-link" >
              <router-link to="/about" style="text-decoration: none; color: inherit;">關於</router-link>         
            </li>          
        </ul>
      </div>
    </div>
  </nav>
</template>