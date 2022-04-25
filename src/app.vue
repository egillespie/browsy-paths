<template>
  <header class="max-w-screen-md mx-auto my-4 p-4 text-white bg-blue-800 shadow text-center">
    <h1 class="text-4xl">
      Browsy Paths
    </h1>
    <small class="inline-block text-sm italic leading-tight">
      an interactive tutorial about making links on the Internet
    </small>
  </header>

  <main class="max-w-screen-md p-4 mx-auto">
    <router-view/>
  </main>

  <footer class="static bottom-0 text-center leading-tight">
    <small class="block mb-1">
      &copy; Copyright 2020-Present,
      <a
        class="text-blue-900 hover:underline"
        href="https://twitter.com/eriklgillespie"
        target="_blank"
      >Erik Gillespie</a>.
    </small>
    <small class="block mb-1">
      Feedback or questions?
      <a
        class="text-blue-900 hover:underline"
        href="https://github.com/egillespie/browsy-paths"
        target="_blank"
      >Create an issue on GitHub.</a>
    </small>
  </footer>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  @apply bg-blue-100;
}
</style>
