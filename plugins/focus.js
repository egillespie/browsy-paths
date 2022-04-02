import Vue from 'vue'

// Focus an element with the v-focus attribute after it's inserted into the DOM
// Source: https://stackoverflow.com/a/41297528/1696044
Vue.directive('focus', {
  inserted (el) {
    el.focus()
  }
})
