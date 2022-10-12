import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

const navHeight = window.innerWidth <= 1023 ? 48 : 58

Vue.use(VueScrollTo, {
  offset: -navHeight,
})
