<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Page {{ pageNumber }} of {{ pageTotal }}</h2>
    <div class="bg-white">
      <project-tree :files="files"/>
    </div>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectTree from '@/components/project-tree'

export default {
  name: 'HelloWorld',
  components: {
    ProjectTree
  },
  props: {
    msg: String
  },
  data () {
    return {
      files: {
        CSS: {
          'styles.css': null
        },
        Images: {
          'BubbleIsland.jpg': null,
          'HomePage.jpg': null
        },
        'index.html': null
      }
    }
  },
  computed: {
    ...mapGetters({
      pageNumber: 'pages/number',
      pageTotal: 'pages/total'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
