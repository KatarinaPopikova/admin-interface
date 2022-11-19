<template>
  <table-design :colspan-count="4" :table-name="'Sales'">
    <row-picker />
    <summary-sale-table-row
      class="odd:bg-gray-50"
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
  </table-design>
  <div>
    <modal-sale-info v-if="isSaleInfoModalOpen" @close="closeSaleInfoModal" />
  </div>
</template>

<script>
import SummarySaleTableRow from "@/components/admin/view/detail/summary/SummarySaleTableRow";
import RowPicker from "@/components/admin/view/detail/RowPicker.vue";
import ModalSaleInfo from "@/components/admin/modal/sale-information/ModalSaleInfo";
import TableDesign from "@/components/admin/view/detail/TableDesign";
export default {
  name: "SummarySaleTable",
  components: {
    TableDesign,
    ModalSaleInfo,
    SummarySaleTableRow,
    RowPicker,
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
