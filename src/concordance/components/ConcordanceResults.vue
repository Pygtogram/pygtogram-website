<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Référence</th>
        <th>Verset</th>
      </tr>
    </thead>
    <tbody>
      <ptgm-concordance-result
        v-for="result in results.slice(currentPage * RESULTS_PER_PAGE,
                                       (currentPage + 1) * RESULTS_PER_PAGE)"
        :key="result"
        :book="result['book'] + 1"
        :chapter="result['chapter']"
        :verse="result['verse']"
      />
    </tbody>
  </table>

  <nav
    class="pagination is-right"
    role="navigation"
    aria-label="pagination"
  >
    <a
      class="pagination-previous"
      @click="setResultsPage(currentPage - 1)"
    >&lt;</a>
    <input
      class="input pagination-previous"
      style="width: 4rem"
      type="text"
      placeholder="p."
      @change="inputChangePage"
    >
    <a
      class="pagination-next"
      @click="setResultsPage(currentPage + 1)"
    >&gt;</a>
    <ul class="pagination-list">
      <li
        v-visible="currentPage > 1"
        @click="setResultsPage(0)"
      >
        <a
          class="pagination-link"
        >1</a>
      </li>
      <li v-visible="currentPage > 2">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li
        v-visible="currentPage > 0"
        @click="setResultsPage(currentPage - 1)"
      >
        <a
          class="pagination-link"
        >{{ currentPage }}</a>
      </li>
      <li>
        <a
          class="pagination-link is-current"
          aria-current="page"
        >{{ currentPage + 1 }}</a>
      </li>
      <li
        v-visible="currentPage < (resultsNbPages - 1)"
        @click="setResultsPage(currentPage + 1)"
      >
        <a class="pagination-link">{{ currentPage + 2 }}</a>
      </li>
      <li v-visible="currentPage < (resultsNbPages - 3)">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li
        v-visible="currentPage < (resultsNbPages - 2)"
        @click="setResultsPage(resultsNbPages - 1)"
      >
        <a class="pagination-link">{{ resultsNbPages }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import ConcordanceResult from './ConcordanceResult.vue';

// Nb de résultats par page
const RESULTS_PER_PAGE = 10;

export default {
  components: {
    'ptgm-concordance-result': ConcordanceResult,
  },

  data() {
    return {
      currentPage: 0,
      RESULTS_PER_PAGE: RESULTS_PER_PAGE,
    };
  },

  computed: {
    results() {
      return this.$store.state.concordanceResults;
    },
    resultsNbPages() {
      return Math.ceil(
          this.$store.state.concordanceResults.length / RESULTS_PER_PAGE);
    },
  },

  watch: {
    resultsNbPages() {
      this.currentPage = 0;
    },
  },

  methods: {
    setResultsPage(page) {
      this.currentPage = Math.max(Math.min(page, this.resultsNbPages -1), 0);
    },
    inputChangePage(event) {
      const value = parseInt(event.target.value);
      if (!isNaN(value)) {
        this.setResultsPage(value -1);
      }
    },
  },
};
</script>

<style>

</style>
