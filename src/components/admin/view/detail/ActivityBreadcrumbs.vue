<template>
  <div>
    <nav class="p-0">
      <div class="text-xs p-0 pl-7">
        <router-link :to="`/${$i18n.locale}/admin/overview/activity`">
          <font-awesome-icon icon="fa-solid fa-house" />
        </router-link>
        <div v-if="detailSubPage.includes(currentRouteName)">
          |
          <router-link
            :to="`/${$i18n.locale}/admin/${this.$route.params.id}/activity`"
          >
            Activity
          </router-link>
          <div v-if="currentRouteName === 'summaryDetail'">
            |
            <router-link
              :to="`/${$i18n.locale}/admin/${this.$route.params.id}/summary`"
            >
              Summaries
            </router-link>
          </div>
          <div v-if="currentRouteName === 'ticket'">
            |
            <router-link
              :to="`/${$i18n.locale}/admin/${this.$route.params.id}/ticket`"
            >
              Tickets
            </router-link>
          </div>
        </div>
        <div v-else-if="currentRouteName === 'summary'">
          |
          <router-link :to="`/${$i18n.locale}/admin/overview/summary`">
            Summaries
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActivityBreadcrumbs",
  props: {
    activitySubNav: {
      type: String,
    },
  },
  data() {
    return {
      detailSubPage: ["detail", "activityDetail", "summaryDetail", "ticket"],
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
});
</script>

<style scoped>
div {
  @apply flex;
}
a {
  @apply px-2;
}
</style>
