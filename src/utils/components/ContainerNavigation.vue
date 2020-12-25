<template>
  <div class="columns is-desktop">
    <div class="column">
      <slot name="content" />
    </div>
    <div class="column is-narrow">
      <div
        class="card"
        style="margin: 0 5px 5px 5px;"
      >
        <div class="card-content">
          <slot name="navigation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scopped>
/* Ajustement de la taille pour prendre en compte la navigation */
@media screen and (min-width: 1024px) {
  .container-navigation {
    padding-left: 48px;
    padding-right: 48px;
  }
}

@media screen and (max-width: 1023px) {
  .container-navigation {
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
