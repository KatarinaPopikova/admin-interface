<template>
  <table-design :colspan-count="3" :table-name="'Tickets'">
    <row-picker />
    <ticket-table-row
      class="odd:bg-gray-50"
      v-for="ticket in ticketData"
      :key="ticket.name"
      :ticketName="ticket.name"
      :price="ticket.amount + '€'"
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
  data() {
    return {
      ticketData: [],
    };
  },
  async mounted() {
    await fetch("/json/tables-data.json")
      .then((resp) => resp.json())
      .then((json) => {
        this.ticketData = json.tickets;
      });
  },
};
</script>

<style scoped></style>
