<template>
  <table-design :colspan-count="3" :table-name="'Tickets'">
    <row-picker />
    <ticket-table-row
      class="odd:bg-gray-50"
      v-for="index in 3"
      :key="index"
      ticketName="Ticket name"
      price="10.00€"
      @edit-value="(newPhone) => console.log(newPhone)"
      @save-edited-value="console.log(saveNewPhone)"
      @restore-edited-value="console.log(restorePhone)"
      @open-save-modal="console.log(handleSaveModal)"
    />
  </table-design>
</template>

<script>
import TicketTableRow from "@/components/admin/view/detail/ticket/TicketTableRow";
import RowPicker from "@/components/admin/view/detail/RowPicker.vue";
import TableDesign from "@/components/admin/view/detail/TableDesign";
export default {
  name: "TicketTable",
  components: {
    TableDesign,
    TicketTableRow,
    RowPicker,
  },
};
</script>

<style scoped></style>
