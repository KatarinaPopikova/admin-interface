<template>
  <nav>
    <router-link :to="`/${$i18n.locale}/`">Activities</router-link> |
    <router-link :to="`/${$i18n.locale}/about`">Summaries</router-link> |
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubNavigationOverview",
});
</script>

<style scoped></style>
