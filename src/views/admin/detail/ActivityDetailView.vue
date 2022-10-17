<template>
  <header class="m-8 font-bold text-2xl">
    <h1>Activity name</h1>
  </header>
  <activity-detail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActivityDetail from "@/components/admin/view/detail/activity/ActivityDetail.vue";

export default defineComponent({
  name: "ActivityDetailView",
  components: {
    ActivityDetail,
  },
});
</script>

<style scoped></style>
