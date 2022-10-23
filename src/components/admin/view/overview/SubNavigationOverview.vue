<template>
  <nav class="sub-nav">
    <div>
      <router-link :to="`/${$i18n.locale}/admin/overview/activity`">
        Activities
      </router-link>
      <router-link :to="`/${$i18n.locale}/admin/overview/summary`">
        Summaries
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubNavigationOverview",
});
</script>

<style scoped></style>
