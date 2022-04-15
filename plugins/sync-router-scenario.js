// Set the scenario index based on the router path
export default ({ app }) =>
  app.router.beforeEach((to, from, next) => {
    const scenarios = app.store.getters['scenarios/all']
    const scenarioIndex = scenarios.indexOf(to.path)
    if (scenarioIndex >= 0) {
      app.store.commit('scenarios/set', scenarioIndex)
      next()
    } else {
      next('/')
    }
  })
