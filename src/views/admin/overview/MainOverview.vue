<template>
  <sub-navigation-overview />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubNavigationOverview from "@/components/admin/view/overview/SubNavigationOverview.vue";

export default defineComponent({
  name: "MainOverview",
  components: {
    SubNavigationOverview,
  },
});
</script>

<style scoped></style>
