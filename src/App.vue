<template>
  <div>
    <ptgm-header />
    <router-view />
    <ptgm-footer />
  </div>
</template>

<script>
import Header from './utils/components/Header';
import Footer from './utils/components/Footer';

export default {
  components: {
    'ptgm-header': Header,
    'ptgm-footer': Footer,
  },

  data() {
    return {
      version: APPLICATION_VERSION,
      isMenuOpened: false,
    };
  },
};
</script>

<style>
@font-face {
  font-family: 'Rationale';
  src: url('~@/assets/fonts/Rationale-Regular.ttf');
}
</style>
