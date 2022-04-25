<template>
  <article
    class="mb-8"
    @keypress.enter.prevent="nextPage"
  >
    <page-header
      name="Welcome!"
      :number="pageNumber"
      :total="pageTotal"
    />
    <section class="mb-4">
      <section-header>
        Explanation
      </section-header>
      <p>
        Welcome to the interactive tutorial about links on the Internet!
      </p>
      <p>
        Press Enter to begin.
      </p>
    </section>
    <nav>
      <ol class="flex justify-around">
        <li>
          <game-button
            :disabled="isFirstPage"
            @click="previousPage"
          >
            Prev
          </game-button>
        </li>
        <li>
          <game-button
            :disabled="isLastPage"
            @click="nextPage"
          >
            Next
          </game-button>
        </li>
      </ol>
    </nav>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import GameButton from '@/components/game-button'
import PageHeader from '@/components/page-header'
import SectionHeader from '@/components/section-header'

export default {
  components: {
    GameButton,
    PageHeader,
    SectionHeader
  },
  computed: {
    ...mapGetters({
      isFirstPage: 'pages/isFirst',
      isLastPage: 'pages/isLast',
      page: 'pages/current',
      pageIndex: 'pages/index',
      pageNumber: 'pages/number',
      pageTotal: 'pages/total'
    })
  },
  methods: {
    nextPage () {
      if (!this.isLastPage) {
        this.$store.dispatch('pages/next', { router: this.$router })
      }
    },
    previousPage () {
      if (!this.isFirstPage) {
        this.$store.dispatch('pages/previous', { router: this.$router })
      }
    }
  }
}
</script>
