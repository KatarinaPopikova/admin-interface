<template>
  <div class="overflow-x-auto">
    <div
      class="max-w-screen-2xl bg-gray-100 flex items-center justify-center bg-gray-100 overflow-hidden m-auto"
    >
      <div class="w-full lg:w-5/6 m-3">
        <div class="bg-white shadow-md my-6 rounded-md">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200">
                <th colspan="3" class="py-3 px-6 text-left rounded-t-md">
                  Tickets
                </th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TicketTableRow from "@/components/admin/view/detail/ticket/TicketTableRow";
import RowPicker from "@/components/admin/view/detail/RowPicker.vue";
export default {
  name: "TicketTable",
  components: {
    TicketTableRow,
    RowPicker,
  },
};
</script>

<style scoped></style>
