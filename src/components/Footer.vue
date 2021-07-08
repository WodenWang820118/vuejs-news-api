<template>
<div class="footer d-sm-flex justify-content-evenly align-items-center">
  <TheAccordion :accordionCollection="accordionCollection" />
  <div>
    <div
      id="map"
      style=
        "width: 440px;
        height: 300px;
        border-radius:10px;
        z-index:1000;"
      >
    </div> 
  </div>
</div>
<div class="icons-copyright">
  <ul class="social-icons">
    <li><a><i class="fab fa-linkedin fa-5x"></i></a></li>
    <li><a><i class="fab fa-facebook-square fa-5x"></i></a></li>
  </ul>
  <p>Copyright <i class="far fa-copyright"></i> GuanXinTech. All Rights Reserved  </p>
</div>
</template>

<script>
import TheAccordion from '@/components/TheAccordion'
import accordionData from '@/data/accordionData.js'
import mapboxgl from "mapbox-gl"
export default {
  data() {
    return {
      accordionCollection: accordionData.accordionCollection,
      accessToken: "pk.eyJ1IjoiZ3VhbnhpbiIsImEiOiJja3F0M2kxaHAxaDRzMnBxYW5xeXlxMnFqIn0.UW8BxbXuknmnKPND8oPctw"
    }
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = this.accessToken;
      // init the map
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        minzoom: 1.3,
        center: [120.9605, 23.6978], // Taiwan
        zoom: 6,
      });
      this.map.addControl(new mapboxgl.NavigationControl());
    }
  },
  mounted() {
    this.createMap();
  },
  components: {
    TheAccordion,
  }
}
</script>

<style scoped>
p {
  text-align: center;
}
.footer {
  margin-top: 10px;
  padding: 1%;
  width: 100%;
  padding-bottom: 10px;
  background-color: ghostwhite;
}
/* the padding-left is for centering the content under 600px */
@media screen and (max-width:600px) {
  .footer {
    padding-left: 4.5%;
    justify-content: center;
  }
}
.icons-copyright {
  background-color: ghostwhite;
}
.social-icons {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social-icons li {
  list-style: none;
}
.social-icons li a {
  display: inline-block;
  transform: scale(0.5);
  transition: 0.5s;
}
.social-icons li a:hover {
  transform: scale(0.5) translateY(-15px);
  color: rgb(50, 58, 168);
}
</style>