<template>
  <nav
    class="navbar is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <!-- Titre de l'application -->
      <router-link
        class="navbar-item"
        to="/"
      >
        Pygtogram
      </router-link>

      <!-- Bouton de menu (smartphone) -->
      <a
        role="button"
        aria-label="menu"
        aria-expanded="false"
        data-target="app-menu"
        class="navbar-burger"
        :class="{'is-active': isMenuOpened}"
        @click="isMenuOpened = !isMenuOpened"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div
      id="app-menu"
      class="navbar-menu"
      :class="{'is-active': isMenuOpened}"
    >
      <div class="navbar-start">
        <!-- Liens de l'application -->
        <router-link
          class="navbar-item"
          to="/concordance"
        >
          Concordance
        </router-link>
        <router-link
          class="navbar-item"
          to="/gestion-de-microcards"
        >
          GdM
        </router-link>
      </div>

      <div class="navbar-end">
        <!-- Numéro de version -->
        <div
          id="version"
          class="navbar-item is-hoverable has-dropdown"
        >
          <a class="navbar-link is-arrowless">
            <i class="fas fa-code-branch" />
          </a>

          <div class="navbar-dropdown is-right">
            <div class="navbar-item">
              v {{ version }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      version: APPLICATION_VERSION,
      isMenuOpened: false,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  #version {
    display: none;
  }
}
</style>
