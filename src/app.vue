<template>
  <header class="max-w-screen-md mx-auto md:my-4 p-4 text-slate-100 bg-sky-800 shadow text-center">
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
        class="text-sky-800 dark:text-sky-500 hover:underline"
        href="https://twitter.com/eriklgillespie"
        target="_blank"
      >Erik Gillespie</a>.
    </small>
    <small class="block mb-1">
      Feedback or questions?
      <a
        class="text-sky-800 dark:text-sky-500 hover:underline"
        href="https://github.com/egillespie/browsy-paths"
        target="_blank"
      >Create an issue on GitHub.</a>
    </small>
  </footer>
</template>

<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  @apply scroll-smooth;
  @apply box-border;
  @apply overflow-y-scroll;
  @apply text-slate-800;
  @apply bg-sky-100;
  @apply dark:text-slate-300;
  @apply dark:bg-slate-800;
}

*,
*:before,
*:after {
  @apply box-border;
  @apply m-0;
}
</style>
