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
        :book="result['book'] + 1"
        :chapter="result['chapter']"
        :verse="result['verse']"
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
};
</script>

<style>

</style>
