<template>
  <nav id="navigation">
    <router-link :to="`/${$i18n.locale}/`">Infinela</router-link> |
    <router-link :to="`/${$i18n.locale}/about`">O nás</router-link> |
    <router-link :to="`/${$i18n.locale}/login`">Prihlásenie</router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "TheNavigation",
};
</script>

<style scoped></style>
