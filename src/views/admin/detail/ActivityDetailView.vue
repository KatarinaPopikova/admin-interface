<template>
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
