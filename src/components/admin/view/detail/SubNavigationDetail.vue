<template>
  <nav class="flex items-center justify-between">
    <div>
      <router-link :to="`/${$i18n.locale}/admin/${activityId}/activity`"
        >Activity</router-link
      >|
      <router-link :to="`/${$i18n.locale}/admin/${activityId}/ticket`"
        >Tickets</router-link
      >|
      <router-link :to="`/${$i18n.locale}/admin/${activityId}/summary`"
        >Summaries</router-link
      >
    </div>

    <div>
      <router-link :to="`/${$i18n.locale}/admin/overview/activity`">
        <font-awesome-icon
          icon="fa-solid fa-arrow-left"
          title="Back"
          class="text-center text-main-color-400 hover:text-main-color-500 hover:cursor-pointer h-10 w-10"
        />
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubNavigationDetail",
  data() {
    return {
      activityId: this.$route.params.id,
    };
  },
});
</script>

<style scoped></style>
