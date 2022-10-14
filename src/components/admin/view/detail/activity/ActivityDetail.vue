<template>
  <activity-detail-info />
  <activity-email-table />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActivityDetailInfo from "@/components/admin/view/detail/activity/ActivityDetailInfo.vue";
import ActivityEmailTable from "@/components/admin/view/detail/activity/ActivityEmailTable.vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "ActivityDetail",
  components: { ActivityDetailInfo, ActivityEmailTable },
  mounted() {
    this.getActivities();
  },
  methods: {
    ...mapActions("activity", ["getActivities"]),
  },
});
</script>
<style scoped></style>
