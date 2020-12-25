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
        v-for="result in results"
        :key="result"
        :book="getBookId(result)"
        :chapter="getChapterId(result)"
        :verse="getVerseId(result)"
      />
    </tbody>
  </table>
</template>

<script>
import ConcordanceResult from './ConcordanceResult.vue';

export default {
  components: {
    'ptgm-concordance-result': ConcordanceResult,
  },

  computed: {
    results() {
      return this.$store.state.concordanceResults;
    },
  },

  methods: {
    getBookId(id) {
      return Math.floor(id / 1000000);
    },
    getChapterId(id) {
      return Math.floor((id / 1000)) % 1000;
    },
    getVerseId(id) {
      return id % 1000;
    },
  },
};
</script>

<style>

</style>
