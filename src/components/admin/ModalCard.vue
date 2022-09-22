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
      <header
        id="modal-header"
        class="px-4 py-6 flex justify-between items-center"
      >
        <h3 class="font-semibold text-lg text-main-color-400 pl-2">
          Some title
        </h3>
        <button type="button" class="w-10 h-10 rounded-full" @click="close">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </header>

      <!-- Modal Body -->
      <ModalCardBody />

      <!-- Modal Footer -->
      <footer id="modal-footer" class="px-4 py-6 overflow-y-auto">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalCardBody from "@/components/admin/ModalCardBody.vue";

export default defineComponent({
  name: "ModalCard",
  components: { ModalCardBody },
  methods: {
    close() {
      this.$emit("closeCardModal");
    },
  },
});
</script>
<style scoped></style>
