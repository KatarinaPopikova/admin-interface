<template>
  <div
    class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-8"
  >
    <div v-for="activity in this.activities" :key="activity.id">
      <activity-card :post="activity" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";
import ActivityCard from "@/components/admin/view/overview/activity/ActivityCard.vue";

export default defineComponent({
  name: "ActivityList",
  components: { ActivityCard },

  computed: {
    ...mapState("activity", ["activities"]),
    ...mapGetters("activity", ["activitiesFilter"]),
  },
  mounted() {
    this.getActivities();

    window.eventBus.on("filter-posts", (filterText) => {
      if (filterText !== "") {
        console.log(this.activitiesFilter(filterText));
      }
    });
  },

  methods: {
    ...mapActions("activity", ["getActivities"]),
  },
});
</script>

<style scoped></style>
