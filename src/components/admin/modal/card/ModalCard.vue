<template>
  <div
    id="modal-backdrop"
    @click.self="close"
    class="fixed inset-0 bg-opacity-20 bg-gray-800 flex justify-center items-center"
  >
    <div
      id="modal"
      class="has-radius rounded-3xl overflow-x-auto flex flex-col justify-between w-11/12 m-8 h-5/6 bg-white fixed"
    >
      <modal-header @close="close" />

      <modal-card-body />

      <footer id="modal-footer" class="px-4 py-6 overflow-y-auto">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalCardBody from "@/components/admin/modal/card/ModalCardBody.vue";
import ModalHeader from "@/components/admin/modal/ModalHeader.vue";

export default defineComponent({
  name: "ModalCard",
  components: { ModalCardBody, ModalHeader },
  methods: {
    close() {
      this.$emit("closeCardModal");
    },
  },
});
</script>
<style scoped></style>
