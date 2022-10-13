<template>
  <sub-navigation-detail />
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
