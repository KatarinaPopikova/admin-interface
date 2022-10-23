<template>
  <div class="overflow-x-aut">
    <div
      class="max-w-screen-2xl bg-gray-100 flex items-center justify-center bg-gray-100 overflow-hidden m-auto"
    >
      <div class="w-full lg:w-5/6 m-3">
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
                @click="openSaleInfoModal"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div>
    <modal-sale-info v-if="isSaleInfoModalOpen" @close="closeSaleInfoModal" />
  </div>
</template>

<script>
import SummarySaleTableRow from "@/components/admin/view/detail/summary/SummarySaleTableRow";
import ModalSaleInfo from "@/components/admin/modal/sale-information/ModalSaleInfo";
export default {
  name: "SummarySaleTable",
  components: {
    ModalSaleInfo,
    SummarySaleTableRow,
  },
  data() {
    return {
      isSaleInfoModalOpen: false,
    };
  },

  methods: {
    openSaleInfoModal() {
      this.isSaleInfoModalOpen = true;
    },
    closeSaleInfoModal() {
      this.isSaleInfoModalOpen = false;
    },
  },
};
</script>

<style scoped></style>
