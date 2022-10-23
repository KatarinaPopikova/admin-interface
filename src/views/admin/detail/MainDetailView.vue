<template>
  <sub-navigation-detail />
  <header class="m-8 font-bold text-2xl">
    <h1>Activity name</h1>
  </header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubNavigationDetail from "@/components/admin/view/detail/SubNavigationDetail.vue";

export default defineComponent({
  name: "MainDetailView",
  components: { SubNavigationDetail },
});
</script>

<style scoped></style>
