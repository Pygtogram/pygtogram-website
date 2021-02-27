<template>
  <div
    style="margin-bottom: 0;"
    class="columns is-tablet"
  >
    <div class="column">
      <div class="control">
        <input
          v-model="searchContent"
          class="input"
          type="text"
          placeholder="mots ou phrase"
          @change="searchInConcordance"
        >
      </div>
    </div>
    <div class="column is-narrow">
      <div class="columns is-mobile">
        <div class="column">
          <div class="control">
            <button
              class="button is-info"
              :disabled="isSearchContentEmpty || isLoading"
              @click="searchInConcordance"
            >
              Rechercher
            </button>
          </div>
        </div>
        <!--<div class="column is-narrow">
          <div class="control">
            <button
              class="button has-tooltip-left has-tooltip-top-desktop"
              data-tooltip="Configuration"
            >
              <i class="fas fa-hammer" />
            </button>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {ConcordanceLoadingStatus} from '../../store/state';

export default {
  inject: ['backendService'],

  data() {
    return {
      searchContent: '',
    };
  },

  computed: {
    isSearchContentEmpty() {
      return this.searchContent.length == 0;
    },
    isLoading() {
      return this.$store.state.concordanceLoadingStatus ==
        ConcordanceLoadingStatus.LOADING;
    },
  },

  methods: {
    searchInConcordance() {
      if (!this.isSearchContentEmpty && !this.isLoading) {
        this.backendService.searchInConcordance(this.searchContent);
      }
    },
  },
};
</script>

<style>

</style>
