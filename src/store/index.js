import { createStore } from 'vuex'

export default createStore({
  modules: {
    pages: {
      namespaced: true,
      state: {
        currentIndex: 0,
        pages: [
          '/',
          '/urls-on-the-web',
          '/absolute-paths'
        ]
      },
      getters: {
        all (state) {
          return state.pages
        },
        index (state) {
          return state.currentIndex
        },
        number (state) {
          return state.currentIndex + 1
        },
        current (state) {
          return state.pages[state.currentIndex]
        },
        isFirst (state) {
          return state.currentIndex === 0
        },
        isLast (state) {
          return state.currentIndex === state.pages.length - 1
        },
        total (state) {
          return state.pages.length
        }
      },

      mutations: {
        set (state, newIndex) {
          if (newIndex < 0) {
            state.currentIndex = 0
          } else if (newIndex >= state.pages.length) {
            state.currentIndex = state.pages.length - 1
          } else {
            state.currentIndex = newIndex
          }
        }
      },

      actions: {
        next ({ state, commit }, { router }) {
          if (state.currentIndex < state.pages.length - 1) {
            commit('set', state.currentIndex + 1)
            router.push(state.pages[state.currentIndex])
          }
        },
        previous ({ state, commit }, { router }) {
          if (state.currentIndex > 0) {
            commit('set', state.currentIndex - 1)
            router.push(state.pages[state.currentIndex])
          }
        }
      }
    }
  }
})
