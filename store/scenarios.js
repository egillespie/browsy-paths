import gameData from '~/game-data.json'

export const state = () => ({
  currentIndex: 0,
  scenarios: gameData.scenarios
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
  },
  next (state) {
    if (state.currentIndex < state.scenarios.length - 1) {
      state.currentIndex++
    }
  },
  previous (state) {
    if (state.currentIndex > 0) {
      state.currentIndex--
    }
  }
}

export const getters = {
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
