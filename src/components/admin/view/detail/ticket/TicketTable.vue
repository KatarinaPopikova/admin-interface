<template>
  <div class="overflow-x-auto">
    <div
      class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 overflow-hidden m-3"
    >
      <div class="w-full lg:w-5/6">
        <div class="bg-white shadow-md my-6 rounded-md">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200">
                <th colspan="3" class="py-3 px-6 text-left rounded-t-md">
                  Emails
                </th>
              </tr>
            </thead>
            <tbody>
              <ticket-table-row
                class="even:bg-gray-50"
                v-for="index in 5"
                :key="index"
                email="example@email.com"
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
export default {
  name: "TicketTable",
  components: {
    TicketTableRow,
  },
};
</script>

<style scoped></style>
