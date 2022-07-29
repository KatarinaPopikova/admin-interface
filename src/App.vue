<template>
  <the-navigation />
  <main class="content">
    <router-view />
  </main>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";

export default {
  name: "App",
  components: {
    TheNavigation,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  @apply text-sky-900;
}

nav {
  @apply p-7;

  a {
    font-weight: bold;
    @apply text-sky-900;

    &.router-link-exact-active {
      @apply text-main-color-500;
    }
  }
}
</style>
