<template>
  <header class="m-8 font-bold text-2xl">
    <h1>Activity name</h1>
  </header>
  <ticket-table />
</template>

<script>
import TicketTable from "@/components/admin/view/detail/ticket/TicketTable";
export default {
  name: "TicketDetail",
  components: { TicketTable },
};
</script>

<style scoped></style>
