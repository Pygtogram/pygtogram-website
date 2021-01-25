<template>
  <div class="columns is-desktop">
    <div class="column">
      <div class="container-content">
        <slot name="content" />
      </div>
    </div>
    <div class="column is-narrow">
      <div
        class="card container-navigation"
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
.container-navigation {
  margin-left: 5px;
  margin-right: 5px;
}

@media screen and (min-width: 1024px) {
  .container-content {
    padding-left: 48px;
    padding-right: 48px;
  }

  .container-navigation {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}

@media screen and (max-width: 1023px) {
  .container-content {
    padding-left: 8px;
    padding-right: 8px;
  }

  .container-navigation {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
