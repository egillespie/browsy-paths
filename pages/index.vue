<template>
  <article
    class="mb-8"
    @keypress.enter.prevent="nextScenario"
  >
    <scenario-header
      name="scenario.name"
      :number="scenarioNumber"
      :total="scenarioTotal"
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
            :disabled="isFirstScenario"
            @click="previousScenario"
          >
            Prev
          </game-button>
        </li>
        <li>
          <game-button
            :disabled="isLastScenario"
            @click="nextScenario"
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
import GameButton from '~/components/game-button'
import ScenarioHeader from '~/components/scenario-header'
import SectionHeader from '~/components/section-header.vue'

export default {
  components: {
    GameButton,
    ScenarioHeader,
    SectionHeader
  },
  computed: {
    ...mapGetters({
      isFirstScenario: 'scenarios/isFirst',
      isLastScenario: 'scenarios/isLast',
      scenario: 'scenarios/current',
      scenarioIndex: 'scenarios/index',
      scenarioNumber: 'scenarios/number',
      scenarioTotal: 'scenarios/total'
    })
  },
  methods: {
    nextScenario () {
      if (!this.isLastScenario) {
        this.$store.dispatch('scenarios/next', { router: this.$router })
      }
    },
    previousScenario () {
      if (!this.isFirstScenario) {
        this.$store.dispatch('scenarios/previous', { router: this.$router })
      }
    }
  }
}
</script>
