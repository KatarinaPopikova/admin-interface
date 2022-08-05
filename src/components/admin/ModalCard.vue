<template>
  <div
    id="modal-backdrop"
    @click.self="close"
    class="fixed inset-0 bg-opacity-20 bg-gray-800 flex justify-center items-center"
  >
    <div
      id="modal"
      class="rounded-3xl overflow-x-auto flex flex-col justify-between w-screen m-8 h-5/6 bg-white"
    >
      <header
        id="modal-header"
        class="px-4 py-6 flex justify-between items-center"
      >
        <h4 class="font-semibold">Title</h4>
        <button
          type="button"
          class="w-7 p-2 bg-gray-300 rounded-full"
          @click="close"
        >
          <img src="https://via.placeholder.com/150x100" alt="close button" />
          <!-- X pridaj miesto tohto img  -->
        </button>
      </header>

      <!-- Modal Body -->
      <ModalCardBody />

      <!-- Modal Footer -->
      <footer id="modal-footer" class="px-4 py-6">
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
      this.$emit("close");
    },
  },
});
</script>

<style scoped></style>
