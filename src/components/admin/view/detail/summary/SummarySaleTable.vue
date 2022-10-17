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
                <th colspan="4" class="py-3 px-6 text-left rounded-t-md">
                  Sales
                </th>
              </tr>
            </thead>
            <tbody>
              <summary-sale-table-row
                class="even:bg-gray-50"
                v-for="index in 5"
                :key="index"
                date="10.10.2022"
                email="example@email.com"
                paid="Paid"
                price="100.00€"
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
import SummarySaleTableRow from "@/components/admin/view/detail/summary/SummarySaleTableRow";
export default {
  name: "SummarySaleTable",
  components: {
    SummarySaleTableRow,
  },
};
</script>

<style scoped></style>
