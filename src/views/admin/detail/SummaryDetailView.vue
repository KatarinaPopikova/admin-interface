<template>
  <summary-detail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SummaryDetail from "@/components/admin/view/detail/summary/SummaryDetail.vue";

export default defineComponent({
  name: "SummaryDetailView",
  components: { SummaryDetail },
});
</script>

<style scoped></style>
