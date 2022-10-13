<template>
  <activity-list />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActivityList from "@/components/admin/view/overview/activity/ActivityList.vue";

export default defineComponent({
  name: "ActivityOverview",
  components: {
    ActivityList,
  },
});
</script>

<style scoped></style>
