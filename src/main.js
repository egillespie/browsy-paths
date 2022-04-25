import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

router.beforeEach((to, _from, next) => {
  const scenarios = store.getters['pages/all']
  const scenarioIndex = scenarios.indexOf(to.path)
  if (scenarioIndex >= 0) {
    store.commit('pages/set', scenarioIndex)
    next()
  } else {
    next('/')
  }
})

createApp(App).use(store).use(router).mount('#app')
