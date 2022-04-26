import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import ProjectTree from '@/components/project-tree'
import ProjectFile from '@/components/project-file'

import '@/assets/css/tailwind.css'

router.beforeEach((to, _from, next) => {
  const pages = store.getters['pages/all']
  const pageIndex = pages.indexOf(to.path)
  if (pageIndex >= 0) {
    store.commit('pages/set', pageIndex)
    next()
  } else {
    next('/')
  }
})

createApp(App)
  .component('ProjectTree', ProjectTree)
  .component('ProjectFile', ProjectFile)
  .use(store)
  .use(router)
  .mount('#app')
