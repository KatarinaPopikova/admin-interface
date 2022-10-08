<template>
  <div
    id="modal-backdrop"
    @click.self="close(false)"
    class="fixed inset-0 bg-opacity-20 bg-gray-800 flex justify-center items-center"
  >
    <div
      id="modal"
      class="has-radius rounded-2xl overflow-x-auto flex flex-col justify-between w-80 m-8 min-h-48 bg-white fixed"
    >
      <modal-header @close="close(false)" />

      <modal-save-values-body />
      <modal-save-values-footer @close="close(true)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalSaveValuesBody from "@/components/admin/modal/saveValues/ModalSaveValuesBody.vue";
import ModalHeader from "@/components/admin/modal/ModalHeader.vue";
import ModalSaveValuesFooter from "@/components/admin/modal/saveValues/ModalSaveValuesFooter.vue";

export default defineComponent({
  name: "ModalLogOut",
  components: { ModalSaveValuesFooter, ModalSaveValuesBody, ModalHeader },
  methods: {
    close(isDecisionMade) {
      this.$emit("make-decision", isDecisionMade);
    },
  },
});
</script>

<style scoped></style>
