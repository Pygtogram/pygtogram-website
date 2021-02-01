<template>
  <div style="height: 12px;">
    <progress
      v-show="loading"
      class="progress is-small is-info"
    />
  </div>
</template>

<script>
import {ConcordanceLoadingStatus} from '../../store/state';

export default {
  computed: {
    loading() {
      return this.$store.state.concordanceLoadingStatus ===
        ConcordanceLoadingStatus.LOADING;
    },
  },
};
</script>

<style>

</style>
