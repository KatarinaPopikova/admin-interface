<template>
  <ticket-detail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TicketDetail from "@/components/admin/view/detail/ticket/TicketDetail.vue";

export default defineComponent({
  name: "TicketDetailView",
  components: { TicketDetail },
});
</script>

<style scoped></style>
