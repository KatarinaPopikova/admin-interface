<template>
  <div>
    <nav class="flex text-xs p-0 pl-5">
      <router-link :to="`/${$i18n.locale}/admin/overview/activity`">
        Home
      </router-link>
      <div>
        >
        <router-link
          :to="`/${$i18n.locale}/admin/${this.$route.params.id}/activity`"
        >
          Activity
        </router-link>
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
      type: Boolean,
    },
  },
});
</script>

<style scoped>
a {
  @apply px-2;
}
</style>
