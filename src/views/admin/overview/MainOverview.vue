<template>
  <sub-navigation-overview />
  <p>main-overview</p>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import SubNavigationOverview from "@/components/admin/overview/SubNavigationOverview.vue";

export default defineComponent({
  name: "MainOverview",
  components: {
    SubNavigationOverview,
  },
});
</script>

<style scoped></style>
