<template>
  <div
    id="modal-backdrop"
    @click.self="close(false)"
    class="fixed inset-0 bg-opacity-20 bg-gray-800 flex justify-center items-center"
  >
    <div
      id="modal"
      class="has-radius rounded-md overflow-x-auto flex flex-col justify-between w-96 min-h-48 bg-white fixed"
    >
      <modal-header :modal-title="`Sale Information`" @close="close(false)" />

      <modal-sale-info-body />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalSaleInfoBody from "@/components/admin/modal/sale-information/ModalSaleInfoBody.vue";
import ModalHeader from "@/components/admin/modal/ModalHeader.vue";

export default defineComponent({
  name: "ModalSaleInfo",
  components: { ModalSaleInfoBody, ModalHeader },
  methods: {
    close(isDecisionMade) {
      console.log(isDecisionMade);
      this.$emit("close");
    },
  },
});
</script>

<style scoped></style>
