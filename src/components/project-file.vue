<template>
  <li class="file leading-5">
    <span class="inline-block p-1 border border-transparent border-solid hover:border-sky-500 hover:cursor-pointer">
      <img
        v-if="children"
        src="@/assets/svg/folder-icon.svg"
        class="inline h-6 -mt-1"
        alt="Folder icon"
      >
      <img
        v-else-if="isImage"
        src="@/assets/svg/image-icon.svg"
        class="inline h-6 -mt-1"
        alt="Image icon"
      >
      <img
        v-else
        src="@/assets/svg/file-icon.svg"
        class="inline h-6 -mt-1"
        alt="Generic file icon"
      >
      <code class="inline">{{ name }}</code>
    </span>
    <project-tree
      v-if="children"
      :files="children"
      class="ml-4 border-l border-dotted border-gray-500"
    />
  </li>
</template>

<script>
import ProjectTree from './project-tree'

export default {
  name: 'ProjectFile',
  components: {
    ProjectTree
  },
  props: {
    name: {
      type: String,
      required: true
    },
    children: {
      type: Object,
      required: false,
      default: null
    }
  },
  computed: {
    isImage () {
      const ext = this.name.split('.').pop()
      return ['gif', 'jpg', 'jpeg', 'png', 'svg'].includes(ext)
    }
  }
}
</script>

<style>
.file .file {
  margin-left: .625rem;
}
</style>
