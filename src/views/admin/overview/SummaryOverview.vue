<template>
  <summary-card />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SummaryCard from "@/components/admin/view/overview/summary/SummaryCard.vue";

export default defineComponent({
  name: "SummaryOverview",
  components: { SummaryCard },
});
</script>

<style scoped></style>
