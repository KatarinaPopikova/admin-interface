<template>
  <table-design :colspan-count="4" :table-name="'Sales'">
    <row-picker />
    <summary-sale-table-row
      class="odd:bg-gray-50"
      v-for="(sale, index) in sales"
      :key="index"
      :date="sale.date"
      :email="sale.email"
      :paid="sale.state"
      :price="sale.amount + '€'"
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
      sales: [],
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
  async mounted() {
    await fetch("/json/tables-data.json")
      .then((resp) => resp.json())
      .then((json) => {
        this.sales = json.sales;
      });
  },
};
</script>

<style scoped></style>
