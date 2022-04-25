<template>
  <ol>
    <project-file
      v-for="(children, name) in files"
      :key="name"
      :name="name"
      :children="children"
    />
  </ol>
</template>

<script>
import ProjectFile from './project-file'

export default {
  name: 'ProjectTree',
  components: {
    ProjectFile
  },
  props: {
    files: {
      type: Object,
      required: true
    }
  }
}
</script>
