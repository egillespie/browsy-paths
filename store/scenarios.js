export const state = () => ({
  currentIndex: 0,
  scenarios: [
    '/',
    '/urls-on-the-web',
    '/absolute-paths'
  ]
})

export const mutations = {
  set (state, newIndex) {
    if (newIndex < 0) {
      state.currentIndex = 0
    } else if (newIndex >= state.scenarios.length) {
      state.currentIndex = state.scenarios.length - 1
    } else {
      state.currentIndex = newIndex
    }
  }
}

export const actions = {
  next ({ state, commit }, { router }) {
    if (state.currentIndex < state.scenarios.length - 1) {
      commit('set', state.currentIndex + 1)
      router.push(state.scenarios[state.currentIndex])
    }
  },
  previous ({ state, commit }, { router }) {
    if (state.currentIndex > 0) {
      commit('set', state.currentIndex - 1)
      router.push(state.scenarios[state.currentIndex])
    }
  }
}

export const getters = {
  all (state) {
    return state.scenarios
  },
  index (state) {
    return state.currentIndex
  },
  number (state) {
    return state.currentIndex + 1
  },
  current (state) {
    return state.scenarios[state.currentIndex]
  },
  isFirst (state) {
    return state.currentIndex === 0
  },
  isLast (state) {
    return state.currentIndex === state.scenarios.length - 1
  },
  total (state) {
    return state.scenarios.length
  }
}
