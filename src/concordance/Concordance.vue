<template>
  <ptgm-container-navigation>
    <template #content>
      <div class="container">
        <h1
          class="title"
          style="padding-top: 48px;"
        >
          Concordance
        </h1>
        <ptgm-concordance-search-bar />
        <ptgm-concordance-loading />
        <ptgm-concordance-results />
      </div>
    </template>
    <template #navigation>
      <aside class="menu">
        <p class="menu-label">
          Concordance
        </p>
        <ul class="menu-list">
          <li><a href="#">Accueil</a></li>
          <li><a href="#tutoriel">Tutoriel</a></li>
          <li><a href="#fonctionnement">Fonctionnement</a></li>
        </ul>
      </aside>
    </template>
  </ptgm-container-navigation>
</template>

<script>
import ContainerNavigation from '../utils/components/ContainerNavigation';
import {BibleService} from './services/BibleService';
import {BackendService} from './services/BackendService';
import SearchBar from './components/SearchBar.vue';
import ConcordanceResults from './components/ConcordanceResults.vue';
import LoadingVue from './components/Loading.vue';

export default {
  components: {
    'ptgm-container-navigation': ContainerNavigation,
    'ptgm-concordance-search-bar': SearchBar,
    'ptgm-concordance-results': ConcordanceResults,
    'ptgm-concordance-loading': LoadingVue,
  },
  provide() {
    return {
      'bibleService': new BibleService(),
      'backendService': new BackendService(this.$store),
    };
  },
};
</script>

<style>

</style>
