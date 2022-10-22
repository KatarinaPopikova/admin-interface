<template>
  <activity-breadcrumbs :activitySubNav="isActivitySubNav" />
  <sub-navigation-detail />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubNavigationDetail from "@/components/admin/view/detail/SubNavigationDetail.vue";
import ActivityBreadcrumbs from "@/components/admin/view/detail/ActivityBreadcrumbs.vue";

export default defineComponent({
  name: "MainDetailView",
  components: { SubNavigationDetail, ActivityBreadcrumbs },
  data() {
    return {
      isActivitySubNav: false,
    };
  },
});
</script>

<style scoped></style>
