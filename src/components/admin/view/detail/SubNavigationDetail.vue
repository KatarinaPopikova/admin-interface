<template>
  <nav>
    <router-link :to="`/${$i18n.locale}/admin/${activityId}/activity`"
      >Activity</router-link
    >|
    <router-link :to="`/${$i18n.locale}/admin/${activityId}/ticket`"
      >Tickets</router-link
    >|
    <router-link :to="`/${$i18n.locale}/admin/${activityId}/summary`"
      >Summaries</router-link
    >
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
